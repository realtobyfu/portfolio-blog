import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { format } from 'date-fns';

export default function Post({ postData }) {
    return (
        <Layout>
            <article>
                <h1 className="text-3xl font-bold">{postData.title}</h1>
                <div className="text-gray-500">
                    {format(new Date(postData.date), 'PPP')}
                </div>
                <div
                    className="prose mt-4"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
        </Layout>
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
