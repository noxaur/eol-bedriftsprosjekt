export default function Faq() {
  return (
    <section className="mx-auto w-full max-w-[520px] border-[3px] border-black bg-white py-[30px] brutalist-shadow">
      <h2 className="w-full text-center px-[20px] font-heading-condensed text-section-heading font-bold uppercase tracking-wider text-black">
        Frequently asked questions
      </h2>
      <div className="mt-4 space-y-4 px-[20px]">
        <details className="group border-b-2 border-black pb-3">
          <summary className="cursor-pointer font-body text-base font-bold text-black list-none">
            What happens when my software reaches end of life?
          </summary>
          <p className="mt-2 font-body text-base leading-relaxed text-black">
            We provide continued maintenance, security patches, and technical
            support for software that vendors no longer service.
          </p>
        </details>
        <details className="group border-b-2 border-black pb-3">
          <summary className="cursor-pointer font-body text-base font-bold text-black list-none">
            How quickly can you respond to critical issues?
          </summary>
          <p className="mt-2 font-body text-base leading-relaxed text-black">
            Our SLA guarantees response within 4 hours for critical severity
            issues, with 24/7 coverage available on enterprise plans.
          </p>
        </details>
        <details className="pb-3">
          <summary className="cursor-pointer font-body text-base font-bold text-black list-none">
            Do you support custom or legacy systems?
          </summary>
          <p className="mt-2 font-body text-base leading-relaxed text-black">
            Yes. We specialize in maintaining custom-built and legacy systems
            that standard vendors won't touch.
          </p>
        </details>
      </div>
    </section>
  );
}
