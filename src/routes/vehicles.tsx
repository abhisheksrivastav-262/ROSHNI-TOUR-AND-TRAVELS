import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import familyMpvImage from "@/assets/family-mpv.jpg";
import fleetAuraFront from "@/assets/fleet-aura-front.jpg";
import fleetAuraErtiga from "@/assets/fleet-aura-ertiga.jpg";
import fleetDzireFront from "@/assets/fleet-dzire-front.jpg";
import fleetDzireSide from "@/assets/fleet-dzire-side.jpg";
import fleetInnovaSide from "@/assets/fleet-innova-side.jpg";
import fleetInnovaParking from "@/assets/fleet-innova-parking.jpg";
import fleetInnovaRoad from "@/assets/fleet-innova-road.jpg";
import fleetTwoCars from "@/assets/fleet-two-cars.jpg";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/vehicles")({
  head: () => ({
    meta: [
      { title: "Taxi & Vehicle Options | Ujjain Taxi Tour and Travels" },
      {
        name: "description",
        content:
          "SUV, Sedan, Hatchback, Family Car — AC & Non-AC vehicle options with UJJAIN TAXI TOUR AND TRAVELS, Ujjain. Book on WhatsApp.",
      },
      { property: "og:title", content: "Taxi & Vehicle Options | Ujjain Taxi Tour and Travels" },
    ],
    links: [{ rel: "canonical", href: "/vehicles" }],
  }),
  component: VehiclesPage,
});

const VEHICLES = [
  { title: "TOYOTA INNOVA", availability: "AC / Non-AC availability", use: "लंबी दूरी और परिवार के लिए — spacious और आरामदायक", alt: "White Toyota Innova taxi side view", image: fleetInnovaRoad },
  { title: "INNOVA — SIDE VIEW", availability: "AC / Non-AC availability", use: "परिवार और group यात्रियों के लिए उपयुक्त", alt: "White Toyota Innova parked taxi", image: fleetInnovaSide },
  { title: "INNOVA PARKING", availability: "AC / Non-AC availability", use: "शहर और outstation travel के लिए comfortable विकल्प", alt: "White Toyota Innova front side taxi", image: fleetInnovaParking },
  { title: "MARUTI DZIRE", availability: "AC / Non-AC availability", use: "शहर और outstation travel के लिए comfortable sedan", alt: "White Maruti Dzire taxi front view", image: fleetDzireFront },
  { title: "DZIRE — SIDE VIEW", availability: "AC / Non-AC availability", use: "किफायती और आरामदायक sedan सफर", alt: "White Maruti Dzire taxi side view", image: fleetDzireSide },
  { title: "HYUNDAI AURA", availability: "AC / Non-AC availability", use: "किफायती local travel — छोटी दूरी के लिए आरामदायक", alt: "White Hyundai Aura taxi front view", image: fleetAuraFront },
  { title: "AURA + ERTIGA", availability: "AC / Non-AC availability", use: "परिवार और group travel के लिए दो गाड़ियाँ तैयार", alt: "Hyundai Aura and Maruti Ertiga white taxis", image: fleetAuraErtiga },
  { title: "FAMILY CARS", availability: "AC / Non-AC availability", use: "शादी, दर्शन और outstation के लिए साफ-सुथरी गाड़ियाँ", alt: "Two white family taxis on street", image: fleetTwoCars },
];

function VehiclesPage() {
  return (
    <main className="pt-[74px]">
      <PageHero
        kicker="Our Vehicles"
        title="आपकी यात्रा, आपकी गाड़ी"
        hindi="SUV • Sedan • Hatchback • Family Car — AC / Non-AC विकल्प"
        description="यात्रियों की संख्या और आराम के अनुसार वाहन चुनें। Book Now दबाकर WhatsApp पर vehicle preference भेजें।"
        image={familyMpvImage}
        imageAlt="Family MPV and cars for Ujjain travel"
      >
        <Button asChild variant="brand" size="lg">
          <Link to="/book-now">
            Book Now <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      <section className="bg-brand-ivory px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VEHICLES.map(({ title, availability, use, alt, image }) => (
              <article
                key={title}
                className="group border border-brand-gold/35 bg-brand-cream p-3 transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[1.45/1] overflow-hidden bg-white">
                  <img
                    src={image}
                    alt={`${alt} category`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="size-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-2 pb-2 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display text-lg font-extrabold text-brand-brown">{title}</h2>
                    <CarFront className="size-5 shrink-0 text-brand-orange" />
                  </div>
                  <p className="mt-3 text-sm font-bold text-brand-orange">{availability}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{use}</p>
                  <p className="mt-2 text-xs text-muted-foreground">Suitable for: family & group travel</p>
                  <Button asChild variant="dark" size="sm" className="mt-5">
                    <Link to="/book-now">
                      Book Now <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 border border-brand-gold/40 bg-brand-cream p-5 text-sm leading-7 text-muted-foreground sm:p-7">
            <p className="font-display font-extrabold text-brand-brown">
              Vehicle availability 24 घंटे — AC / Non-AC
            </p>
            <p className="mt-1">
              Booking form में Vehicle Type, AC / Non-AC, Passengers और Estimated KM ज़रूर भरें ताकि
              सही fare और availability confirm हो सके।
            </p>
            <Button asChild variant="brand" className="mt-4">
              <Link to="/book-now">
                Book Your Vehicle <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
