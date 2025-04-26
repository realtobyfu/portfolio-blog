// This code runs exclusively on the server
import 'server-only';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export interface PostData {
    id: string;
    title: string;
    date: string;
    description?: string;
    coverImage?: string;
    featured?: boolean;
    contentHtml?: string;
    [key: string]: any;
}

export function getSortedPostsData(): PostData[] {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            id,
            // the spread operator would include title, date, coverImage, featured, etc.
            ...matterResult.data,
        } as PostData;
    });

    // Sort by date
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    } as PostData;
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => ({
        params: { slug: fileName.replace(/\.md$/, '') },
    }));
}
