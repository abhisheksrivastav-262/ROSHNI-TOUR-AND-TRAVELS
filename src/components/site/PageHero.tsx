import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  hindi,
  description,
  image,
  imageAlt,
  children,
}: {
  kicker: string;
  title: ReactNode;
  hindi?: string;
  description?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-brown px-4 pb-16 pt-[74px] text-brand-ivory sm:px-8 lg:px-12">
      <img
        src={image}
        alt={imageAlt}
        width={1600}
        height={900}
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--brand-brown)_10%,color-mix(in_oklab,var(--brand-brown)_72%,transparent)_60%,color-mix(in_oklab,var(--brand-brown)_30%,transparent))]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,var(--brand-brown)_0%,transparent_55%)]" />
      <div className="mx-auto w-full max-w-[1240px] pt-16 lg:pt-24">
        <p className="section-kicker text-brand-gold">{kicker}</p>
        <div className="luxury-rule mt-4" />
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {hindi && (
          <p className="mt-4 max-w-2xl text-xl font-semibold leading-relaxed text-brand-ivory">
            {hindi}
          </p>
        )}
        {description && (
          <p className="mt-4 max-w-2xl leading-7 text-brand-ivory/70">{description}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
