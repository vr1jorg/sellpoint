import Link from "next/link";
import { ButtonVariant } from "../../types";
import { buttonVariantClasses, buttonBaseClasses } from "../../constants";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <Link href="/" className="text-white font-bold">Sellhub</Link>
            <div className="ml-auto">
                <Link className={`${buttonBaseClasses} ${buttonVariantClasses[ButtonVariant.Primary]}`} href="/admin">Access admin dashboard</Link>
            </div>
        </nav >
    )
}
