import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import InfoCard from "./components/info-card";

function LandingPage() {
  return (
    <div className="min-h-screen bg-green-light">
      <Header />
      <main className="flex flex-col items-center gap-[18px] px-7">
        <Carousel />
        <TrustedBy />
        <ButtonPair />
        <InfoCard
          title="FAQ"
          body="Find answers to common questions about our EOL software maintenance services, support plans, and how we help extend the life of your legacy systems."
        />
      </main>
    </div>
  );
}

export default LandingPage;
