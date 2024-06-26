import TagMenu from '@/components/TagMenu';
import PostLayout from '@/components/common/PostLayout';
import { ALL_TAGS, ALL_POSTS } from '@/lib/posts';

export default function Posts() {
  return (
    <>
      <section className="mt-5">
        <h1 className="mb-3 text-5xl font-extrabold text-teal">All Posts</h1>
        <TagMenu tags={ALL_TAGS} />
        <PostLayout posts={ALL_POSTS} />
      </section>
      <section></section>
    </>
  );
}
