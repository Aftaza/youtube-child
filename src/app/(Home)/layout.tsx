import "@/app/assets/styles/globals.css";
import {Header} from "@/components/header";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}