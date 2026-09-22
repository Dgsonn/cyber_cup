import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutStats from "@/components/AboutStats";
import TournamentsSection from "@/components/TournamentsSection";
import TeamsSection from "@/components/TeamsSection";
import ScheduleStandings from "@/components/ScheduleStandings";
import Leaderboard from "@/components/Leaderboard";
import RewardShop from "@/components/RewardShop";
import NewsSection from "@/components/NewsSection";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <AboutStats />
      <TournamentsSection />
      <TeamsSection />
      <ScheduleStandings />
      <Leaderboard />
      <RewardShop />
      <NewsSection />
      <RegisterSection />
      <Footer />
    </main>
  );
}
