import { z } from "zod";

export const customerRatingSchema = z.number().int().min(1).max(5);
