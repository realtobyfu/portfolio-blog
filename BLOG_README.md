# Portfolio Blog System

This document explains how the markdown blog system works in this portfolio site.

## How It Works

The blog system uses markdown files stored in the `src/posts` directory. Each markdown file represents a single blog post and includes frontmatter metadata at the top.

### Markdown Files Structure

Each markdown file should have the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
description: "A brief description of your post"
coverImage: "/path/to/image.jpg"  # An image in the public folder
featured: true/false               # Whether to show on homepage
---

# Your content starts here

Regular markdown content...
```

### Main Components

1. **`src/lib/posts.ts`**: Contains utility functions for fetching and parsing markdown files
   - `getSortedPostsData()` - Gets all posts and sorts by date
   - `getPostData(id)` - Gets a single post by its ID
   - `getAllPostIds()` - Gets all post IDs for dynamic routing

2. **`src/app/blog/page.tsx`**: Displays the blog index page with all posts

3. **`src/app/posts/[slug]/page.tsx`**: Displays a single blog post

4. **`src/components/BlogNav.tsx`**: Navigation component for blog pages

### Adding New Posts

To add a new blog post:

1. Create a new markdown file in `src/posts/` (e.g., `my-new-post.md`)
2. Add the required frontmatter at the top of the file
3. Write your blog content using markdown
4. If you want to use images, place them in the `public/` directory and reference them in the frontmatter

### Styling

Blog-specific styles are in:
- `src/app/blog/styles.css` - Imported by both the blog index and individual post pages

## Features

- Responsive blog post cards
- Featured posts section on the homepage
- Dynamic routing for blog posts
- Markdown rendering with HTML
- Support for code blocks, images, and other markdown features

## Future Improvements

- Add categories/tags
- Add pagination for blog index
- Add search functionality
- Add comments system
- Add related posts 