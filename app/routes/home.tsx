import type { Route } from "./+types/home";
import LandingPage from "../home/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ReOL | EOL Software Maintenance & Support" },
    { name: "description", content: "Expert maintenance and support for End of Life software. We keep your legacy systems secure, stable, and running when vendors walk away." },
  ];
}

export default function Home() {
  return <LandingPage />;
}
