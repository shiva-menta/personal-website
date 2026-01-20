import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col-reverse sm:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-serif font-bold mb-4 tracking-tight">Hello, I&apos;m [Your Name]</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            I&apos;m a software engineer passionate about building clean, efficient, and user-friendly web applications.
            Currently, I&apos;m working on [Current Project] and learning [New Tech].
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/profile_placeholder.png"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I specialize in full-stack development with a focus on React, Next.js, and Node.js.
          I believe in simplicity and writing code that is easy to maintain and understand.
        </p>
        <p className="text-gray-700 leading-relaxed">
          When I&apos;m not coding, you can find me [Hobby 1], [Hobby 2], or [Hobby 3].
        </p>
      </section>
    </div>
  );
}
