import { MessageCircle, Phone } from "lucide-react";
import { PHONE_PRIMARY, whatsappUrl } from "@/lib/site";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      <a
        href={whatsappUrl(PHONE_PRIMARY)}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Roshni Tour and Travels"
        className="grid size-12 place-items-center rounded-full bg-brand-whatsapp text-brand-ivory shadow-xl transition-transform hover:scale-105"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href={`tel:${PHONE_PRIMARY}`}
        aria-label="Call Roshni Tour and Travels"
        className="grid size-12 place-items-center rounded-full bg-brand-gold text-brand-brown shadow-xl transition-transform hover:scale-105"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}
