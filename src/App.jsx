import { Analytics } from "@vercel/analytics/react";
import { Layout } from "./components/Layout";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Hackathons } from "./sections/Hackathons";
import { ClosingCta } from "./sections/ClosingCta";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Projects />
        <Hackathons />
        <ClosingCta />
      </Layout>
      <Analytics />
    </>
  );
}

export default App;
