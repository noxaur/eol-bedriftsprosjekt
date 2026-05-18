import type { Route } from "./+types/home";
import LandingPage from "../home/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EOL — Maintained Software" },
    { name: "description", content: "Software that lasts. Built for companies who value stability over hype." },
  ];
}

export default function Home() {
  return <LandingPage />;
}
