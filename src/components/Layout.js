export default function Layout ({ children }) {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <header>
                <h1 className="text-4xl font-bold">Tobias's Blog</h1>
            </header>
            <main>{children}</main>
            <footer className="mt-8">
                © {new Date().getFullYear()} Tobias Fu
            </footer>
        </div>
    );
}