import type { Route } from "./+types/home";
import LandingPage from "../home/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EOL - Enterprise Software Maintenance" },
    { name: "description", content: "Enterprise-grade maintenance for the systems your business depends on." },
  ];
}

export default function Home() {
  return <LandingPage />;
}
