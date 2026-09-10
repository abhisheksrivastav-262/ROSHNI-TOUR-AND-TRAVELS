import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import familyImage from "@/assets/family-travel.jpg";
import highwayImage from "@/assets/highway.jpg";
import mahakalImage from "@/assets/mahakal.jpg";
import { PageHero } from "@/components/site/PageHero";
import { PHONE_PRIMARY, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Roshni Tour and Travels | Ujjain" },
      {
        name: "description",
        content:
          "About ROSHNI TOUR AND TRAVELS — Ujjain Darshan taxi, Ujjain to Omkareshwar travel, AC & Non-AC taxi, local sightseeing and outstation travel.",
      },
      { property: "og:title", content: "About Roshni Tour and Travels | Ujjain" },
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
        kicker="About Roshni Tour and Travels"
        title="उज्जैन की यात्रा, भरोसे के साथ"
        hindi="ROSHNI TOUR AND TRAVELS — आपकी धार्मिक और पारिवारिक यात्राओं का साथी"
        description="उज्जैन से शुरू होने वाली यात्राओं के लिए AC और Non-AC गाड़ियों की सुविधा। सरल बुकिंग — फोन या WhatsApp पर।"
        image={familyImage}
        imageAlt="Family travelling comfortably with Roshni Tour and Travels"
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
              About Roshni Tour and Travels
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-brand-brown-soft">
              ROSHNI TOUR AND TRAVELS उज्जैन की टैक्सी सेवा है — उज्जैन दर्शन, ओंकारेश्वर यात्रा और
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
            <img src={mahakalImage} alt="Mahakaleshwar Temple Ujjain" width={1200} height={900} loading="lazy" className="aspect-[16/10] w-full object-cover" />
            <img src={highwayImage} alt="Highway travel in Madhya Pradesh" width={1200} height={900} loading="lazy" className="aspect-[16/10] w-full object-cover" />
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
