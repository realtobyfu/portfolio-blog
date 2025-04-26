// src/app/posts/[slug]/page.tsx
import { getAllPostIds, getPostData, type PostData } from '@/lib/posts';
import { format } from 'date-fns';
import Image from 'next/image'
import '../../blog/styles.css';

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

export default async function PostPage(props: { params: { slug: string } }) {
    const { params } = props;
    const postData: PostData = await getPostData(params.slug);

    return (
        <main className="container">
            {postData.coverImage && (
                <div className="relative w-full h-[300px] mb-4 post-cover-image">
                    <Image
                        src={postData.coverImage}
                        alt={postData.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                </div>
            )}

            <article>
                <h1 className="text-3xl font-bold mb-2">{postData.title}</h1>
                <div className="text-gray-500 mb-4">
                    {format(new Date(postData.date), 'PPP')}
                </div>
                {postData.description && (
                    <p className="text-lg mb-4 text-gray-700">{postData.description}</p>
                )}
                <div
                    className="prose max-w-3xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
                />
            </article>
        </main>
    );
}
