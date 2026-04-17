"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import AddressInput from "./AddressInput";
import { fleetData } from "@/lib/fleetData";
import { sendEmail } from "@/lib/emailjs";

type TripType = "one-way" | "round-trip";

export default function BookingForm() {
  const params = useSearchParams();
  const [pickup, setPickup] = useState(params.get("pickup") || "");
  const [dropoff, setDropoff] = useState(params.get("dropoff") || "");
  const [date, setDate] = useState(params.get("date") || "");
  const [time, setTime] = useState(params.get("time") || "");
  const [tripType, setTripType] = useState<TripType>((params.get("tripType") as TripType) || "one-way");
  const [returnDate, setReturnDate] = useState(params.get("returnDate") || "");
  const [vehicle, setVehicle] = useState(params.get("vehicle") || fleetData[0].name);
  const [passengers, setPassengers] = useState(params.get("passengers") || "1");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [luggage, setLuggage] = useState("1");
  const [instructions, setInstructions] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");

  const isValid = useMemo(() => pickup && dropoff && date && time && name && email && phone, [pickup, dropoff, date, time, name, email, phone]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) return;

    setStatus("loading");
    setErrorText("");

    try {
      const payload = {
        pickup,
        dropoff,
        date,
        time,
        trip_type: tripType,
        return_date: returnDate || "N/A",
        vehicle,
        passengers,
        name,
        email,
        phone,
        flight_number: flightNumber || "N/A",
        luggage,
        instructions: instructions || "N/A"
      };

      await sendEmail(payload);
      await sendEmail({ ...payload, to_email: "bookings@felixrides.com" });
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorText(error instanceof Error ? error.message : "Failed to submit booking.");
    }
  };

  if (status === "success") {
    return (
      <div className="luxury-card mx-auto max-w-3xl p-10 text-center">
        <h2 className="font-heading text-4xl">Booking Confirmed</h2>
        <p className="mt-4 text-secondary">
          Thank you for choosing Felix Rides. We have sent your confirmation and our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        <AddressInput label="Pick-up Location" value={pickup} onSelect={setPickup} required />
        <AddressInput label="Drop-off Location" value={dropoff} onSelect={setDropoff} required />
        <div className="space-y-2">
          <label className="text-sm font-medium">Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-sm border border-border px-3 py-2 text-sm" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Time</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full rounded-sm border border-border px-3 py-2 text-sm" required />
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium">Trip Type</label>
        <div className="grid max-w-xs grid-cols-2 rounded-sm border border-border p-1 text-sm">
          <button type="button" className={`rounded-sm px-2 py-2 ${tripType === "one-way" ? "bg-accent text-white" : ""}`} onClick={() => setTripType("one-way")}>One Way</button>
          <button type="button" className={`rounded-sm px-2 py-2 ${tripType === "round-trip" ? "bg-accent text-white" : ""}`} onClick={() => setTripType("round-trip")}>Round Trip</button>
        </div>
      </div>

      {tripType === "round-trip" && (
        <div className="max-w-sm space-y-2">
          <label className="text-sm font-medium">Return Date</label>
          <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="w-full rounded-sm border border-border px-3 py-2 text-sm" />
        </div>
      )}

      <div>
        <h3 className="mb-4 font-heading text-2xl">Choose Your Vehicle</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {fleetData.map((item) => (
            <label key={item.id} className={`luxury-card cursor-pointer p-4 ${vehicle === item.name ? "border-accent" : ""}`}>
              <input type="radio" name="vehicle" value={item.name} checked={vehicle === item.name} onChange={() => setVehicle(item.name)} className="sr-only" />
              <p className="font-heading text-lg">{item.name}</p>
              <p className="text-xs text-secondary">{item.classType}</p>
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="rounded-sm border border-border px-3 py-2 text-sm" required />
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-sm border border-border px-3 py-2 text-sm" required />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-sm border border-border px-3 py-2 text-sm" required />
        <input type="text" placeholder="Flight Number (optional)" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} className="rounded-sm border border-border px-3 py-2 text-sm" />
        <select value={passengers} onChange={(e) => setPassengers(e.target.value)} className="rounded-sm border border-border px-3 py-2 text-sm">
          {[1, 2, 3, 4, 5, 6, 7].map((value) => <option key={value} value={value}>{value} Passengers</option>)}
        </select>
        <select value={luggage} onChange={(e) => setLuggage(e.target.value)} className="rounded-sm border border-border px-3 py-2 text-sm">
          {[0, 1, 2, 3, 4, 5, 6].map((value) => <option key={value} value={value}>{value} Luggage</option>)}
        </select>
      </div>

      <textarea placeholder="Special Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} className="min-h-28 w-full rounded-sm border border-border px-3 py-2 text-sm" />

      <button type="submit" disabled={status === "loading"} className="rounded-sm bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white disabled:opacity-60">
        {status === "loading" ? "Submitting..." : "Confirm Booking"}
      </button>
      {status === "error" && <p className="text-sm text-red-600">{errorText}</p>}
    </form>
  );
}
