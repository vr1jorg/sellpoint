import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <h1>Sellhub</h1>
            <div className="ml-auto">
                <Link href="/">Sellhub</Link>
            </div>
        </nav>
    )
}
