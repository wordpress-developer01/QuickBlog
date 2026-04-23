// Mock data for development when MongoDB is not available
export const mockBlogs = [
  {
    _id: '1',
    title: 'Getting Started with QuickBlog',
    subTitle: 'Learn how to create your first blog post',
    description: 'QuickBlog is a powerful blogging platform that makes it easy to share your thoughts with the world. In this post, we\'ll walk you through the basics of creating your first blog post.',
    category: 'Tutorial',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1280&q=80',
    isPublished: true,
    createdAt: new Date('2026-04-15'),
  },
  {
    _id: '2',
    title: 'Best Practices for Content Creation',
    subTitle: 'Tips and tricks for writing engaging content',
    description: 'Creating compelling content is both an art and a science. Learn the best practices that successful bloggers use to engage their audience and grow their platforms.',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&q=80',
    isPublished: true,
    createdAt: new Date('2026-04-10'),
  },
  {
    _id: '3',
    title: 'The Future of Web Development',
    subTitle: 'What technologies will shape the next decade?',
    description: 'Web development is constantly evolving. From AI integration to new JavaScript frameworks, we explore the technologies that will define the next decade of web development.',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1280&q=80',
    isPublished: true,
    createdAt: new Date('2026-04-05'),
  },
];

export const mockComments = [
  {
    _id: '1',
    blog: '1',
    author: 'John Doe',
    email: 'john@example.com',
    comment: 'Great post! This really helped me get started.',
    createdAt: new Date('2026-04-16'),
  },
  {
    _id: '2',
    blog: '2',
    author: 'Jane Smith',
    email: 'jane@example.com',
    comment: 'Excellent tips! I\'ve already implemented some of these in my blog.',
    createdAt: new Date('2026-04-11'),
  },
];
