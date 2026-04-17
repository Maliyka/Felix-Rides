"use client";

import { useEffect, useRef, useState } from "react";

type AddressInputProps = {
  label: string;
  value: string;
  onSelect: (value: string, placeId?: string) => void;
  placeholder?: string;
  required?: boolean;
};

let mapsPromise: Promise<void> | null = null;

const loadGoogleMaps = () => {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.google?.maps?.places) return Promise.resolve();
  if (mapsPromise) return mapsPromise;

  mapsPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps script"));
    document.head.appendChild(script);
  });

  return mapsPromise;
};

export default function AddressInput({ label, value, onSelect, placeholder, required }: AddressInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(value);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    let autocomplete: google.maps.places.Autocomplete;
    const initAutocomplete = async () => {
      try {
        await loadGoogleMaps();
        if (!inputRef.current) return;
        autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
          fields: ["formatted_address", "place_id", "geometry"],
          types: ["geocode"]
        });
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          const selected = place.formatted_address || inputRef.current?.value || "";
          setInputValue(selected);
          onSelect(selected, place.place_id);
        });
      } finally {
        setLoading(false);
      }
    };

    initAutocomplete();
  }, [onSelect]);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-primary">{label}</label>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        required={required}
        onChange={(event) => {
          setInputValue(event.target.value);
          onSelect(event.target.value);
        }}
        placeholder={placeholder}
        className="w-full rounded-sm border border-border bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none"
      />
      {loading && <p className="text-xs text-secondary">Loading places...</p>}
    </div>
  );
}
