import Footer from "./components/modules/Footer";
import Header from "./components/modules/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRM",
  description: "مدیریت مشتریان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
