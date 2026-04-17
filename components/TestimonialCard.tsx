import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  review: string;
};

export default function TestimonialCard({ name, review }: TestimonialCardProps) {
  return (
    <article className="luxury-card p-6">
      <div className="mb-3 flex gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="text-sm leading-6 text-secondary">&quot;{review}&quot;</p>
      <p className="mt-4 font-heading text-lg">{name}</p>
    </article>
  );
}
