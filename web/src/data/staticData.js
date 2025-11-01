// Static data for the website (replacing Craft CMS GraphQL queries)
// 
// IMPORTANT: Replace the placeholder data below with your actual content.
// Images should be placed in the public folder or src/images folder and referenced by their path.
// 
// For events, images should be added to src/images/ or public/ and referenced relative to the public folder.

export const staticData = {
  // Home page data
  home: {
    title: "Welcome to AccessCS",
    subtext: "Join us for exciting events and connect with the computer science community!",
    surveyUrl: "mailto:ubcaccs@gmail.com" // Replace with your actual survey URL
  },

  // About page data
  about: {
    title: "About Us",
    subtext: `<p class="mb-4">We're a community dedicated to creating a welcoming space in UBC's Computer Science department for everyone.</p>
    <p class="mb-4">At AccessCS, we believe in two paths: fostering short-term social support and advocating for long-term departmental change. Our events and gatherings provide opportunities to connect, share experiences, and build lasting relationships. Together, we navigate academic challenges and celebrate victories, creating a supportive environment for all.</p>
    <p class="mb-4">Backed by the Committee for Outreach, Diversity, and Equity (CODE), we're committed to driving meaningful change within the department. From Improving accessibility to amplifying representation, we stand for disability justice and transformative justice. We recognize the importance of learning, growth, and accountability within our community, fostering an environment where feedback and dialogue are valued.</p>
    <p>Join us in championing inclusivity, challenging ableism, and embracing diversity. Together, we're shaping a more equitable future for all!</p>`,
    // subtext can contain HTML
  },

  // Contact page data
  contact: {
    title: "Contact Us",
    instagramLink: "https://instagram.com/ubcaccs", 
    discordLink: "https://discord.gg/mEBW7MsF", 
    linkedin: "https://www.linkedin.com/company/ubcaccs",
    email: "mailto:ubcaccs@gmail.com" 
  },

  // Events data
  // Add your events here. Events are automatically sorted by date (newest first)
  events: [
    // Example event - copy this structure and update with your data:
    // {
    //   title: "Event Title",
    //   description: "Event description text",
    //   eventImage: [{ url: "/images/events/your-image.jpg" }], // Path relative to public folder or use full URL
    //   date: "2024-01-15", // Date in YYYY-MM-DD format
    //   beginTime: "2024-01-15T18:00:00", // ISO 8601 format
    //   endTime: "2024-01-15T20:00:00", // ISO 8601 format
    //   rsvpRequired: true, // true or false
    //   rsvpLink: "https://example.com/rsvp" // RSVP link (required if rsvpRequired is true)
    // }

    {
      title: "Origami + Sushi Social",
      description: "We're back! Come enjoy some sushi with us while we make origami at our first event of semester!",
      eventImage: [{ url: "/images/events/origami.png" }],
      date: "2025-11-20T00:00:00-08:00",
      beginTime: "2025-11-20T17:00:00",
      endTime: "2025-11-20T19:00:00",
      rsvpRequired: true,
      rsvpLink: "mailto:ubcaccs@gmail.com"
    }

  ]


};

