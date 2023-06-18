import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Algonza Dewangga Arjunantyo",
  description: "Algonza Dewangga Arjunantyo's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
