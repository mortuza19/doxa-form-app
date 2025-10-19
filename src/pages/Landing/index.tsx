import { useRef, type JSX } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from '@common/Header';
import Hero from '@landing/Hero';
import DemoSection from '@landing/DemoSection';
import Pricing from '@landing/Pricing';
import FAQSection from '@landing/FAQSection';
import CTABanner from '@landing/CTABanner';
import Footer from '@common/Footer';
import UserReview from '@landing/UserReview';
import HowItWorksSection from '@landing/HowItWork';
import CoreFeatures from '@landing/CoreFeatures';
import ProblemSolutionSectionOnly from '@landing/ProblemSolution';

function Landing(): JSX.Element {
  // Create refs for the elements you want to scroll to
  const featureRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Centralized function to handle scrolling
  function scrollToSection(ref: React.RefObject<HTMLDivElement | null>) {
    ref?.current?.scrollIntoView({
      behavior: 'smooth', // Optional: Adds smooth scrolling
      block: 'start',      // Scrolls to the top of the element
    });
  };
  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        featureRef={featureRef}
        demoRef={demoRef}
        pricingRef={pricingRef}
        contactRef={contactRef}
      />
      <Container role="main" maxWidth="xl" disableGutters>
        <Hero />
        <Container>
          <Box mb={10}>
            <ProblemSolutionSectionOnly />
          </Box>
          <Box ref={featureRef} my={10}>
            <CoreFeatures />
          </Box>
          <Box my={10}>
            <HowItWorksSection />
          </Box>
          <Box ref={demoRef} my={10}>
            <DemoSection />
          </Box>
          <Box ref={pricingRef} my={10}>
            <Pricing />
          </Box>
          <Box my={10}>
            <FAQSection />
          </Box>
          <Box my={10}>
            <UserReview />
          </Box>
        </Container>
        <Box mt={8}>
          <CTABanner />
        </Box>
      </Container>
      <Box ref={contactRef}>
        <Footer />
      </Box>
    </>
  );
};

export default Landing;
