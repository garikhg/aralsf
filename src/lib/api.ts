const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://default-url.com';

interface fetchApiOptions {
  variables?: Record<string, any>;
}

async function fetchApi(query = '', { variables }: fetchApiOptions = {}) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json'
  };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  try {
    // WPGraphQL Plugin must be enabled
    const res = await fetch(API_URL, {
      headers,
      method: "POST",
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    const json = await res.json();
    if (json.errors) {
      console.error( json.errors );
      throw new Error( 'Failed to fetch API' );
    }

    return json.data;
  } catch (erorr) {
    console.error( 'Fetch API error:', erorr );
    throw new Error( 'Fetch API error' );
  }
}

export async function getPreviewPost(id?: string | string[], idType: 'DATABASE_ID' | 'SLUG' = 'DATABASE_ID') {
  // Ensure `id` is a string
  const resolvedId = Array.isArray(id) ? id[0] : id;

  if (!resolvedId) {
    throw new Error("Invalid ID provided");
  }

  const data = await fetchApi(`
    query PreviewPost($id: ID!, $idType: PostIdType) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }
  `, {
    variables: { id: resolvedId, idType }
  });

  return data?.post;
}

