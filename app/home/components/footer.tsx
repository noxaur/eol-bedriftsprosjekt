import { useState, useEffect } from "react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(14823);

  useEffect(() => {
    setVisitorCount((prev) => prev + Math.floor(Math.random() * 3));
  }, []);

  const lastUpdated = "2026-05-18";

  return (
    <footer className="mt-8 border-t-2 border-retro-border bg-retro-white">
      <div className="construction-stripe" />
      <div className="mx-auto max-w-3xl px-4 py-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <h3 className="mb-2 font-heading text-base font-bold text-retro-blue">
              ABOUT ReOL
            </h3>
            <p className="font-body text-xs text-font-muted">
              Keeping your old software alive since 1997. We maintain what others abandon.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-heading text-base font-bold text-retro-blue">
              QUICK LINKS
            </h3>
            <ul className="space-y-1 font-body text-xs">
              <li><a href="#" className="hover:text-retro-red">[Home]</a></li>
              <li><a href="#" className="hover:text-retro-red">[Services]</a></li>
              <li><a href="#" className="hover:text-retro-red">[Contact]</a></li>
              <li><a href="#" className="hover:text-retro-red">[Guestbook]</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-heading text-base font-bold text-retro-blue">
              SITE INFO
            </h3>
            <div className="space-y-1 font-body text-xs text-font-muted">
              <p>Visitors: <span className="retro-box-inset inline-block px-2 py-0.5 font-mono text-retro-red">{visitorCount.toLocaleString()}</span></p>
              <p>Last updated: {lastUpdated}</p>
              <p>Best viewed in 1024x768</p>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="font-body text-xs text-font-muted">
            &copy; 1997-2026 ReOL. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="retro-badge text-xs">Made with Notepad.exe</span>
            <span className="animate-sparkle text-retro-yellow text-lg">★</span>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="font-body text-xs text-font-muted">
            <a href="#">← Prev</a> {" | "}
            <strong>ReOL Web Ring</strong> {" | "}
            <a href="#">Next →</a>
          </p>
        </div>
      </div>
      <div className="construction-stripe" />
    </footer>
  );
}
