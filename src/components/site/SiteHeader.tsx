import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, PHONE_PRIMARY, PHONE_SECONDARY, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-ujjain-taxi.jpg";

export function BrandMark() {
  return (
    <img
      src={logoImage}
      alt="Ujjain Taxi and Tour and Travel logo"
      width={80}
      height={80}
      className="size-10 shrink-0 rounded-full border border-brand-gold/70 object-cover shadow-[0_8px_20px_-8px_var(--brand-gold-deep)]"
    />
  );
}

export function SiteHeader() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const closeMenu = () => setMobileMenu(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-ivory/15 bg-brand-brown/95 text-brand-ivory shadow-[0_10px_35px_-20px_var(--brand-brown)] backdrop-blur-md">
      <div className="mx-auto flex h-[74px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-8 lg:px-12">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={closeMenu} aria-label="Ujjain Taxi Tour and Travels home">
          <BrandMark />
          <span className="min-w-0">
            <span className="block truncate font-display text-[0.78rem] font-extrabold tracking-[0.12em] text-brand-ivory sm:text-sm">
              UJJAIN TAXI TOUR AND TRAVELS
            </span>
            <span className="mt-0.5 block text-[0.62rem] tracking-[0.12em] text-brand-gold">
              उज्जैन • मध्य प्रदेश
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((item) =>
            item.label === "Book Now" ? null : (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-[0.7rem] font-bold tracking-[0.04em] transition-colors hover:text-brand-gold",
                  pathname === item.to ? "text-brand-gold" : "text-brand-ivory/80",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="brandOutline" size="sm">
            <a href={`tel:${PHONE_PRIMARY}`} title={`Call ${PHONE_PRIMARY} / ${PHONE_SECONDARY}`}>
              <Phone /> {PHONE_PRIMARY}
            </a>
          </Button>
          <Button asChild variant="brandOutline" size="sm" className="hidden xl:inline-flex">
            <a href={`tel:${PHONE_SECONDARY}`} title={`Call ${PHONE_SECONDARY}`}>
              <Phone /> {PHONE_SECONDARY}
            </a>
          </Button>
          <Button asChild variant="brand" size="sm" className="font-extrabold">
            <Link to="/book-now">
              Book Now <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="whatsapp" size="sm">
            <a href={whatsappUrl(PHONE_PRIMARY)} target="_blank" rel="noreferrer">
              <MessageCircle /> WhatsApp
            </a>
          </Button>
        </div>

        <Button
          variant="brandOutline"
          size="icon"
          className="xl:hidden"
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenu}
          onClick={() => setMobileMenu((open) => !open)}
        >
          {mobileMenu ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile menu opens from TOP, approx half-screen height — not a side drawer */}
      {mobileMenu && (
        <div className="absolute inset-x-0 top-full max-h-[52vh] overflow-y-auto border-t border-brand-gold/20 bg-brand-brown px-5 py-5 shadow-[0_24px_40px_-24px_var(--brand-brown)] xl:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={cn(
                  "flex min-h-11 items-center justify-between border-b border-brand-ivory/10 py-2 text-sm font-bold",
                  pathname === item.to ? "text-brand-gold" : "text-brand-ivory/90",
                  item.label === "Book Now" && "text-brand-gold",
                )}
              >
                {item.label}
                <ArrowRight className="size-4 text-brand-gold" />
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button asChild variant="brandOutline">
              <a href={`tel:${PHONE_PRIMARY}`} onClick={closeMenu}>
                <Phone /> {PHONE_PRIMARY}
              </a>
            </Button>
            <Button asChild variant="brandOutline">
              <a href={`tel:${PHONE_SECONDARY}`} onClick={closeMenu}>
                <Phone /> {PHONE_SECONDARY}
              </a>
            </Button>
            <Button asChild variant="brand" className="col-span-2">
              <a href={whatsappUrl(PHONE_PRIMARY)} target="_blank" rel="noreferrer" onClick={closeMenu}>
                <MessageCircle /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
