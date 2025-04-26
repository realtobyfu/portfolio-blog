import { getSortedPostsData, type PostData } from '@/lib/posts';
import HomePageContent from '@/components/HomePageContent';

export default function HomePage() {
    const allPosts: PostData[] = getSortedPostsData();
    const featuredPosts = allPosts.filter((post) => post.featured).slice(0, 3);

    return (
        <HomePageContent featuredPosts={featuredPosts} />
    );
}
