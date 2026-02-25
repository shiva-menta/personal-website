import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col-reverse sm:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-serif font-bold mb-4 tracking-tight">Hello, I&apos;m Shiva Menta</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            I&apos;m a software engineer passionate about systems and music technology.
            Currently, I&apos;m working on <a href="https://github.com/facebook/fboss" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">FBOSS</a> distro at Meta in NYC.
            In my free time, I&apos;ve been building <a href="https://github.com/shiva-menta/automatic-cuepoints" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">Automatic Cuepoints</a> to help DJs reduce set prep time. 
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/headshot.jpeg"
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
          Outside of work, I enjoy reading tech articles — check out my <a href="https://raindrop.io/shiva-123-menta/public-67350613" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">Raindrop collection</a> for
          things I&apos;ve found interesting recently. I&apos;m particularly interested in AI's impact on society and the economy, and spend a lot of time reading / writing about this topic. 
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          I also love listening to many types of music — here are some of my <a href="https://open.spotify.com/playlist/397Pe2OwOWcw23F3CBCMle?si=a61e85a4ec754bd9" className="underline hover:text-gray-900">favorite EDM songs</a> and <a href="https://open.spotify.com/playlist/33Q5JaW4rWtLWxQsUD6yvS?si=320c953915b34d28" className="underline hover:text-gray-900">favorite movie soundtracks</a>.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Feel free to reach out at <a href="mailto:shiva.123.menta@gmail.com" className="underline hover:text-gray-900">shiva.123.menta@gmail.com</a> or
          find me on <a href="https://github.com/shiva-menta" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">GitHub</a>,{" "}
          <a href="https://x.com/MentaShiva" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">Twitter</a>,{" "}
          <a href="https://www.linkedin.com/in/shiva-menta-472750147/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">LinkedIn</a>, and{" "}
          <a href="https://substack.com/@shivamenta" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">Substack</a>.
        </p>
      </section>
    </div>
  );
}
