import PostLayout from '@/components/common/PostLayout';
import { ALL_POSTS } from '@/lib/posts';

export default function TagsPage({ params }: { params: { slug: string } }) {
  const tag = params.slug;
  const tagPosts = ALL_POSTS.filter((post) => !post.tags.includes(tag));

  return (
    <>
      <h1 className="mb-3 mt-5 text-5xl font-extrabold text-teal">Tags - {tag}</h1>
      <PostLayout posts={tagPosts} />
    </>
  );
}
