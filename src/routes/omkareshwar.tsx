import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import omkareshwarImage from "@/assets/omkareshwar.jpg";
import highwayImage from "@/assets/highway.jpg";
import { PageHero } from "@/components/site/PageHero";
import { PHONE_PRIMARY, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/omkareshwar")({
  head: () => ({
    meta: [
      { title: "Ujjain to Omkareshwar Taxi | Roshni Tour and Travels" },
      {
        name: "description",
        content:
          "Ujjain to Omkareshwar taxi — comfortable AC/Non-AC travel for family & groups, 24-hour availability, easy WhatsApp booking with ROSHNI TOUR AND TRAVELS.",
      },
      { property: "og:title", content: "Ujjain to Omkareshwar Taxi | Roshni Tour and Travels" },
    ],
    links: [{ rel: "canonical", href: "/omkareshwar" }],
  }),
  component: OmkareshwarPage,
});

function OmkareshwarPage() {
  return (
    <main className="pt-[74px]">
      <PageHero
        kicker="Ujjain → Omkareshwar"
        title="उज्जैन से ओंकारेश्वर"
        hindi="धार्मिक यात्रा के लिए आरामदायक और भरोसेमंद टैक्सी सेवा"
        description="Narmada तट पर स्थित ओंकारेश्वर ज्योतिर्लिंग तक comfortable journey — AC / Non-AC, family & group travel, 24 घंटे उपलब्धता।"
        image={omkareshwarImage}
        imageAlt="Omkareshwar Temple and Narmada river"
      >
        <Button asChild variant="brand" size="lg">
          <Link to="/book-now">
            Book Omkareshwar Trip <ArrowRight />
          </Link>
        </Button>
        <Button asChild variant="whatsapp" size="lg">
          <a
            href={whatsappUrl(
              PHONE_PRIMARY,
              "नमस्ते, मुझे उज्जैन से ओंकारेश्वर यात्रा बुक करनी है। कृपया वाहन और उपलब्धता बताएं।",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle /> WhatsApp Now
          </a>
        </Button>
      </PageHero>

      <section className="bg-brand-cream px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative">
            <img
              src={highwayImage}
              alt="Comfortable highway journey from Ujjain to Omkareshwar"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <span className="absolute -bottom-4 left-4 bg-brand-gold px-5 py-4 font-display text-xs font-extrabold uppercase tracking-[0.1em] text-brand-brown">
              Ujjain → Omkareshwar
            </span>
          </div>
          <div>
            <p className="section-kicker">A route worth taking</p>
            <div className="luxury-rule mt-4" />
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight text-brand-brown sm:text-5xl">
              आरामदायक ओंकारेश्वर यात्रा
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              One-way या round-trip — अपनी journey date, pickup time, passengers और vehicle
              booking form में भरें। Estimated KM पता हो तो ज़रूर लिखें ताकि fare confirm करना आसान
              हो।
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 text-sm font-bold text-brand-brown">
              {[
                "Ujjain to Omkareshwar taxi",
                "Comfortable travel",
                "AC / Non-AC options",
                "Family travel",
                "Group travel",
                "24-hour availability",
                "Easy booking",
                "One Way / Round Trip",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <Check className="size-4 shrink-0 text-brand-orange" /> {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="dark" size="lg">
                <Link to="/book-now">
                  Book Omkareshwar Trip <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
