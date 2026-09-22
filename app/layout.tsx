import type { Metadata } from "next";
import { Bungee, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const display = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SUMMER CUP Mùa III | Giải đấu Hạng Vàng",
  description:
    "Trang thông tin chính thức giải đấu SUMMER CUP Mùa III - Đăng ký thi đấu, bảng xếp hạng, đổi quà và tin tức mới nhất.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${display.variable} ${body.variable} font-body bg-bg`}>
        {children}
      </body>
    </html>
  );
}
