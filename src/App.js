import { BrowserRouter as Router } from 'react-router-dom';
import Showcase from './components/showcase-section/Showcase';
import FindMentor from './components/find-mentor-section/FindMentor';
import JoinSection from './components/join-mentorkart/JoinSection';
import ProgramsSection from './components/programs/ProgramsSection';
import TestimonialSection from './components/testimonials/TestimonialSection';
import PartnersSection from './components/partners/PartnersSection';
import NewsSection from './components/news/NewsSection';
import BlogsSection from './components/blogs/BlogsSection';
import Footer from './components/footer/Footer';

import { Container } from 'react-bootstrap';
function App() {
  return (
    <div>
      <Router>
        <Showcase />
        <Container>
          <FindMentor />
          <JoinSection />
          <ProgramsSection />
          <PartnersSection />
          <TestimonialSection />
          <NewsSection />
          <BlogsSection />
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
