export default function Footer() {
    return (
        <footer className="py-8 mt-16 border-t border-gray-200 text-sm text-gray-500 flex justify-between items-center">
            <div>
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </div>
            <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                    GitHub
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                    Twitter
                </a>
            </div>
        </footer>
    );
}
