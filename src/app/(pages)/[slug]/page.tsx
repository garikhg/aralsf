'use client';

import { useParams } from 'next/navigation';
import { gql, useQuery } from '@apollo/client';

export default function Pages() {
  const { slug } = useParams<{ slug: string }>();
  const { data, loading, error } = useQuery( RequestPageBySlug, {
    variables: { uri: slug }
  } );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An erorr</p>;
  }

  console.log( data?.pageBy );
  const { title, content } = data?.pageBy || [];

  return (
    <div>
      {title && <h1>{data?.title}</h1>}
      {content && <div dangerouslySetInnerHTML={{ __html: content || '' }} />}
    </div>
  );
}

const RequestPageBySlug = gql`
    query GetPageBySlug($uri: String!) {
        pageBy(uri: $uri) {
            title
            content
        }
    }
`;
