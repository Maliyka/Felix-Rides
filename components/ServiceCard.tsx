import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <article className="luxury-card p-6">
      <div className="transition-transform duration-300 hover:-translate-y-1 hover:rotate-[-8deg] hover:scale-105">
        <Icon className="text-accent" />
      </div>
      <h3 className="mt-4 font-heading text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-secondary">{description}</p>
    </article>
  );
}
