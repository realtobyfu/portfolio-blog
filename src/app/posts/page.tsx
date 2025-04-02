// src/app/posts/page.tsx

import {getSortedPostsData} from "@/lib/posts";
import Link from 'next/link';
import { format } from 'date-fns';

export const revalidate = 60;

export default async function PostsPage() {
    const allPostsData = getSortedPostsData();

    return(
        <main className="container">
            <h2 className="text-2xl font-semibold">Blog Posts</h2>
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id} className="mb-4">
                        {/* Link to [slug]/page */}
                        <Link href={`/posts/${id}`} className="text-xl text-blue-600">
                            {title}
                        </Link>
                        <br />
                        <small>{format(new Date(date), 'PPP')}</small>
                    </li>
                ))}
            </ul>
        </main>
    )
}