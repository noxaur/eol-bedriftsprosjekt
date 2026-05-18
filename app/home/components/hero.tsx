export default function Hero() {
  return (
    <section className="w-full border-b-[3px] border-black bg-yellow-accent px-4 py-16 md:py-24">
      <div className="mx-auto max-w-[680px]">
        <h1 className="font-heading-condensed text-display font-bold uppercase leading-[0.9] tracking-tighter text-black">
          Ship software that stays alive
        </h1>
        <p className="mt-6 max-w-[55ch] font-body text-base leading-relaxed text-black md:text-lg">
          EOL keeps your critical systems running with active maintenance,
          security patches, and expert support long after vendors move on.
        </p>
      </div>
    </section>
  );
}
