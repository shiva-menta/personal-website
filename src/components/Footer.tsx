export default function Footer() {
    return (
        <footer className="py-8 mt-16 border-t border-gray-200 text-sm text-gray-500 flex justify-between items-center">
            <div>
                &copy; {new Date().getFullYear()} Shiva Menta. All rights reserved.
            </div>
            <div className="flex gap-4">
                <a href="https://github.com/shiva-menta" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                    GitHub
                </a>
                <a href="https://x.com/MentaShiva" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                    Twitter
                </a>
                <a href="https://www.linkedin.com/in/shiva-menta-472750147/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                    LinkedIn
                </a>
                <a href="https://substack.com/@shivamenta" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                    Substack
                </a>
            </div>
        </footer>
    );
}
