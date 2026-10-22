import { describe, expect, it } from "vitest";
import { customerRatingSchema } from "@/lib/customer-rating";

describe("Customer star ratings", () => {
  it("accepts each of the five star scores", () => {
    for (const score of [1, 2, 3, 4, 5]) {
      expect(customerRatingSchema.parse(score)).toBe(score);
    }
  });
  it("rejects scores outside the five-star scale and partial stars", () => {
    for (const score of [0, 6, -1, 2.5]) {
      expect(customerRatingSchema.safeParse(score).success).toBe(false);
    }
  });
});
