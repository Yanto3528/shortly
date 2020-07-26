import Head from "next/head";
import Container from "../styles/shared/Container";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import GetStarted from "../components/GetStarted";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Shorten your link today | Shortly</title>
        <meta
          name="description"
          content="Build your brand's recognition and get detailed insights on how your links are performing"
        />
      </Head>
      <main>
        <Container>
          <Hero />
        </Container>
        <MainContent />
        <GetStarted />
      </main>
    </React.Fragment>
  );
}
