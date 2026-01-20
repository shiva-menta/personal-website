import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Blog</h1>
            <div className="space-y-8">
                {allPostsData.map(({ id, date, title }) => (
                    <div key={id} className="border-b border-gray-100 pb-8 last:border-0">
                        <h2 className="text-xl font-semibold mb-2">
                            <Link href={`/blog/${id}`} className="hover:underline">
                                {title}
                            </Link>
                        </h2>
                        <p className="text-gray-500 text-sm">{date}</p>
                    </div>
                ))}
                {allPostsData.length === 0 && (
                    <p className="text-gray-500">No posts found.</p>
                )}
            </div>
        </div>
    );
}
