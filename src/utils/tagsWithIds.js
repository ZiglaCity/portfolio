export default function tagsWithIds(blogs) {
  let tagsWithIds = {};
  console.log(blogs.length);
  if (blogs && blogs.length > 0) {
    blogs.forEach((blog) => {
      const tags = blog.tags;
      tags.forEach((tag) => {
        if (tagsWithIds[tag]) {
          tagsWithIds[tag].push(blog.id);
        } else {
          tagsWithIds[tag] = [blog.id];
        }
      });
    });
    console.log("Tags with ids: ", tagsWithIds);
    return tagsWithIds;
  }
}
