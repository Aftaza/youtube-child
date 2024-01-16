import "@/app/assets/styles/globals.css";
import { HeaderStudio } from "@/components/header";
import { SidebarStudio } from "@/components/sidebar";
import { authUserSession } from '@/libs/auth-libs';
import { Toaster } from "react-hot-toast";

export default async function StudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await authUserSession()
    return (
        <>
            <HeaderStudio user={user}/>
            <SidebarStudio />
            <div className="mt-16 ml-56 px-5">
                <Toaster position="top-center" />
                {children}
            </div>
        </>
    );
}