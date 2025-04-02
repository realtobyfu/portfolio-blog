import Link from 'next/link';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import { format } from 'date-fns';

export default function Home({ allPostsData }) {
    return (
        <Layout>
            <section>
                <h2 className="text-2xl font-semibold">Blog Posts</h2>
                <ul>
                    {allPostsData.map(({ id, date, title }) => (
                        <li key={id}>
                            <Link className="text-xl text-blue-600" href={`/posts/${id}`}>
                                {title}
                            </Link>
                            <br />
                            <small>{format(new Date(date), 'PPP')}</small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return { props: { allPostsData } };
}
