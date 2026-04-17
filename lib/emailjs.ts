import emailjs from "@emailjs/browser";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export const sendEmail = async (params: Record<string, string>) => {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS environment variables are missing.");
  }

  return emailjs.send(serviceId, templateId, params, {
    publicKey
  });
};
