import "@/app/assets/styles/globals.css";

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}