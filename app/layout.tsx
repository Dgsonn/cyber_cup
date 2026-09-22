import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SUMMER CUP Mùa III | Giải đấu Hạng Vàng",
  description:
    "Trang thông tin chính thức giải đấu SUMMER CUP Mùa III - Danh sách đội, bảng xếp hạng, đổi quà và báo danh thi đấu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${robotoCondensed.variable} font-display bg-bg`}>
        {children}
      </body>
    </html>
  );
}
