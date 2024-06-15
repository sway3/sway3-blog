import Link from 'next/link';
import '../app/globals.css';
import GithubIcon from '@/assets/icons/GithubIcon';
import DarkMode from '@/assets/icons/DarkMode';

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="flex h-16 items-center justify-between px-2">
        <h1 className="text-teal text-3xl font-extrabold">
          <Link href="/">sway3-dev</Link>
        </h1>
        <div className="flex items-center">
          <div className="border-r">
            <Link href="/" className="rounded-md px-3 py-2 hover:bg-gray-200">
              Home
            </Link>
            <Link href="/about" className="rounded-md px-3 py-2 hover:bg-gray-200">
              About me
            </Link>
            <Link href="/blog" className="mr-2 rounded-md px-3 py-2 hover:bg-gray-200">
              Blog
            </Link>
          </div>
          <div className="ml-2 flex items-center">
            <Link href="https://github.com/sway3" target="_blank" className="px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="h-7 w-7 fill-current text-gray-400 hover:text-gray-700"
              >
                <GithubIcon />
              </svg>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="h-9 w-9 cursor-pointer fill-current text-gray-400 hover:text-gray-700"
            >
              <DarkMode />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
