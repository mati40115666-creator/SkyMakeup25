/* @ds-bundle: {"format":4,"namespace":"SkyMakeupDesignSystem_ae8c70","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CategoryBubble","sourcePath":"components/core/CategoryBubble.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Marquee","sourcePath":"components/core/Marquee.jsx"},{"name":"SWATCHES","sourcePath":"components/core/ProductCard.jsx"},{"name":"ProductCard","sourcePath":"components/core/ProductCard.jsx"},{"name":"StepCard","sourcePath":"components/core/StepCard.jsx"},{"name":"TrustItem","sourcePath":"components/core/TrustItem.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"faa79a09dde0","components/core/Button.jsx":"4724e5b0f3bd","components/core/CategoryBubble.jsx":"0e51e524b2c5","components/core/Eyebrow.jsx":"dc75d2bd5a8d","components/core/Marquee.jsx":"e8a977893ec0","components/core/ProductCard.jsx":"d5bb5c725645","components/core/StepCard.jsx":"07ccf6827106","components/core/TrustItem.jsx":"5b6187aad560","ui_kits/storefront/CartDrawer.jsx":"4a0ef7428e74","ui_kits/storefront/Storefront.jsx":"e84f407763f9"},"inlinedExternals":[],"unexposedExports":[]} */

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
  fit = 'cover',
  badge,
  tones,
  onAdd,
  addLabel = 'Agregar 🛍️',
  getRemaining,
  style,
  ...rest
}) {
  const swatchBg = image ? undefined : SWATCHES[swatch] || swatch;
  const [tone, setTone] = React.useState(tones && tones.length ? tones[0] : null);
  const rem = t => getRemaining ? getRemaining(t) : Infinity;
  const soldOut = rem(tone) <= 0;
  const hasTones = tones && tones.length > 0;
  const anyLeft = hasTones ? tones.some(t => rem(t) > 0) : rem(tone) > 0;
  const fullyOut = !anyLeft;
  const shownBadge = fullyOut ? 'Agotado' : badge;
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
    style: {
      aspectRatio: '4 / 5',
      position: 'relative',
      overflow: 'hidden',
      background: image ? fit === 'contain' ? 'var(--petalo)' : undefined : swatchBg,
      backgroundImage: image ? `url(${image})` : undefined,
      backgroundSize: image ? fit : undefined,
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
  }, shownBadge), fullyOut && image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(62,34,51,.28)'
    }
  })), /*#__PURE__*/React.createElement("div", {
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
  }, soldOut ? 'Sin stock' : addLabel))));
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
function CartDrawer({
  open,
  items,
  onClose,
  onInc,
  onDec,
  total,
  waLink
}) {
  const fmt = n => '$' + n.toLocaleString('es-AR');
  const entries = Object.entries(items);
  const [step, setStep] = React.useState('cart');

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
      justifyContent: 'space-between',
      fontSize: '1.1rem',
      marginBottom: '6px'
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
    disabled: entries.length === 0,
    style: {
      width: '100%',
      ...(entries.length === 0 ? {
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
    style: {
      width: '100%'
    }
  }, "Enviar comprobante por WhatsApp \uD83D\uDECD\uFE0F"), /*#__PURE__*/React.createElement(SkyButton, {
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
const PRODUCTS = [
// Rostro
{
  category: 'Rostro',
  title: 'Polvo compacto Rimera Quince tono 03',
  description: 'Acabado mate que sella tu base y controla brillos todo el día.',
  price: '$3.000',
  raw: 3000,
  swatch: 4,
  image: '../../assets/products/framed/polvo-rimera-quince-03.jpeg'
}, {
  category: 'Rostro',
  title: 'Base Pink 21 tono 01',
  description: 'Cobertura media y textura liviana, ideal para el día a día.',
  price: '$3.000',
  raw: 3000,
  swatch: 5
}, {
  category: 'Rostro',
  title: 'Rubor en polvo Ushas',
  description: 'Color natural y fácil de difuminar. Elegí tu tono.',
  price: '$2.500',
  raw: 2500,
  swatch: 3,
  tones: ['04', '05'],
  image: '../../assets/products/framed/rubor-ushas.jpeg'
}, {
  category: 'Rostro',
  title: 'Base Ruby Rose tono 03',
  description: 'Cobertura alta con acabado luminoso.',
  price: '$4.500',
  raw: 4500,
  swatch: 5,
  badge: 'Más vendido'
}, {
  category: 'Rostro',
  title: 'Base Huda tono 220',
  description: 'Acabado natural de larga duración.',
  price: '$3.000',
  raw: 3000,
  swatch: 3
}, {
  category: 'Rostro',
  title: 'Corrector',
  description: 'Cubre ojeras e imperfecciones sin marcar líneas. Elegí tu tono.',
  price: '$3.000',
  raw: 3000,
  swatch: 4,
  tones: ['02', '03'],
  image: '../../assets/products/framed/corrector.jpeg'
}, {
  category: 'Rostro',
  title: 'Set de esponjas x7',
  description: 'Set completo para aplicar base, corrector y polvo como una pro.',
  price: '$3.000',
  raw: 3000,
  swatch: 3,
  image: '../../assets/products/framed/set-esponjas-x7.jpeg'
},
// Labiales
{
  category: 'Labiales',
  title: 'Gloss Pink 21',
  description: 'Brillo espejado sin sensación pegajosa. Elegí tu tono.',
  price: '$3.200',
  raw: 3200,
  swatch: 1,
  badge: 'Más vendido',
  tones: ['01', '05'],
  image: '../../assets/products/framed/gloss-pink21.jpeg'
}, {
  category: 'Labiales',
  title: 'Gloss Mely tono 05',
  description: 'Hidrata y da brillo con un toque de color.',
  price: '$3.000',
  raw: 3000,
  swatch: 1,
  image: '../../assets/products/framed/gloss-mely-05.jpeg'
}, {
  category: 'Labiales',
  title: 'Labial matte Pink 21 tono 03',
  description: 'Acabado mate aterciopelado de larga duración.',
  price: '$2.500',
  raw: 2500,
  swatch: 6,
  image: '../../assets/products/framed/labial-matte-pink21-03.jpeg'
}, {
  category: 'Labiales',
  title: 'Labial matte y gloss 2 en 1 Laurenza',
  description: 'Dos acabados en un solo producto: mate de un lado, gloss del otro.',
  price: '$3.800',
  raw: 3800,
  swatch: 1,
  image: '../../assets/products/framed/labial-gloss-laurenza.jpeg'
}, {
  category: 'Labiales',
  title: 'Labial matte Mely tono 03',
  description: 'Color intenso con acabado mate parejo.',
  price: '$2.800',
  raw: 2800,
  swatch: 6,
  image: '../../assets/products/framed/labial-matte-mely-03.jpeg'
}, {
  category: 'Labiales',
  title: 'Lip gloss matte Mely 03',
  description: 'Brillo suave con acabado aterciopelado, no pegajoso.',
  price: '$3.000',
  raw: 3000,
  swatch: 1,
  image: '../../assets/products/framed/lip-gloss-mely-03.jpeg'
}, {
  category: 'Labiales',
  title: 'Gloss Tei tono 03',
  description: 'Brillo jugoso para looks del día a día.',
  price: '$2.500',
  raw: 2500,
  swatch: 6
}, {
  category: 'Labiales',
  title: 'Labial matte Tei tono 03',
  description: 'Mate cómodo que no reseca.',
  price: '$3.000',
  raw: 3000,
  swatch: 1,
  image: '../../assets/products/framed/labial-matte-tei-03.jpeg'
}, {
  category: 'Labiales',
  title: 'Labial matte en barra Ushas tono 02',
  description: 'Color parejo en una sola pasada.',
  price: '$2.500',
  raw: 2500,
  swatch: 6,
  image: '../../assets/products/framed/labial-barra-ushas-02.jpeg'
}, {
  category: 'Labiales',
  title: 'Delineador de labios',
  description: 'Define el contorno y hace durar más tu labial.',
  price: '$1.500',
  raw: 1500,
  swatch: 1
}, {
  category: 'Labiales',
  title: 'Labial matte Tei',
  description: 'Mate cómodo que no reseca, color parejo en un solo paso.',
  price: '$3.000',
  raw: 3000,
  swatch: 6,
  image: '../../assets/products/framed/labial-matte-tei.jpeg'
},
// Máscaras y Delineadores
{
  category: 'Máscaras y Delineadores',
  title: 'Arqueador',
  description: 'Fija y da forma a tus cejas todo el día.',
  price: '$3.200',
  raw: 3200,
  swatch: 2,
  image: '../../assets/products/framed/arqueador.jpeg'
}, {
  category: 'Máscaras y Delineadores',
  title: 'Paleta de sombras Pink 21',
  description: 'Tonos combinables para looks naturales o más intensos.',
  price: '$5.000',
  raw: 5000,
  swatch: 2,
  badge: 'Nuevo',
  image: '../../assets/products/framed/paleta-pink21.jpeg'
}, {
  category: 'Máscaras y Delineadores',
  title: 'Máscara de pestañas Pink 21',
  description: 'Volumen y largo sin grumos.',
  price: '$3.000',
  raw: 3000,
  swatch: 2,
  image: '../../assets/products/framed/mascara-pink21.jpeg'
}, {
  category: 'Máscaras y Delineadores',
  title: 'Máscara de pestañas mini Tango',
  description: 'Formato mini, ideal para retocar en la cartera.',
  price: '$3.000',
  raw: 3000,
  swatch: 2,
  image: '../../assets/products/framed/mascara-mini-tango.jpeg'
}, {
  category: 'Máscaras y Delineadores',
  title: 'Delineador en fibra líquido NAEZ',
  description: 'Punta de fibra ultrafina para un trazo preciso y parejo.',
  price: '$2.000',
  raw: 2000,
  swatch: 2,
  image: '../../assets/products/framed/delineador-fibra-naez.jpeg'
}, {
  category: 'Máscaras y Delineadores',
  title: 'Delineador líquido Ruby Rose',
  description: 'Negro intenso y secado rápido para un cat-eye bien definido.',
  price: '$4.000',
  raw: 4000,
  swatch: 2
},
// Pestañas y Pegamentos
{
  category: 'Pestañas y Pegamentos',
  title: 'Sellador + Bonder',
  description: 'Fija tus pestañas y sella el pegamento para que duren muchísimo más.',
  price: '$5.500',
  raw: 5500,
  swatch: 2,
  image: '../../assets/products/framed/sellador-bonder.jpeg'
}, {
  category: 'Pestañas y Pegamentos',
  title: 'Pestañas en grupo 40D+50D 0.07D MIX NAEZ',
  description: 'Pestañas en grupo, mix 40D y 50D con curva D 0.07, para volumen a medida.',
  price: '$6.800',
  raw: 6800,
  swatch: 2,
  badge: 'Nuevo'
}];
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
        stock
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
    style: navLink
  }, "Categor\xEDas"), /*#__PURE__*/React.createElement("a", {
    href: "#productos",
    style: navLink
  }, "Productos"), /*#__PURE__*/React.createElement("a", {
    href: "#como-comprar",
    style: navLink
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
  }, PRODUCTS.filter(p => p.category === cat).map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.title
  }, p, {
    onAdd: tone => add(p, tone),
    getRemaining: tone => remainingFor(p, tone)
  })))))), /*#__PURE__*/React.createElement("p", {
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
  }, "Makeup")), /*#__PURE__*/React.createElement("span", null, "Santa Fe, Argentina \xB7 Skincare & Makeup"), /*#__PURE__*/React.createElement("a", {
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
    onDec: dec
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
