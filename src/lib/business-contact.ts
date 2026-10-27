export const businessContact = {
  phone: "7660962951",
  phone2: "6300755329",
  whatsapp: "917660962951",
  email: "malkaiahpainter@gmail.com",
  email2: "madhu6300755@gmail.com",
  serviceArea: "Hyderabad, Telangana",
  hours: "24/7 available",
  phoneHref: "tel:+917660962951",
  phone2Href: "tel:+916300755329",
  whatsappUrl: "https://wa.me/917660962951",
  emaillHref: "mailto:malkaiahpainter@gmail.com",
  email2Href: "mailto:madhu6300755@gmail.com",
};

export function estimateWhatsAppUrl(message: string) {
  return `${businessContact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
