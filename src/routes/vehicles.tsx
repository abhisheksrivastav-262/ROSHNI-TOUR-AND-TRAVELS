import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import familyImage from "@/assets/family-travel.jpg";
import fleetImage from "@/assets/taxi-fleet.jpg";
import heroImage from "@/assets/hero-ujjain.jpg";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/vehicles")({
  head: () => ({
    meta: [
      { title: "Taxi & Vehicle Options | Roshni Tour and Travels" },
      {
        name: "description",
        content:
          "SUV, Sedan, Hatchback, Family Car — AC & Non-AC vehicle options with ROSHNI TOUR AND TRAVELS, Ujjain. Book on WhatsApp.",
      },
      { property: "og:title", content: "Taxi & Vehicle Options | Roshni Tour and Travels" },
    ],
    links: [{ rel: "canonical", href: "/vehicles" }],
  }),
  component: VehiclesPage,
});

const VEHICLES = [
  { title: "SUV", availability: "AC / Non-AC availability", use: "लंबी दूरी और परिवार के लिए — spacious और आरामदायक", alt: "SUV taxi", image: fleetImage },
  { title: "SEDAN", availability: "AC / Non-AC availability", use: "शहर और outstation travel के लिए comfortable विकल्प", alt: "Sedan taxi", image: heroImage },
  { title: "HATCHBACK", availability: "AC / Non-AC availability", use: "किफायती local travel — छोटी दूरी के लिए", alt: "Hatchback taxi", image: fleetImage },
  { title: "FAMILY CAR", availability: "AC / Non-AC availability", use: "परिवार और group यात्रियों के लिए उपयुक्त", alt: "Family car taxi", image: familyImage },
  { title: "AC VEHICLES", availability: "आरामदायक सफर", use: "गर्मियों और लंबी यात्रा के लिए AC आराम", alt: "AC vehicle", image: heroImage },
  { title: "NON-AC VEHICLES", availability: "सुविधाजनक विकल्प", use: "बजट के अनुसार यात्रा — सुविधाजनक सफर", alt: "Non-AC vehicle", image: fleetImage },
];

function VehiclesPage() {
  return (
    <main className="pt-[74px]">
      <PageHero
        kicker="Our Vehicles"
        title="आपकी यात्रा, आपकी गाड़ी"
        hindi="SUV • Sedan • Hatchback • Family Car — AC / Non-AC विकल्प"
        description="यात्रियों की संख्या और आराम के अनुसार वाहन चुनें। Book Now दबाकर WhatsApp पर vehicle preference भेजें।"
        image={fleetImage}
        imageAlt="Fleet of taxis for Ujjain travel"
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
                <div className="relative aspect-[1.45/1] overflow-hidden">
                  <img
                    src={image}
                    alt={`${alt} category`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
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
