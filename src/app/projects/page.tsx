import Link from "next/link";

const projects = [
    {
        title: "Project One",
        description: "A brief description of the first project. It does something cool.",
        link: "https://github.com",
    },
    {
        title: "Project Two",
        description: "Another project that solves a different problem. Built with Next.js.",
        link: "https://github.com",
    },
    {
        title: "Project Three",
        description: "A third project to showcase versatility. Maybe a mobile app.",
        link: "https://github.com",
    },
];

export default function Projects() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Projects</h1>
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <div key={index} className="border-b border-gray-100 pb-8 last:border-0">
                        <h2 className="text-xl font-semibold mb-2">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {project.title}
                            </a>
                        </h2>
                        <p className="text-gray-700 leading-relaxed">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
