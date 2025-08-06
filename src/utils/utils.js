export function sortSearchedResult(searchResult) {
  let result = [];
  const n = searchResult.length - 1;
  for (let i = n; i > -1; i--) {
    result.push(searchResult[i]);
  }
  return result;
}
export function formatFetchedBlogs(blogs) {
  return blogs.map((blog) => ({
    id: blog.blog_number,
    title: blog.title,
    date: blog.date,
    image: blog.image,
    tags: blog.tags,
    excerpt: blog.excerpt,
    content: blog.content,
  }));
}
