export default function Faq() {
  return (
    <section className="mx-auto flex w-full max-w-[600px] flex-col items-center gap-6 rounded-xl border-2 border-green-normal/20 bg-white p-8 shadow-[0_0_40px_rgba(57,181,74,0.08)]">
      <div className="flex items-center gap-3">
        <div className="size-2 rounded-full bg-green-normal" />
        <div className="size-2 rounded-full bg-green-normal/60" />
        <div className="size-2 rounded-full bg-green-normal/30" />
      </div>
      <h2 className="font-heading-condensed text-display font-black text-green-darker text-center leading-none">
        Frequently asked questions
      </h2>
      <div className="h-1 w-24 rounded-full bg-green-normal" />
      <p className="font-body text-lg leading-relaxed text-font-muted text-center max-w-[500px]">
        We build software that stays relevant. Every line is reviewed, tested, and documented so you can focus on what matters — running your business.
      </p>
    </section>
  );
}
