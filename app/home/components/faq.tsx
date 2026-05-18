export default function Faq() {
  return (
    <section className="relative mx-auto flex w-full max-w-[382px] flex-col items-center gap-[15px] rounded-[5px] py-[30px] overflow-hidden">
      {/* Bold background with pattern */}
      <div className="absolute inset-0 bg-green-darker" />
      <div className="absolute inset-0 pattern-dots-sm opacity-[0.08]" />

      {/* Geometric accent shapes */}
      <div className="absolute top-[-20px] right-[20px] w-[60px] h-[60px] border-2 border-accent-warm/30 rotate-12" />
      <div className="absolute bottom-[-15px] left-[30px] w-[50px] h-[50px] bg-accent-gold/10 rounded-full" />
      <div className="absolute top-[50%] left-[-10px] w-[20px] h-[20px] bg-green-normal/20 rotate-45" />

      {/* Accent stripe at top */}
      <div className="absolute top-0 left-[20%] right-[20%] h-[3px] bg-gradient-to-r from-transparent via-accent-warm to-transparent" />

      <div className="relative">
        <h2 className="w-full text-center px-[20px] font-heading-condensed text-[clamp(26px,7.5vw,32px)] font-bold uppercase tracking-wide text-green-light">
          Frequently asked questions
        </h2>
        {/* Underline */}
        <div className="mx-auto mt-2 w-[80px] h-[2px] bg-gradient-to-r from-accent-warm to-accent-gold" />
      </div>

      <p className="relative w-[329.95px] text-center font-body text-base leading-relaxed text-green-light/70">
        daskjdaksdabsdkbajsdaas asdasdasdas dasdasdasdasdas dasdadasdasdadasd apsidhu9asdfgbhuiabfgipbdfag dasfg ds fgs dfg sdfg
      </p>

      {/* Bottom accent stripe */}
      <div className="absolute bottom-0 left-[30%] right-[30%] h-[3px] bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
    </section>
  );
}
