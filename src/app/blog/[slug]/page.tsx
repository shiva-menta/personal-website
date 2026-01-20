import { getAllPostIds, getPostData } from '@/lib/posts';

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths;
}

export default async function Post({ params }: { params: { slug: string } }) {
    const postData = await getPostData(params.slug);

    return (
        <article>
            <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
            <div className="text-gray-500 mb-8">{postData.date}</div>
            <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
        </article>
    );
}
