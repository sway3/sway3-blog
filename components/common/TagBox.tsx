import Link from 'next/link';

interface TagBoxProps {
  tag: string;
}

export default function TagBox({ tag }: TagBoxProps) {
  return (
    <Link href={`/tags/${tag}`}>
      <div className="inline-block cursor-pointer rounded-md bg-gray-100 p-2">{tag}</div>
    </Link>
  );
}
