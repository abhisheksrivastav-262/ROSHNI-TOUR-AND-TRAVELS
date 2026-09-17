import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import {
  ADDRESS,
  BUSINESS_NAME,
  OWNER_NAME,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  directionsUrl,
  whatsappUrl,
} from "@/lib/site";
import omkareshwarGhatImage from "@/assets/omkareshwar-ghat.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ujjain Taxi Tour and Travels | Ujjain" },
      {
        name: "description",
        content:
          "Contact UJJAIN TAXI TOUR AND TRAVELS, Ujjain — call, WhatsApp or book taxi for Ujjain Darshan and Omkareshwar. 171, Indira Nagar, Ujjain (M.P.)",
      },
      { property: "og:title", content: "Contact Ujjain Taxi Tour and Travels | Ujjain" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="pt-[74px]">
      <PageHero
        kicker="Contact Us"
        title="संपर्क करें"
        hindi="आपका अगला सफर यहीं से शुरू होता है"
        description="उज्जैन, ओंकारेश्वर और आगे की यात्रा के लिए UJJAIN TAXI TOUR AND TRAVELS से संपर्क करें।"
        image={omkareshwarGhatImage}
        imageAlt="Contact Ujjain Taxi Tour and Travels for taxi booking"
      />

      <section className="bg-brand-cream px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="border border-brand-gold/40 bg-brand-ivory p-6 sm:p-10">
            <p className="font-display text-2xl font-extrabold text-brand-brown">{BUSINESS_NAME}</p>
            <p className="mt-2 text-brand-brown-soft">{OWNER_NAME}</p>
            <div className="mt-8 space-y-4">
              <a href={`tel:${PHONE_PRIMARY}`} className="flex items-center gap-3 font-display text-xl font-extrabold text-brand-brown hover:text-brand-orange">
                <Phone className="size-5 text-brand-orange" /> {PHONE_PRIMARY}
              </a>
              <a href={`tel:${PHONE_SECONDARY}`} className="flex items-center gap-3 font-display text-xl font-extrabold text-brand-brown hover:text-brand-orange">
                <Phone className="size-5 text-brand-orange" /> {PHONE_SECONDARY}
              </a>
              <span className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-1 size-5 shrink-0 text-brand-orange" /> {ADDRESS}
              </span>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button asChild variant="dark" size="lg">
                <a href={`tel:${PHONE_PRIMARY}`}>
                  <Phone /> {PHONE_PRIMARY}
                </a>
              </Button>
              <Button asChild variant="dark" size="lg">
                <a href={`tel:${PHONE_SECONDARY}`}>
                  <Phone /> {PHONE_SECONDARY}
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="lg">
                <a href={whatsappUrl(PHONE_PRIMARY)} target="_blank" rel="noreferrer">
                  <MessageCircle /> WhatsApp Now
                </a>
              </Button>
              <Button asChild variant="brand" size="lg">
                <a href={directionsUrl()} target="_blank" rel="noreferrer">
                  <Navigation /> Get Directions
                </a>
              </Button>
              <Button asChild variant="brandOutline" size="lg" className="!text-brand-brown">
                <Link to="/book-now">
                  Book Now <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 border border-brand-gold/40 bg-brand-brown p-6 text-brand-ivory sm:p-10">
            <div>
              <p className="section-kicker text-brand-gold">Quick booking</p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight">
                WhatsApp पर booking enquiry भेजें
              </h2>
              <p className="mt-4 leading-7 text-brand-ivory/70">
                Date, Time, Pickup, Drop, KM, Vehicle और Passengers — पूरा form भरें और एक क्लिक में
                WhatsApp पर भेजें।
              </p>
            </div>
            <div className="grid gap-3">
              <Button asChild variant="brand" size="lg">
                <Link to="/book-now">
                  Go to Booking Form <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="whatsapp" size="lg">
                <a
                  href={whatsappUrl(
                    PHONE_PRIMARY,
                    "नमस्ते, मुझे Ujjain Taxi Tour and Travels की टैक्सी बुक करनी है। कृपया जानकारी दें।",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle /> WhatsApp: {PHONE_PRIMARY}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
