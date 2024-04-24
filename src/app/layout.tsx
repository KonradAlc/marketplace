import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header } from "src/components";
import "src/styles/globals.css";
import favicon from "src/assets/img/logo.webp";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "MotoRynek - Rynek dla motocyklistów",
  description: "Kupuj i sprzedawaj motocykle, kaski, odzież i akcesoria",
};

const RouterComponents = () => {
  return <ToastContainer />;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href={favicon.src} />
      </head>
      <body className={inter.className}>
        <RouterComponents />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
