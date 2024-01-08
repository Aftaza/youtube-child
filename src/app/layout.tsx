import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Youtube Child",
    description: "Clone Youtube but with cms and child purpose",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
