"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        // { href: "/blog", label: "Writing" }, // TODO: uncomment when first article is published
    ];

    return (
        <nav className="flex justify-between items-center py-8 mb-8">
            <Link href="/" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
                Shiva Menta
            </Link>
            <div className="flex gap-6">
                {links.map(({ href, label }) => {
                    const isActive =
                        href === "/" ? pathname === "/" : pathname.startsWith(href);
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`nav-link ${isActive ? "active" : ""}`}
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
