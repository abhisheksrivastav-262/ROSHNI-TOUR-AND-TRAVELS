import { useMemo, useState, type FormEvent } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_PRIMARY, PHONE_SECONDARY, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

type BookingState = {
  fullName: string;
  mobile: string;
  whatsapp: string;
  email: string;
  journeyDate: string;
  pickupTime: string;
  pickupLocation: string;
  dropLocation: string;
  returnDate: string;
  returnTime: string;
  passengers: string;
  adults: string;
  children: string;
  vehicleType: string;
  acOption: string;
  tripType: string;
  estimatedKm: string;
  additionalStops: string;
  message: string;
};

const INITIAL: BookingState = {
  fullName: "",
  mobile: "",
  whatsapp: "",
  email: "",
  journeyDate: "",
  pickupTime: "",
  pickupLocation: "",
  dropLocation: "",
  returnDate: "",
  returnTime: "",
  passengers: "",
  adults: "",
  children: "",
  vehicleType: "",
  acOption: "",
  tripType: "",
  estimatedKm: "",
  additionalStops: "",
  message: "",
};

const inputCls =
  "h-11 w-full min-w-0 border border-brand-gold/50 bg-brand-ivory px-3 text-sm font-normal text-brand-ink outline-none ring-brand-gold placeholder:text-muted-foreground focus:ring-2";

const VEHICLES = ["Sedan", "SUV", "Hatchback", "Family Vehicle", "Other"];
const AC_OPTIONS = ["AC", "Non-AC"];
const TRIP_TYPES = ["One Way", "Round Trip"];

function isValidMobile(v: string) {
  const digits = v.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(digits);
}

export function buildBookingMessage(f: BookingState) {
  const val = (v: string) => (v.trim() === "" ? "—" : v.trim());
  return [
    "🚕 NEW BOOKING ENQUIRY",
    "ROSHNI TOUR AND TRAVELS",
    "",
    "Customer Details",
    `Name: ${val(f.fullName)}`,
    `Mobile: ${val(f.mobile)}`,
    `WhatsApp: ${val(f.whatsapp)}`,
    `Email: ${val(f.email)}`,
    "",
    "Journey Details",
    `Journey Date: ${val(f.journeyDate)}`,
    `Pickup Time: ${val(f.pickupTime)}`,
    "",
    "Pickup Location:",
    val(f.pickupLocation),
    "",
    "Drop Location:",
    val(f.dropLocation),
    "",
    `Return Date: ${val(f.returnDate)}`,
    `Return Time: ${val(f.returnTime)}`,
    "",
    "Travel Details",
    `Passengers: ${val(f.passengers)}`,
    `Adults: ${val(f.adults)}`,
    `Children: ${val(f.children)}`,
    "",
    `Vehicle: ${val(f.vehicleType)}`,
    "",
    `AC / Non-AC: ${val(f.acOption)}`,
    "",
    `Trip Type: ${val(f.tripType)}`,
    "",
    `Estimated KM: ${val(f.estimatedKm)}`,
    "",
    "Additional Stops:",
    val(f.additionalStops),
    "",
    "Special Requirements:",
    val(f.message),
    "",
    "--------------------------------",
    "I would like to book a vehicle with",
    "ROSHNI TOUR AND TRAVELS.",
    "Please confirm availability and fare.",
  ].join("\n");
}

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<BookingState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingState, string>>>({});
  const [sent, setSent] = useState(false);

  const todayStr = useMemo(() => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  const set = (key: keyof BookingState, value: string) => {
    setForm((p) => ({ ...p, [key]: value }));
    setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof BookingState, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Please enter your name";
    if (!form.mobile.trim()) e.mobile = "Please enter your mobile number";
    else if (!isValidMobile(form.mobile.trim())) e.mobile = "Please enter a valid mobile number";
    if (!form.journeyDate) e.journeyDate = "Please select journey date";
    else if (form.journeyDate < todayStr) e.journeyDate = "Journey date cannot be in the past";
    if (!form.pickupTime) e.pickupTime = "Please select pickup time";
    if (!form.pickupLocation.trim()) e.pickupLocation = "Please enter pickup location";
    if (!form.dropLocation.trim()) e.dropLocation = "Please enter destination";
    if (form.returnDate && form.returnDate < form.journeyDate)
      e.returnDate = "Return date cannot be before journey date";
    if (!form.passengers.trim()) e.passengers = "Please enter number of passengers";
    else if (!/^\d+$/.test(form.passengers.trim()) || Number(form.passengers) < 1)
      e.passengers = "Please enter valid passengers";
    if (!form.vehicleType) e.vehicleType = "Please select vehicle type";
    if (!form.acOption) e.acOption = "Please select AC / Non-AC";
    if (!form.tripType) e.tripType = "Please select trip type";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Please enter a valid email";
    if (form.estimatedKm.trim() && !/^\d+(\.\d+)?$/.test(form.estimatedKm.trim()))
      e.estimatedKm = "Please enter valid KM";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector("[data-error='true']");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const message = buildBookingMessage(form);
    setSent(true);
    window.open(whatsappUrl(PHONE_PRIMARY, message), "_blank", "noopener,noreferrer");
  };

  const message = buildBookingMessage(form);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="border border-brand-gold/40 bg-brand-cream p-4 sm:p-8"
      >
        {/* Customer Information */}
        <p className="font-display text-sm font-extrabold uppercase tracking-[0.12em] text-brand-brown">
          Customer Information
        </p>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <Field
            label="Full Name *"
            error={errors.fullName}
            input={
              <input
                name="fullName"
                value={form.fullName}
                onChange={(e) => set("fullName", e.target.value)}
                placeholder="आपका नाम"
                autoComplete="name"
                className={inputCls}
              />
            }
          />
          <Field
            label="Mobile Number *"
            error={errors.mobile}
            input={
              <input
                name="mobile"
                type="tel"
                value={form.mobile}
                onChange={(e) => set("mobile", e.target.value)}
                placeholder="10-digit mobile number"
                autoComplete="tel"
                inputMode="tel"
                className={inputCls}
              />
            }
          />
          <Field
            label="WhatsApp Number"
            error={errors.whatsapp}
            input={
              <input
                name="whatsapp"
                type="tel"
                value={form.whatsapp}
                onChange={(e) => set("whatsapp", e.target.value)}
                placeholder="WhatsApp number (if different)"
                autoComplete="tel"
                inputMode="tel"
                className={inputCls}
              />
            }
          />
          <Field
            label="Email Address"
            error={errors.email}
            input={
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="Email address"
                autoComplete="email"
                className={inputCls}
              />
            }
          />
        </div>

        {/* Journey Information */}
        <p className="mt-8 font-display text-sm font-extrabold uppercase tracking-[0.12em] text-brand-brown">
          Journey Information
        </p>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <Field
            label="Journey Date *"
            error={errors.journeyDate}
            input={
              <input
                name="journeyDate"
                type="date"
                value={form.journeyDate}
                min={todayStr}
                onChange={(e) => set("journeyDate", e.target.value)}
                className={inputCls}
              />
            }
          />
          <Field
            label="Pickup Time *"
            error={errors.pickupTime}
            input={
              <input
                name="pickupTime"
                type="time"
                value={form.pickupTime}
                onChange={(e) => set("pickupTime", e.target.value)}
                className={inputCls}
              />
            }
          />
          <Field
            label="Pickup Location / Address *"
            error={errors.pickupLocation}
            wide
            input={
              <textarea
                name="pickupLocation"
                value={form.pickupLocation}
                onChange={(e) => set("pickupLocation", e.target.value)}
                placeholder="Enter pickup address"
                rows={2}
                className="w-full min-w-0 border border-brand-gold/50 bg-brand-ivory px-3 py-2.5 text-sm font-normal outline-none ring-brand-gold placeholder:text-muted-foreground focus:ring-2"
              />
            }
          />
          <Field
            label="Drop Location / Destination *"
            error={errors.dropLocation}
            wide
            input={
              <textarea
                name="dropLocation"
                value={form.dropLocation}
                onChange={(e) => set("dropLocation", e.target.value)}
                placeholder="Enter destination"
                rows={2}
                className="w-full min-w-0 border border-brand-gold/50 bg-brand-ivory px-3 py-2.5 text-sm font-normal outline-none ring-brand-gold placeholder:text-muted-foreground focus:ring-2"
              />
            }
          />
          <Field
            label="Return Date"
            error={errors.returnDate}
            input={
              <input
                name="returnDate"
                type="date"
                value={form.returnDate}
                min={form.journeyDate || todayStr}
                onChange={(e) => set("returnDate", e.target.value)}
                className={inputCls}
              />
            }
          />
          <Field
            label="Return Time"
            input={
              <input
                name="returnTime"
                type="time"
                value={form.returnTime}
                onChange={(e) => set("returnTime", e.target.value)}
                className={inputCls}
              />
            }
          />
        </div>

        {/* Travel Details */}
        <p className="mt-8 font-display text-sm font-extrabold uppercase tracking-[0.12em] text-brand-brown">
          Travel Details
        </p>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <Field
            label="Number of Passengers *"
            error={errors.passengers}
            input={
              <input
                name="passengers"
                type="number"
                min={1}
                value={form.passengers}
                onChange={(e) => set("passengers", e.target.value)}
                placeholder="e.g. 4"
                inputMode="numeric"
                className={inputCls}
              />
            }
          />
          <div className="grid grid-cols-2 gap-4">
            <Field
              label="Adults"
              input={
                <input
                  name="adults"
                  type="number"
                  min={0}
                  value={form.adults}
                  onChange={(e) => set("adults", e.target.value)}
                  placeholder="e.g. 2"
                  inputMode="numeric"
                  className={inputCls}
                />
              }
            />
            <Field
              label="Children"
              input={
                <input
                  name="children"
                  type="number"
                  min={0}
                  value={form.children}
                  onChange={(e) => set("children", e.target.value)}
                  placeholder="e.g. 2"
                  inputMode="numeric"
                  className={inputCls}
                />
              }
            />
          </div>
          <Field
            label="Vehicle Type *"
            error={errors.vehicleType}
            input={
              <select
                name="vehicleType"
                value={form.vehicleType}
                onChange={(e) => set("vehicleType", e.target.value)}
                className={inputCls}
              >
                <option value="">Select vehicle</option>
                {VEHICLES.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            }
          />
          <Field
            label="AC / Non-AC *"
            error={errors.acOption}
            input={
              <div className="grid grid-cols-2 gap-2">
                {AC_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => set("acOption", opt)}
                    aria-pressed={form.acOption === opt}
                    className={cn(
                      "h-11 border px-3 text-sm font-bold transition-colors",
                      form.acOption === opt
                        ? "border-brand-brown bg-brand-brown text-brand-ivory"
                        : "border-brand-gold/50 bg-brand-ivory text-brand-brown hover:border-brand-brown",
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            }
          />
          <Field
            label="One Way / Round Trip *"
            error={errors.tripType}
            wide
            input={
              <div className="grid grid-cols-2 gap-2">
                {TRIP_TYPES.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => set("tripType", opt)}
                    aria-pressed={form.tripType === opt}
                    className={cn(
                      "h-11 border px-3 text-sm font-bold transition-colors",
                      form.tripType === opt
                        ? "border-brand-brown bg-brand-brown text-brand-ivory"
                        : "border-brand-gold/50 bg-brand-ivory text-brand-brown hover:border-brand-brown",
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            }
          />
          <Field
            label="Estimated Distance (KM) / Approx. KM"
            error={errors.estimatedKm}
            input={
              <input
                name="estimatedKm"
                type="number"
                min={0}
                step="any"
                value={form.estimatedKm}
                onChange={(e) => set("estimatedKm", e.target.value)}
                placeholder="Estimated KM (if known)"
                inputMode="decimal"
                className={inputCls}
              />
            }
          />
          <Field
            label="Additional Stops"
            wide
            input={
              <input
                name="additionalStops"
                value={form.additionalStops}
                onChange={(e) => set("additionalStops", e.target.value)}
                placeholder="Any stops on the way (optional)"
                className={inputCls}
              />
            }
          />
          <Field
            label="Special Requirements / Message"
            wide
            input={
              <textarea
                name="message"
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Any special requirement"
                rows={compact ? 2 : 3}
                className="w-full min-w-0 border border-brand-gold/50 bg-brand-ivory px-3 py-2.5 text-sm font-normal outline-none ring-brand-gold placeholder:text-muted-foreground focus:ring-2"
              />
            }
          />
        </div>

        <div className="mt-8 grid gap-3">
          <Button type="submit" variant="dark" size="lg" className="w-full">
            Submit Booking <MessageCircle />
          </Button>
          <div className="grid gap-3 sm:grid-cols-2">
            <Button asChild variant="whatsapp" className="w-full">
              <a
                href={whatsappUrl(PHONE_PRIMARY, message)}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle /> WhatsApp: {PHONE_PRIMARY}
              </a>
            </Button>
            <Button asChild variant="brand" className="w-full">
              <a
                href={whatsappUrl(PHONE_SECONDARY, message)}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle /> WhatsApp: {PHONE_SECONDARY}
              </a>
            </Button>
          </div>
          <a
            href={`tel:${PHONE_PRIMARY}`}
            className="flex items-center justify-center gap-2 text-sm font-bold text-brand-brown hover:text-brand-orange"
          >
            <Phone className="size-4" /> Prefer to call? {PHONE_PRIMARY}
          </a>
        </div>

        {sent && (
          <div className="mt-6 border border-brand-gold/60 bg-brand-ivory p-4 text-sm leading-6 text-brand-brown">
            <p className="font-display font-extrabold">
              Booking details WhatsApp पर खोल दी गई हैं।
            </p>
            <p className="mt-1 text-muted-foreground">
              अगर WhatsApp नहीं खुला, तो ऊपर दिए WhatsApp बटन से दोबारा भेजें। आपकी जानकारी फॉर्म
              में सुरक्षित है।
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

function Field({
  label,
  input,
  error,
  wide = false,
}: {
  label: string;
  input: React.ReactNode;
  error?: string | undefined;
  wide?: boolean;
}) {
  return (
    <label
      data-error={error ? "true" : undefined}
      className={cn("grid min-w-0 gap-2 text-sm font-bold text-brand-brown", wide && "sm:col-span-2")}
    >
      <span>{label}</span>
      {input}
      {error && <span className="text-xs font-semibold text-destructive">{error}</span>}
    </label>
  );
}
