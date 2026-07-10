/* Sky Makeup storefront — full landing page recreation.
   Composes design-system primitives (Button, Eyebrow, Marquee, CategoryBubble,
   ProductCard, StepCard, TrustItem) + the CartDrawer into the real page layout. */
const SK = window.SkyMakeupDesignSystem_ae8c70;
const { Button, Eyebrow, Marquee, CategoryBubble, ProductCard, StepCard, TrustItem } = SK;

const PRODUCTS = [
  // Rostro
  { category: 'Rostro', title: 'Polvo compacto Rimera Quince tono 03', description: 'Acabado mate que sella tu base y controla brillos todo el día.', price: '$3.000', raw: 3000, swatch: 4, image: 'assets/products/framed/polvo-rimera-quince-03.jpeg' },
  { category: 'Rostro', title: 'Base Pink 21 tono 01', description: 'Cobertura media y textura liviana, ideal para el día a día.', price: '$3.000', raw: 3000, swatch: 5 },
  { category: 'Rostro', title: 'Rubor en polvo Ushas', description: 'Color natural y fácil de difuminar. Elegí tu tono.', price: '$2.500', raw: 2500, swatch: 3, tones: ['04', '05'], image: 'assets/products/framed/rubor-ushas.jpeg' },
  { category: 'Rostro', title: 'Base Ruby Rose tono 03', description: 'Cobertura alta con acabado luminoso.', price: '$4.500', raw: 4500, swatch: 5, badge: 'Más vendido' },
  { category: 'Rostro', title: 'Base Huda tono 220', description: 'Acabado natural de larga duración.', price: '$3.000', raw: 3000, swatch: 3 },
  { category: 'Rostro', title: 'Corrector', description: 'Cubre ojeras e imperfecciones sin marcar líneas. Elegí tu tono.', price: '$3.000', raw: 3000, swatch: 4, tones: ['02', '03'], image: 'assets/products/framed/corrector.jpeg' },
  { category: 'Rostro', title: 'Set de esponjas x7', description: 'Set completo para aplicar base, corrector y polvo como una pro.', price: '$3.000', raw: 3000, swatch: 3, image: 'assets/products/framed/set-esponjas-x7.jpeg' },

  // Labiales
  { category: 'Labiales', title: 'Gloss Pink 21', description: 'Brillo espejado sin sensación pegajosa. Elegí tu tono.', price: '$3.200', raw: 3200, swatch: 1, badge: 'Más vendido', tones: ['01', '05'], image: 'assets/products/framed/gloss-pink21.jpeg' },
  { category: 'Labiales', title: 'Gloss Mely tono 05', description: 'Hidrata y da brillo con un toque de color.', price: '$3.000', raw: 3000, swatch: 1, image: 'assets/products/framed/gloss-mely-05.jpeg' },
  { category: 'Labiales', title: 'Labial matte Pink 21 tono 03', description: 'Acabado mate aterciopelado de larga duración.', price: '$2.500', raw: 2500, swatch: 6, image: 'assets/products/framed/labial-matte-pink21-03.jpeg' },
  { category: 'Labiales', title: 'Labial matte y gloss 2 en 1 Laurenza', description: 'Dos acabados en un solo producto: mate de un lado, gloss del otro.', price: '$3.800', raw: 3800, swatch: 1, image: 'assets/products/framed/labial-gloss-laurenza.jpeg' },
  { category: 'Labiales', title: 'Labial matte Mely tono 03', description: 'Color intenso con acabado mate parejo.', price: '$2.800', raw: 2800, swatch: 6, image: 'assets/products/framed/labial-matte-mely-03.jpeg' },
  { category: 'Labiales', title: 'Lip gloss matte Mely 03', description: 'Brillo suave con acabado aterciopelado, no pegajoso.', price: '$3.000', raw: 3000, swatch: 1, image: 'assets/products/framed/lip-gloss-mely-03.jpeg' },
  { category: 'Labiales', title: 'Gloss Tei tono 03', description: 'Brillo jugoso para looks del día a día.', price: '$2.500', raw: 2500, swatch: 6 },
  { category: 'Labiales', title: 'Labial matte Tei tono 03', description: 'Mate cómodo que no reseca.', price: '$3.000', raw: 3000, swatch: 1, image: 'assets/products/framed/labial-matte-tei-03.jpeg' },
  { category: 'Labiales', title: 'Labial matte en barra Ushas tono 02', description: 'Color parejo en una sola pasada.', price: '$2.500', raw: 2500, swatch: 6, image: 'assets/products/framed/labial-barra-ushas-02.jpeg' },
  { category: 'Labiales', title: 'Delineador de labios', description: 'Define el contorno y hace durar más tu labial.', price: '$1.500', raw: 1500, swatch: 1 },
  { category: 'Labiales', title: 'Labial matte Tei', description: 'Mate cómodo que no reseca, color parejo en un solo paso.', price: '$3.000', raw: 3000, swatch: 6, image: 'assets/products/framed/labial-matte-tei.jpeg' },

  // Máscaras y Delineadores
  { category: 'Máscaras y Delineadores', title: 'Arqueador', description: 'Fija y da forma a tus cejas todo el día.', price: '$3.200', raw: 3200, swatch: 2, image: 'assets/products/framed/arqueador.jpeg' },
  { category: 'Máscaras y Delineadores', title: 'Paleta de sombras Pink 21', description: 'Tonos combinables para looks naturales o más intensos.', price: '$5.000', raw: 5000, swatch: 2, badge: 'Nuevo', image: 'assets/products/framed/paleta-pink21.jpeg' },
  { category: 'Máscaras y Delineadores', title: 'Máscara de pestañas Pink 21', description: 'Volumen y largo sin grumos.', price: '$3.000', raw: 3000, swatch: 2, image: 'assets/products/framed/mascara-pink21.jpeg' },
  { category: 'Máscaras y Delineadores', title: 'Máscara de pestañas mini Tango', description: 'Formato mini, ideal para retocar en la cartera.', price: '$3.000', raw: 3000, swatch: 2, image: 'assets/products/framed/mascara-mini-tango.jpeg' },
  { category: 'Máscaras y Delineadores', title: 'Delineador en fibra líquido NAEZ', description: 'Punta de fibra ultrafina para un trazo preciso y parejo.', price: '$2.000', raw: 2000, swatch: 2, image: 'assets/products/framed/delineador-fibra-naez.jpeg' },
  { category: 'Máscaras y Delineadores', title: 'Delineador líquido Ruby Rose', description: 'Negro intenso y secado rápido para un cat-eye bien definido.', price: '$4.000', raw: 4000, swatch: 2 },

  // Pestañas y Pegamentos
  { category: 'Pestañas y Pegamentos', title: 'Sellador + Bonder', description: 'Fija tus pestañas y sella el pegamento para que duren muchísimo más.', price: '$5.500', raw: 5500, swatch: 2, image: 'assets/products/framed/sellador-bonder.jpeg' },
  { category: 'Pestañas y Pegamentos', title: 'Pestañas en grupo 40D+50D 0.07D MIX NAEZ', description: 'Pestañas en grupo, mix 40D y 50D con curva D 0.07, para volumen a medida.', price: '$6.800', raw: 6800, swatch: 2, badge: 'Nuevo' },
];

const PRODUCT_CATEGORY_ORDER = ['Rostro', 'Labiales', 'Máscaras y Delineadores', 'Pestañas y Pegamentos'];

// ---- Stock ----
// Por defecto 1 unidad por producto (y por tono en los que tienen variantes).
// Para cargar stock real después, agregá overrides acá:
//   'Base Huda tono 220': 3            (producto sin tonos)
//   'Rubor en polvo Ushas·04': 2       (producto con tonos → título·tono)
const DEFAULT_STOCK = 1;
const STOCK_OVERRIDES = {};
const stockFor = (p, tone) => {
  const k = tone ? `${p.title}·${tone}` : p.title;
  return STOCK_OVERRIDES[k] != null ? STOCK_OVERRIDES[k] : DEFAULT_STOCK;
};

// ⚠️ REEMPLAZAR con el número real de WhatsApp (formato internacional sin +, sin espacios).
// Ej. Argentina Santa Fe: 549342XXXXXXX
const WHATSAPP_NUMBER = '5493425931018';
const INSTAGRAM_URL = 'https://www.instagram.com/sky_makeup25';
const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
const GENERIC_WA_MSG = '¡Hola Sky Makeup! 💖 Quiero hacer un pedido.';

const CATEGORY_ANCHORS = {
  'Rostro': 'cat-rostro',
  'Labiales': 'cat-labiales',
  'Máscaras y Delineadores': 'cat-mascaras',
  'Skincare': 'productos',
  'Pestañas y Pegamentos': 'cat-pestanas',
};

const CATEGORIES = [
  { image: 'assets/category-rostro.png', label: 'Rostro', sublabel: 'Bases · Correctores · Rubores · Contornos · Iluminadores' },
  { image: 'assets/category-labiales.png', label: 'Labiales', sublabel: 'Mattes · Gloss · Delineadores de labios' },
  { image: 'assets/category-mascaras.png', label: 'Máscaras y Delineadores', sublabel: 'Máscaras · Delineadores' },
  { image: 'assets/category-skincare.png', label: 'Skincare', sublabel: 'Limpiezas · Hidratantes' },
  { image: 'assets/category-pestanas.png', label: 'Pestañas y Pegamentos', sublabel: 'Pestañas · Pegamentos' },
];

const wrap = { maxWidth: '1120px', margin: '0 auto', padding: '0 24px' };
const sectionHead = { maxWidth: '560px', marginBottom: '48px' };
const h2 = { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--fs-h2)', lineHeight: 1.15, marginTop: '10px' };
const subP = { marginTop: '12px', color: 'var(--ciruela-60)' };

function Storefront() {
  const [cart, setCart] = React.useState(() => {
    try {
      const saved = localStorage.getItem('sky_cart');
      return saved ? JSON.parse(saved) : {};
    } catch (e) { return {}; }
  });
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    try { localStorage.setItem('sky_cart', JSON.stringify(cart)); } catch (e) {}
  }, [cart]);

  const cartKey = (p, tone) => (tone ? `${p.title} · Tono ${tone}` : p.title);
  const remainingFor = (p, tone) => stockFor(p, tone) - (cart[cartKey(p, tone)]?.qty || 0);

  const add = (p, tone) => {
    const key = cartKey(p, tone);
    const stock = stockFor(p, tone);
    setCart((c) => {
      const have = c[key]?.qty || 0;
      if (have >= stock) return c; // sin stock
      const next = { ...c };
      next[key] = { price: p.raw, qty: have + 1, stock };
      return next;
    });
    setOpen(true);
  };
  const inc = (name) => setCart((c) => {
    const item = c[name];
    if (!item || (item.stock != null && item.qty >= item.stock)) return c;
    return { ...c, [name]: { ...item, qty: item.qty + 1 } };
  });
  const dec = (name) => setCart((c) => {
    const next = { ...c };
    if (next[name].qty <= 1) delete next[name];
    else next[name] = { ...next[name], qty: next[name].qty - 1 };
    return next;
  });

  const count = Object.values(cart).reduce((s, i) => s + i.qty, 0);
  const total = Object.values(cart).reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <div style={{ background: 'var(--petalo)', color: 'var(--ciruela)', minHeight: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,243,247,.88)', backdropFilter: 'blur(12px)', borderBottom: 'var(--border-1)' }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-display)', fontSize: '1.45rem', textDecoration: 'none', color: 'inherit', letterSpacing: '.01em' }}><span style={{ width: '52px', height: '52px', borderRadius: '50%', border: '1px solid rgba(242,107,165,.54)', background: 'url(assets/logo.jpg) center / contain no-repeat', display: 'block', flexShrink: 0 }} />Sky <em style={{ fontStyle: 'normal', color: 'var(--frambuesa)' }}>Makeup</em></a>
          <nav style={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
            <a href="#categorias" style={navLink}>Categorías</a>
            <a href="#productos" style={navLink}>Productos</a>
            <a href="#como-comprar" style={navLink}>Cómo comprar</a>
            <Button size="sm" href={waLink(GENERIC_WA_MSG)} target="_blank" rel="noopener noreferrer">Pedir por WhatsApp</Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: '84px 0 60px', textAlign: 'center' }}>
        <div style={wrap}>
          <Eyebrow>Skincare &amp; Makeup · Santa Fe</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--fs-hero)', lineHeight: 1.08, letterSpacing: '-.01em', maxWidth: '16ch', margin: '26px auto 22px' }}>
            Tu piel merece<br /><span style={{ background: 'linear-gradient(95deg, var(--frambuesa), #DB4F92)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>ese brillo</span>
          </h1>
          <p style={{ maxWidth: '46ch', margin: '0 auto 34px', color: 'var(--ciruela-60)', fontSize: '1.08rem' }}>
            Maquillaje y skincare con productos aprobados, precios claros y entrega el mismo día. Elegís, pedís y en un rato lo tenés.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="#productos">Ver catálogo</Button>
            <Button variant="ghost" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@sky_makeup25</Button>
          </div>
        </div>
      </section>

      <Marquee items={['🚚 Envíos al instante', '📍 Retiro en zona', '💖 Productos aprobados', '💳 Pago por transferencia', '🚚 Envíos al instante', '📍 Retiro en zona', '💖 Productos aprobados', '💳 Todos los medios de pago']} />

      {/* Categorías */}
      <section id="categorias" style={{ padding: '80px 0' }}>
        <div style={wrap}>
          <div style={sectionHead}>
            <Eyebrow variant="tag">Categorías</Eyebrow>
            <h2 style={h2}>Como en nuestras historias, pero más grande</h2>
            <p style={subP}>Organizamos el catálogo igual que en Instagram: tocá una categoría y encontrá lo tuyo.</p>
          </div>
          <div className="sky-categories">
            {CATEGORIES.map((c) => <CategoryBubble key={c.label} {...c} href={`#${CATEGORY_ANCHORS[c.label]}`} />)}
          </div>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" style={{ padding: '20px 0 80px' }}>
        <div style={wrap}>
          <div style={sectionHead}>
            <Eyebrow variant="tag">Catálogo</Eyebrow>
            <h2 style={h2}>Lo que se está pidiendo</h2>
            <p style={subP}>Stock real, precios directos. Si te gusta, escribinos y te lo reservamos.</p>
          </div>
          {PRODUCT_CATEGORY_ORDER.map((cat) => (
            <div key={cat} id={CATEGORY_ANCHORS[cat]} style={{ marginBottom: '46px', scrollMarginTop: '84px' }}>
              <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '.85rem', letterSpacing: 'var(--tracking-tag)', textTransform: 'uppercase', color: 'var(--chicle)', marginBottom: '18px' }}>{cat}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '22px' }}>
                {PRODUCTS.filter((p) => p.category === cat).map((p) => <ProductCard key={p.title} {...p} onAdd={(tone) => add(p, tone)} getRemaining={(tone) => remainingFor(p, tone)} />)}
              </div>
            </div>
          ))}
          <p style={{ marginTop: '10px', fontSize: '.88rem', color: 'var(--ciruela-60)', textAlign: 'center' }}>¿Buscás Skincare? Todavía no tenemos stock cargado acá — escribinos por Instagram y te contamos qué hay.</p>
        </div>
      </section>

      {/* Cómo comprar */}
      <section id="como-comprar" style={{ padding: '80px 0', background: 'var(--crema)', borderTop: 'var(--border-1)', borderBottom: 'var(--border-1)' }}>
        <div style={wrap}>
          <div style={sectionHead}>
            <Eyebrow variant="tag">Cómo comprar</Eyebrow>
            <h2 style={h2}>Tres pasos y lo tenés hoy</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '26px' }}>
            <StepCard n={1} title="Elegí tu producto">Mirá el catálogo acá o en nuestras historias de Instagram y mandanos qué querés.</StepCard>
            <StepCard n={2} title="Pagá por transferencia">Te pasamos los datos bancarios, transferís y nos mandás el comprobante. Te confirmamos al instante.</StepCard>
            <StepCard n={3} title="Recibilo o retiralo">Envíos al instante dentro de Santa Fe o retiro en zona coordinando horario.</StepCard>
          </div>
        </div>
      </section>

      {/* Confianza */}
      <section style={{ padding: '80px 0' }}>
        <div style={wrap}>
          <div style={sectionHead}>
            <Eyebrow variant="tag">Por qué elegirnos</Eyebrow>
            <h2 style={h2}>Comprás tranquila</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '22px' }}>
            <TrustItem icon="💖" title="Productos aprobados">Trabajamos solo con cosmética habilitada y de marcas confiables.</TrustItem>
            <TrustItem icon="🚚" title="Envíos al instante">Dentro de Santa Fe, tu pedido sale el mismo día que lo confirmás.</TrustItem>
            <TrustItem icon="📍" title="Retiro en zona">Coordinamos punto y horario de retiro sin costo de envío.</TrustItem>
            <TrustItem icon="💳" title="Pago por transferencia">Transferencia bancaria y nos enviás el comprobante por WhatsApp. Simple y seguro.</TrustItem>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ textAlign: 'center', padding: '90px 24px', background: 'var(--gradient-cta)', color: '#fff' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--fs-h2-final)', maxWidth: '18ch', margin: '0 auto 16px', lineHeight: 1.12 }}>¿Lista para tu próximo brillo?</h2>
        <p style={{ color: 'rgba(255,255,255,.82)', maxWidth: '44ch', margin: '0 auto 34px' }}>Escribinos y armamos tu pedido en minutos. Atendemos por WhatsApp y por mensaje directo en Instagram.</p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button href={waLink(GENERIC_WA_MSG)} target="_blank" rel="noopener noreferrer" style={{ background: '#fff', color: 'var(--frambuesa)', boxShadow: 'var(--shadow-cta)' }}>Escribir por WhatsApp</Button>
          <Button variant="ghost" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.7)' }}>Seguir en Instagram</Button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '44px 0', background: 'var(--ciruela)', color: 'rgba(255,255,255,.75)' }}>
        <div style={{ ...wrap, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '.9rem' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: '#fff', textDecoration: 'none' }}><span style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(255,255,255,.5)', background: 'url(assets/logo.jpg) center / contain no-repeat', display: 'block', flexShrink: 0 }} />Sky <em style={{ fontStyle: 'normal', color: 'var(--chicle)' }}>Makeup</em></a>
          <span>Santa Fe, Argentina · Skincare &amp; Makeup</span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.85)' }}>@sky_makeup25</a>
        </div>
      </footer>

      {/* Cart FAB */}
      {count > 0 && (
        <button onClick={() => setOpen(true)} aria-label="Abrir carrito" style={{ position: 'fixed', right: '22px', bottom: '22px', zIndex: 80, width: '62px', height: '62px', borderRadius: '50%', border: 'none', cursor: 'pointer', background: 'var(--frambuesa)', color: '#fff', fontSize: '1.5rem', boxShadow: 'var(--shadow-fab)', display: 'grid', placeItems: 'center' }}>
          🛍️
          <span style={{ position: 'absolute', top: '-4px', right: '-4px', minWidth: '24px', height: '24px', padding: '0 6px', borderRadius: '999px', background: 'var(--chicle)', color: '#fff', fontSize: '.8rem', fontWeight: 700, display: 'grid', placeItems: 'center', border: '2px solid var(--petalo)' }}>{count}</span>
        </button>
      )}

      <window.CartDrawer open={open} items={cart} total={total} waLink={waLink} onClose={() => setOpen(false)} onInc={inc} onDec={dec} />
    </div>
  );
}

const navLink = { textDecoration: 'none', fontSize: '.92rem', fontWeight: 500, color: 'var(--ciruela-60)' };

window.Storefront = Storefront;
