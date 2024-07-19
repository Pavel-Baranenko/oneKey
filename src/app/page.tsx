import Counters from "@/components/layouts/Counters";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import HowItWorks from "@/components/layouts/HowItWorks";
import MainFooter from "@/components/layouts/MainFooter";
import QuestAnswers from "@/components/layouts/QuestAnswers";
import RieltorsSlides from "@/components/layouts/RieltorsSlides";
import UserVariants from "@/components/layouts/UserVariants";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <Counters />
      <UserVariants />
      <RieltorsSlides />
      <QuestAnswers />
      <MainFooter />
    </main>
  );
}
