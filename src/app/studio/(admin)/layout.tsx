import "@/app/assets/styles/globals.css";
import { HeaderStudio } from "@/components/header";
import { authUserSession } from '@/libs/auth-libs';

export default async function StudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await authUserSession()
    return (
        <>
            <HeaderStudio user={user}/>
            <div className="mt-16">
                {children}
            </div>
        </>
    );
}