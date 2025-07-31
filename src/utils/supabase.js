import blogs from "../data/blogs.js";
import { createClient } from "@supabase/supabase-js";
import fs from "fs/promises";
import path from "path";
import "dotenv/config";

const SUPABASE_URL = "https://dzluahgzueekvlpipiqe.supabase.co";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
// const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

console.log("URL ", SUPABASE_URL);
console.log("Anon: ", SUPABASE_ANON_KEY);
console.log("Supabase service key", SUPABASE_SERVICE_KEY);

// to insert directly blogs without any RLS, use the SERVICE KEY
// and run the file from the root directory to lead the .env
// node ./src/utils/supabase.js
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function fetchImageAsFile(localPath, filename) {
  const buffer = await fs.readFile(localPath);
  return new File([buffer], filename, { type: "image/png" });
}

async function uploadImage(file, filename) {
  const bucket = "images";
  console.log("Filename: ", filename);
  const { error } = await supabase.storage
    .from(bucket)
    .upload(`blogs/${filename}`, file, { upsert: true });

  if (error) throw error;

  return `${SUPABASE_URL}/storage/v1/object/public/${bucket}/blogs/${filename}`;
}

async function insertBlogs(blogArray = blogs) {
  try {
    const enrichedBlogs = await Promise.all(
      blogArray.map(async (blog) => {
        const fileName = blog.image.split("/").pop();
        const localPath = path.resolve(`../assets/blogs/${fileName}`);
        const imageFile = await fetchImageAsFile(localPath, fileName);
        if (blog.id != 25) {
          return;
        }
        if (!imageFile) {
          console.warn(
            `Skipping image for "${blog.title}" due to missing file.`
          );
          return {
            ...blog,
            image: null,
          };
        }

        const publicUrl = await uploadImage(imageFile, fileName);
        console.log("Image URL:", publicUrl);

        const { data, error } = await supabase.from("blog").insert([
          {
            title: blog.title,
            blog_number: blog.id,
            date: blog.date,
            tags: blog.tags,
            excerpt: blog.excerpt,
            image: publicUrl,
            content: blog.content,
          },
        ]);

        if (error) {
          console.error("Blog insert error:", error.message);
        } else {
          console.log("Inserted blogs:", data);
        }
        return {
          title: blog.title,
          id: blog.id,
          blog_number: blog.id,
          date: blog.date,
          tags: blog.tags,
          excerpt: blog.excerpt,
          image: publicUrl,
          content: blog.content,
        };
      })
    );

    const { data, error } = await supabase.from("blog").insert(enrichedBlogs);

    if (error) {
      console.error("Blog insert error:", error.message);
    } else {
      console.log("Inserted blogs:", data);
    }
  } catch (err) {
    console.error("Unexpected failure during blog insert:", err);
  }
}

insertBlogs();
