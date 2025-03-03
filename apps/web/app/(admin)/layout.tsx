import "../../globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TRPCProvider } from "../_trpc/client"
import Link from "next/link";
import AddMockProduct from "../_components/add-mock-product";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Turborepo",
    description: "Generated by create turbo",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <TRPCProvider>
            <html lang="en">
                <body className={inter.className}>
                    <nav className="flex justify-between">
                        <Link className="py-2 px-3 block underline" href="/">Go back to store</Link>
                        <AddMockProduct />
                    </nav>

                    {children}
                </body>
            </html>
        </TRPCProvider>
    );
}
