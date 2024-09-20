import { Companies } from "./sections/Companies/Companies";
import Header from "./sections/Header/Header";
import { HeroSection } from "./sections/HeroSection/Hero";
import { Navbar } from "./sections/Navbar/Navbar";
import { Projects } from "./sections/Projects/Projects";
import { SocialProfiles } from "./sections/SocialProfiles/SocialProfiles";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Header></Header>
      <Projects></Projects>
      <Companies></Companies>
      <SocialProfiles></SocialProfiles>
    </>
  );
}

export default App;
