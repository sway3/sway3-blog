import fs from 'fs';
import matter from 'gray-matter';
import { sync } from 'glob';
import path from 'path';
import readingTime from 'reading-time';
import { SignLanguage } from '@mui/icons-material';

const POSTS_DIR_PATH = path.join(process.cwd(), '/posts');

export const parsePost = (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const readingMinutes = Math.ceil(readingTime(content).minutes);

  return {
    ...data,
    content,
    slug: postPath.slice(postPath.indexOf('/posts') + 6).replace('.mdx', ''),
    path: postPath,
    readingMinutes: readingMinutes
  }
};

export const getAllPosts = () => {
  const postPaths = sync(`${POSTS_DIR_PATH}/**/*.mdx`);
  const parsedPosts = postPaths.map((path) => parsePost(path));

  return parsedPosts;
};
