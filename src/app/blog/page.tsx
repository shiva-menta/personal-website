import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Blog</h1>
            <div className="grid gap-6">
                {allPostsData.map(({ id, date, title }) => (
                    <Link
                        key={id}
                        href={`/blog/${id}`}
                        className="block rounded-lg border border-gray-100 p-6 transition hover:shadow-md hover:-translate-y-0.5"
                    >
                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                        <p className="text-gray-500 text-sm">{date}</p>
                    </Link>
                ))}
                {allPostsData.length === 0 && (
                    <p className="text-gray-500">No posts found.</p>
                )}
            </div>
        </div>
    );
}
