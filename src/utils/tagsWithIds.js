export default function tagsWithIds(blogs) {
  let tagsWithIds = {};
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

export function titlesWithIds(blogs) {
  let titlesAndIds = {};

  if (blogs && blogs.length > 0) {
    blogs.forEach((blog) => {
      titlesAndIds[blog.title.toLowerCase()] = [blog.id];
      const titles = blog.title.split(" ");
      titles.forEach((title) => {
        let t = title.toLowerCase();
        if (titlesAndIds[t]) {
          titlesAndIds[t].push(blog.id);
        } else {
          titlesAndIds[t] = [blog.id];
        }
      });
    });
    console.log("Titles with ids: ", titlesAndIds);
    return titlesAndIds;
  }
}
