import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import CheatBanner from "@/components/chatBanner";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="max-w-[656px] w-full m-auto max-h-[960px] h-full overflow-auto my-5">
        <Header />
        <CheatBanner />
        <Footer />
      </div>
    </main>
  );
}
