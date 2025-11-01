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
    surveyUrl: "https://example.com/survey" // Replace with your actual survey URL
  },

  // About page data
  about: {
    title: "About Us",
    subtext: "<p>AccessCS is a student organization at UBC dedicated to creating an inclusive and welcoming environment for all computer science students.</p>",
    // subtext can contain HTML
  },

  // Contact page data
  contact: {
    title: "Contact Us",
    instagramLink: "https://instagram.com/yourhandle", // Replace with your Instagram link
    discordLink: "https://discord.gg/yourserver", // Replace with your Discord link
    linkedin: "https://linkedin.com/company/yourcompany", // Replace with your LinkedIn link
    email: "mailto:contact@example.com" // Replace with your email
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
  ]
};

