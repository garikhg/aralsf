'use client';

import { useParams } from 'next/navigation';
import { gql, useQuery } from '@apollo/client';
import { PageHeader } from '@/components/layouts/page-header';

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

  const { title, content, featuredImage } = data?.pageBy || [];

  return (
    <div>
      <PageHeader
        title={title}
        backgroundImage={featuredImage?.node?.sourceUrl || ''}
      />

      <main role="main">
        {content && <div dangerouslySetInnerHTML={{ __html: content || '' }} />}
      </main>
    </div>
  );
}

const RequestPageBySlug = gql`
    query GetPageBySlug($uri: String!) {
        pageBy(uri: $uri) {
            title
            content
            featuredImage {
                node {
                    sourceUrl
                }
            }
        }
    }
`;
