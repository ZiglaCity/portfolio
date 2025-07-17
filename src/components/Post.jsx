import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/posts';

export default function Post() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="py-16 text-center">
        <p>Post not found.</p>
        <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="py-16 max-w-3xl mx-auto px-4 space-y-6">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-display glitch"
      >
        {post.title}
      </motion.h1>

      {post.content.split('\n\n').map((para, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="text-lg leading-relaxed"
        >
          {para}
        </motion.p>
      ))}

      <Link to="/blog" className="inline-block mt-8 text-primary hover:underline">
        ← Back to Blog
      </Link>
    </article>
  );
}
