import {
  Header,
  Hero,
  About,
  Footer,
  HowItWorks,
  HomeIllustrate,
  DeliveringWarmur,
  ComingSoon,
  Statistics,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <section className="bg-gray-300">
        <HomeIllustrate />
        <Statistics />
        <DeliveringWarmur />
        <ComingSoon />
      </section>
      <Footer />
    </main>
  );
}
