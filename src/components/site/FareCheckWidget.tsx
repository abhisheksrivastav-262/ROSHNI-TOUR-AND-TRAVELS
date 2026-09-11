import { useMemo, useState, type FormEvent } from "react";
import { ArrowRight, MapPin, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_PRIMARY, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const RIDE_TYPES = [
  "One Way",
  "Round Trip",
  "Airport Transfer",
  "Local Ride",
  "Outstation",
  "Hourly Rental",
] as const;

const VEHICLES = [
  {
    id: "Hatchback",
    rate: 10,
    base: 250,
    tag: "Swift / Baleno / Similar",
    pax: "4 Pax",
  },
  { id: "Sedan", rate: 12, base: 250, tag: "Comfortable city & outstation", pax: "4 Pax" },
  { id: "SUV", rate: 16, base: 250, tag: "Spacious family & long trips", pax: "6 Pax" },
] as const;

const DRIVER_ALLOWANCE = 500;

const PASSENGER_OPTIONS = ["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers", "5+ Passengers"];

const inputCls =
  "h-11 w-full min-w-0 border border-brand-gold/50 bg-brand-ivory px-3 text-sm font-normal text-brand-ink outline-none ring-brand-gold placeholder:text-muted-foreground focus:ring-2";

export function FareCheckWidget() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [rideType, setRideType] = useState<string>("One Way");
  const [vehicleId, setVehicleId] = useState<string>("Hatchback");
  const [km, setKm] = useState("");
  const [passengers, setPassengers] = useState<string>("4 Passengers");
  const [errors, setErrors] = useState<{ pickup?: string | undefined; drop?: string | undefined; date?: string | undefined; time?: string | undefined }>({});

  const todayStr = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }, []);

  const vehicle = VEHICLES.find((v) => v.id === vehicleId) ?? VEHICLES[0];
  const kmNum = km.trim() === "" ? null : Number(km);
  const kmValid = kmNum !== null && Number.isFinite(kmNum) && kmNum > 0;
  const driverApplicable = rideType === "Round Trip" || rideType === "Outstation";
  const fare = kmValid ? vehicle.base + kmNum * vehicle.rate + (driverApplicable ? DRIVER_ALLOWANCE : 0) : null;
  const fareText = fare !== null ? `₹${fare.toLocaleString("en-IN")}` : "—";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (!pickup.trim()) errs.pickup = "Enter pickup location";
    if (!drop.trim()) errs.drop = "Enter drop location";
    if (!date) errs.date = "Select pickup date";
    else if (date < todayStr) errs.date = "Date cannot be in the past";
    if (!time) errs.time = "Select pickup time";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const message = [
      "🚕 NEW RIDE BOOKING",
      "UJJAIN TAXI TOUR AND TRAVELS",
      "",
      `Pickup Location: ${pickup.trim()}`,
      "",
      `Drop Location: ${drop.trim()}`,
      "",
      `Pickup Date: ${date}`,
      "",
      `Pickup Time: ${time}`,
      "",
      `Ride Type: ${rideType}`,
      "",
      `Vehicle Type: ${vehicle.id}`,
      "",
      `Rate: ₹${vehicle.rate}/km`,
      "",
      `Estimated Distance: ${km.trim() === "" ? "—" : `${km.trim()} KM`}`,
      "",
      `Passengers: ${passengers}`,
      "",
      `Estimated Fare: ${fareText}`,
      "",
      "Please confirm availability and final fare.",
    ].join("\n");
    window.open(whatsappUrl(PHONE_PRIMARY, message), "_blank", "noopener,noreferrer");
  };

  return (
    <section aria-label="Book your ride" className="bg-brand-cream px-4 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="-mt-2 border border-brand-gold/40 bg-brand-ivory p-4 shadow-[0_24px_50px_-30px_var(--brand-brown)] sm:-mt-6 sm:p-6 lg:p-7"
        >
          <div className="grid gap-4 lg:grid-cols-4">
            {/* Pickup / Drop */}
            <label className="grid min-w-0 gap-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-brand-brown">
              <span className="flex items-center gap-1.5"><MapPin className="size-3.5 text-brand-orange" /> Pickup Location</span>
              <input
                value={pickup}
                onChange={(e) => { setPickup(e.target.value); setErrors((p) => ({ ...p, pickup: undefined })); }}
                placeholder="Enter pickup location"
                className={cn(inputCls, "text-sm normal-case tracking-normal")}
              />
              {errors.pickup && <span className="text-[11px] font-semibold normal-case tracking-normal text-destructive">{errors.pickup}</span>}
            </label>
            <label className="grid min-w-0 gap-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-brand-brown">
              <span className="flex items-center gap-1.5"><MapPin className="size-3.5 text-brand-orange" /> Drop Location</span>
              <input
                value={drop}
                onChange={(e) => { setDrop(e.target.value); setErrors((p) => ({ ...p, drop: undefined })); }}
                placeholder="Enter drop location"
                className={cn(inputCls, "text-sm normal-case tracking-normal")}
              />
              {errors.drop && <span className="text-[11px] font-semibold normal-case tracking-normal text-destructive">{errors.drop}</span>}
            </label>
            {/* Date / Time */}
            <div className="grid grid-cols-2 gap-3">
              <label className="grid min-w-0 gap-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-brand-brown">
                <span>Pickup Date</span>
                <input
                  type="date"
                  value={date}
                  min={todayStr}
                  onChange={(e) => { setDate(e.target.value); setErrors((p) => ({ ...p, date: undefined })); }}
                  className={cn(inputCls, "text-sm normal-case tracking-normal")}
                />
                {errors.date && <span className="text-[11px] font-semibold normal-case tracking-normal text-destructive">{errors.date}</span>}
              </label>
              <label className="grid min-w-0 gap-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-brand-brown">
                <span>Pickup Time</span>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => { setTime(e.target.value); setErrors((p) => ({ ...p, time: undefined })); }}
                  className={cn(inputCls, "text-sm normal-case tracking-normal")}
                />
                {errors.time && <span className="text-[11px] font-semibold normal-case tracking-normal text-destructive">{errors.time}</span>}
              </label>
            </div>
            {/* Ride type / Passengers */}
            <div className="grid grid-cols-2 gap-3">
              <label className="grid min-w-0 gap-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-brand-brown">
                <span>Ride Type</span>
                <select value={rideType} onChange={(e) => setRideType(e.target.value)} className={cn(inputCls, "text-sm normal-case tracking-normal")}>
                  {RIDE_TYPES.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </label>
              <label className="grid min-w-0 gap-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-brand-brown">
                <span className="flex items-center gap-1.5"><Users className="size-3.5 text-brand-orange" /> Passengers</span>
                <select value={passengers} onChange={(e) => setPassengers(e.target.value)} className={cn(inputCls, "text-sm normal-case tracking-normal")}>
                  {PASSENGER_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </label>
            </div>
          </div>

          {/* Vehicle cards */}
          <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.08em] text-brand-brown">Vehicle Type</p>
          <div className="mt-2 grid gap-3 sm:grid-cols-3">
            {VEHICLES.map((v) => {
              const active = v.id === vehicleId;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVehicleId(v.id)}
                  aria-pressed={active}
                  className={cn(
                    "border p-3 text-left transition-colors",
                    active
                      ? "border-brand-brown bg-brand-brown text-brand-ivory"
                      : "border-brand-gold/50 bg-brand-cream text-brand-brown hover:border-brand-brown",
                  )}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-extrabold uppercase tracking-wide">{v.id}</span>
                    <span className={cn("font-display text-sm font-extrabold", active ? "text-brand-gold" : "text-brand-orange")}>
                      {v.id === "Hatchback" ? "from " : ""}₹{v.rate}/km
                    </span>
                  </span>
                  {v.id === "Hatchback" && (
                    <span className={cn("mt-0.5 block text-xs font-bold", active ? "text-brand-ivory/80" : "text-muted-foreground")}>
                      + base ₹{v.base}
                    </span>
                  )}
                  <span className={cn("mt-1 block text-xs", active ? "text-brand-ivory/75" : "text-muted-foreground")}>
                    • {v.tag} • {v.pax}
                  </span>
                </button>
              );
            })}
          </div>

          {/* KM + pricing */}
          <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1.4fr]">
            <label className="grid min-w-0 content-start gap-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-brand-brown">
              <span>Est. Distance (optional)</span>
              <input
                type="number"
                min={0}
                step="any"
                value={km}
                onChange={(e) => setKm(e.target.value)}
                placeholder="KM"
                inputMode="decimal"
                className={cn(inputCls, "text-sm normal-case tracking-normal")}
              />
            </label>
            <div className="border border-brand-gold/40 bg-brand-cream p-3">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.1em] text-brand-brown">
                {vehicle.id} Pricing
              </p>
              <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                <div className="border border-brand-gold/30 bg-brand-ivory py-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Base</p>
                  <p className="font-display text-base font-extrabold text-brand-brown">₹{vehicle.base}</p>
                </div>
                <div className="border border-brand-gold/30 bg-brand-ivory py-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Per KM</p>
                  <p className="font-display text-base font-extrabold text-brand-brown">₹{vehicle.rate}</p>
                </div>
                <div className="border border-brand-gold/30 bg-brand-ivory py-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Driver*</p>
                  <p className="font-display text-base font-extrabold text-brand-brown">
                    {driverApplicable ? `₹${DRIVER_ALLOWANCE}` : "—"}
                  </p>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-xs text-muted-foreground">
                  {fare !== null ? (
                    <>Estimated Fare: <span className="font-display text-lg font-extrabold text-brand-orange">{fareText}</span></>
                  ) : (
                    "Enter KM above to see estimated fare • Toll/parking extra"
                  )}
                </p>
              </div>
              <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                *Driver allowance for round/outstation • Final fare confirmed on booking
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Button type="submit" variant="dark" size="lg" className="w-full">
              Check Fare & Book Ride <ArrowRight />
            </Button>
            <Button asChild variant="brandOutline" size="lg" className="w-full !text-brand-brown">
              <a href={`tel:${PHONE_PRIMARY}`}>
                <Phone /> Call Now — {PHONE_PRIMARY}
              </a>
            </Button>
          </div>
          <p className="mt-3 text-center text-xs font-semibold text-muted-foreground">
            No hidden charges • Instant confirmation • Pay after ride
          </p>
        </form>
      </div>
    </section>
  );
}
