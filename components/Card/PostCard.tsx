import Image from 'next/image';
import CalendarIcon from '@/public/icons/CalendarIcon';
import IconWithText from '../common/IconWithText';

interface PostCardProps {
  title: string;
  description: string;
  readingMinutes: number;
  thumbnail: string;
  date: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  readingMinutes,
  thumbnail,
  date,
}) => {
  return (
    <section className="trasnform flex flex-col overflow-hidden rounded-xl bg-gray-100 transition duration-300 hover:scale-[1.02]">
      <div className="relative h-[200px]">
        <Image fill src={thumbnail} alt="Post image" sizes="100vw" style={{ objectFit: 'cover' }} />
      </div>
      <div className="p-4">
        <div className="mb-2 flex justify-between">
          <IconWithText Icon={CalendarIcon} iconSize={13} text={date.slice(0, 10)} />
          <p className="text-xs">{readingMinutes} min read</p>
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </section>
  );
};

export default PostCard;
