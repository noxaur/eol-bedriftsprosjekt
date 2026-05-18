import type { Route } from "./+types/contact-sales";
import { Link } from "react-router";
import Header from "~/home/components/header";
import Footer from "~/home/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Sales | ReOL" },
    { name: "description", content: "Get in touch with our sales team to learn how we can help maintain your EOL software." },
  ];
}

export default function ContactSales() {
  return (
    <div className="min-h-screen bg-green-light">
      <Header />
      <main className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-6 py-16">
        <div className="w-full text-center">
          <h1 className="font-heading text-heading-lg text-green-darker">
            Contact Sales
          </h1>
          <p className="mt-4 font-body text-base text-font-muted">
            Tell us about your EOL software needs and we will get back to you within 24 hours.
          </p>
        </div>

        <form className="w-full space-y-6 rounded-[5px] bg-white p-8 shadow-sm">
          <div>
            <label htmlFor="name" className="mb-2 block font-body text-sm font-medium text-green-darker">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-[5px] border border-green-normal/30 px-4 py-3 font-body text-base text-font-dark placeholder:text-font-muted/50 focus:border-green-normal focus:outline-none focus:ring-1 focus:ring-green-normal"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-body text-sm font-medium text-green-darker">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-[5px] border border-green-normal/30 px-4 py-3 font-body text-base text-font-dark placeholder:text-font-muted/50 focus:border-green-normal focus:outline-none focus:ring-1 focus:ring-green-normal"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block font-body text-sm font-medium text-green-darker">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full rounded-[5px] border border-green-normal/30 px-4 py-3 font-body text-base text-font-dark placeholder:text-font-muted/50 focus:border-green-normal focus:outline-none focus:ring-1 focus:ring-green-normal"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block font-body text-sm font-medium text-green-darker">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-[5px] border border-green-normal/30 px-4 py-3 font-body text-base text-font-dark placeholder:text-font-muted/50 focus:border-green-normal focus:outline-none focus:ring-1 focus:ring-green-normal"
              placeholder="Tell us about your EOL software and what you need help with..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-[5px] bg-green-normal px-6 py-3 font-body text-base font-medium text-green-light transition-colors hover:bg-green-dark"
          >
            Send Message
          </button>
        </form>

        <Link
          to="/"
          className="font-body text-sm text-green-normal underline underline-offset-2 hover:text-green-dark"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
