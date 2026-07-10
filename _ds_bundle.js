/* @ds-bundle: {"format":4,"namespace":"SkyMakeupDesignSystem_ae8c70","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CategoryBubble","sourcePath":"components/core/CategoryBubble.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Marquee","sourcePath":"components/core/Marquee.jsx"},{"name":"SWATCHES","sourcePath":"components/core/ProductCard.jsx"},{"name":"ProductCard","sourcePath":"components/core/ProductCard.jsx"},{"name":"StepCard","sourcePath":"components/core/StepCard.jsx"},{"name":"TrustItem","sourcePath":"components/core/TrustItem.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"faa79a09dde0","components/core/Button.jsx":"4724e5b0f3bd","components/core/CategoryBubble.jsx":"0e51e524b2c5","components/core/Eyebrow.jsx":"dc75d2bd5a8d","components/core/Marquee.jsx":"e8a977893ec0","components/core/ProductCard.jsx":"9c1cb1a2ebfc","components/core/StepCard.jsx":"07ccf6827106","components/core/TrustItem.jsx":"5b6187aad560","dist/seed-products.js":"93484699bf70","dist/supabase-client.js":"afd4106ab6a5","ui_kits/admin/Admin.jsx":"cf34d28a1004","ui_kits/admin/OrdersTab.jsx":"012cff640ef6","ui_kits/admin/ProductsTab.jsx":"d065ee452bae","ui_kits/admin/SalesTab.jsx":"d7f6a7bdc20f","ui_kits/storefront/CartDrawer.jsx":"c02cb1c8e721","ui_kits/storefront/Storefront.jsx":"2e6596eece6d","ui_kits/storefront/seed-products.js":"93484699bf70","ui_kits/storefront/supabase-client.js":"afd4106ab6a5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SkyMakeupDesignSystem_ae8c70 = window.SkyMakeupDesignSystem_ae8c70 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * White uppercase badge that sits over a product swatch ("Más vendido",
 * "Nuevo", "En grupo"). Absolutely positioned top-left by default.
 */
function Badge({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    className: "sky-badge",
    style: {
      display: 'inline-block',
      background: '#fff',
      color: 'var(--frambuesa)',
      fontFamily: 'var(--font-body)',
      fontSize: '.72rem',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sky Makeup pill button. Raspberry primary by default; `ghost` is an
 * outlined raspberry variant; `small` reduces padding. Renders as <a> when
 * `href` is given, otherwise <button>.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  type = 'button',
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    textDecoration: 'none',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur), box-shadow var(--dur), background var(--dur), color var(--dur)',
    border: '2px solid transparent',
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  const sizes = {
    md: {
      padding: '12px 26px',
      fontSize: '.95rem'
    },
    sm: {
      padding: '9px 20px',
      fontSize: '.88rem'
    }
  };
  const variants = {
    primary: {
      background: 'var(--frambuesa)',
      color: '#fff',
      boxShadow: 'var(--shadow-btn)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--frambuesa)',
      borderColor: 'var(--frambuesa)'
    }
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, rest, {
    onClick: onClick,
    className: `sky-btn sky-btn--${variant}`,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CategoryBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Instagram-story-style category bubble: a circular icon disc wrapped in a
 * raspberry→pink conic-gradient ring, with a label and optional sublabel.
 * Lifts on hover.
 */
function CategoryBubble({
  icon,
  image,
  label,
  sublabel,
  href = '#',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({}, rest, {
    href: href,
    className: "sky-bubble",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '14px',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'transform var(--dur-med)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 'clamp(96px,13vw,148px)',
      height: 'clamp(96px,13vw,148px)',
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      fontSize: 'clamp(2rem,4vw,3rem)',
      background: 'var(--gradient-ring)',
      padding: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '2px',
      borderRadius: '50%',
      background: image ? `url(${image}) center / cover no-repeat` : 'var(--crema)',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden'
    }
  }, !image && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, icon))), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: '.95rem',
      fontWeight: 'var(--fw-semibold)'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: '.8rem',
      color: 'var(--text-muted)'
    }
  }, sublabel));
}
Object.assign(__ds_scope, { CategoryBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CategoryBubble.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small uppercase pill label. Two roles:
 *  - `eyebrow` (default): raspberry text on soft-pink fill — hero/section kicker.
 *  - `tag`: raspberry-or-chicle text, no fill — inline section tag.
 */
function Eyebrow({
  children,
  variant = 'eyebrow',
  color = 'chicle',
  style,
  ...rest
}) {
  const shared = {
    display: 'inline-block',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: 'var(--fs-xs)',
    textTransform: 'uppercase'
  };
  const variants = {
    eyebrow: {
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--frambuesa)',
      background: 'var(--chicle-suave)',
      padding: '7px 18px',
      borderRadius: 'var(--radius-pill)'
    },
    tag: {
      letterSpacing: 'var(--tracking-eyebrow)',
      color: color === 'frambuesa' ? 'var(--frambuesa)' : 'var(--chicle)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    className: `sky-eyebrow sky-eyebrow--${variant}`,
    style: {
      ...shared,
      ...variants[variant],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Full-bleed scrolling marquee strip. Repeats its items on an infinite loop
 * with a bullet separator. Raspberry band with white uppercase text — the
 * storefront's promo ribbon.
 */
function Marquee({
  items = [],
  separator = '✦',
  duration = 22,
  style,
  ...rest
}) {
  const run = [...items, ...items];
  const keyframes = 'sky-marquee-scroll';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: "sky-marquee",
    style: {
      background: 'var(--frambuesa)',
      overflow: 'hidden',
      padding: '12px 0',
      ...style
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes ${keyframes}{from{transform:translateX(0)}to{transform:translateX(-50%)}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: '0',
      whiteSpace: 'nowrap',
      animation: `${keyframes} ${duration}s linear infinite`,
      willChange: 'transform'
    }
  }, run.map((item, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '28px',
      color: '#fff',
      fontWeight: 'var(--fw-semibold)',
      fontSize: '.86rem',
      letterSpacing: 'var(--tracking-tag)',
      textTransform: 'uppercase',
      paddingInline: '14px'
    }
  }, item, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--chicle-suave)'
    }
  }, separator)))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/core/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Named gradient swatches lifted verbatim from the storefront (.sw-1 … .sw-6). */
const SWATCHES = {
  1: 'linear-gradient(135deg,#FFB6D3,#F26BA5 55%,#D8447F)',
  2: 'linear-gradient(135deg,#5C2B45,#A82A63 60%,#E85D9B)',
  3: 'linear-gradient(135deg,#FFE3EE,#FBB8D3 55%,#F48FB8)',
  4: 'linear-gradient(135deg,#FFD9E8,#FF9EC7 50%,#F26BA5)',
  5: 'linear-gradient(135deg,#F9E8F0,#EFC2D8 55%,#DE9DBF)',
  6: 'linear-gradient(135deg,#C94F86,#A82A63 55%,#7E1E4B)'
};

/**
 * Product catalogue card: gradient (or image) swatch on top, category / title /
 * description in the body, price + add button in the footer. Lifts on hover.
 */
function ProductCard({
  category,
  title,
  description,
  price,
  swatch = 1,
  image,
  images,
  fit = 'cover',
  badge,
  tones,
  onAdd,
  addLabel = 'Agregar 🛍️',
  getRemaining,
  style,
  ...rest
}) {
  const gallery = images && images.length ? images : image ? [image] : [];
  const hasImage = gallery.length > 0;
  const swatchBg = hasImage ? undefined : SWATCHES[swatch] || swatch;
  const [tone, setTone] = React.useState(tones && tones.length ? tones[0] : null);
  const [idx, setIdx] = React.useState(0);
  const [lightbox, setLightbox] = React.useState(false);
  const rem = t => getRemaining ? getRemaining(t) : Infinity;
  const soldOut = rem(tone) <= 0;
  const hasTones = tones && tones.length > 0;
  const anyLeft = hasTones ? tones.some(t => rem(t) > 0) : rem(tone) > 0;
  const fullyOut = !anyLeft;
  const shownBadge = fullyOut ? 'Agotado' : badge;
  const go = (e, dir) => {
    e.stopPropagation();
    setIdx(i => (i + dir + gallery.length) % gallery.length);
  };
  return /*#__PURE__*/React.createElement("article", _extends({}, rest, {
    className: "sky-card",
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform var(--dur-med), box-shadow var(--dur-med)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: () => hasImage && setLightbox(true),
    style: {
      aspectRatio: '4 / 5',
      position: 'relative',
      overflow: 'hidden',
      cursor: hasImage ? 'zoom-in' : 'default',
      background: hasImage ? fit === 'contain' ? 'var(--petalo)' : undefined : swatchBg,
      backgroundImage: hasImage ? `url(${gallery[idx]})` : undefined,
      backgroundSize: hasImage ? fit : undefined,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
  }, shownBadge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    style: {
      position: 'absolute',
      top: '14px',
      left: '14px',
      ...(fullyOut ? {
        background: 'var(--ciruela)',
        color: '#fff'
      } : {})
    }
  }, shownBadge), fullyOut && hasImage && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(62,34,51,.28)'
    }
  }), gallery.length > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => go(e, -1),
    "aria-label": "Foto anterior",
    style: galleryArrowStyle('left')
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => go(e, 1),
    "aria-label": "Foto siguiente",
    style: galleryArrowStyle('right')
  }, "\u203A"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '10px',
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: '5px'
    }
  }, gallery.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: i === idx ? '#fff' : 'rgba(255,255,255,.5)',
      boxShadow: '0 0 0 1px rgba(0,0,0,.15)'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      flex: 1
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.75rem',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-tag)',
      textTransform: 'uppercase',
      color: 'var(--chicle)'
    }
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.2rem',
      lineHeight: 1.25
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.9rem',
      color: 'var(--text-muted)',
      flex: 1,
      margin: 0
    }
  }, description), tones && tones.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      marginTop: '4px'
    }
  }, tones.map(t => {
    const tOut = rem(t) <= 0;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      type: "button",
      onClick: () => setTone(t),
      style: {
        padding: '5px 12px',
        borderRadius: 'var(--radius-pill)',
        fontSize: '.78rem',
        fontWeight: 'var(--fw-semibold)',
        cursor: 'pointer',
        border: t === tone ? '2px solid var(--frambuesa)' : 'var(--border-1)',
        background: t === tone ? 'var(--chicle-suave)' : 'transparent',
        color: tOut ? 'var(--ciruela-60)' : t === tone ? 'var(--frambuesa)' : 'var(--text-muted)',
        textDecoration: tOut ? 'line-through' : 'none',
        opacity: tOut ? 0.6 : 1,
        whiteSpace: 'nowrap',
        transition: 'border-color var(--dur), background var(--dur), color var(--dur)'
      }
    }, "Tono ", t, tOut ? ' · agotado' : '');
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-price)'
    }
  }, price), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: () => onAdd && onAdd(tone),
    disabled: soldOut
  }, soldOut ? 'Sin stock' : addLabel))), lightbox && hasImage && /*#__PURE__*/React.createElement("div", {
    onClick: () => setLightbox(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(62,34,51,.55)',
      display: 'grid',
      placeItems: 'center',
      padding: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      maxWidth: 'min(520px,90vw)',
      maxHeight: '82vh'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: gallery[idx],
    alt: title,
    style: {
      display: 'block',
      maxWidth: '100%',
      maxHeight: '82vh',
      borderRadius: 'var(--radius)',
      boxShadow: '0 20px 60px rgba(62,34,51,.4)',
      background: '#fff'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setLightbox(false),
    "aria-label": "Cerrar",
    style: {
      position: 'absolute',
      top: '-16px',
      right: '-16px',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      border: 'none',
      background: '#fff',
      color: 'var(--ciruela)',
      fontSize: '1.1rem',
      cursor: 'pointer',
      boxShadow: '0 4px 14px rgba(62,34,51,.3)'
    }
  }, "\u2715"), gallery.length > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => go(e, -1),
    "aria-label": "Foto anterior",
    style: galleryArrowStyle('left', true)
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => go(e, 1),
    "aria-label": "Foto siguiente",
    style: galleryArrowStyle('right', true)
  }, "\u203A")))));
}
function galleryArrowStyle(side, big) {
  return {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [side]: big ? '-18px' : '8px',
    width: big ? '38px' : '28px',
    height: big ? '38px' : '28px',
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(255,255,255,.88)',
    color: 'var(--ciruela)',
    fontSize: big ? '1.3rem' : '1.1rem',
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
    lineHeight: 1,
    boxShadow: '0 2px 8px rgba(62,34,51,.25)'
  };
}
Object.assign(__ds_scope, { SWATCHES, ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StepCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Numbered "how to buy" step card: soft-pink number disc (display font),
 * title and body copy, on a bordered petal-colored panel.
 */
function StepCard({
  n,
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: "sky-step",
    style: {
      background: 'var(--petalo)',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius)',
      padding: '30px 26px',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--chicle-suave)',
      color: 'var(--frambuesa)',
      fontFamily: 'var(--font-display)',
      fontSize: '1.2rem',
      marginBottom: '16px'
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-h3)',
      marginBottom: '8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.93rem',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/core/TrustItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Trust / reassurance row: leading emoji icon, bold title, muted supporting
 * line, on a cream bordered panel. Used in the "why choose us" grid.
 */
function TrustItem({
  icon,
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: "sky-trust",
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius)',
      padding: '26px 24px',
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.7rem',
      lineHeight: 1,
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: '1.02rem',
      marginBottom: '4px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.9rem',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, children)));
}
Object.assign(__ds_scope, { TrustItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TrustItem.jsx", error: String((e && e.message) || e) }); }

// dist/seed-products.js
try { (() => {
/* Sky Makeup — datos de los 30 productos actuales, para la carga inicial (seed) a Supabase.
   Las imágenes apuntan al dominio ya publicado (no hace falta resubirlas). */
const IMG_BASE = 'https://skymakeup.mitsistemas.com.ar/assets/products/framed/';
const SEED_PRODUCTS = [
// Rostro
{
  category: 'Rostro',
  title: 'Polvo compacto Rimera Quince tono 03',
  description: 'Acabado mate que sella tu base y controla brillos todo el día.',
  price: 3000,
  image_url: IMG_BASE + 'polvo-rimera-quince-03.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Rostro',
  title: 'Base Pink 21 tono 01',
  description: 'Cobertura media y textura liviana, ideal para el día a día.',
  price: 3000,
  image_url: null,
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Rostro',
  title: 'Rubor en polvo Ushas',
  description: 'Color natural y fácil de difuminar. Elegí tu tono.',
  price: 2500,
  image_url: IMG_BASE + 'rubor-ushas.jpeg',
  tones: ['04', '05'],
  stock: {
    '04': 1,
    '05': 1
  }
}, {
  category: 'Rostro',
  title: 'Base Ruby Rose tono 03',
  description: 'Cobertura alta con acabado luminoso.',
  price: 4500,
  image_url: null,
  tones: null,
  badge: 'Más vendido',
  stock: {
    _default: 1
  }
}, {
  category: 'Rostro',
  title: 'Base Huda tono 220',
  description: 'Acabado natural de larga duración.',
  price: 3000,
  image_url: null,
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Rostro',
  title: 'Corrector',
  description: 'Cubre ojeras e imperfecciones sin marcar líneas. Elegí tu tono.',
  price: 3000,
  image_url: IMG_BASE + 'corrector.jpeg',
  tones: ['02', '03'],
  stock: {
    '02': 1,
    '03': 1
  }
}, {
  category: 'Rostro',
  title: 'Set de esponjas x7',
  description: 'Set completo para aplicar base, corrector y polvo como una pro.',
  price: 3000,
  image_url: IMG_BASE + 'set-esponjas-x7.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
},
// Labiales
{
  category: 'Labiales',
  title: 'Gloss Pink 21',
  description: 'Brillo espejado sin sensación pegajosa. Elegí tu tono.',
  price: 3200,
  image_url: IMG_BASE + 'gloss-pink21.jpeg',
  tones: ['01', '05'],
  badge: 'Más vendido',
  stock: {
    '01': 1,
    '05': 1
  }
}, {
  category: 'Labiales',
  title: 'Gloss Mely tono 05',
  description: 'Hidrata y da brillo con un toque de color.',
  price: 3000,
  image_url: IMG_BASE + 'gloss-mely-05.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Labial matte Pink 21 tono 03',
  description: 'Acabado mate aterciopelado de larga duración.',
  price: 2500,
  image_url: IMG_BASE + 'labial-matte-pink21-03.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Labial matte y gloss 2 en 1 Laurenza',
  description: 'Dos acabados en un solo producto: mate de un lado, gloss del otro.',
  price: 3800,
  image_url: IMG_BASE + 'labial-gloss-laurenza.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Labial matte Mely tono 03',
  description: 'Color intenso con acabado mate parejo.',
  price: 2800,
  image_url: IMG_BASE + 'labial-matte-mely-03.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Lip gloss matte Mely 03',
  description: 'Brillo suave con acabado aterciopelado, no pegajoso.',
  price: 3000,
  image_url: IMG_BASE + 'lip-gloss-mely-03.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Gloss Tei tono 03',
  description: 'Brillo jugoso para looks del día a día.',
  price: 2500,
  image_url: null,
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Labial matte Tei tono 03',
  description: 'Mate cómodo que no reseca.',
  price: 3000,
  image_url: IMG_BASE + 'labial-matte-tei-03.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Labial matte en barra Ushas tono 02',
  description: 'Color parejo en una sola pasada.',
  price: 2500,
  image_url: IMG_BASE + 'labial-barra-ushas-02.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Delineador de labios',
  description: 'Define el contorno y hace durar más tu labial.',
  price: 1500,
  image_url: null,
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Labial matte Tei',
  description: 'Mate cómodo que no reseca, color parejo en un solo paso.',
  price: 3000,
  image_url: IMG_BASE + 'labial-matte-tei.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
},
// Máscaras y Delineadores
{
  category: 'Máscaras y Delineadores',
  title: 'Arqueador',
  description: 'Fija y da forma a tus cejas todo el día.',
  price: 3200,
  image_url: IMG_BASE + 'arqueador.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Máscaras y Delineadores',
  title: 'Paleta de sombras Pink 21',
  description: 'Tonos combinables para looks naturales o más intensos.',
  price: 5000,
  image_url: IMG_BASE + 'paleta-pink21.jpeg',
  tones: null,
  badge: 'Nuevo',
  stock: {
    _default: 1
  }
}, {
  category: 'Máscaras y Delineadores',
  title: 'Máscara de pestañas Pink 21',
  description: 'Volumen y largo sin grumos.',
  price: 3000,
  image_url: IMG_BASE + 'mascara-pink21.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Máscaras y Delineadores',
  title: 'Máscara de pestañas mini Tango',
  description: 'Formato mini, ideal para retocar en la cartera.',
  price: 3000,
  image_url: IMG_BASE + 'mascara-mini-tango.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Máscaras y Delineadores',
  title: 'Delineador en fibra líquido NAEZ',
  description: 'Punta de fibra ultrafina para un trazo preciso y parejo.',
  price: 2000,
  image_url: IMG_BASE + 'delineador-fibra-naez.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Máscaras y Delineadores',
  title: 'Delineador líquido Ruby Rose',
  description: 'Negro intenso y secado rápido para un cat-eye bien definido.',
  price: 4000,
  image_url: null,
  tones: null,
  stock: {
    _default: 1
  }
},
// Pestañas y Pegamentos
{
  category: 'Pestañas y Pegamentos',
  title: 'Sellador + Bonder',
  description: 'Fija tus pestañas y sella el pegamento para que duren muchísimo más.',
  price: 5500,
  image_url: IMG_BASE + 'sellador-bonder.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Pestañas y Pegamentos',
  title: 'Pestañas en grupo 40D+50D 0.07D MIX NAEZ',
  description: 'Pestañas en grupo, mix 40D y 50D con curva D 0.07, para volumen a medida.',
  price: 6800,
  image_url: null,
  tones: null,
  badge: 'Nuevo',
  stock: {
    _default: 1
  }
}];
SEED_PRODUCTS.forEach((p, i) => {
  p.sort_order = i;
});
window.SEED_PRODUCTS = SEED_PRODUCTS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "dist/seed-products.js", error: String((e && e.message) || e) }); }

// dist/supabase-client.js
try { (() => {
/* Sky Makeup — cliente Supabase compartido (storefront + admin).
   Cargar despu\u00e9s de la librer\u00eda supabase-js v2 vía CDN. */
window.sb = supabase.createClient('https://bohthswmsvcllowhmtgd.supabase.co', 'sb_publishable_C0QY7naaRdtZYvg4ei8ytQ_h65-piuW');
})(); } catch (e) { __ds_ns.__errors.push({ path: "dist/supabase-client.js", error: String((e && e.message) || e) }); }

// ui_kits/admin/Admin.jsx
try { (() => {
/* Sky Makeup — Panel de administración.
   Login + gestión de productos (stock, precio, fotos), pedidos y registro de ventas.
   Usa el cliente Supabase compartido (window.sb) y componentes del design system. */
const SK = window.SkyMakeupDesignSystem_ae8c70;
const {
  Button,
  Eyebrow
} = SK;
const wrap = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '0 24px'
};
const input = {
  padding: '10px 12px',
  borderRadius: '10px',
  border: '1px solid rgba(62,34,51,.18)',
  fontSize: '.92rem',
  fontFamily: 'var(--font-body)',
  color: 'var(--ciruela)',
  background: '#fff',
  width: '100%',
  boxSizing: 'border-box'
};
const card = {
  background: '#fff',
  border: 'var(--border-1)',
  borderRadius: 'var(--radius-md)',
  padding: '18px 20px'
};
const label = {
  fontSize: '.72rem',
  fontWeight: 600,
  letterSpacing: '.06em',
  textTransform: 'uppercase',
  color: 'var(--ciruela-60)',
  display: 'block',
  marginBottom: '4px'
};
function fmtMoney(n) {
  return '$' + Number(n || 0).toLocaleString('es-AR');
}

// ---- Redimensiona la foto subida a 4:5 centrada (mismo criterio que el catálogo). ----
function resizeToFrame(file, tw = 640, th = 800) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.max(tw / img.width, th / img.height);
        const dw = img.width * scale,
          dh = img.height * scale;
        const dx = (tw - dw) / 2,
          dy = (th - dh) / 2;
        const c = document.createElement('canvas');
        c.width = tw;
        c.height = th;
        c.getContext('2d').drawImage(img, dx, dy, dw, dh);
        c.toBlob(blob => resolve(blob), 'image/jpeg', 0.85);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
function slugify(s) {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 60);
}
const CATEGORIES = ['Rostro', 'Labiales', 'Máscaras y Delineadores', 'Pestañas y Pegamentos', 'Skincare'];
function Admin() {
  const [session, setSession] = React.useState(null);
  const [checking, setChecking] = React.useState(true);
  const [tab, setTab] = React.useState('productos');
  React.useEffect(() => {
    window.sb.auth.getSession().then(({
      data
    }) => {
      setSession(data.session);
      setChecking(false);
    });
    const {
      data: sub
    } = window.sb.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);
  if (checking) return null;
  if (!session) return /*#__PURE__*/React.createElement(Login, null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--petalo)',
      color: 'var(--ciruela)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: 'var(--border-1)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '68px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-display)',
      fontSize: '1.3rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '38px',
      height: '38px',
      borderRadius: '50%',
      border: '1px solid rgba(242,107,165,.4)',
      background: 'url(../../assets/logo.jpg) center / contain no-repeat',
      display: 'block'
    }
  }), "Sky ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      color: 'var(--frambuesa)'
    }
  }, "Makeup"), " \xB7 Admin"), /*#__PURE__*/React.createElement("button", {
    onClick: () => window.sb.auth.signOut(),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--ciruela-60)',
      cursor: 'pointer',
      fontSize: '.9rem'
    }
  }, "Cerrar sesi\xF3n")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      gap: '4px',
      paddingBottom: '2px'
    }
  }, [['productos', 'Productos'], ['pedidos', 'Pedidos'], ['ventas', 'Ventas']].map(([key, lbl]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: () => setTab(key),
    style: {
      padding: '10px 18px',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontSize: '.92rem',
      fontWeight: 600,
      color: tab === key ? 'var(--frambuesa)' : 'var(--ciruela-60)',
      borderBottom: tab === key ? '2px solid var(--frambuesa)' : '2px solid transparent'
    }
  }, lbl)))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '32px 24px 60px'
    }
  }, tab === 'productos' && /*#__PURE__*/React.createElement(ProductsTab, null), tab === 'pedidos' && /*#__PURE__*/React.createElement(OrdersTab, null), tab === 'ventas' && /*#__PURE__*/React.createElement(SalesTab, null)));
}
function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const submit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const {
      error
    } = await window.sb.auth.signInWithPassword({
      email: email.trim(),
      password
    });
    setLoading(false);
    if (error) setError('Email o contraseña incorrectos.');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--petalo)',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      ...card,
      width: '100%',
      maxWidth: '360px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.5rem',
      margin: '0 0 4px'
    }
  }, "Sky ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      color: 'var(--frambuesa)'
    }
  }, "Makeup")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ciruela-60)',
      fontSize: '.9rem',
      margin: '0 0 20px'
    }
  }, "Panel de administraci\xF3n"), /*#__PURE__*/React.createElement("label", {
    style: label
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    style: {
      ...input,
      marginBottom: '14px'
    },
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    style: label
  }, "Contrase\xF1a"), /*#__PURE__*/React.createElement("input", {
    style: {
      ...input,
      marginBottom: '16px'
    },
    type: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    required: true
  }), error && /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#B3261E',
      fontSize: '.85rem',
      margin: '0 0 12px'
    }
  }, error), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    style: {
      width: '100%',
      ...(loading ? {
        opacity: .6,
        pointerEvents: 'none'
      } : {})
    }
  }, loading ? 'Ingresando…' : 'Ingresar')));
}
window.Admin = Admin;
window.__skyAdminShared = {
  wrap,
  input,
  card,
  label,
  fmtMoney,
  resizeToFrame,
  slugify,
  CATEGORIES
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Admin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/OrdersTab.jsx
try { (() => {
/* Sky Makeup — Admin: pestaña Pedidos. Marcar pagado/cancelado; cancelar devuelve el stock. */
function OrdersTab() {
  const {
    fmtMoney
  } = window.__skyAdminShared;
  const [orders, setOrders] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState('pending');
  const load = () => {
    setLoading(true);
    window.sb.from('orders').select('*').order('created_at', {
      ascending: false
    }).then(({
      data,
      error
    }) => {
      if (!error) setOrders(data || []);
      setLoading(false);
    });
  };
  React.useEffect(load, []);
  const setStatus = async (order, status) => {
    if (status === 'cancelled' && order.status !== 'cancelled') {
      // Devolver stock reservado.
      for (const item of order.items || []) {
        if (item.productId) await window.sb.rpc('restore_stock', {
          p_id: item.productId,
          p_tone: item.tone,
          p_qty: item.qty
        });
      }
    }
    await window.sb.from('orders').update({
      status
    }).eq('id', order.id);
    setOrders(os => os.map(o => o.id === order.id ? {
      ...o,
      status
    } : o));
  };
  const shown = filter === 'todos' ? orders : orders.filter(o => o.status === filter);
  const badgeColor = {
    pending: '#B08900',
    paid: '#2E7D32',
    cancelled: '#B3261E'
  };
  const badgeLabel = {
    pending: 'Pendiente',
    paid: 'Pagado',
    cancelled: 'Cancelado'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '18px',
      flexWrap: 'wrap',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.4rem',
      margin: 0
    }
  }, "Pedidos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px'
    }
  }, [['pending', 'Pendientes'], ['paid', 'Pagados'], ['cancelled', 'Cancelados'], ['todos', 'Todos']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setFilter(k),
    style: {
      padding: '7px 14px',
      borderRadius: '999px',
      border: '1px solid rgba(62,34,51,.18)',
      cursor: 'pointer',
      fontSize: '.82rem',
      background: filter === k ? 'var(--frambuesa)' : '#fff',
      color: filter === k ? '#fff' : 'var(--ciruela)'
    }
  }, l)))), loading ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ciruela-60)'
    }
  }, "Cargando\u2026") : shown.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ciruela-60)'
    }
  }, "No hay pedidos en esta categor\xEDa.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, shown.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.id,
    style: {
      background: '#fff',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, o.customer_name), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ciruela-60)'
    }
  }, o.customer_phone), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.78rem',
      color: 'var(--ciruela-60)'
    }
  }, new Date(o.created_at).toLocaleString('es-AR'))), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 12px',
      borderRadius: '999px',
      background: badgeColor[o.status] + '20',
      color: badgeColor[o.status],
      fontSize: '.78rem',
      fontWeight: 700,
      whiteSpace: 'nowrap'
    }
  }, badgeLabel[o.status])), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '0 0 10px',
      padding: '0 0 0 18px',
      fontSize: '.88rem'
    }
  }, (o.items || []).map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, it.qty, "x ", it.title, " \u2014 ", fmtMoney(it.price * it.qty)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("b", null, fmtMoney(o.total)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, o.status !== 'paid' && /*#__PURE__*/React.createElement("button", {
    onClick: () => setStatus(o, 'paid'),
    style: {
      padding: '7px 14px',
      borderRadius: '999px',
      border: 'none',
      background: '#2E7D32',
      color: '#fff',
      fontSize: '.8rem',
      cursor: 'pointer'
    }
  }, "Marcar pagado"), o.status !== 'cancelled' && /*#__PURE__*/React.createElement("button", {
    onClick: () => setStatus(o, 'cancelled'),
    style: {
      padding: '7px 14px',
      borderRadius: '999px',
      border: '1px solid #B3261E',
      background: 'none',
      color: '#B3261E',
      fontSize: '.8rem',
      cursor: 'pointer'
    }
  }, "Cancelar")))))));
}
window.OrdersTab = OrdersTab;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/OrdersTab.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/ProductsTab.jsx
try { (() => {
/* Sky Makeup — Admin: pestaña Productos.
   Editar stock/precio/estado, agregar producto nuevo con foto (auto-recorte 4:5), eliminar. */
function ProductsTab() {
  const {
    wrap,
    input,
    card,
    label,
    fmtMoney,
    resizeToFrame,
    slugify,
    CATEGORIES
  } = window.__skyAdminShared;
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [showForm, setShowForm] = React.useState(false);
  const load = () => {
    setLoading(true);
    window.sb.from('products').select('*').order('category').order('sort_order').then(({
      data,
      error
    }) => {
      if (!error) setProducts(data || []);
      setLoading(false);
    });
  };
  React.useEffect(load, []);
  const saveField = async (id, patch) => {
    setProducts(ps => ps.map(p => p.id === id ? {
      ...p,
      ...patch
    } : p));
    await window.sb.from('products').update(patch).eq('id', id);
  };
  const removeProduct = async id => {
    if (!confirm('¿Eliminar este producto? No se puede deshacer.')) return;
    await window.sb.from('products').delete().eq('id', id);
    setProducts(ps => ps.filter(p => p.id !== id));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.4rem',
      margin: 0
    }
  }, "Productos"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowForm(s => !s),
    style: {
      padding: '10px 18px',
      borderRadius: '999px',
      border: 'none',
      background: 'var(--frambuesa)',
      color: '#fff',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, showForm ? 'Cancelar' : '+ Agregar producto')), showForm && /*#__PURE__*/React.createElement(NewProductForm, {
    onDone: () => {
      setShowForm(false);
      load();
    }
  }), loading ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ciruela-60)'
    }
  }, "Cargando\u2026") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductRow, {
    key: p.id,
    p: p,
    onSave: saveField,
    onDelete: removeProduct
  }))));
}
function ProductRow({
  p,
  onSave,
  onDelete
}) {
  const {
    input,
    fmtMoney,
    resizeToFrame,
    slugify
  } = window.__skyAdminShared;
  const [expanded, setExpanded] = React.useState(false);
  const [title, setTitle] = React.useState(p.title);
  const [description, setDescription] = React.useState(p.description || '');
  const [price, setPrice] = React.useState(p.price);
  const tones = p.tones && p.tones.length ? p.tones : null;
  const [stock, setStock] = React.useState(p.stock || {});
  const [images, setImages] = React.useState(p.images && p.images.length ? p.images : p.image_url ? [p.image_url] : []);
  const [uploading, setUploading] = React.useState(false);
  const commitPrice = () => {
    if (Number(price) !== Number(p.price)) onSave(p.id, {
      price: Number(price)
    });
  };
  const commitTitle = () => {
    if (title.trim() && title.trim() !== p.title) onSave(p.id, {
      title: title.trim()
    });
  };
  const commitDescription = () => {
    if (description !== (p.description || '')) onSave(p.id, {
      description
    });
  };
  const commitStock = (key, val) => {
    const next = {
      ...stock,
      [key]: Math.max(0, parseInt(val, 10) || 0)
    };
    setStock(next);
    onSave(p.id, {
      stock: next
    });
  };
  const addPhoto = async e => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const blob = await resizeToFrame(file);
      const path = `products/${Date.now()}-${slugify(p.title)}.jpg`;
      const {
        error: upErr
      } = await window.sb.storage.from('product-images').upload(path, blob, {
        contentType: 'image/jpeg'
      });
      if (upErr) throw upErr;
      const url = window.sb.storage.from('product-images').getPublicUrl(path).data.publicUrl;
      const next = [...images, url];
      setImages(next);
      await onSave(p.id, {
        images: next,
        image_url: next[0]
      });
    } catch (err) {
      alert(err.message || 'Error al subir la foto.');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };
  const removePhoto = async i => {
    const next = images.filter((_, idx) => idx !== i);
    setImages(next);
    await onSave(p.id, {
      images: next,
      image_url: next[0] || null
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      opacity: p.active ? 1 : .5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '56px 1.6fr 100px 1.4fr 90px 70px 70px',
      gap: '14px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '48px',
      height: '48px',
      borderRadius: '10px',
      background: images[0] ? `url(${images[0]}) center/cover` : 'var(--petalo)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: '.92rem',
      display: 'block'
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.78rem',
      color: 'var(--ciruela-60)'
    }
  }, p.category)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    style: {
      ...input,
      padding: '7px 8px'
    },
    type: "number",
    value: price,
    onChange: e => setPrice(e.target.value),
    onBlur: commitPrice
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, tones ? tones.map(t => /*#__PURE__*/React.createElement("label", {
    key: t,
    style: {
      fontSize: '.78rem',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }
  }, t, ": ", /*#__PURE__*/React.createElement("input", {
    style: {
      width: '46px',
      padding: '5px 6px',
      borderRadius: '6px',
      border: '1px solid rgba(62,34,51,.18)'
    },
    type: "number",
    min: "0",
    value: stock[t] ?? 0,
    onChange: e => commitStock(t, e.target.value)
  }))) : /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: '.78rem',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }
  }, "Stock: ", /*#__PURE__*/React.createElement("input", {
    style: {
      width: '54px',
      padding: '5px 6px',
      borderRadius: '6px',
      border: '1px solid rgba(62,34,51,.18)'
    },
    type: "number",
    min: "0",
    value: stock._default ?? 0,
    onChange: e => commitStock('_default', e.target.value)
  }))), /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: '.78rem',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      justifySelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: p.active,
    onChange: e => onSave(p.id, {
      active: e.target.checked
    })
  }), " Activo"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setExpanded(s => !s),
    style: {
      justifySelf: 'end',
      background: 'none',
      border: 'none',
      color: 'var(--frambuesa)',
      cursor: 'pointer',
      fontSize: '.85rem',
      fontWeight: 600
    }
  }, expanded ? 'Cerrar' : 'Editar'), /*#__PURE__*/React.createElement("button", {
    onClick: () => onDelete(p.id),
    style: {
      justifySelf: 'end',
      background: 'none',
      border: 'none',
      color: '#B3261E',
      cursor: 'pointer',
      fontSize: '.85rem'
    }
  }, "Eliminar")), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px',
      paddingTop: '16px',
      borderTop: '1px solid rgba(62,34,51,.1)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: '.72rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--ciruela-60)',
      display: 'block',
      marginBottom: '4px'
    }
  }, "Nombre del producto"), /*#__PURE__*/React.createElement("input", {
    style: input,
    value: title,
    onChange: e => setTitle(e.target.value),
    onBlur: commitTitle
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: '.72rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--ciruela-60)',
      display: 'block',
      marginBottom: '4px'
    }
  }, "Descripci\xF3n corta"), /*#__PURE__*/React.createElement("input", {
    style: input,
    value: description,
    onChange: e => setDescription(e.target.value),
    onBlur: commitDescription
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: '.72rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--ciruela-60)',
      display: 'block',
      marginBottom: '8px'
    }
  }, "Fotos (", images.length, ") \u2014 la primera es la principal"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    }
  }, images.map((url, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      width: '76px',
      height: '95px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: url,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '8px',
      border: i === 0 ? '2px solid var(--frambuesa)' : 'var(--border-1)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => removePhoto(i),
    style: {
      position: 'absolute',
      top: '-6px',
      right: '-6px',
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      border: 'none',
      background: '#fff',
      color: '#B3261E',
      fontSize: '.75rem',
      cursor: 'pointer',
      boxShadow: '0 2px 6px rgba(62,34,51,.3)'
    }
  }, "\u2715"))), /*#__PURE__*/React.createElement("label", {
    style: {
      width: '76px',
      height: '95px',
      borderRadius: '8px',
      border: '1.5px dashed rgba(62,34,51,.3)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      fontSize: '.72rem',
      color: 'var(--ciruela-60)',
      textAlign: 'center'
    }
  }, uploading ? 'Subiendo…' : '+ Agregar', /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: addPhoto,
    disabled: uploading,
    style: {
      display: 'none'
    }
  }))))));
}
function NewProductForm({
  onDone
}) {
  const {
    input,
    card,
    label,
    resizeToFrame,
    slugify,
    CATEGORIES
  } = window.__skyAdminShared;
  const [category, setCategory] = React.useState(CATEGORIES[0]);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [tonesStr, setTonesStr] = React.useState('');
  const [defaultStock, setDefaultStock] = React.useState('1');
  const [file, setFile] = React.useState(null);
  const [preview, setPreview] = React.useState(null);
  const [saving, setSaving] = React.useState(false);
  const [err, setErr] = React.useState('');
  const onFile = e => {
    const f = e.target.files[0];
    setFile(f);
    if (f) setPreview(URL.createObjectURL(f));
  };
  const submit = async e => {
    e.preventDefault();
    if (!title.trim() || !price) {
      setErr('Completá al menos el nombre y el precio.');
      return;
    }
    setSaving(true);
    setErr('');
    try {
      let image_url = null;
      if (file) {
        const blob = await resizeToFrame(file);
        const path = `products/${Date.now()}-${slugify(title)}.jpg`;
        const {
          error: upErr
        } = await window.sb.storage.from('product-images').upload(path, blob, {
          contentType: 'image/jpeg'
        });
        if (upErr) throw upErr;
        image_url = window.sb.storage.from('product-images').getPublicUrl(path).data.publicUrl;
      }
      const tones = tonesStr.trim() ? tonesStr.split(',').map(t => t.trim()).filter(Boolean) : null;
      const stock = tones ? Object.fromEntries(tones.map(t => [t, parseInt(defaultStock, 10) || 0])) : {
        _default: parseInt(defaultStock, 10) || 0
      };
      const {
        error
      } = await window.sb.from('products').insert({
        category,
        title: title.trim(),
        description: description.trim(),
        price: Number(price),
        image_url,
        images: image_url ? [image_url] : null,
        tones,
        stock,
        active: true
      });
      if (error) throw error;
      onDone();
    } catch (e2) {
      setErr(e2.message || 'Error al guardar.');
    } finally {
      setSaving(false);
    }
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      ...card,
      marginBottom: '24px',
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: label
  }, "Foto"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '140px',
      height: '175px',
      borderRadius: 'var(--radius-md)',
      background: preview ? `url(${preview}) center/contain no-repeat, var(--petalo)` : 'var(--petalo)',
      border: 'var(--border-1)',
      marginBottom: '8px'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: onFile,
    style: {
      fontSize: '.78rem'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.72rem',
      color: 'var(--ciruela-60)',
      margin: '6px 0 0'
    }
  }, "Se recorta y acomoda sola al recuadro.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: label
  }, "Nombre del producto"), /*#__PURE__*/React.createElement("input", {
    style: input,
    value: title,
    onChange: e => setTitle(e.target.value),
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: label
  }, "Categor\xEDa"), /*#__PURE__*/React.createElement("select", {
    style: input,
    value: category,
    onChange: e => setCategory(e.target.value)
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }, c)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: label
  }, "Precio ($)"), /*#__PURE__*/React.createElement("input", {
    style: input,
    type: "number",
    value: price,
    onChange: e => setPrice(e.target.value),
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: label
  }, "Descripci\xF3n corta"), /*#__PURE__*/React.createElement("input", {
    style: input,
    value: description,
    onChange: e => setDescription(e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: label
  }, "Tonos (opcional, separados por coma)"), /*#__PURE__*/React.createElement("input", {
    style: input,
    placeholder: "01, 05",
    value: tonesStr,
    onChange: e => setTonesStr(e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: label
  }, "Stock ", tonesStr.trim() ? '(por cada tono)' : ''), /*#__PURE__*/React.createElement("input", {
    style: input,
    type: "number",
    min: "0",
    value: defaultStock,
    onChange: e => setDefaultStock(e.target.value)
  })), err && /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: '1 / -1',
      color: '#B3261E',
      fontSize: '.85rem',
      margin: 0
    }
  }, err), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: saving,
    style: {
      padding: '11px 22px',
      borderRadius: '999px',
      border: 'none',
      background: 'var(--frambuesa)',
      color: '#fff',
      fontWeight: 600,
      cursor: 'pointer',
      opacity: saving ? .6 : 1
    }
  }, saving ? 'Guardando…' : 'Guardar producto'))));
}
window.ProductsTab = ProductsTab;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/ProductsTab.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/SalesTab.jsx
try { (() => {
/* Sky Makeup — Admin: pestaña Ventas. Registro simple de pedidos pagados. */
function SalesTab() {
  const {
    fmtMoney,
    card
  } = window.__skyAdminShared;
  const [orders, setOrders] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    window.sb.from('orders').select('*').eq('status', 'paid').order('created_at', {
      ascending: false
    }).then(({
      data,
      error
    }) => {
      if (!error) setOrders(data || []);
      setLoading(false);
    });
  }, []);
  const total = orders.reduce((s, o) => s + Number(o.total), 0);
  const now = new Date();
  const thisMonth = orders.filter(o => {
    const d = new Date(o.created_at);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  });
  const totalMonth = thisMonth.reduce((s, o) => s + Number(o.total), 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.4rem',
      margin: '0 0 18px'
    }
  }, "Ventas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: '16px',
      marginBottom: '26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.75rem',
      color: 'var(--ciruela-60)',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      marginBottom: '4px'
    }
  }, "Total hist\xF3rico"), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: '1.6rem',
      fontFamily: 'var(--font-display)',
      fontWeight: 400
    }
  }, fmtMoney(total))), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.75rem',
      color: 'var(--ciruela-60)',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      marginBottom: '4px'
    }
  }, "Este mes"), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: '1.6rem',
      fontFamily: 'var(--font-display)',
      fontWeight: 400
    }
  }, fmtMoney(totalMonth))), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.75rem',
      color: 'var(--ciruela-60)',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      marginBottom: '4px'
    }
  }, "Pedidos pagados"), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: '1.6rem',
      fontFamily: 'var(--font-display)',
      fontWeight: 400
    }
  }, orders.length))), loading ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ciruela-60)'
    }
  }, "Cargando\u2026") : orders.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ciruela-60)'
    }
  }, "Todav\xEDa no hay ventas confirmadas.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, orders.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.id,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#fff',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: '.92rem'
    }
  }, o.customer_name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.78rem',
      color: 'var(--ciruela-60)'
    }
  }, new Date(o.created_at).toLocaleDateString('es-AR'), " \xB7 ", (o.items || []).length, " producto(s)")), /*#__PURE__*/React.createElement("b", null, fmtMoney(o.total))))));
}
window.SalesTab = SalesTab;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/SalesTab.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CartDrawer.jsx
try { (() => {
/* Sky Makeup storefront — slide-in cart drawer.
   Two-step checkout: (1) el pedido, con total + aclaración de envío;
   (2) datos bancarios para transferir + envío de comprobante por WhatsApp.
   Composes Button from the design system. */
const {
  Button: SkyButton
} = window.SkyMakeupDesignSystem_ae8c70;

// Datos bancarios de Sky Makeup (transferencia).
const BANK = {
  titular: 'Cielo Oriana Benitez',
  banco: 'Brubank',
  cuit: '27-44233791-3',
  alias: 'cielobenitez.bru',
  cbu: '1430001713039417410016',
  cuenta: '1303941741001'
};
const inputStyle = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '12px 14px',
  borderRadius: 'var(--radius-md)',
  border: 'var(--border-1)',
  fontSize: '.95rem',
  fontFamily: 'var(--font-body)',
  color: 'var(--ciruela)',
  background: '#fff'
};
function CartDrawer({
  open,
  items,
  onClose,
  onInc,
  onDec,
  total,
  waLink,
  onFinalize
}) {
  const fmt = n => '$' + n.toLocaleString('es-AR');
  const entries = Object.entries(items);
  const [step, setStep] = React.useState('cart');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [sending, setSending] = React.useState(false);
  const canContinue = entries.length > 0 && name.trim().length > 1 && phone.trim().length > 5;
  const finalizeAndSend = async () => {
    setSending(true);
    try {
      await onFinalize({
        name: name.trim(),
        phone: phone.trim()
      });
    } finally {
      setSending(false);
    }
  };

  // Al cerrar el carrito o vaciarlo, volvemos al paso 1.
  React.useEffect(() => {
    if (!open) setStep('cart');
  }, [open]);
  React.useEffect(() => {
    if (entries.length === 0) setStep('cart');
  }, [entries.length]);
  const comprobanteMsg = () => {
    const lines = entries.map(([name, item]) => `• ${item.qty}x ${name} — ${fmt(item.price * item.qty)}`);
    return `¡Hola Sky Makeup! 💖 Ya hice la transferencia de mi pedido:\n\n${lines.join('\n')}\n\nTotal productos: ${fmt(total)}\n\nTe adjunto el comprobante ✨ (coordinamos el envío por acá)`;
  };
  const comprobanteHref = waLink ? waLink(comprobanteMsg()) : '#';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      zIndex: 90,
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity .2s'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 95,
      width: 'min(420px,100%)',
      background: 'var(--crema)',
      display: 'flex',
      flexDirection: 'column',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform .25s ease',
      boxShadow: 'var(--shadow-drawer)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 24px',
      borderBottom: 'var(--border-1)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.4rem',
      margin: 0
    }
  }, step === 'cart' ? 'Tu pedido' : 'Datos para transferir'), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar carrito",
    style: {
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: 'var(--ciruela-60)',
      lineHeight: 1,
      padding: '6px'
    }
  }, "\u2715")), step === 'cart' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '18px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, entries.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--ciruela-60)',
      padding: '50px 20px',
      fontSize: '.95rem'
    }
  }, "Tu carrito est\xE1 vac\xEDo. Agreg\xE1 productos del cat\xE1logo \u2728"), entries.map(([name, item]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '12px',
      background: 'var(--petalo)',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: '.95rem',
      display: 'block'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.85rem',
      color: 'var(--ciruela-60)'
    }
  }, fmt(item.price), " c/u")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(QtyBtn, {
    onClick: () => onDec(name)
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: '20px',
      textAlign: 'center',
      fontWeight: 600
    }
  }, item.qty), /*#__PURE__*/React.createElement(QtyBtn, {
    onClick: () => onInc(name),
    disabled: item.stock != null && item.qty >= item.stock
  }, "+"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 26px',
      borderTop: 'var(--border-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginTop: '4px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Nombre y apellido",
    style: inputStyle
  }), /*#__PURE__*/React.createElement("input", {
    value: phone,
    onChange: e => setPhone(e.target.value),
    placeholder: "Tu n\xFAmero de WhatsApp",
    style: inputStyle
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '1.1rem',
      margin: '14px 0 6px'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: '1.25rem'
    }
  }, fmt(total))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.8rem',
      color: 'var(--ciruela-60)',
      margin: '0 0 16px'
    }
  }, "El env\xEDo no est\xE1 incluido. Coordinamos el costo por WhatsApp al finalizar la compra."), /*#__PURE__*/React.createElement(SkyButton, {
    onClick: () => setStep('payment'),
    disabled: !canContinue,
    style: {
      width: '100%',
      ...(!canContinue ? {
        pointerEvents: 'none',
        opacity: .5
      } : {})
    }
  }, "Continuar con el pago"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '18px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--petalo)',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.75rem',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-tag)',
      textTransform: 'uppercase',
      color: 'var(--chicle)',
      marginBottom: '4px'
    }
  }, "Monto a transferir"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: '1.5rem',
      fontFamily: 'var(--font-display)',
      fontWeight: 400
    }
  }, fmt(total)), /*#__PURE__*/React.createElement(CopyBtn, {
    value: String(total)
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.78rem',
      color: 'var(--ciruela-60)',
      margin: '8px 0 0'
    }
  }, "Es solo el costo de los productos. El env\xEDo se suma aparte cuando lo coordinemos por WhatsApp.")), /*#__PURE__*/React.createElement(CopyRow, {
    label: "Titular",
    value: BANK.titular
  }), /*#__PURE__*/React.createElement(CopyRow, {
    label: "Banco",
    value: BANK.banco
  }), /*#__PURE__*/React.createElement(CopyRow, {
    label: "Alias",
    value: BANK.alias,
    copyable: true
  }), /*#__PURE__*/React.createElement(CopyRow, {
    label: "CBU",
    value: BANK.cbu,
    copyable: true,
    mono: true
  }), /*#__PURE__*/React.createElement(CopyRow, {
    label: "N\xB0 de cuenta",
    value: BANK.cuenta,
    copyable: true,
    mono: true
  }), /*#__PURE__*/React.createElement(CopyRow, {
    label: "CUIT/CUIL",
    value: BANK.cuit,
    copyable: true,
    mono: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.88rem',
      color: 'var(--ciruela)',
      textAlign: 'center',
      margin: '6px 0 0',
      lineHeight: 1.5
    }
  }, "Hac\xE9 la transferencia y mandanos el comprobante por WhatsApp \uD83D\uDC96", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ciruela-60)',
      fontSize: '.82rem'
    }
  }, "Reservamos tu pedido apenas lo recibimos."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 24px 24px',
      borderTop: 'var(--border-1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(SkyButton, {
    href: comprobanteHref,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: finalizeAndSend,
    style: {
      width: '100%',
      ...(sending ? {
        pointerEvents: 'none',
        opacity: .6
      } : {})
    }
  }, sending ? 'Enviando…' : 'Enviar comprobante por WhatsApp 🛍️'), /*#__PURE__*/React.createElement(SkyButton, {
    variant: "ghost",
    onClick: () => setStep('cart'),
    style: {
      width: '100%'
    }
  }, "Volver al pedido")))));
}
function CopyRow({
  label,
  value,
  copyable,
  mono
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.72rem',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-tag)',
      textTransform: 'uppercase',
      color: 'var(--ciruela-60)',
      marginBottom: '2px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.98rem',
      fontWeight: 600,
      fontFamily: mono ? 'ui-monospace, SFMono-Regular, Menlo, monospace' : 'inherit',
      wordBreak: 'break-all'
    }
  }, value)), copyable && /*#__PURE__*/React.createElement(CopyBtn, {
    value: value
  }));
}
function CopyBtn({
  value
}) {
  const [done, setDone] = React.useState(false);
  const copy = () => {
    try {
      navigator.clipboard.writeText(value).then(() => {
        setDone(true);
        setTimeout(() => setDone(false), 1600);
      });
    } catch (e) {}
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    style: {
      flexShrink: 0,
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid var(--frambuesa)',
      cursor: 'pointer',
      background: done ? 'var(--frambuesa)' : 'transparent',
      color: done ? '#fff' : 'var(--frambuesa)',
      fontSize: '.8rem',
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      transition: 'background .12s, color .12s',
      whiteSpace: 'nowrap'
    }
  }, done ? 'Copiado ✓' : 'Copiar');
}
function QtyBtn({
  children,
  onClick,
  disabled
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      border: '1.5px solid var(--frambuesa)',
      background: h && !disabled ? 'var(--frambuesa)' : 'transparent',
      color: h && !disabled ? '#fff' : 'var(--frambuesa)',
      fontSize: '1rem',
      fontWeight: 700,
      cursor: disabled ? 'not-allowed' : 'pointer',
      lineHeight: 1,
      opacity: disabled ? 0.4 : 1,
      transition: 'background .12s, color .12s'
    }
  }, children);
}
window.CartDrawer = CartDrawer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Storefront.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Sky Makeup storefront — full landing page recreation.
   Composes design-system primitives (Button, Eyebrow, Marquee, CategoryBubble,
   ProductCard, StepCard, TrustItem) + the CartDrawer into the real page layout. */
const SK = window.SkyMakeupDesignSystem_ae8c70;
const {
  Button,
  Eyebrow,
  Marquee,
  CategoryBubble,
  ProductCard,
  StepCard,
  TrustItem
} = SK;
const PRODUCT_CATEGORY_ORDER = ['Rostro', 'Labiales', 'Máscaras y Delineadores', 'Pestañas y Pegamentos'];

// ---- Stock ----
// El stock ahora vive en la base de datos (tabla products.stock, jsonb).
// stockFor lee el jsonb cargado por producto: { _default: n } o { tono: n }.
const stockFor = (p, tone) => {
  const k = tone || '_default';
  return p.stock && p.stock[k] != null ? p.stock[k] : 0;
};

// ⚠️ REEMPLAZAR con el número real de WhatsApp (formato internacional sin +, sin espacios).
// Ej. Argentina Santa Fe: 549342XXXXXXX
const WHATSAPP_NUMBER = '5493425931018';
const INSTAGRAM_URL = 'https://www.instagram.com/sky_makeup25';
const waLink = msg => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
const GENERIC_WA_MSG = '¡Hola Sky Makeup! 💖 Quiero hacer un pedido.';
const CATEGORY_ANCHORS = {
  'Rostro': 'cat-rostro',
  'Labiales': 'cat-labiales',
  'Máscaras y Delineadores': 'cat-mascaras',
  'Skincare': 'productos',
  'Pestañas y Pegamentos': 'cat-pestanas'
};
const CATEGORIES = [{
  image: '../../assets/category-rostro.png',
  label: 'Rostro',
  sublabel: 'Bases · Correctores · Rubores · Contornos · Iluminadores'
}, {
  image: '../../assets/category-labiales.png',
  label: 'Labiales',
  sublabel: 'Mattes · Gloss · Delineadores de labios'
}, {
  image: '../../assets/category-mascaras.png',
  label: 'Máscaras y Delineadores',
  sublabel: 'Máscaras · Delineadores'
}, {
  image: '../../assets/category-skincare.png',
  label: 'Skincare',
  sublabel: 'Limpiezas · Hidratantes'
}, {
  image: '../../assets/category-pestanas.png',
  label: 'Pestañas y Pegamentos',
  sublabel: 'Pestañas · Pegamentos'
}];
const wrap = {
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 24px'
};
const sectionHead = {
  maxWidth: '560px',
  marginBottom: '48px'
};
const h2 = {
  fontFamily: 'var(--font-display)',
  fontWeight: 400,
  fontSize: 'var(--fs-h2)',
  lineHeight: 1.15,
  marginTop: '10px'
};
const subP = {
  marginTop: '12px',
  color: 'var(--ciruela-60)'
};
function Storefront() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [cart, setCart] = React.useState(() => {
    try {
      const saved = localStorage.getItem('sky_cart');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    let cancelled = false;
    window.sb.from('products').select('*').eq('active', true).order('sort_order').then(({
      data,
      error
    }) => {
      if (cancelled) return;
      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }
      const mapped = (data || []).map(row => ({
        id: row.id,
        category: row.category,
        title: row.title,
        description: row.description,
        price: '$' + Number(row.price).toLocaleString('es-AR'),
        raw: Number(row.price),
        image: row.image_url,
        images: row.images && row.images.length ? row.images : row.image_url ? [row.image_url] : undefined,
        fit: row.image_url ? 'contain' : undefined,
        badge: row.badge,
        tones: row.tones,
        stock: row.stock
      }));
      setProducts(mapped);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);
  React.useEffect(() => {
    try {
      localStorage.setItem('sky_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);
  const cartKey = (p, tone) => tone ? `${p.title} · Tono ${tone}` : p.title;
  const remainingFor = (p, tone) => stockFor(p, tone) - (cart[cartKey(p, tone)]?.qty || 0);
  const add = (p, tone) => {
    const key = cartKey(p, tone);
    const stock = stockFor(p, tone);
    setCart(c => {
      const have = c[key]?.qty || 0;
      if (have >= stock) return c; // sin stock
      const next = {
        ...c
      };
      next[key] = {
        price: p.raw,
        qty: have + 1,
        stock,
        productId: p.id,
        tone: tone || null
      };
      return next;
    });
    setOpen(true);
  };
  const inc = name => setCart(c => {
    const item = c[name];
    if (!item || item.stock != null && item.qty >= item.stock) return c;
    return {
      ...c,
      [name]: {
        ...item,
        qty: item.qty + 1
      }
    };
  });
  const dec = name => setCart(c => {
    const next = {
      ...c
    };
    if (next[name].qty <= 1) delete next[name];else next[name] = {
      ...next[name],
      qty: next[name].qty - 1
    };
    return next;
  });

  // Al enviar el comprobante: guarda el pedido en la base, descuenta stock real,
  // vacía el carrito y cierra.
  const finalize = async ({
    name,
    phone
  }) => {
    const items = Object.entries(cart).map(([label, item]) => ({
      title: label,
      qty: item.qty,
      price: item.price,
      productId: item.productId,
      tone: item.tone
    }));
    const total = Object.values(cart).reduce((s, i) => s + i.qty * i.price, 0);
    await window.sb.from('orders').insert({
      customer_name: name,
      customer_phone: phone,
      items,
      total,
      status: 'pending'
    });
    for (const item of Object.values(cart)) {
      if (item.productId) {
        await window.sb.rpc('decrement_stock', {
          p_id: item.productId,
          p_tone: item.tone,
          p_qty: item.qty
        });
      }
    }
    setCart({});
    setOpen(false);
  };
  const count = Object.values(cart).reduce((s, i) => s + i.qty, 0);
  const total = Object.values(cart).reduce((s, i) => s + i.qty * i.price, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--petalo)',
      color: 'var(--ciruela)',
      minHeight: '100%',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,243,247,.88)',
      backdropFilter: 'blur(12px)',
      borderBottom: 'var(--border-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '68px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-display)',
      fontSize: '1.45rem',
      textDecoration: 'none',
      color: 'inherit',
      letterSpacing: '.01em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '52px',
      height: '52px',
      borderRadius: '50%',
      border: '1px solid rgba(242,107,165,.54)',
      background: 'url(../../assets/logo.jpg) center / contain no-repeat',
      display: 'block',
      flexShrink: 0
    }
  }), "Sky ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      color: 'var(--frambuesa)'
    }
  }, "Makeup")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '26px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#categorias",
    style: navLink,
    className: "sky-nav-link"
  }, "Categor\xEDas"), /*#__PURE__*/React.createElement("a", {
    href: "#productos",
    style: navLink,
    className: "sky-nav-link"
  }, "Productos"), /*#__PURE__*/React.createElement("a", {
    href: "#como-comprar",
    style: navLink,
    className: "sky-nav-link"
  }, "C\xF3mo comprar"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    href: waLink(GENERIC_WA_MSG),
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Pedir por WhatsApp")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '84px 0 60px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Skincare & Makeup \xB7 Santa Fe"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-hero)',
      lineHeight: 1.08,
      letterSpacing: '-.01em',
      maxWidth: '16ch',
      margin: '26px auto 22px'
    }
  }, "Tu piel merece", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(95deg, var(--frambuesa), #DB4F92)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent'
    }
  }, "ese brillo")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '46ch',
      margin: '0 auto 34px',
      color: 'var(--ciruela-60)',
      fontSize: '1.08rem'
    }
  }, "Maquillaje y skincare con productos aprobados, precios claros y entrega el mismo d\xEDa. Eleg\xEDs, ped\xEDs y en un rato lo ten\xE9s."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "#productos"
  }, "Ver cat\xE1logo"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: INSTAGRAM_URL,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "@sky_makeup25")))), /*#__PURE__*/React.createElement(Marquee, {
    items: ['🚚 Envíos al instante', '📍 Retiro en zona', '💖 Productos aprobados', '💳 Pago por transferencia', '🚚 Envíos al instante', '📍 Retiro en zona', '💖 Productos aprobados', '💳 Todos los medios de pago']
  }), /*#__PURE__*/React.createElement("section", {
    id: "categorias",
    style: {
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionHead
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    variant: "tag"
  }, "Categor\xEDas"), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Como en nuestras historias, pero m\xE1s grande"), /*#__PURE__*/React.createElement("p", {
    style: subP
  }, "Organizamos el cat\xE1logo igual que en Instagram: toc\xE1 una categor\xEDa y encontr\xE1 lo tuyo.")), /*#__PURE__*/React.createElement("div", {
    className: "sky-categories"
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryBubble, _extends({
    key: c.label
  }, c, {
    href: `#${CATEGORY_ANCHORS[c.label]}`
  })))))), /*#__PURE__*/React.createElement("section", {
    id: "productos",
    style: {
      padding: '20px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionHead
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    variant: "tag"
  }, "Cat\xE1logo"), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Lo que se est\xE1 pidiendo"), /*#__PURE__*/React.createElement("p", {
    style: subP
  }, "Stock real, precios directos. Si te gusta, escribinos y te lo reservamos.")), PRODUCT_CATEGORY_ORDER.map(cat => /*#__PURE__*/React.createElement("div", {
    key: cat,
    id: CATEGORY_ANCHORS[cat],
    style: {
      marginBottom: '46px',
      scrollMarginTop: '84px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '.85rem',
      letterSpacing: 'var(--tracking-tag)',
      textTransform: 'uppercase',
      color: 'var(--chicle)',
      marginBottom: '18px'
    }
  }, cat), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))',
      gap: '22px'
    }
  }, products.filter(p => p.category === cat).map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    onAdd: tone => add(p, tone),
    getRemaining: tone => remainingFor(p, tone)
  })))))), loading && /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--ciruela-60)'
    }
  }, "Cargando cat\xE1logo\u2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '10px',
      fontSize: '.88rem',
      color: 'var(--ciruela-60)',
      textAlign: 'center'
    }
  }, "\xBFBusc\xE1s Skincare? Todav\xEDa no tenemos stock cargado ac\xE1 \u2014 escribinos por Instagram y te contamos qu\xE9 hay."))), /*#__PURE__*/React.createElement("section", {
    id: "como-comprar",
    style: {
      padding: '80px 0',
      background: 'var(--crema)',
      borderTop: 'var(--border-1)',
      borderBottom: 'var(--border-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionHead
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    variant: "tag"
  }, "C\xF3mo comprar"), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Tres pasos y lo ten\xE9s hoy")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: '26px'
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    n: 1,
    title: "Eleg\xED tu producto"
  }, "Mir\xE1 el cat\xE1logo ac\xE1 o en nuestras historias de Instagram y mandanos qu\xE9 quer\xE9s."), /*#__PURE__*/React.createElement(StepCard, {
    n: 2,
    title: "Pag\xE1 por transferencia"
  }, "Te pasamos los datos bancarios, transfer\xEDs y nos mand\xE1s el comprobante. Te confirmamos al instante."), /*#__PURE__*/React.createElement(StepCard, {
    n: 3,
    title: "Recibilo o retiralo"
  }, "Env\xEDos al instante dentro de Santa Fe o retiro en zona coordinando horario.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionHead
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    variant: "tag"
  }, "Por qu\xE9 elegirnos"), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Compr\xE1s tranquila")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
      gap: '22px'
    }
  }, /*#__PURE__*/React.createElement(TrustItem, {
    icon: "\uD83D\uDC96",
    title: "Productos aprobados"
  }, "Trabajamos solo con cosm\xE9tica habilitada y de marcas confiables."), /*#__PURE__*/React.createElement(TrustItem, {
    icon: "\uD83D\uDE9A",
    title: "Env\xEDos al instante"
  }, "Dentro de Santa Fe, tu pedido sale el mismo d\xEDa que lo confirm\xE1s."), /*#__PURE__*/React.createElement(TrustItem, {
    icon: "\uD83D\uDCCD",
    title: "Retiro en zona"
  }, "Coordinamos punto y horario de retiro sin costo de env\xEDo."), /*#__PURE__*/React.createElement(TrustItem, {
    icon: "\uD83D\uDCB3",
    title: "Pago por transferencia"
  }, "Transferencia bancaria y nos envi\xE1s el comprobante por WhatsApp. Simple y seguro.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      textAlign: 'center',
      padding: '90px 24px',
      background: 'var(--gradient-cta)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-h2-final)',
      maxWidth: '18ch',
      margin: '0 auto 16px',
      lineHeight: 1.12
    }
  }, "\xBFLista para tu pr\xF3ximo brillo?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.82)',
      maxWidth: '44ch',
      margin: '0 auto 34px'
    }
  }, "Escribinos y armamos tu pedido en minutos. Atendemos por WhatsApp y por mensaje directo en Instagram."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: waLink(GENERIC_WA_MSG),
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      background: '#fff',
      color: 'var(--frambuesa)',
      boxShadow: 'var(--shadow-cta)'
    }
  }, "Escribir por WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: INSTAGRAM_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,.7)'
    }
  }, "Seguir en Instagram"))), /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '44px 0',
      background: 'var(--ciruela)',
      color: 'rgba(255,255,255,.75)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      fontSize: '.9rem'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-display)',
      fontSize: '1.45rem',
      color: '#fff',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '38px',
      height: '38px',
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,.5)',
      background: 'url(../../assets/logo.jpg) center / contain no-repeat',
      display: 'block',
      flexShrink: 0
    }
  }), "Sky ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      color: 'var(--chicle)'
    }
  }, "Makeup")), /*#__PURE__*/React.createElement("span", null, "San Jer\xF3nimo 4759, Santa Fe \xB7 Skincare & Makeup"), /*#__PURE__*/React.createElement("a", {
    href: INSTAGRAM_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'rgba(255,255,255,.85)'
    }
  }, "@sky_makeup25"))), count > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(true),
    "aria-label": "Abrir carrito",
    style: {
      position: 'fixed',
      right: '22px',
      bottom: '22px',
      zIndex: 80,
      width: '62px',
      height: '62px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--frambuesa)',
      color: '#fff',
      fontSize: '1.5rem',
      boxShadow: 'var(--shadow-fab)',
      display: 'grid',
      placeItems: 'center'
    }
  }, "\uD83D\uDECD\uFE0F", /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '-4px',
      right: '-4px',
      minWidth: '24px',
      height: '24px',
      padding: '0 6px',
      borderRadius: '999px',
      background: 'var(--chicle)',
      color: '#fff',
      fontSize: '.8rem',
      fontWeight: 700,
      display: 'grid',
      placeItems: 'center',
      border: '2px solid var(--petalo)'
    }
  }, count)), /*#__PURE__*/React.createElement(window.CartDrawer, {
    open: open,
    items: cart,
    total: total,
    waLink: waLink,
    onClose: () => setOpen(false),
    onInc: inc,
    onDec: dec,
    onFinalize: finalize
  }));
}
const navLink = {
  textDecoration: 'none',
  fontSize: '.92rem',
  fontWeight: 500,
  color: 'var(--ciruela-60)'
};
window.Storefront = Storefront;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Storefront.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/seed-products.js
try { (() => {
/* Sky Makeup — datos de los 30 productos actuales, para la carga inicial (seed) a Supabase.
   Las imágenes apuntan al dominio ya publicado (no hace falta resubirlas). */
const IMG_BASE = 'https://skymakeup.mitsistemas.com.ar/assets/products/framed/';
const SEED_PRODUCTS = [
// Rostro
{
  category: 'Rostro',
  title: 'Polvo compacto Rimera Quince tono 03',
  description: 'Acabado mate que sella tu base y controla brillos todo el día.',
  price: 3000,
  image_url: IMG_BASE + 'polvo-rimera-quince-03.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Rostro',
  title: 'Base Pink 21 tono 01',
  description: 'Cobertura media y textura liviana, ideal para el día a día.',
  price: 3000,
  image_url: null,
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Rostro',
  title: 'Rubor en polvo Ushas',
  description: 'Color natural y fácil de difuminar. Elegí tu tono.',
  price: 2500,
  image_url: IMG_BASE + 'rubor-ushas.jpeg',
  tones: ['04', '05'],
  stock: {
    '04': 1,
    '05': 1
  }
}, {
  category: 'Rostro',
  title: 'Base Ruby Rose tono 03',
  description: 'Cobertura alta con acabado luminoso.',
  price: 4500,
  image_url: null,
  tones: null,
  badge: 'Más vendido',
  stock: {
    _default: 1
  }
}, {
  category: 'Rostro',
  title: 'Base Huda tono 220',
  description: 'Acabado natural de larga duración.',
  price: 3000,
  image_url: null,
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Rostro',
  title: 'Corrector',
  description: 'Cubre ojeras e imperfecciones sin marcar líneas. Elegí tu tono.',
  price: 3000,
  image_url: IMG_BASE + 'corrector.jpeg',
  tones: ['02', '03'],
  stock: {
    '02': 1,
    '03': 1
  }
}, {
  category: 'Rostro',
  title: 'Set de esponjas x7',
  description: 'Set completo para aplicar base, corrector y polvo como una pro.',
  price: 3000,
  image_url: IMG_BASE + 'set-esponjas-x7.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
},
// Labiales
{
  category: 'Labiales',
  title: 'Gloss Pink 21',
  description: 'Brillo espejado sin sensación pegajosa. Elegí tu tono.',
  price: 3200,
  image_url: IMG_BASE + 'gloss-pink21.jpeg',
  tones: ['01', '05'],
  badge: 'Más vendido',
  stock: {
    '01': 1,
    '05': 1
  }
}, {
  category: 'Labiales',
  title: 'Gloss Mely tono 05',
  description: 'Hidrata y da brillo con un toque de color.',
  price: 3000,
  image_url: IMG_BASE + 'gloss-mely-05.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Labial matte Pink 21 tono 03',
  description: 'Acabado mate aterciopelado de larga duración.',
  price: 2500,
  image_url: IMG_BASE + 'labial-matte-pink21-03.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Labial matte y gloss 2 en 1 Laurenza',
  description: 'Dos acabados en un solo producto: mate de un lado, gloss del otro.',
  price: 3800,
  image_url: IMG_BASE + 'labial-gloss-laurenza.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Labial matte Mely tono 03',
  description: 'Color intenso con acabado mate parejo.',
  price: 2800,
  image_url: IMG_BASE + 'labial-matte-mely-03.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Lip gloss matte Mely 03',
  description: 'Brillo suave con acabado aterciopelado, no pegajoso.',
  price: 3000,
  image_url: IMG_BASE + 'lip-gloss-mely-03.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Gloss Tei tono 03',
  description: 'Brillo jugoso para looks del día a día.',
  price: 2500,
  image_url: null,
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Labial matte Tei tono 03',
  description: 'Mate cómodo que no reseca.',
  price: 3000,
  image_url: IMG_BASE + 'labial-matte-tei-03.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Labial matte en barra Ushas tono 02',
  description: 'Color parejo en una sola pasada.',
  price: 2500,
  image_url: IMG_BASE + 'labial-barra-ushas-02.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Delineador de labios',
  description: 'Define el contorno y hace durar más tu labial.',
  price: 1500,
  image_url: null,
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Labiales',
  title: 'Labial matte Tei',
  description: 'Mate cómodo que no reseca, color parejo en un solo paso.',
  price: 3000,
  image_url: IMG_BASE + 'labial-matte-tei.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
},
// Máscaras y Delineadores
{
  category: 'Máscaras y Delineadores',
  title: 'Arqueador',
  description: 'Fija y da forma a tus cejas todo el día.',
  price: 3200,
  image_url: IMG_BASE + 'arqueador.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Máscaras y Delineadores',
  title: 'Paleta de sombras Pink 21',
  description: 'Tonos combinables para looks naturales o más intensos.',
  price: 5000,
  image_url: IMG_BASE + 'paleta-pink21.jpeg',
  tones: null,
  badge: 'Nuevo',
  stock: {
    _default: 1
  }
}, {
  category: 'Máscaras y Delineadores',
  title: 'Máscara de pestañas Pink 21',
  description: 'Volumen y largo sin grumos.',
  price: 3000,
  image_url: IMG_BASE + 'mascara-pink21.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Máscaras y Delineadores',
  title: 'Máscara de pestañas mini Tango',
  description: 'Formato mini, ideal para retocar en la cartera.',
  price: 3000,
  image_url: IMG_BASE + 'mascara-mini-tango.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Máscaras y Delineadores',
  title: 'Delineador en fibra líquido NAEZ',
  description: 'Punta de fibra ultrafina para un trazo preciso y parejo.',
  price: 2000,
  image_url: IMG_BASE + 'delineador-fibra-naez.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Máscaras y Delineadores',
  title: 'Delineador líquido Ruby Rose',
  description: 'Negro intenso y secado rápido para un cat-eye bien definido.',
  price: 4000,
  image_url: null,
  tones: null,
  stock: {
    _default: 1
  }
},
// Pestañas y Pegamentos
{
  category: 'Pestañas y Pegamentos',
  title: 'Sellador + Bonder',
  description: 'Fija tus pestañas y sella el pegamento para que duren muchísimo más.',
  price: 5500,
  image_url: IMG_BASE + 'sellador-bonder.jpeg',
  tones: null,
  stock: {
    _default: 1
  }
}, {
  category: 'Pestañas y Pegamentos',
  title: 'Pestañas en grupo 40D+50D 0.07D MIX NAEZ',
  description: 'Pestañas en grupo, mix 40D y 50D con curva D 0.07, para volumen a medida.',
  price: 6800,
  image_url: null,
  tones: null,
  badge: 'Nuevo',
  stock: {
    _default: 1
  }
}];
SEED_PRODUCTS.forEach((p, i) => {
  p.sort_order = i;
});
window.SEED_PRODUCTS = SEED_PRODUCTS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/seed-products.js", error: String((e && e.message) || e) }); }

// ui_kits/storefront/supabase-client.js
try { (() => {
/* Sky Makeup — cliente Supabase compartido (storefront + admin).
   Cargar despu\u00e9s de la librer\u00eda supabase-js v2 vía CDN. */
window.sb = supabase.createClient('https://bohthswmsvcllowhmtgd.supabase.co', 'sb_publishable_C0QY7naaRdtZYvg4ei8ytQ_h65-piuW');
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/supabase-client.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CategoryBubble = __ds_scope.CategoryBubble;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.SWATCHES = __ds_scope.SWATCHES;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.TrustItem = __ds_scope.TrustItem;

})();
