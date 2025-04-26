// src/app/blog/page.tsx
import { getSortedPostsData, type PostData } from '@/lib/posts';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import './styles.css';

export default async function BlogPage() {
    // Grab all the posts from your Markdown directory
    const allPostsData: PostData[] = getSortedPostsData();

    return (
        <main className="container relative z-0">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <div className="post-grid">
                {allPostsData.map((post) => (
                    <Link key={post.id} className="post-card" href={`/posts/${post.id}`}>
                        <div className="post-card-image">
                            <Image
                                src={post.coverImage || '/placeholder.jpg'}
                                alt={post.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 300px"
                            />
                        </div>
                        <div className="post-card-content">
                            <h3>{post.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">
                                {/* show a formatted date if available */}
                                {format(new Date(post.date), 'PPP')}
                            </p>
                            {post.description && <p className="text-sm">{post.description}</p>}
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
