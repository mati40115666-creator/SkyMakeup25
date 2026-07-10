/* Sky Makeup — datos de los 30 productos actuales, para la carga inicial (seed) a Supabase.
   Las imágenes apuntan al dominio ya publicado (no hace falta resubirlas). */
const IMG_BASE = 'https://skymakeup.mitsistemas.com.ar/assets/products/framed/';

const SEED_PRODUCTS = [
  // Rostro
  { category: 'Rostro', title: 'Polvo compacto Rimera Quince tono 03', description: 'Acabado mate que sella tu base y controla brillos todo el día.', price: 3000, image_url: IMG_BASE + 'polvo-rimera-quince-03.jpeg', tones: null, stock: { _default: 1 } },
  { category: 'Rostro', title: 'Base Pink 21 tono 01', description: 'Cobertura media y textura liviana, ideal para el día a día.', price: 3000, image_url: null, tones: null, stock: { _default: 1 } },
  { category: 'Rostro', title: 'Rubor en polvo Ushas', description: 'Color natural y fácil de difuminar. Elegí tu tono.', price: 2500, image_url: IMG_BASE + 'rubor-ushas.jpeg', tones: ['04', '05'], stock: { '04': 1, '05': 1 } },
  { category: 'Rostro', title: 'Base Ruby Rose tono 03', description: 'Cobertura alta con acabado luminoso.', price: 4500, image_url: null, tones: null, badge: 'Más vendido', stock: { _default: 1 } },
  { category: 'Rostro', title: 'Base Huda tono 220', description: 'Acabado natural de larga duración.', price: 3000, image_url: null, tones: null, stock: { _default: 1 } },
  { category: 'Rostro', title: 'Corrector', description: 'Cubre ojeras e imperfecciones sin marcar líneas. Elegí tu tono.', price: 3000, image_url: IMG_BASE + 'corrector.jpeg', tones: ['02', '03'], stock: { '02': 1, '03': 1 } },
  { category: 'Rostro', title: 'Set de esponjas x7', description: 'Set completo para aplicar base, corrector y polvo como una pro.', price: 3000, image_url: IMG_BASE + 'set-esponjas-x7.jpeg', tones: null, stock: { _default: 1 } },

  // Labiales
  { category: 'Labiales', title: 'Gloss Pink 21', description: 'Brillo espejado sin sensación pegajosa. Elegí tu tono.', price: 3200, image_url: IMG_BASE + 'gloss-pink21.jpeg', tones: ['01', '05'], badge: 'Más vendido', stock: { '01': 1, '05': 1 } },
  { category: 'Labiales', title: 'Gloss Mely tono 05', description: 'Hidrata y da brillo con un toque de color.', price: 3000, image_url: IMG_BASE + 'gloss-mely-05.jpeg', tones: null, stock: { _default: 1 } },
  { category: 'Labiales', title: 'Labial matte Pink 21 tono 03', description: 'Acabado mate aterciopelado de larga duración.', price: 2500, image_url: IMG_BASE + 'labial-matte-pink21-03.jpeg', tones: null, stock: { _default: 1 } },
  { category: 'Labiales', title: 'Labial matte y gloss 2 en 1 Laurenza', description: 'Dos acabados en un solo producto: mate de un lado, gloss del otro.', price: 3800, image_url: IMG_BASE + 'labial-gloss-laurenza.jpeg', tones: null, stock: { _default: 1 } },
  { category: 'Labiales', title: 'Labial matte Mely tono 03', description: 'Color intenso con acabado mate parejo.', price: 2800, image_url: IMG_BASE + 'labial-matte-mely-03.jpeg', tones: null, stock: { _default: 1 } },
  { category: 'Labiales', title: 'Lip gloss matte Mely 03', description: 'Brillo suave con acabado aterciopelado, no pegajoso.', price: 3000, image_url: IMG_BASE + 'lip-gloss-mely-03.jpeg', tones: null, stock: { _default: 1 } },
  { category: 'Labiales', title: 'Gloss Tei tono 03', description: 'Brillo jugoso para looks del día a día.', price: 2500, image_url: null, tones: null, stock: { _default: 1 } },
  { category: 'Labiales', title: 'Labial matte Tei tono 03', description: 'Mate cómodo que no reseca.', price: 3000, image_url: IMG_BASE + 'labial-matte-tei-03.jpeg', tones: null, stock: { _default: 1 } },
  { category: 'Labiales', title: 'Labial matte en barra Ushas tono 02', description: 'Color parejo en una sola pasada.', price: 2500, image_url: IMG_BASE + 'labial-barra-ushas-02.jpeg', tones: null, stock: { _default: 1 } },
  { category: 'Labiales', title: 'Delineador de labios', description: 'Define el contorno y hace durar más tu labial.', price: 1500, image_url: null, tones: null, stock: { _default: 1 } },
  { category: 'Labiales', title: 'Labial matte Tei', description: 'Mate cómodo que no reseca, color parejo en un solo paso.', price: 3000, image_url: IMG_BASE + 'labial-matte-tei.jpeg', tones: null, stock: { _default: 1 } },

  // Máscaras y Delineadores
  { category: 'Máscaras y Delineadores', title: 'Arqueador', description: 'Fija y da forma a tus cejas todo el día.', price: 3200, image_url: IMG_BASE + 'arqueador.jpeg', tones: null, stock: { _default: 1 } },
  { category: 'Máscaras y Delineadores', title: 'Paleta de sombras Pink 21', description: 'Tonos combinables para looks naturales o más intensos.', price: 5000, image_url: IMG_BASE + 'paleta-pink21.jpeg', tones: null, badge: 'Nuevo', stock: { _default: 1 } },
  { category: 'Máscaras y Delineadores', title: 'Máscara de pestañas Pink 21', description: 'Volumen y largo sin grumos.', price: 3000, image_url: IMG_BASE + 'mascara-pink21.jpeg', tones: null, stock: { _default: 1 } },
  { category: 'Máscaras y Delineadores', title: 'Máscara de pestañas mini Tango', description: 'Formato mini, ideal para retocar en la cartera.', price: 3000, image_url: IMG_BASE + 'mascara-mini-tango.jpeg', tones: null, stock: { _default: 1 } },
  { category: 'Máscaras y Delineadores', title: 'Delineador en fibra líquido NAEZ', description: 'Punta de fibra ultrafina para un trazo preciso y parejo.', price: 2000, image_url: IMG_BASE + 'delineador-fibra-naez.jpeg', tones: null, stock: { _default: 1 } },
  { category: 'Máscaras y Delineadores', title: 'Delineador líquido Ruby Rose', description: 'Negro intenso y secado rápido para un cat-eye bien definido.', price: 4000, image_url: null, tones: null, stock: { _default: 1 } },

  // Pestañas y Pegamentos
  { category: 'Pestañas y Pegamentos', title: 'Sellador + Bonder', description: 'Fija tus pestañas y sella el pegamento para que duren muchísimo más.', price: 5500, image_url: IMG_BASE + 'sellador-bonder.jpeg', tones: null, stock: { _default: 1 } },
  { category: 'Pestañas y Pegamentos', title: 'Pestañas en grupo 40D+50D 0.07D MIX NAEZ', description: 'Pestañas en grupo, mix 40D y 50D con curva D 0.07, para volumen a medida.', price: 6800, image_url: null, tones: null, badge: 'Nuevo', stock: { _default: 1 } },
];

SEED_PRODUCTS.forEach((p, i) => { p.sort_order = i; });

window.SEED_PRODUCTS = SEED_PRODUCTS;
