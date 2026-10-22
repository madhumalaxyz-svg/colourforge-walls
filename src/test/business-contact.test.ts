import { describe, expect, it } from "vitest";
import { businessContact, estimateWhatsAppUrl } from "@/lib/business-contact";

describe("Owner contact details", () => {
  it("calls the owner's Indian phone number", () => {
    expect(businessContact.phone).toBe("7660962951");
    expect(businessContact.phoneHref).toBe("tel:+917660962951");
  });
  it("addresses estimates to the same number on WhatsApp", () => {
    const url = new URL(estimateWhatsAppUrl("Painting estimate for my home"));
    expect(url.pathname).toBe("/917660962951");
    expect(url.searchParams.get("text")).toBe("Painting estimate for my home");
  });
  it("uses the owner's email", () => {
    expect(businessContact.email).toBe("mmadhu63315@gmail.com");
  });
  it("serves Hyderabad, Telangana", () => {
    expect(businessContact.serviceArea).toBe("Hyderabad, Telangana");
  });
  it("is available 24/7", () => {
    expect(businessContact.hours).toBe("24/7 available");
  });
});
