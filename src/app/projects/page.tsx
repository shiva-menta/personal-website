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
            <div className="grid gap-6">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-lg border border-gray-100 p-6 transition hover:shadow-md hover:-translate-y-0.5"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-semibold">{project.title}</h2>
                            <span className="text-gray-400 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{project.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
