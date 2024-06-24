import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "@ALEC1O",
    description: "Official Alecio's Website: social, email, and more about Alecio Furanze",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
