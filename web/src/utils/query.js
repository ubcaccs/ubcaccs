
export async function fetchGraphQLData(query) {
    const token = import.meta.env.VITE_GRAPHQL_TOKEN
    try {
        const response = await fetch('https://ubcaccs.onrender.com/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
          body: JSON.stringify({ query }),
        });
  
        const result = await response.json();
        return result.data.entries;
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      return [];
  }
  