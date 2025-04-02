// src/app/posts/[slug]/page.tsx
import { getAllPostIds, getPostData } from '@/lib/posts';
import { format } from 'date-fns';

// 1) Tell Next.js which slugs exist
export async function generateStaticParams() {
    const paths = getAllPostIds();
    // returns [{ params: { slug: 'first-post' } }, ...]
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}


// 2) Use an async server component to fetch the data for each post
export default async function PostPage({
                                           params,
                                       }: {
    params: { slug: string }
}) {
    const postData = await getPostData(params.slug);

    // Render your markdown
    return (
        <main className="container">
            <article>
                <h1 className="text-3xl font-bold mb-2">{postData.title}</h1>
                <div className="text-gray-500 mb-4">
                    {format(new Date(postData.date), 'PPP')}
                </div>
                {/* Dangerously set the HTML from the markdown conversion */}
                <div
                    className="prose"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
        </main>
    );
}


export async function getStaticPaths() {
    const paths = getAllPostIds();
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.slug);
    return { props: { postData } };
}
