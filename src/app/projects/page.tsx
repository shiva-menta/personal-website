import Image from "next/image";

const projects = [
    {
        title: "Project One",
        description: "A brief description of the first project. It does something cool.",
        link: "https://github.com",
        icon: "/projects/project-one.svg",
    },
    {
        title: "Project Two",
        description: "Another project that solves a different problem. Built with Next.js.",
        link: "https://github.com",
        icon: "/projects/project-two.svg",
    },
    {
        title: "Project Three",
        description: "A third project to showcase versatility. Maybe a mobile app.",
        link: "https://github.com",
        icon: "/projects/project-three.svg",
    },
];

export default function Projects() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Projects</h1>
            <div className="grid grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-xl border border-gray-100 p-6 transition hover:shadow-md hover:-translate-y-0.5 flex flex-col"
                    >
                        <Image
                            src={project.icon}
                            alt={project.title}
                            width={48}
                            height={48}
                            className="grayscale group-hover:grayscale-0 transition duration-300 rounded-lg"
                        />
                        <div className="flex items-center justify-between mt-4">
                            <h2 className="text-lg font-semibold">{project.title}</h2>
                            <span className="text-gray-400 transition-transform group-hover:translate-x-1">→</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
