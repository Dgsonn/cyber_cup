import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamsSection from "@/components/TeamsSection";
import Leaderboard from "@/components/Leaderboard";
import ExclusiveRewards from "@/components/ExclusiveRewards";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <TeamsSection />
      <Leaderboard />
      <ExclusiveRewards />
      <RegisterSection />
      <Footer />
    </main>
  );
}
