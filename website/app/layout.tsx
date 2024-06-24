import type { Metadata } from "next";
import "./globals.css";
import Header from "@/extra/Header";
import Footer from "@/extra/Footer";

export const metadata: Metadata = {
    title: "@ALEC1O",
    description: "Official Alecio's Website: social, email, and more about Alecio Furanze",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <div id="init">
                    <Header />
                    <main id="content">{children}</main>
                </div>
                <Footer />
            </body>
        </html>
    );
}
