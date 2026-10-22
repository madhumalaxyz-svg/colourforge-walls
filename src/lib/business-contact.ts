export const businessContact = {
  phone: "7660962951",
  whatsapp: "7660962951",
  email: "mmadhu63315@gmail.com",
  serviceArea: "Hyderabad, Telangana",
  hours: "24/7 available",
  phoneHref: "tel:+917660962951",
  whatsappUrl: "https://wa.me/917660962951",
};

export function estimateWhatsAppUrl(message: string) {
  return `${businessContact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
