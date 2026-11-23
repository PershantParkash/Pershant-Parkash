"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useRef, useState } from "react";
import type { Reel } from "../content";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export default function Reels({ reels }: { reels: Reel[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Reel | null>(null);

  const open = (reel: Reel) => {
    setActive(reel);
    dialog.current?.showModal();
  };

  return (
    <>
      <ul className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 [scrollbar-color:#47606a_transparent] overflow-x-auto px-6 py-2 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-0">
        {reels.map((reel) => (
          <li
            key={reel.code}
            id={`reel-${reel.code}`}
            className="reel w-[62vw] max-w-64 shrink-0 scroll-mt-32 snap-start lg:w-auto lg:max-w-none"
          >
            <button type="button" onClick={() => open(reel)} className="group relative block w-full cursor-pointer text-left">
              <span className="reel-cover relative block aspect-9/16 overflow-hidden rounded-lg bg-slate-2">
                <Image
                  src={`/reels/${reel.code}.webp`}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 230px, 62vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 grid size-11 place-items-center rounded-full bg-white text-slate transition-colors group-hover:bg-brass">
                  <Play className="ml-0.5 size-4 fill-current" aria-hidden="true" />
                </span>
              </span>
              <span className="mt-4 block text-base leading-snug font-semibold">
                <span className="sr-only">Play video: </span>
                {reel.title}
              </span>
            </button>
            <p className="mt-1.5 text-sm leading-relaxed text-mist">{reel.summary}</p>
            <p className="mt-1.5 text-sm text-mist">{formatDate(reel.date)}</p>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        aria-label={active?.title}
        className="reel-dialog m-auto max-h-[96dvh] w-[min(420px,94vw)] overflow-y-auto rounded-lg bg-white text-ink"
      >
        {active && (
          <>
            <div className="flex items-center justify-between gap-4 py-2 pr-2 pl-4">
              <p className="text-sm leading-snug font-semibold">{active.title}</p>
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full hover:bg-foil"
                aria-label="Close video"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="relative h-[min(730px,78dvh)] bg-slate">
              <Image src={`/reels/${active.code}.webp`} alt="" fill sizes="420px" className="object-cover opacity-50" />
              <p className="absolute inset-0 grid place-items-center font-medium text-white">Loading from Instagram</p>
              <iframe
                src={`https://www.instagram.com/reel/${active.code}/embed/`}
                title={`${active.title}, on Instagram`}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              />
            </div>
            <a
              href={`https://www.instagram.com/reel/${active.code}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="textlink block px-4 py-4 text-sm font-medium"
            >
              Open on Instagram
            </a>
          </>
        )}
      </dialog>
    </>
  );
}
