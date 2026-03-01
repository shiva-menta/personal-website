import Image from "next/image";

const projects = [
    {
        title: "Automatic Cuepoints",
        description: "Mac app that automatically places cue points on DJ tracks in Rekordbox.",
        link: "https://github.com/shiva-menta/automatic-cuepoints",
        icon: "/automatic-cuepoints-icon.png",
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
                        className="group rounded-xl border border-gray-100 p-6 transition hover:shadow-md hover:-translate-y-0.5 flex flex-col hover:bg-white"
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
