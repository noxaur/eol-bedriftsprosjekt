import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";

function LandingPage() {
  return (
    <div className="min-h-screen bg-green-light">
      <Header />
      <main className="flex flex-col items-center gap-[18px] px-7">
        <Carousel />
      </main>
      <TrustedBy />
    </div>
  );
}

export default LandingPage;
