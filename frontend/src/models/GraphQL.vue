<template>
  <h1 class="text-off-white">hello</h1>
  <h1 class="text-off-white">{{title}}</h1>
</template>

<script>
import axios from 'axios';

export default {
name: 'GraphQL',
data() {
  return {
    title: 'blah',
    description: '',
  };
},
created() {
  this.fetchGraphQLData();
},
methods: {
  async fetchGraphQLData() {
    const token = import.meta.env.VITE_GRAPHQL_TOKEN
    const query = `
    {
      entries (section: "events", limit: 2, orderBy: "date DESC") {
          title
          ... on events_events_Entry {
          description
          eventImage {
              url @transform (width: 300)
          }
          beginTime
          endTime
              rsvpRequired
          rsvpLink
          }
      }
    }
    `;

    try {
      const response = await fetch('https://ubcaccs.ddev.site/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      const data = result.data.entries[0];
      this.title = data.title;

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
},
};
</script>