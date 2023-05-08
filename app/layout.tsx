import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";

// naming `font` directly
const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb", // control tab name
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
