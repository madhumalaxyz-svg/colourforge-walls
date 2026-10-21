import { useEffect, useState, type FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { customerRatingSchema } from "@/lib/customer-rating";

const receiptKey = "coat-rating-receipt";

export function CustomerRating() {
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [saving, setSaving] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submissionId, setSubmissionId] = useState("");
  const summary = useQuery({
    queryKey: ["customer-rating-summary"],
    enabled: open,
    queryFn: async () => {
      const { data, error } = await supabase.rpc("customer_rating_summary");
      if (error) throw error;
      return data?.[0];
    },
  });

  useEffect(() => {
    setSubmissionId(crypto.randomUUID());
    try { setSubmitted(Boolean(localStorage.getItem(receiptKey))); } catch { /* Storage may be blocked. */ }
  }, []);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (saving || submitted || !submissionId) return;
    const valid = customerRatingSchema.safeParse(score);
    if (!valid.success) { setError("Please choose a star rating."); return; }
    setSaving(true);
    setError("");
    try {
      const { error } = await supabase.from("customer_ratings").insert({ id: submissionId, rating: valid.data });
      if (error && error.code !== "23505") throw error;
      setSubmitted(true);
      try { localStorage.setItem(receiptKey, submissionId); } catch { /* Saving does not require browser storage. */ }
      await summary.refetch();
    } catch {
      setError("Your rating couldn't be saved. Please try again.");
    } finally { setSaving(false); }
  }

  return <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild><Button variant="original" className="rating-trigger"><Star size={16} /> Rate our work</Button></DialogTrigger>
    <DialogContent className="rating-dialog">
      <span className="eyebrow">YOUR EXPERIENCE</span>
      <DialogTitle className="rating-title">Rate our work</DialogTitle>
      <DialogDescription>How was your painting and finishing experience?</DialogDescription>
      <p className="rating-summary" aria-live="polite">{summary.isError ? "Customer ratings are unavailable right now." : summary.isPending ? "Loading ratings…" : summary.data?.rating_count ? `${summary.data.average_rating} / 5 · ${summary.data.rating_count} customer ${summary.data.rating_count === 1 ? "rating" : "ratings"}` : "No ratings yet"}</p>
      {submitted ? <p className="rating-thanks" role="status">Thank you — your rating has been saved.</p> : <form onSubmit={submit}>
        <div className="rating-stars" role="group" aria-label="Choose a star rating" onMouseLeave={() => setHovered(0)}>
          {[1, 2, 3, 4, 5].map(value => <Button key={value} variant="original" type="button" className={`rating-star ${(hovered || score) >= value ? "selected" : ""}`} aria-label={`${value} ${value === 1 ? "star" : "stars"}`} aria-pressed={score === value} disabled={saving} onMouseEnter={() => setHovered(value)} onFocus={() => setHovered(value)} onBlur={() => setHovered(0)} onClick={() => { setScore(value); setError(""); }}><Star size={32} /></Button>)}
        </div>
        <p className="rating-selection" aria-live="polite">{score ? `${score} out of 5 stars` : "Choose your rating"}</p>
        {error && <p role="alert" className="rating-error">{error}</p>}
        <Button variant="original" className="btn btn-primary rating-submit" type="submit" disabled={!score || saving || !submissionId}>{saving ? "Saving…" : "Submit rating"}</Button>
      </form>}
    </DialogContent>
  </Dialog>;
}