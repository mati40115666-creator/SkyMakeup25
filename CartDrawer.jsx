/* Sky Makeup storefront — slide-in cart drawer.
   Two-step checkout: (1) el pedido, con total + aclaración de envío;
   (2) datos bancarios para transferir + envío de comprobante por WhatsApp.
   Composes Button from the design system. */
const { Button: SkyButton } = window.SkyMakeupDesignSystem_ae8c70;

// Datos bancarios de Sky Makeup (transferencia).
const BANK = {
  titular: 'Cielo Oriana Benitez',
  banco: 'Brubank',
  cuit: '27-44233791-3',
  alias: 'cielobenitez.bru',
  cbu: '1430001713039417410016',
  cuenta: '1303941741001',
};

function CartDrawer({ open, items, onClose, onInc, onDec, total, waLink }) {
  const fmt = (n) => '$' + n.toLocaleString('es-AR');
  const entries = Object.entries(items);
  const [step, setStep] = React.useState('cart');

  // Al cerrar el carrito o vaciarlo, volvemos al paso 1.
  React.useEffect(() => { if (!open) setStep('cart'); }, [open]);
  React.useEffect(() => { if (entries.length === 0) setStep('cart'); }, [entries.length]);

  const comprobanteMsg = () => {
    const lines = entries.map(([name, item]) => `• ${item.qty}x ${name} — ${fmt(item.price * item.qty)}`);
    return `¡Hola Sky Makeup! 💖 Ya hice la transferencia de mi pedido:\n\n${lines.join('\n')}\n\nTotal productos: ${fmt(total)}\n\nTe adjunto el comprobante ✨ (coordinamos el envío por acá)`;
  };
  const comprobanteHref = waLink ? waLink(comprobanteMsg()) : '#';

  return (
    <React.Fragment>
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, background: 'var(--overlay-scrim)', zIndex: 90,
          opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity .2s',
        }}
      />
      <aside
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 95,
          width: 'min(420px,100%)', background: 'var(--crema)',
          display: 'flex', flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform .25s ease', boxShadow: 'var(--shadow-drawer)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 24px', borderBottom: 'var(--border-1)' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.4rem', margin: 0 }}>
            {step === 'cart' ? 'Tu pedido' : 'Datos para transferir'}
          </h3>
          <button onClick={onClose} aria-label="Cerrar carrito" style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--ciruela-60)', lineHeight: 1, padding: '6px' }}>✕</button>
        </div>

        {step === 'cart' ? (
          <React.Fragment>
            <div style={{ flex: 1, overflowY: 'auto', padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {entries.length === 0 && (
                <p style={{ textAlign: 'center', color: 'var(--ciruela-60)', padding: '50px 20px', fontSize: '.95rem' }}>Tu carrito está vacío. Agregá productos del catálogo ✨</p>
              )}
              {entries.map(([name, item]) => (
                <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', background: 'var(--petalo)', border: 'var(--border-1)', borderRadius: 'var(--radius-md)', padding: '14px 16px' }}>
                  <div>
                    <b style={{ fontSize: '.95rem', display: 'block' }}>{name}</b>
                    <span style={{ fontSize: '.85rem', color: 'var(--ciruela-60)' }}>{fmt(item.price)} c/u</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <QtyBtn onClick={() => onDec(name)}>−</QtyBtn>
                    <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: 600 }}>{item.qty}</span>
                    <QtyBtn onClick={() => onInc(name)} disabled={item.stock != null && item.qty >= item.stock}>+</QtyBtn>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: '20px 24px 26px', borderTop: 'var(--border-1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', marginBottom: '6px' }}>
                <span>Total</span><b style={{ fontSize: '1.25rem' }}>{fmt(total)}</b>
              </div>
              <p style={{ fontSize: '.8rem', color: 'var(--ciruela-60)', margin: '0 0 16px' }}>
                El envío no está incluido. Coordinamos el costo por WhatsApp al finalizar la compra.
              </p>
              <SkyButton onClick={() => setStep('payment')} disabled={entries.length === 0} style={{ width: '100%', ...(entries.length === 0 ? { pointerEvents: 'none', opacity: .5 } : {}) }}>Continuar con el pago</SkyButton>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div style={{ flex: 1, overflowY: 'auto', padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ background: 'var(--petalo)', border: 'var(--border-1)', borderRadius: 'var(--radius-md)', padding: '16px 18px' }}>
                <div style={{ fontSize: '.75rem', fontWeight: 600, letterSpacing: 'var(--tracking-tag)', textTransform: 'uppercase', color: 'var(--chicle)', marginBottom: '4px' }}>Monto a transferir</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                  <b style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 400 }}>{fmt(total)}</b>
                  <CopyBtn value={String(total)} />
                </div>
                <p style={{ fontSize: '.78rem', color: 'var(--ciruela-60)', margin: '8px 0 0' }}>Es solo el costo de los productos. El envío se suma aparte cuando lo coordinemos por WhatsApp.</p>
              </div>

              <CopyRow label="Titular" value={BANK.titular} />
              <CopyRow label="Banco" value={BANK.banco} />
              <CopyRow label="Alias" value={BANK.alias} copyable />
              <CopyRow label="CBU" value={BANK.cbu} copyable mono />
              <CopyRow label="N° de cuenta" value={BANK.cuenta} copyable mono />
              <CopyRow label="CUIT/CUIL" value={BANK.cuit} copyable mono />

              <p style={{ fontSize: '.88rem', color: 'var(--ciruela)', textAlign: 'center', margin: '6px 0 0', lineHeight: 1.5 }}>
                Hacé la transferencia y mandanos el comprobante por WhatsApp 💖<br />
                <span style={{ color: 'var(--ciruela-60)', fontSize: '.82rem' }}>Reservamos tu pedido apenas lo recibimos.</span>
              </p>
            </div>
            <div style={{ padding: '18px 24px 24px', borderTop: 'var(--border-1)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <SkyButton href={comprobanteHref} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>Enviar comprobante por WhatsApp 🛍️</SkyButton>
              <SkyButton variant="ghost" onClick={() => setStep('cart')} style={{ width: '100%' }}>Volver al pedido</SkyButton>
            </div>
          </React.Fragment>
        )}
      </aside>
    </React.Fragment>
  );
}

function CopyRow({ label, value, copyable, mono }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', border: 'var(--border-1)', borderRadius: 'var(--radius-md)', padding: '12px 16px' }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: 'var(--tracking-tag)', textTransform: 'uppercase', color: 'var(--ciruela-60)', marginBottom: '2px' }}>{label}</div>
        <div style={{ fontSize: '.98rem', fontWeight: 600, fontFamily: mono ? 'ui-monospace, SFMono-Regular, Menlo, monospace' : 'inherit', wordBreak: 'break-all' }}>{value}</div>
      </div>
      {copyable && <CopyBtn value={value} />}
    </div>
  );
}

function CopyBtn({ value }) {
  const [done, setDone] = React.useState(false);
  const copy = () => {
    try {
      navigator.clipboard.writeText(value).then(() => {
        setDone(true);
        setTimeout(() => setDone(false), 1600);
      });
    } catch (e) {}
  };
  return (
    <button
      onClick={copy}
      style={{
        flexShrink: 0, padding: '7px 14px', borderRadius: 'var(--radius-pill)',
        border: '1.5px solid var(--frambuesa)', cursor: 'pointer',
        background: done ? 'var(--frambuesa)' : 'transparent',
        color: done ? '#fff' : 'var(--frambuesa)',
        fontSize: '.8rem', fontWeight: 600, fontFamily: 'var(--font-body)',
        transition: 'background .12s, color .12s', whiteSpace: 'nowrap',
      }}
    >{done ? 'Copiado ✓' : 'Copiar'}</button>
  );
}

function QtyBtn({ children, onClick, disabled }) {
  const [h, setH] = React.useState(false);
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        width: '30px', height: '30px', borderRadius: '50%',
        border: '1.5px solid var(--frambuesa)',
        background: (h && !disabled) ? 'var(--frambuesa)' : 'transparent',
        color: (h && !disabled) ? '#fff' : 'var(--frambuesa)',
        fontSize: '1rem', fontWeight: 700, cursor: disabled ? 'not-allowed' : 'pointer', lineHeight: 1,
        opacity: disabled ? 0.4 : 1,
        transition: 'background .12s, color .12s',
      }}
    >{children}</button>
  );
}

window.CartDrawer = CartDrawer;
