import Header from "./components/header";
import Carousel from "./components/carousel";

function LandingPage() {
  return (
    <div className="min-h-screen bg-green-light">
      <Header />
      <main className="flex flex-col items-center gap-[18px] px-7">
        <Carousel />
      </main>
    </div>
  );
}

export default LandingPage;
