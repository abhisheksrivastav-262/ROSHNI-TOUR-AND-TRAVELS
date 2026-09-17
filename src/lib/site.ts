export const BUSINESS_NAME = "UJJAIN TAXI TOUR AND TRAVELS";
export const OWNER_NAME = "कमल भावसार";
export const PHONE_PRIMARY = "8319098363";
export const PHONE_SECONDARY = "9907738737";
export const PHONES = [PHONE_PRIMARY, PHONE_SECONDARY] as const;
export const ADDRESS = "171, Indira Nagar, Aadhar Road, Ujjain (M.P.)";
export const RELIGIOUS_LINE = "॥ श्री हिंगलाजिकल्पस नमः ॥";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Vehicles", to: "/vehicles" },
  { label: "Ujjain Darshan", to: "/ujjain-darshan" },
  { label: "Omkareshwar", to: "/omkareshwar" },
  { label: "Book Now", to: "/book-now" },
  { label: "Contact", to: "/contact" },
] as const;

export function whatsappUrl(
  phone: string,
  message = "नमस्ते, मुझे Ujjain Taxi Tour and Travels की टैक्सी सेवा के बारे में जानकारी चाहिए।",
) {
  return `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
}

export const PRIMARY_WHATSAPP = (message: string) => whatsappUrl(PHONE_PRIMARY, message);

export function directionsUrl(address = ADDRESS) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Ujjain Taxi Tour and Travels ${address}`,
  )}`;
}
