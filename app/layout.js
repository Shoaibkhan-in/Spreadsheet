import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SpreadSheet By Soyab",
  description: "SpreadSheet - For all you record, bills and work to manage here.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className="text-white min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        {children}
        </div>
        </body>
    </html>
  );
}
