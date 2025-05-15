import Hero from '../components/home/Hero';
import OpenSourceContribution from '../components/home/OpenSourceContribution';
import WorkExperience from '../components/home/WorkExperience';
import ScrollIndicator from '../components/layout/ScrollIndicator';

const Home = () => {
  return (
    <div>
      <div id="hero">
        <Hero />
      </div>
      <div id="opensource-section">
        <OpenSourceContribution />
      </div>
      <div id="work-experience">
        <WorkExperience />
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default Home; 