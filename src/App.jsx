import { Navbar, Header, WhyUs, HowWeWork, Footer } from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <WhyUs />
        <HowWeWork />
      </main>
      <Footer />
    </>
  );
}
