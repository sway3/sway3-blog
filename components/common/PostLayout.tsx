import { Post } from '@/lib/posts';
import Link from 'next/link';
import PostCard from '../Card/PostCard';

interface PostLayoutProps {
  posts: Post[];
}

export default function PostLayout({ posts }: PostLayoutProps) {
  return (
    <div className="mb-3 mt-3 grid grid-cols-4 gap-6">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <PostCard
            title={post.title}
            description={post.desc}
            readingMinutes={post.readingMinutes}
            date={post.date}
            thumbnail={post.thumbnail}
          />
        </Link>
      ))}
    </div>
  );
}
