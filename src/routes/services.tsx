import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CarFront,
  Clock3,
  Compass,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ujjain.jpg";
import mahakalImage from "@/assets/mahakal.jpg";
import omkareshwarImage from "@/assets/omkareshwar.jpg";
import fleetImage from "@/assets/taxi-fleet.jpg";
import highwayImage from "@/assets/highway.jpg";
import familyImage from "@/assets/family-travel.jpg";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Taxi & Travel Services in Ujjain | Ujjain Taxi Tour and Travels" },
      {
        name: "description",
        content:
          "Ujjain Darshan, Ujjain to Omkareshwar taxi, AC & Non-AC taxi, local sightseeing, outstation and family travel — UJJAIN TAXI TOUR AND TRAVELS.",
      },
      { property: "og:title", content: "Taxi & Travel Services in Ujjain | Ujjain Taxi Tour and Travels" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    title: "Ujjain Darshan",
    desc: "उज्जैन के प्रमुख धार्मिक एवं दर्शनीय स्थलों के लिए सुविधाजनक टैक्सी सेवा। Mahakal Temple सहित local धार्मिक स्थल।",
    image: mahakalImage,
    Icon: Sparkles,
  },
  {
    title: "Ujjain to Omkareshwar Taxi",
    desc: "उज्जैन से ओंकारेश्वर के लिए आरामदायक one-way और round-trip टैक्सी — परिवार और ग्रुप के लिए उपयुक्त।",
    image: omkareshwarImage,
    Icon: Compass,
  },
  {
    title: "AC Taxi Service",
    desc: "गर्मी और लंबी दूरी के लिए आरामदायक AC गाड़ियाँ — family travel के लिए सही विकल्प।",
    image: heroImage,
    Icon: CarFront,
  },
  {
    title: "Non-AC Taxi Service",
    desc: "बजट के अनुसार किफायती और सुविधाजनक Non-AC वाहन विकल्प।",
    image: fleetImage,
    Icon: CarFront,
  },
  {
    title: "Local Ujjain Sightseeing",
    desc: "उज्जैन और आसपास के प्रमुख स्थानों की यात्रा के लिए स्थानीय टैक्सी सुविधा।",
    image: mahakalImage,
    Icon: MapPin,
  },
  {
    title: "Outstation Taxi",
    desc: "उज्जैन से अन्य शहरों और destinations के लिए comfortable outstation travel।",
    image: highwayImage,
    Icon: ArrowRight,
  },
  {
    title: "Family & Group Travel",
    desc: "परिवार और ग्रुप यात्रियों के लिए उपयुक्त spacious वाहन विकल्प।",
    image: familyImage,
    Icon: Users,
  },
  {
    title: "24/7 Vehicle Availability",
    desc: "आपकी यात्रा जरूरत के अनुसार 24 घंटे वाहन उपलब्ध — दिन हो या रात।",
    image: heroImage,
    Icon: Clock3,
  },
];

function ServicesPage() {
  return (
    <main className="pt-[74px]">
      <PageHero
        kicker="Our Services"
        title="हर यात्रा के लिए सही सेवा"
        hindi="उज्जैन दर्शन से ओंकारेश्वर तक — AC / Non-AC टैक्सी, 24 घंटे उपलब्ध"
        description="अपनी सेवा चुनें और Book Now पर क्लिक करके WhatsApp पर booking enquiry भेजें।"
        image={highwayImage}
        imageAlt="Taxi services across Madhya Pradesh highways"
      >
        <Button asChild variant="brand" size="lg">
          <Link to="/book-now">
            Book Now <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      <section className="bg-brand-brown px-4 py-20 text-brand-ivory sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="grid gap-px overflow-hidden border border-brand-ivory/15 bg-brand-ivory/15 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ title, desc, image, Icon }) => (
              <article key={title} className="group flex flex-col bg-brand-brown p-3">
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
                  <span className="absolute bottom-4 left-4 grid size-9 place-items-center rounded-full bg-brand-gold text-brand-brown">
                    <Icon className="size-4" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <h2 className="font-display text-sm font-extrabold tracking-[0.03em] text-brand-gold">
                    {title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-brand-ivory/65">{desc}</p>
                  <Button asChild variant="brand" size="sm" className="mt-4 self-start">
                    <Link to="/book-now">
                      Book Now <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
