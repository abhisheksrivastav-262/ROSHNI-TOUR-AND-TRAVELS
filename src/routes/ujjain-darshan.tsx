import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import mahakalImage from "@/assets/mahakal.jpg";
import familyImage from "@/assets/family-travel.jpg";
import { PageHero } from "@/components/site/PageHero";
import { PHONE_PRIMARY, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/ujjain-darshan")({
  head: () => ({
    meta: [
      { title: "Ujjain Darshan Taxi Service | Ujjain Taxi Tour and Travels" },
      {
        name: "description",
        content:
          "Ujjain Darshan taxi with UJJAIN TAXI TOUR AND TRAVELS — Mahakal Temple, religious places, family travel, AC/Non-AC vehicles, 24-hour availability.",
      },
      { property: "og:title", content: "Ujjain Darshan Taxi Service | Ujjain Taxi Tour and Travels" },
    ],
    links: [{ rel: "canonical", href: "/ujjain-darshan" }],
  }),
  component: UjjainDarshanPage,
});

function UjjainDarshanPage() {
  return (
    <main className="pt-[74px]">
      <PageHero
        kicker="Ujjain Darshan"
        title="उज्जैन दर्शन"
        hindi="श्रद्धा, सुविधा और आराम के साथ उज्जैन दर्शन"
        description="Mahakal Temple और उज्जैन के धार्मिक स्थलों तक comfortable taxi — परिवार के साथ, AC / Non-AC वाहनों में, 24 घंटे उपलब्धता के साथ।"
        image={mahakalImage}
        imageAlt="Mahakaleshwar Temple in Ujjain at sunrise"
      >
        <Button asChild variant="brand" size="lg">
          <Link to="/book-now">
            Book Ujjain Darshan <ArrowRight />
          </Link>
        </Button>
        <Button asChild variant="whatsapp" size="lg">
          <a
            href={whatsappUrl(
              PHONE_PRIMARY,
              "नमस्ते, मुझे उज्जैन दर्शन की बुकिंग करनी है। कृपया वाहन और उपलब्धता बताएं।",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle /> WhatsApp Now
          </a>
        </Button>
      </PageHero>

      <section className="bg-brand-cream px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-kicker">A day of devotion, made easy</p>
            <div className="luxury-rule mt-4" />
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight text-brand-brown sm:text-5xl">
              आरामदायक उज्जैन दर्शन टैक्सी
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              Mahakal Temple, धार्मिक स्थानों और local sightseeing के लिए family-friendly taxi सेवा।
              अपनी pickup location, date और time booking form में भरें — बाकी व्यवस्था हम संभालते
              हैं।
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 text-sm font-bold text-brand-brown">
              {[
                "Mahakal Temple",
                "Religious places",
                "Local sightseeing",
                "Family travel",
                "Comfortable taxi",
                "AC / Non-AC",
                "24-hour availability",
                "Easy WhatsApp booking",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <Check className="size-4 shrink-0 text-brand-orange" /> {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="dark" size="lg">
                <Link to="/book-now">
                  Book Ujjain Darshan <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={familyImage}
              alt="Family on Ujjain Darshan pilgrimage trip"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <span className="absolute -bottom-4 left-4 bg-brand-brown px-5 py-4 font-display text-xs font-extrabold uppercase tracking-[0.1em] text-brand-gold">
              Ujjain Darshan • 24/7 Taxi
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
