"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import AddressInput from "./AddressInput";

type TripType = "one-way" | "round-trip";

export default function BookingWidget() {
  const router = useRouter();
  const params = useSearchParams();
  const [pickup, setPickup] = useState(params.get("pickup") || "");
  const [dropoff, setDropoff] = useState(params.get("dropoff") || "");
  const [date, setDate] = useState(params.get("date") || "");
  const [time, setTime] = useState(params.get("time") || "");
  const [tripType, setTripType] = useState<TripType>((params.get("tripType") as TripType) || "one-way");
  const [returnDate, setReturnDate] = useState(params.get("returnDate") || "");
  const [passengers, setPassengers] = useState(params.get("passengers") || "1");

  const canSubmit = useMemo(() => pickup && dropoff && date && time, [pickup, dropoff, date, time]);

  const getQuote = () => {
    const query = new URLSearchParams({
      pickup,
      dropoff,
      date,
      time,
      tripType,
      passengers
    });
    if (tripType === "round-trip" && returnDate) {
      query.set("returnDate", returnDate);
    }
    router.push(`/book?${query.toString()}`);
  };

  return (
    <motion.div
      className="luxury-card w-full max-w-5xl p-4 md:p-6"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AddressInput label="Pick-up" value={pickup} onSelect={setPickup} placeholder="Enter pick-up location" required />
        <AddressInput label="Drop-off" value={dropoff} onSelect={setDropoff} placeholder="Enter drop-off location" required />
        <div className="space-y-2">
          <label className="text-sm font-medium">Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-sm border border-border px-3 py-2 text-sm" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Time</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full rounded-sm border border-border px-3 py-2 text-sm" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Trip Type</label>
          <div className="grid grid-cols-2 rounded-sm border border-border p-1 text-sm">
            <button type="button" className={`rounded-sm px-2 py-2 ${tripType === "one-way" ? "bg-accent text-white" : ""}`} onClick={() => setTripType("one-way")}>One Way</button>
            <button type="button" className={`rounded-sm px-2 py-2 ${tripType === "round-trip" ? "bg-accent text-white" : ""}`} onClick={() => setTripType("round-trip")}>Round Trip</button>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Passengers</label>
          <select value={passengers} onChange={(e) => setPassengers(e.target.value)} className="w-full rounded-sm border border-border px-3 py-2 text-sm">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <option key={n} value={n}>{n} Passenger{n > 1 ? "s" : ""}</option>
            ))}
          </select>
        </div>
      </div>
      <AnimatePresence>
        {tripType === "round-trip" && (
          <motion.div
            className="mt-4 max-w-xs space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <label className="text-sm font-medium">Return Date</label>
            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="w-full rounded-sm border border-border px-3 py-2 text-sm" />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        type="button"
        onClick={getQuote}
        disabled={!canSubmit}
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="mt-5 rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        Get a Quote
      </motion.button>
    </motion.div>
  );
}
