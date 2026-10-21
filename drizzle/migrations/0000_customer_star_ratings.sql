CREATE TABLE public.customer_ratings (
  id uuid PRIMARY KEY,
  rating smallint NOT NULL CHECK (rating BETWEEN 1 AND 5),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.customer_ratings TO anon, authenticated;
GRANT ALL ON public.customer_ratings TO service_role;
ALTER TABLE public.customer_ratings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public rating scores are readable" ON public.customer_ratings FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Visitors can submit star scores" ON public.customer_ratings FOR INSERT TO anon, authenticated WITH CHECK (rating BETWEEN 1 AND 5);
CREATE FUNCTION public.customer_rating_summary() RETURNS TABLE (average_rating numeric, rating_count bigint) LANGUAGE sql STABLE SECURITY INVOKER SET search_path = public AS $$ SELECT round(avg(rating), 1), count(*) FROM public.customer_ratings; $$;
REVOKE ALL ON FUNCTION public.customer_rating_summary() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.customer_rating_summary() TO anon, authenticated, service_role;