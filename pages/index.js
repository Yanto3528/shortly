import Container from "../styles/shared/Container";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import GetStarted from "../components/GetStarted";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
      </Container>
      <MainContent />
      <GetStarted />
    </main>
  );
}
