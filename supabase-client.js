/* Sky Makeup — cliente Supabase compartido (storefront + admin).
   Cargar despu\u00e9s de la librer\u00eda supabase-js v2 vía CDN. */
window.sb = supabase.createClient(
  'https://bohthswmsvcllowhmtgd.supabase.co',
  'sb_publishable_C0QY7naaRdtZYvg4ei8ytQ_h65-piuW'
);
