export default function tagsWithIds(blogs, isSorted) {
  let n = blogs.length + 1;
  let tagsWithIds = {};
  if (blogs && blogs.length > 0) {
    blogs.forEach((blog) => {
      const tags = blog.tags;
      tags.forEach((tag) => {
        let t = tag.toLowerCase();
        let index = isSorted ? n - blog.id : blog.id;
        if (tagsWithIds[t]) {
          tagsWithIds[t].push(index);
        } else {
          tagsWithIds[t] = [index];
        }
      });
    });
    console.log("Tags with ids: ", tagsWithIds);
    return tagsWithIds;
  }
}

export function titlesWithIds(blogs, isSorted) {
  let titlesAndIds = {};
  let n = blogs.length + 1;
  if (blogs && blogs.length > 0) {
    blogs.forEach((blog) => {
      let index = isSorted ? n - blog.id : blog.id;
      titlesAndIds[blog.title.toLowerCase()] = [index];
      const titles = blog.title.split(" ");
      titles.forEach((title) => {
        let t = title.toLowerCase();
        if (titlesAndIds[t]) {
          titlesAndIds[t].push(index);
        } else {
          titlesAndIds[t] = [index];
        }
      });
    });
    console.log("Titles with ids: ", titlesAndIds);
    return titlesAndIds;
  }
}
