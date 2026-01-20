import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="flex justify-between items-center py-8 mb-8">
            <Link href="/" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
                Your Name
            </Link>
            <div className="flex gap-6">
                <Link href="/" className="hover:text-primary transition-colors">
                    Home
                </Link>
                <Link href="/projects" className="hover:text-primary transition-colors">
                    Projects
                </Link>
                <Link href="/blog" className="hover:text-primary transition-colors">
                    Blog
                </Link>
            </div>
        </nav>
    );
}
