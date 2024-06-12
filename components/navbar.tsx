import Link from 'next/link';
import '../app/globals.css';
import GithubIcon from '@/assets/icons/GithubIcon';
import DarkMode from '@/assets/icons/DarkMode';

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="flex h-16 items-center justify-between px-2">
        <h1 className="text-teal text-3xl font-bold">
          <Link href="/">sway3-dev</Link>
        </h1>
        <div className="flex items-center space-x-1">
          <div className="mr-3">
            <Link href="/" className="rounded-md px-3 py-2 hover:bg-gray-200">
              Home
            </Link>
            <Link href="/about" className="rounded-md px-3 py-2 hover:bg-gray-200">
              About me
            </Link>
            <Link href="/blog" className="rounded-md px-3 py-2 hover:bg-gray-200">
              Blog
            </Link>
          </div>
          <div className="h-6 border-l-2 border-gray-300" />
          <div className="flex items-center pl-2">
            <Link href="https://github.com/sway3" target="_blank" className="px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="h-8 w-8 fill-current text-gray-400 hover:text-gray-700"
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
