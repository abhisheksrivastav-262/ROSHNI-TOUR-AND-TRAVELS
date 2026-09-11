import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { BookingForm } from "@/components/site/BookingForm";
import { PHONE_PRIMARY } from "@/lib/site";
import highwayCarsImage from "@/assets/highway-cars.jpg";

export const Route = createFileRoute("/book-now")({
  head: () => ({
    meta: [
      { title: "Book Taxi in Ujjain | Ujjain Taxi Tour and Travels" },
      {
        name: "description",
        content:
          "Book Your Ride with UJJAIN TAXI TOUR AND TRAVELS — fill journey date, time, pickup, drop, KM, vehicle & passengers and send booking enquiry on WhatsApp.",
      },
      { property: "og:title", content: "Book Taxi in Ujjain | Ujjain Taxi Tour and Travels" },
    ],
    links: [{ rel: "canonical", href: "/book-now" }],
  }),
  component: BookNowPage,
});

function BookNowPage() {
  return (
    <main className="pt-[74px]">
      <section className="relative isolate overflow-hidden bg-brand-brown px-4 pb-14 pt-16 text-brand-ivory sm:px-8 lg:px-12 lg:pt-20">
        <img
          src={highwayCarsImage}
          alt="Book taxi for Ujjain and Omkareshwar travel"
          width={1600}
          height={900}
          className="absolute inset-0 -z-20 size-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-brand-brown/80" />
        <div className="mx-auto w-full max-w-[1240px]">
          <p className="section-kicker text-brand-gold">Book Now</p>
          <div className="luxury-rule mt-4" />
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Book Your Ride
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-brand-ivory">
            अपनी यात्रा की पूरी जानकारी भरें और WhatsApp पर booking enquiry भेजें।
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-brand-ivory/70">
            Submit करते ही आपकी सारी details WhatsApp message में खुल जाएँगी —{" "}
            <span className="font-bold text-brand-gold">{PHONE_PRIMARY}</span> पर। आपकी जानकारी फॉर्म
            में सुरक्षित रहती है।
          </p>
        </div>
      </section>

      <section className="bg-brand-ivory px-4 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <div>
            <p className="section-kicker">How it works</p>
            <div className="luxury-rule mt-4" />
            <ol className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
              <li>
                <span className="font-display font-extrabold text-brand-brown">1. Details भरें — </span>
                Name, Mobile, Journey Date, Pickup Time, Pickup / Drop, Passengers, Vehicle, AC /
                Non-AC, Trip Type और Estimated KM।
              </li>
              <li>
                <span className="font-display font-extrabold text-brand-brown">2. Submit दबाएँ — </span>
                WhatsApp पर pre-filled booking message खुल जाएगा।
              </li>
              <li>
                <span className="font-display font-extrabold text-brand-brown">3. Confirm करें — </span>
                availability और fare WhatsApp पर confirm होगी।
              </li>
            </ol>
            <div className="mt-8 border-l-2 border-brand-gold pl-5">
              <p className="font-display text-sm font-extrabold text-brand-brown">Direct booking</p>
              <a href={`tel:${PHONE_PRIMARY}`} className="mt-2 block font-display text-2xl font-extrabold text-brand-orange">
                {PHONE_PRIMARY}
              </a>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="size-4" /> कॉल पर भी बुकिंग उपलब्ध
              </p>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </main>
  );
}
