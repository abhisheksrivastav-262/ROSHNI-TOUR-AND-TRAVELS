import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ADDRESS,
  BUSINESS_NAME,
  NAV_LINKS,
  OWNER_NAME,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  whatsappUrl,
} from "@/lib/site";
import { BrandMark } from "./SiteHeader";

const SERVICE_LINKS = [
  { label: "Ujjain Darshan", to: "/ujjain-darshan" },
  { label: "Omkareshwar Taxi", to: "/omkareshwar" },
  { label: "AC Taxi", to: "/services" },
  { label: "Non-AC Taxi", to: "/services" },
  { label: "Local Sightseeing", to: "/services" },
  { label: "Outstation Taxi", to: "/services" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-gold/20 bg-brand-ink px-4 py-12 text-brand-ivory sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 md:grid-cols-[1.35fr_1fr_1fr]">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <BrandMark />
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-extrabold tracking-[0.12em]">{BUSINESS_NAME}</p>
              <p className="mt-1 text-xs text-brand-gold">{OWNER_NAME}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-brand-ivory/60">
            उज्जैन से ओंकारेश्वर, उज्जैन दर्शन, local sightseeing और outstation travel के लिए AC एवं
            Non-AC टैक्सी सेवाएँ।
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button asChild variant="brand" size="sm">
              <Link to="/book-now">Book Now</Link>
            </Button>
            <Button asChild variant="whatsapp" size="sm">
              <a href={whatsappUrl(PHONE_PRIMARY)} target="_blank" rel="noreferrer">
                <MessageCircle /> WhatsApp Now
              </a>
            </Button>
            <Button asChild variant="brandOutline" size="sm">
              <a href={`tel:${PHONE_PRIMARY}`}>
                <Phone /> Call Now
              </a>
            </Button>
          </div>
        </div>
        <div>
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-gold">
            Quick Links
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-brand-ivory/65">
            {NAV_LINKS.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-brand-gold">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="mt-6 font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-gold">
            Services
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-brand-ivory/65">
            {SERVICE_LINKS.map((item) => (
              <Link key={item.label} to={item.to} className="hover:text-brand-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-brand-gold">
            Contact
          </p>
          <div className="mt-5 space-y-3 text-sm text-brand-ivory/65">
            <a href={`tel:${PHONE_PRIMARY}`} className="block hover:text-brand-gold">
              {PHONE_PRIMARY}
            </a>
            <a href={`tel:${PHONE_SECONDARY}`} className="block hover:text-brand-gold">
              {PHONE_SECONDARY}
            </a>
            <span className="block leading-6">{ADDRESS}</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button asChild variant="brand" size="sm">
              <a href={whatsappUrl(PHONE_PRIMARY)} target="_blank" rel="noreferrer">
                <MessageCircle /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="brandOutline" size="sm">
              <a href={`tel:${PHONE_PRIMARY}`}>
                <Phone /> Call
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1240px] border-t border-brand-ivory/10 pt-5 text-xs text-brand-ivory/40">
        <p>© {new Date().getFullYear()} {BUSINESS_NAME}. उज्जैन, मध्य प्रदेश.</p>
      </div>
    </footer>
  );
}
