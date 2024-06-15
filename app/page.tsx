import ProfileImg from '@/assets/profile/profile.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-4rem)] items-center justify-center px-2 py-3">
      <Image src={ProfileImg} alt="profile" className="mr-10 h-80 w-80 rounded-full border-2" />
      <div className="flex flex-col gap-y-2">
        <p className="text-8xl font-semibold">Simplicity</p>
        <p className="text-6xl font-light">is Prerequisite for</p>
        <p className="text-8xl font-semibold">Reliability</p>
      </div>
    </div>
  );
}
