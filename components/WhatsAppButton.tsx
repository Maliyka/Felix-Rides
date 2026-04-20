import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/442046171512"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-luxury"
    >
      <MessageCircle size={18} />
      WhatsApp
    </a>
  );
}
