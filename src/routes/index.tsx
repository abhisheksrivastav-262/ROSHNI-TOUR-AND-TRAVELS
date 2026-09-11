import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CarFront,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FareCheckWidget } from "@/components/site/FareCheckWidget";
import heroTempleImage from "@/assets/mahakal-temple.jpg";
import omkareshwarGhatImage from "@/assets/omkareshwar-ghat.jpg";
import yellowTaxiImage from "@/assets/yellow-taxi.jpg";
import sedanImage from "@/assets/sedan-indigo.jpg";
import suvImage from "@/assets/suv-grey.jpg";
import highwayCarsImage from "@/assets/highway-cars.jpg";
import familyMpvImage from "@/assets/family-mpv.jpg";
import {
  ADDRESS,
  PHONE_PRIMARY,
  RELIGIOUS_LINE,
  whatsappUrl,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ujjain Taxi Tour and Travels | Ujjain Taxi & Tour Service" },
      {
        name: "description",
        content:
          "UJJAIN TAXI TOUR AND TRAVELS — Ujjain taxi, Ujjain Darshan, Ujjain to Omkareshwar taxi. AC & Non-AC vehicles available 24 hours.",
      },
      { property: "og:title", content: "Ujjain Taxi Tour and Travels | Ujjain Taxi & Tour Service" },
      {
        property: "og:description",
        content: "उज्जैन से ओंकारेश्वर, उज्जैन दर्शन और local sightseeing के लिए भरोसेमंद टैक्सी सेवा.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SERVICES_PREVIEW = [
  ["उज्जैन दर्शन", "उज्जैन के प्रमुख धार्मिक एवं दर्शनीय स्थलों के लिए सुविधाजनक टैक्सी सेवा।", heroTempleImage],
  ["उज्जैन से ओंकारेश्वर", "उज्जैन से ओंकारेश्वर के लिए आरामदायक और सुविधाजनक टैक्सी यात्रा।", omkareshwarGhatImage],
  ["AC TAXI SERVICE", "आरामदायक AC गाड़ियों के साथ परिवार और यात्रियों के लिए सुविधाजनक सफर।", yellowTaxiImage],
  ["NON AC TAXI SERVICE", "किफायती और सुविधाजनक Non-AC वाहन विकल्प।", sedanImage],
] as const;

function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative isolate flex min-h-[760px] items-end overflow-hidden bg-brand-brown pt-[74px] lg:min-h-[820px]">
        <img
          src={heroTempleImage}
          alt="Mahakaleshwar Temple and Mahakal in Ujjain"
          width={1600}
          height={1000}
          className="absolute inset-0 -z-20 size-full object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--brand-brown),color-mix(in_oklab,var(--brand-brown)_64%,transparent)_44%,color-mix(in_oklab,var(--brand-brown)_12%,transparent))]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,var(--brand-brown)_0%,transparent_58%)]" />
        <div className="relative mx-auto w-full max-w-[1440px] px-4 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <div className="max-w-3xl animate-rise-in">
            <div className="mb-7 flex items-center gap-3 text-brand-gold">
              <span className="h-px w-10 bg-brand-gold" />
              <span className="font-display text-xs font-bold tracking-[0.2em]">{RELIGIOUS_LINE}</span>
            </div>
            <p className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.26em] text-brand-gold">
              Your journey. Our care.
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] text-brand-ivory sm:text-7xl lg:text-[6.6rem]">
              UJJAIN TAXI
              <br />
              <span className="text-brand-gold">TOUR</span> AND TRAVELS
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-relaxed text-brand-ivory sm:text-2xl">
              उज्जैन से ओंकारेश्वर एवं उज्जैन दर्शन के लिए भरोसेमंद टैक्सी सेवा
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-brand-ivory/75 sm:text-base">
              सभी प्रकार की AC एवं Non AC गाड़ियाँ 24 घंटे उपलब्ध
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="lg">
                <Link to="/book-now">
                  Book Now <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="brandOutline" size="lg">
                <a href={`tel:${PHONE_PRIMARY}`}>
                  <Phone /> Call Now
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="lg">
                <a href={whatsappUrl(PHONE_PRIMARY)} target="_blank" rel="noreferrer">
                  <MessageCircle /> WhatsApp Now
                </a>
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 border-t border-brand-ivory/20 pt-5 text-sm text-brand-ivory/80 sm:grid-cols-2">
              <a href={`tel:${PHONE_PRIMARY}`} className="flex items-center gap-2 font-display font-bold hover:text-brand-gold">
                <Phone className="size-4 text-brand-gold" />
                {PHONE_PRIMARY}
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-gold" />
                {ADDRESS}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 hidden items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand-ivory/60 lg:flex">
          <span>Scroll to explore</span>
          <ChevronDown className="size-4 animate-bounce" />
        </div>
      </section>

      {/* BOOKING / FARE CHECK WIDGET — directly below hero */}
      <FareCheckWidget />

      {/* HIGHLIGHTS */}
      <section className="border-b border-brand-gold/30 bg-brand-ivory" aria-label="Travel highlights">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 divide-y divide-brand-gold/25 px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8 lg:grid-cols-4 lg:px-12">
          {[
            [Clock3, "24/7 vehicle availability", "AC एवं Non AC गाड़ियाँ 24 घंटे उपलब्ध"],
            [Sparkles, "Ujjain darshan", "उज्जैन दर्शन के लिए सुविधाजनक टैक्सी सेवा"],
            [Compass, "Omkareshwar travel", "उज्जैन से ओंकारेश्वर के लिए आरामदायक यात्रा"],
            [Users, "Family friendly", "परिवार और ग्रुप यात्रियों के लिए आरामदायक सफर"],
          ].map(([Icon, title, description]) => {
            const I = Icon as typeof Clock3;
            return (
              <div key={title as string} className="flex items-start gap-4 px-1 py-6 sm:px-6 lg:py-8">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-gold/20 text-brand-orange">
                  <I className="size-5" />
                </span>
                <div>
                  <h2 className="font-display text-xs font-extrabold uppercase tracking-[0.08em] text-brand-brown">
                    {title as string}
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{description as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-brand-cream px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-5 -top-5 h-32 w-32 border-l border-t border-brand-gold/60" />
            <img
              src={familyMpvImage}
              alt="Family with spacious MPV car for comfortable travel"
              width={1200}
              height={900}
              loading="lazy"
              className="relative aspect-[4/3] w-full object-cover"
            />
            <div className="absolute -bottom-5 -right-5 bg-brand-brown px-6 py-5 text-brand-ivory shadow-xl">
              <p className="font-display text-2xl font-extrabold text-brand-gold">24/7</p>
              <p className="mt-1 text-xs tracking-wide text-brand-ivory/75">यात्रा आपकी, सुविधा हमारी</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="section-kicker">About the journey</p>
            <div className="luxury-rule mt-4" />
            <h2 className="mt-6 max-w-xl font-display text-4xl font-extrabold leading-tight text-brand-brown sm:text-5xl">
              उज्जैन की यात्रा, अब आराम और भरोसे के साथ
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-brand-brown-soft">
              UJJAIN TAXI TOUR AND TRAVELS के साथ आपकी धार्मिक और पारिवारिक यात्राएँ आसान बनती हैं।
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              उज्जैन दर्शन, ओंकारेश्वर यात्रा, local sightseeing, outstation travel और family travel
              के लिए AC और Non-AC गाड़ियों की सुविधा — 24 घंटे उपलब्ध।
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="dark">
                <Link to="/about">
                  About Us <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="brand">
                <Link to="/book-now">
                  Book Your Ride <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-brand-brown px-4 py-20 text-brand-ivory sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px]">
          <p className="section-kicker text-brand-gold">Curated travel services</p>
          <div className="luxury-rule mt-4" />
          <div className="mt-6 grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">हमारी यात्रा सेवाएँ</h2>
            <p className="max-w-xl leading-7 text-brand-ivory/65 lg:justify-self-end">
              हर यात्रा के लिए सही वाहन और सही रास्ता — उज्जैन की गलियों से लेकर मध्य प्रदेश की लंबी
              सड़कों तक।
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-brand-ivory/15 bg-brand-ivory/15 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES_PREVIEW.map(([title, description, image]) => (
              <article key={title} className="group bg-brand-brown p-3">
                <div className="relative aspect-[1.28/1] overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--brand-brown),transparent_70%)]" />
                </div>
                <div className="px-2 pb-2 pt-5">
                  <h3 className="font-display text-sm font-extrabold tracking-[0.03em] text-brand-gold">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brand-ivory/65">{description}</p>
                  <Button asChild variant="brand" size="sm" className="mt-4">
                    <Link to="/book-now">
                      Book Now <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="brandOutline" size="lg">
              <Link to="/services">
                View All Services <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* VEHICLES PREVIEW */}
      <section className="bg-brand-ivory px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px]">
          <p className="section-kicker">The right fit for every trip</p>
          <div className="luxury-rule mt-4" />
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <h2 className="font-display text-4xl font-extrabold text-brand-brown sm:text-5xl">हमारी गाड़ियाँ</h2>
            <p className="max-w-md leading-7 text-muted-foreground lg:justify-self-end">
              SUV, Sedan, Hatchback या Family Car — AC / Non-AC विकल्पों के साथ।
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["SUV", "लंबी दूरी और परिवार के लिए", suvImage],
              ["SEDAN", "शहर और outstation travel", sedanImage],
              ["FAMILY CAR", "परिवार और group यात्रियों के लिए", familyMpvImage],
            ].map(([title, use, image]) => (
              <article key={title} className="group border border-brand-gold/35 bg-brand-cream p-3 transition-transform hover:-translate-y-1">
                <div className="relative aspect-[1.45/1] overflow-hidden bg-white">
                  <img src={image} alt={`${title} taxi category`} width={1200} height={900} loading="lazy" className="size-full object-contain transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="px-2 pb-2 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-extrabold text-brand-brown">{title}</h3>
                    <CarFront className="size-5 shrink-0 text-brand-orange" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{use}</p>
                  <Button asChild variant="dark" size="sm" className="mt-5">
                    <Link to="/book-now">
                      Book Now <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="dark" size="lg">
              <Link to="/vehicles">
                View All Vehicles <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* DARSHAN */}
      <section className="relative isolate min-h-[560px] overflow-hidden bg-brand-brown px-4 py-20 text-brand-ivory sm:px-8 lg:px-12 lg:py-28">
        <img src={heroTempleImage} alt="Mahakaleshwar Temple and Mahakal in Ujjain" width={1200} height={900} loading="lazy" className="absolute inset-0 -z-20 size-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--brand-brown)_8%,color-mix(in_oklab,var(--brand-brown)_74%,transparent)_55%,transparent)]" />
        <div className="mx-auto flex w-full max-w-[1240px] items-center">
          <div className="max-w-xl">
            <p className="section-kicker text-brand-gold">A day of devotion, made easy</p>
            <div className="luxury-rule mt-4" />
            <h2 className="mt-6 font-display text-5xl font-extrabold leading-tight sm:text-6xl">उज्जैन दर्शन</h2>
            <p className="mt-4 text-xl font-semibold text-brand-ivory/90">श्रद्धा, सुविधा और आराम के साथ उज्जैन दर्शन</p>
            <p className="mt-5 leading-7 text-brand-ivory/70">
              Mahakal Temple और local religious places तक comfortable taxi की सुविधा — AC / Non-AC
              vehicles, 24 घंटे availability के साथ।
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="lg">
                <Link to="/book-now">Book Ujjain Darshan <ArrowRight /></Link>
              </Button>
              <Button asChild variant="brandOutline" size="lg">
                <Link to="/ujjain-darshan">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* OMKARESHWAR */}
      <section className="bg-brand-cream px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative">
            <img src={omkareshwarGhatImage} alt="Omkareshwar ghats and Narmada river pilgrimage scene" width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <span className="absolute -bottom-4 left-4 bg-brand-gold px-5 py-4 font-display text-xs font-extrabold uppercase tracking-[0.1em] text-brand-brown">
              Ujjain → Omkareshwar
            </span>
          </div>
          <div>
            <p className="section-kicker">A route worth taking</p>
            <div className="luxury-rule mt-4" />
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight text-brand-brown sm:text-5xl">
              उज्जैन से ओंकारेश्वर
            </h2>
            <p className="mt-4 text-xl font-semibold leading-8 text-brand-brown-soft">
              धार्मिक यात्रा के लिए आरामदायक और भरोसेमंद टैक्सी सेवा
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 text-sm font-bold text-brand-brown">
              {["AC / Non-AC", "Family travel", "Group travel", "24/7 availability"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-brand-orange" /> {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="dark" size="lg">
                <Link to="/book-now">
                  Book Omkareshwar Trip <MessageCircle />
                </Link>
              </Button>
              <Button asChild variant="link">
                <Link to="/omkareshwar">Trip details <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-brand-gold px-4 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto w-full max-w-[1240px]">
          <p className="section-kicker text-brand-brown-soft">A trusted way to travel</p>
          <div className="luxury-rule bg-brand-brown mt-4" />
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight text-brand-brown sm:text-5xl">
            UJJAIN TAXI TOUR AND TRAVELS क्यों चुनें?
          </h2>
          <div className="mt-12 grid gap-px border border-brand-brown/20 bg-brand-brown/20 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [Clock3, "24/7 Availability"],
              [CarFront, "AC & Non-AC Options"],
              [ShieldCheck, "Comfortable Vehicles"],
              [MapPin, "Ujjain Local Travel"],
              [Sparkles, "Pilgrimage Travel"],
              [HeartHandshake, "Easy Booking"],
            ].map(([Icon, label]) => {
              const I = Icon as typeof Clock3;
              return (
                <div key={label as string} className="flex items-center gap-4 bg-brand-gold p-5 sm:p-7">
                  <I className="size-6 shrink-0 text-brand-brown" />
                  <span className="font-display text-sm font-extrabold text-brand-brown">{label as string}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-brand-ivory px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Start your enquiry</p>
            <div className="luxury-rule mt-4" />
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight text-brand-brown sm:text-5xl">
              अपनी यात्रा बुक करें
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              अपनी यात्रा की जानकारी भरें और WhatsApp के माध्यम से तुरंत enquiry भेजें — Date, Time,
              Pickup, Drop, KM, Vehicle, Passengers सब एक ही फॉर्म में।
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="dark" size="lg">
                <Link to="/book-now">
                  Book Your Ride <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="brandOutline" size="lg" className="!text-brand-brown">
                <a href={`tel:${PHONE_PRIMARY}`}>
                  <Phone /> {PHONE_PRIMARY}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img
              src={highwayCarsImage}
              alt="Cars on highway for comfortable outstation travel"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-brand-brown px-5 py-4 text-brand-ivory">
              <p className="font-display text-sm font-extrabold">Date • Time • Pickup • Drop • KM</p>
              <p className="mt-1 text-xs text-brand-ivory/70">सब कुछ WhatsApp पर — एक क्लिक में</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
