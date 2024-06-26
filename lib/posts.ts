import fs from 'fs';
import matter from 'gray-matter';
import { sync } from 'glob';
import path from 'path';
import readingTime from 'reading-time';

const POSTS_DIR_PATH = path.join(process.cwd(), '/posts');

export interface FrontMatter {
  title: string;
  tags: string[];
  desc: string;
  date: string;
  thumbnail: string;
}

export interface Post extends FrontMatter {
  content: string;
  slug: string;
  path: string;
  readingMinutes: number;
}

export const parsePost = (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const frontMatter = data as FrontMatter;
  const readingMinutes = Math.ceil(readingTime(content).minutes);

  return {
    ...frontMatter,
    content,
    slug: postPath.slice(postPath.indexOf('/posts') + 6).replace('.mdx', ''),
    path: postPath,
    readingMinutes,
  };
};

export const getAllPosts = () => {
  const postPaths = sync(`${POSTS_DIR_PATH}/**/*.mdx`);
  const parsedPosts = postPaths.map((postPath) => parsePost(postPath));

  return parsedPosts;
};

export const ALL_POSTS = getAllPosts();

export const ALL_TAGS = Array.from(
  ALL_POSTS.reduce((acc, cur) => {
    cur.tags.forEach((tag) => acc.add(tag));
    return acc;
  }, new Set<string>([])),
);
