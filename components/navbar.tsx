'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../app/globals.css';
import GithubIcon from '@/public/icons/GithubIcon';
import DarkMode from '@/public/icons/DarkMode';
import logo from '@/public/logo/logo.png';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="border-b bg-white">
      <div className="flex h-16 items-center justify-between px-2">
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="sway3" width={34} />
          </Link>
          <div className="ml-4">
            <Link
              href="/about"
              className={`rounded-md px-3 py-2 hover:bg-gray-200 ${pathname === '/about' ? 'bg-teal text-white hover:bg-teal' : 'bg-white text-black'}`}
            >
              About me
            </Link>
            <Link
              href="/blog"
              className={`mr-2 rounded-md px-3 py-2 hover:bg-gray-200 ${pathname === '/blog' ? 'bg-teal text-white hover:bg-teal' : 'bg-white text-black'}`}
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="flex items-center">
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
