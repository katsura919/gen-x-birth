import Hero from "@/components/Hero";
import WhatsHappening from "@/components/WhatsHappening";
import NotSelfHelp from "@/components/NotSelfHelp";
import QuizCTA from "@/components/QuizCTA";
import InternalDialogue from "@/components/InternalDialogue";
import WhatKeepsYouStuck from "@/components/WhatKeepsYouStuck";
import TheRealIssue from "@/components/TheRealIssue";
import WhatChanges from "@/components/WhatChanges";
import MomentOfChoice from "@/components/MomentOfChoice";
import TwoWaysForward from "@/components/TwoWaysForward";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatsHappening />
      <NotSelfHelp />
      <QuizCTA placement="first" />
      <InternalDialogue />
      <WhatKeepsYouStuck />
      <TheRealIssue />
      <WhatChanges />
      <MomentOfChoice />
      <TwoWaysForward />
      <Footer />
    </main>
  );
}
