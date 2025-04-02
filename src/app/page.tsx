import Image from 'next/image'
import placeholderImage from '../../public/T1002267.JPG' // You can rename or use your own.

export default function HomePage() {
    return (
        <main className="container">
            {/* Hero Section */}
            <section className="hero">
                <h1>Hi, I&apos;m Tobias.</h1>
                <p>Welcome to my creative corner.<br />
                    Thoughts, Projects, and Everything In-Between.
                </p>
            </section>

            {/* Featured Posts */}
            <section className="featured-posts">
                <h2>Featured Posts</h2>
                <div className="post-grid">
                    {/* Post Card 1 */}
                    <div className="post-card">
                        <Image
                            src={placeholderImage}
                            alt="Exploring Color Theory"
                            placeholder="blur"
                            width={240}
                            height={160}
                        />
                        <h3>Exploring Color Theory</h3>
                        <p>A journey through color harmony and contrast.</p>
                    </div>
                    {/* Post Card 2 */}
                    <div className="post-card">
                        <Image
                            src={placeholderImage}
                            alt="My Sketching Process"
                            placeholder="blur"
                            width={240}
                            height={160}
                        />
                        <h3>My Sketching Process</h3>
                        <p>A peek into my daily sketching routine and tools.</p>
                    </div>
                    {/* Post Card 3 */}
                    <div className="post-card">
                        <Image
                            src={placeholderImage}
                            alt="Finding Inspiration"
                            placeholder="blur"
                            width={240}
                            height={160}
                        />
                        <h3>Finding Inspiration</h3>
                        <p>How I discover new ideas and sources of creativity.</p>
                    </div>
                </div>
            </section>

            {/* About Me */}
            <section className="about-section">
                <Image
                    src={placeholderImage}
                    alt="Tobias Profile Photo"
                    placeholder="blur"
                    width={160}
                    height={160}
                />
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>I’m a creator with a love for photography, coding, and coffee.</p>
                    <ul className="about-list">
                        <li>Passionate about indie games</li>
                        <li>Always exploring new things</li>
                    </ul>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <p>Thanks for visiting my site!</p>
                <div className="social-links">
                    <a href="#">Twitter</a>
                    <a href="#">YouTube</a>
                    <a href="#">LinkedIn</a>
                </div>
            </footer>
        </main>
    )
}
