import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Writing</h1>
            <p className="text-gray-500 mb-8">
                I'll be writing more serious posts on <a href="https://substack.com/@shivamenta" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900 transition-colors">Substack</a>. More casual writing I'll be including here on my website.
            </p>
            {allPostsData.length > 0 && <hr className="border-gray-200 mb-8" />}
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
            </div>
        </div>
    );
}
