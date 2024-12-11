import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionProvider from "@/context/ActiveSectionProvider";
import { Toaster, toast } from "sonner";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/sub-components/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Himanshu | Porfolio",
  description: "Himanshu Taviyad SDE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth ease-in">
      <body
        className={`${inter.className} bg-gray-50 text-black pt-28 md:pt-36 dark:bg-darkPrimary dark:text-gray-50  dark:text-opacity-90  `}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] " />
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] " />
        <Toaster richColors />
        <ThemeContextProvider>
          <ActiveSectionProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
