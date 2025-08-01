export default function tagsWithIds(blogs) {
  let tagsWithIds = {};
  console.log(blogs.length);
  if (blogs && blogs.length > 0) {
    blogs.forEach((blog) => {
      const tags = blog.tags;
      tags.forEach((tag) => {
        let t = tag.toLowerCase();
        if (tagsWithIds[t]) {
          tagsWithIds[t].push(blog.id);
        } else {
          tagsWithIds[t] = [blog.id];
        }
      });
    });
    console.log("Tags with ids: ", tagsWithIds);
    return tagsWithIds;
  }
}
