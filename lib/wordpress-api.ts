// lib/wordpress-api.ts
// This file connects Next.js to the live WordPress backend via GraphQL.

import { MOCK_SERVICES as mockServices, MOCK_POSTS as mockPosts, MOCK_INDUSTRIES as mockIndustries } from './wordpress';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://adminbpm.improxtech.com/graphql';

async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 60 } // Cache for 60 seconds
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getLiveServices() {
  try {
    const data = await fetchAPI(`
      query GetServices {
        services(first: 100) {
          nodes {
            slug
            title
            excerpt
            serviceDetails {
              overview
              icon
              secondaryImage {
                sourceUrl
              }
              deliverables {
                title
                description
                icon
              }
              methodology {
                step
                title
                description
              }
              impactTitle
              impactMetrics {
                metric
                label
              }
              faq {
                question
                answer
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `);
    const liveServices = data?.services?.nodes || [];
    return [...liveServices, ...mockServices];
  } catch (error) {
    return mockServices;
  }
}

export async function getLivePosts() {
  try {
    const data = await fetchAPI(`
      query GetPosts {
        posts(first: 100) {
          nodes {
            slug
            title
            excerpt
            content
            date
            author {
              node {
                name
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `);
    const livePosts = data?.posts?.nodes || [];
    return [...livePosts, ...mockPosts];
  } catch (error) {
    return mockPosts;
  }
}

export async function getLiveIndustries() {
  try {
    const data = await fetchAPI(`
      query GetIndustries {
        industries(first: 100) {
          nodes {
            slug
            title
            excerpt
            industryDetails {
              icon
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `);
    const liveIndustries = data?.industries?.nodes || [];
    return [...liveIndustries, ...mockIndustries];
  } catch (error) {
    return mockIndustries;
  }
}
