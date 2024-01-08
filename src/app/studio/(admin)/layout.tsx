import "@/app/assets/styles/globals.css";
import { HeaderStudio } from "@/components/header";

export default async function StudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <HeaderStudio/>
            <div className="mt-16">
                {children}
            </div>
        </>
    );
}