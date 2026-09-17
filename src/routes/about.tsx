import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import familyMpvImage from "@/assets/family-mpv.jpg";
import mahakalTempleImage from "@/assets/mahakal-temple.jpg";
import omkareshwarGhatImage from "@/assets/omkareshwar-ghat.jpg";
import fleetAuraFront from "@/assets/fleet-aura-front.jpg";
import fleetDzireSide from "@/assets/fleet-dzire-side.jpg";
import fleetInnovaRoad from "@/assets/fleet-innova-road.jpg";
import fleetTwoCars from "@/assets/fleet-two-cars.jpg";
import { PageHero } from "@/components/site/PageHero";
import { PHONE_PRIMARY, PHONE_SECONDARY, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ujjain Taxi Tour and Travels | Ujjain" },
      {
        name: "description",
        content:
          "About UJJAIN TAXI TOUR AND TRAVELS — Ujjain Darshan taxi, Ujjain to Omkareshwar travel, AC & Non-AC taxi, local sightseeing and outstation travel.",
      },
      { property: "og:title", content: "About Ujjain Taxi Tour and Travels | Ujjain" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const OFFERINGS = [
  "Ujjain Darshan taxi",
  "Ujjain to Omkareshwar travel",
  "AC taxi",
  "Non-AC taxi",
  "Local sightseeing",
  "Outstation travel",
  "Family travel",
  "Group travel",
  "24-hour vehicle availability",
];

function AboutPage() {
  return (
    <main className="pt-[74px]">
      <PageHero
        kicker="About Ujjain Taxi Tour and Travels"
        title="उज्जैन की यात्रा, भरोसे के साथ"
        hindi="UJJAIN TAXI TOUR AND TRAVELS — आपकी धार्मिक और पारिवारिक यात्राओं का साथी"
        description="उज्जैन से शुरू होने वाली यात्राओं के लिए AC और Non-AC गाड़ियों की सुविधा। सरल बुकिंग — फोन या WhatsApp पर।"
        image={familyMpvImage}
        imageAlt="Family travelling comfortably with Ujjain Taxi Tour and Travels"
      >
        <Button asChild variant="brand" size="lg">
          <Link to="/book-now">
            Book Your Ride <ArrowRight />
          </Link>
        </Button>
        <Button asChild variant="brandOutline" size="lg">
          <a href={`tel:${PHONE_PRIMARY}`}>
            <Phone /> Call Now
          </a>
        </Button>
      </PageHero>

      <section className="bg-brand-cream px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-kicker">Who we are</p>
            <div className="luxury-rule mt-4" />
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight text-brand-brown sm:text-5xl">
              About Ujjain Taxi Tour and Travels
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-brand-brown-soft">
              UJJAIN TAXI TOUR AND TRAVELS उज्जैन की टैक्सी सेवा है — उज्जैन दर्शन, ओंकारेश्वर यात्रा और
              परिवार के साथ आरामदायक सफर के लिए।
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              सभी प्रकार की AC एवं Non-AC गाड़ियाँ 24 घंटे उपलब्ध रहती हैं। Local sightseeing से लेकर
              outstation travel तक — अपनी जरूरत के अनुसार वाहन चुनें और WhatsApp पर booking enquiry
              भेजें।
            </p>
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {OFFERINGS.map((o) => (
                <span key={o} className="flex items-center gap-2 text-sm font-bold text-brand-brown">
                  <Check className="size-4 shrink-0 text-brand-orange" /> {o}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="dark" size="lg">
                <Link to="/services">
                  Our Services <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="brand" size="lg">
                <Link to="/book-now">Book Now</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            <img src={mahakalTempleImage} alt="Mahakaleshwar Temple Ujjain" width={1200} height={900} loading="lazy" className="aspect-[16/9] w-full object-cover" />
            <img src={omkareshwarGhatImage} alt="Omkareshwar ghats and Narmada river" width={1200} height={900} loading="lazy" className="aspect-[16/10] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-brand-ivory px-4 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto w-full max-w-[1240px]">
          <p className="section-kicker">Our real fleet</p>
          <div className="luxury-rule mt-4" />
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight text-brand-brown sm:text-5xl">
            हमारी गाड़ियाँ
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            Innova, Dzire, Aura, Ertiga — साफ-सुथरी गाड़ियाँ, AC / Non-AC विकल्पों के साथ।
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [fleetInnovaRoad, "Toyota Innova"],
              [fleetDzireSide, "Maruti Dzire"],
              [fleetAuraFront, "Hyundai Aura"],
              [fleetTwoCars, "Family cars"],
            ].map(([image, alt]) => (
              <figure key={alt as string} className="border border-brand-gold/35 bg-white p-2">
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={image as string}
                    alt={`${alt as string} taxi`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="size-full object-contain"
                  />
                </div>
                <figcaption className="px-1 py-3 text-center text-xs font-bold text-brand-brown">{alt as string}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="dark" size="lg">
              <Link to="/vehicles">
                View All Vehicles <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="brandOutline" size="lg" className="!text-brand-brown">
              <a href={`tel:${PHONE_SECONDARY}`}>
                <Phone /> {PHONE_SECONDARY}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-brand-brown px-4 py-16 text-brand-ivory sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">यात्रा की योजना बनानी है?</h2>
            <p className="mt-2 text-brand-ivory/70">Date, Time, Pickup और Drop भेजें — WhatsApp पर तुरंत enquiry।</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="brand" size="lg">
              <Link to="/book-now">Book Now <ArrowRight /></Link>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
              <a href={whatsappUrl(PHONE_PRIMARY)} target="_blank" rel="noreferrer">WhatsApp Now</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
