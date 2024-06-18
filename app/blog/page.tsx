import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default function Posts() {
  const posts = getAllPosts();
  console.log(posts);
  return (
    <>
      <h1>Blog</h1>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          {post.slug}
        </Link>
      ))}
    </>
  );
}
