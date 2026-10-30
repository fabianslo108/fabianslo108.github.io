/**
 * Blog Posts Data - Replace with your own posts
 * Each entry can either inline its HTML in `htmlContent` or reference an
 * external markdown file via `markdownFile` (which is fetched at runtime).
 */

const blogPosts = [
  {
    id: "icef-applied-economics-conference-2026",
    title: "Organizing and Presenting at the 8th ICEF Applied Economics Conference",
    date: "2026-10-16",
    author: "Fabian Slonimczyk",
    excerpt: "A recap of the Eighth ICEF International Conference on Applied Economics in Moscow, where I helped organize the meeting and presented research on physical attractiveness in the academic job market.",
    tags: ["Conference", "Applied Economics", "Research"],
    readTime: 3,
    markdownFile: "blogs/icef-applied-economics-conference-2026.md",
    content: null,      // Will be loaded from the markdown file
    htmlContent: null   // Will be generated from the markdown
  },
];

// Helper function to get all blog posts (sorted newest first)
function getAllBlogPosts() {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Helper function to get a specific blog post by ID
function getBlogPost(id) {
  return blogPosts.find(post => post.id === id);
}
