import Image from 'next/image';
import ProfileImg from '@/public/profile/profile.jpg';
import Link from 'next/link';
import PostCard from '@/components/Card/PostCard';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();
  return (
    <>
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center px-2 py-3">
        <Image src={ProfileImg} alt="profile" className="mr-10 h-80 w-80 rounded-full border-2" />
        <div className="flex flex-col gap-y-2">
          <p className="text-8xl font-semibold">Simplicity</p>
          <p className="text-6xl font-light">is Prerequisite for</p>
          <p className="text-8xl font-semibold">Reliability</p>
        </div>
      </div>
      <section className="mb-8">
        <h1 className="mb-3 text-5xl font-extrabold text-teal">Recent Posts</h1>
        <div className="mb-3 grid grid-cols-4 gap-6">
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
      </section>
    </>
  );
}
