import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import LearningTracks from './components/LearningTracks';
import DashboardSection from './components/DashboardSection';
import GamificationSection from './components/GamificationSection';
import CommunitySection from './components/CommunitySection';
import FooterCta from './components/FooterCta';
import { discussions, featureCards, learningTracks, milestones, navLinks } from './data/content';

function App() {
  return (
    <>
      <Header links={navLinks} />
      <main id="main-content">
        <Hero />
        <FeatureGrid items={featureCards} />
        <LearningTracks tracks={learningTracks} />
        <DashboardSection milestones={milestones} />
        <GamificationSection />
        <CommunitySection discussions={discussions} />
      </main>
      <FooterCta />
    </>
  );
}

export default App;
