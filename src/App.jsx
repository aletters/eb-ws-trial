import { useMemo, useState } from 'react'
import { ArrowRight, BarChart3, Check, ChevronDown, CircleUserRound, Heart, LayoutDashboard, Leaf, Menu, Minus, Package, Plus, Search, Settings, ShoppingBag, ShoppingCart, Sparkles, Sprout, Truck, Users, X } from 'lucide-react'
import { money, orders, products } from './data.js'

const categories = ['Mind', 'Reggeli', 'Növényi italok', 'Főzés', 'Tea & kávé', 'Nasik']

function Logo({ light = false }) {
  return <button className={`logo ${light ? 'light' : ''}`} onClick={() => location.hash = ''} aria-label="ElitBio főoldal"><span className="logo-mark"><Leaf size={21} /></span><span>elit<b>bio</b></span></button>
}

function Header({ cartCount, onCart, role, setRole }) {
  const [menu, setMenu] = useState(false)
  return <>
    <div className="announcement"><span>Ingyenes szállítás 20 000 Ft felett</span><span className="announcement-center"><Sprout size={14}/> 100% ellenőrzött bio kínálat</span><button>HU <ChevronDown size={13}/></button></div>
    <header>
      <Logo />
      <nav className={menu ? 'open' : ''}>
        <a href="#shop" onClick={() => setMenu(false)}>Webshop</a><a href="#values" onClick={() => setMenu(false)}>Miért ElitBio?</a><a href="#journal" onClick={() => setMenu(false)}>Napló</a><a href="#footer" onClick={() => setMenu(false)}>Kapcsolat</a>
      </nav>
      <div className="header-actions">
        <label className="role-select"><CircleUserRound size={17}/><select value={role} onChange={e => setRole(e.target.value)} aria-label="Nézet kiválasztása"><option value="customer">Vásárló</option><option value="admin">Admin</option><option value="owner">Tulajdonos</option></select></label>
        <button className="icon-btn mobile-hide" aria-label="Keresés" onClick={() => document.querySelector('.search input')?.focus()}><Search /></button>
        <button className="icon-btn cart-icon" aria-label={`Kosár, ${cartCount} termék`} onClick={onCart}><ShoppingBag/><span>{cartCount}</span></button>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Menü"><Menu /></button>
      </div>
    </header>
  </>
}

function ProductCard({ product, add }) {
  return <article className="product-card">
    <div className="product-image" style={{background: product.color}}><img src={product.image} alt={product.name} loading="lazy"/><span className="badge">{product.badge}</span><button className="heart" aria-label="Kedvencekhez"><Heart size={19}/></button></div>
    <div className="product-info"><small>{product.brand} · {product.unit}</small><h3>{product.name}</h3><div className="price-row"><div><b>{money(product.price)}</b>{product.oldPrice && <del>{money(product.oldPrice)}</del>}</div><button onClick={() => add(product)} aria-label={`${product.name} kosárba`}><Plus/></button></div></div>
  </article>
}

function Shop({ add, toast }) {
  const [category, setCategory] = useState('Mind'); const [query, setQuery] = useState('')
  const visible = useMemo(() => products.filter(p => (category === 'Mind' || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase())), [category, query])
  return <main>
    <section className="hero">
      <div className="hero-copy"><div className="eyebrow"><Sparkles size={15}/> Tisztább választás, minden nap</div><h1>A természet java,<br/><em>neked válogatva.</em></h1><p>Gondosan kiválasztott bio élelmiszerek, megbízható forrásból. Kevesebb kompromisszum, több valódi íz.</p><div className="hero-buttons"><a className="primary" href="#shop">Felfedezem a kínálatot <ArrowRight size={18}/></a><a className="text-link" href="#values">Ismerj meg minket</a></div><div className="hero-proof"><div><b>4,9</b><span>★★★★★</span><small>1200+ értékelés</small></div><div><b>24–48h</b><small>gyors kiszállítás</small></div><div><b>500+</b><small>bio termék</small></div></div></div>
      <div className="hero-visual"><div className="hero-orbit one">bio</div><div className="hero-orbit two"><Leaf/></div><img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1200&q=88" alt="Friss bio zöldségek egy fonott kosárban"/><div className="float-card"><span><Truck/></span><div><b>Holnap nálad</b><small>Ha 14:00-ig rendelsz</small></div></div></div>
    </section>
    <section className="benefits" id="values"><div><span><Leaf/></span><p><b>Minősített bio</b><small>Átlátható eredet</small></p></div><div><span><Package/></span><p><b>Tudatos csomagolás</b><small>Minimális műanyag</small></p></div><div><span><Truck/></span><p><b>Gyors és friss</b><small>Országos szállítás</small></p></div><div><span><Heart/></span><p><b>Szeretettel válogatva</b><small>Csak amit mi is ennénk</small></p></div></section>
    <section className="shop-section" id="shop"><div className="section-heading"><div><span className="kicker">Népszerű most</span><h2>A kamra új kedvencei</h2></div><button className="view-all" onClick={() => {setCategory('Mind'); setQuery(''); toast('Minden terméket mutatunk')}}>Összes termék <ArrowRight size={17}/></button></div>
      <div className="shop-tools"><div className="category-tabs">{categories.map(c => <button key={c} className={category===c?'active':''} onClick={()=>setCategory(c)}>{c}</button>)}</div><label className="search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Mit keresel?"/></label></div>
      <div className="product-grid">{visible.map(p => <ProductCard key={p.id} product={p} add={add}/>)}</div>{!visible.length && <div className="empty">Nem találtunk ilyen terméket. Próbálj másik keresést!</div>}
    </section>
    <section className="story" id="journal"><div className="story-image"><img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1100&q=84" alt="Termelői zöldségpiac" loading="lazy"/><span>2012 óta</span></div><div className="story-copy"><span className="kicker">Jó kezekből, jó helyre</span><h2>Nem csak bio.<br/>Őszintén jobb.</h2><p>Minden termék mögött ismerjük a történetet. Közvetlen, hosszú távú kapcsolatban dolgozunk azokkal a termelőkkel, akik ugyanúgy hisznek a tiszta alapanyagokban, mint mi.</p><a href="#shop">A mi történetünk <ArrowRight size={18}/></a></div></section>
    <Newsletter />
  </main>
}

function Newsletter() { const [email,setEmail]=useState(''); const [done,setDone]=useState(false); return <section className="newsletter">{done ? <div className="thanks"><Check/> Köszönjük! Hamarosan találkozunk a postaládádban.</div> : <><div><span className="kicker">Egy kis zöld a postaládádba</span><h2>Friss hírek. Jobb döntések.</h2><p>Receptek, újdonságok és 10% kedvezmény az első rendelésedből.</p></div><form onSubmit={e=>{e.preventDefault();if(email)setDone(true)}}><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="email@cimed.hu"/><button className="primary">Feliratkozom <ArrowRight size={18}/></button></form></>}</section> }

function CartDrawer({ cart, setCart, close, checkout, onCheckout, toast }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const change = (id, n) => setCart(cart.map(i => i.id === id ? {...i, qty: Math.max(0, i.qty+n)} : i).filter(i=>i.qty))
  return <div className="overlay" onMouseDown={e=>e.target===e.currentTarget&&close()}><aside className="drawer"><div className="drawer-head"><div><span>Kosarad</span><small>{cart.reduce((s,i)=>s+i.qty,0)} termék</small></div><button className="icon-btn" onClick={close}><X/></button></div>{checkout ? <Checkout close={close} total={total} setCart={setCart} toast={toast}/> : <>{cart.length ? <div className="cart-list">{cart.map(i=><div className="cart-item" key={i.id}><img src={i.image} alt=""/><div><small>{i.brand}</small><b>{i.name}</b><span>{money(i.price)}</span><div className="qty"><button onClick={()=>change(i.id,-1)}><Minus/></button><span>{i.qty}</span><button onClick={()=>change(i.id,1)}><Plus/></button></div></div></div>)}</div> : <div className="cart-empty"><ShoppingBag/><h3>A kosarad még üres</h3><p>Nézz körül friss, bio kedvenceink között.</p><button className="primary" onClick={close}>Vásárlás</button></div>}{cart.length>0&&<div className="cart-bottom"><div className="progress"><span style={{width:`${Math.min(100,total/200)}%`}}/></div><small>{total >= 20000 ? 'Megvan az ingyenes szállítás!' : `Még ${money(20000-total)} az ingyenes szállításig`}</small><div className="total"><span>Összesen</span><b>{money(total)}</b></div><button className="primary full" onClick={onCheckout}>Tovább a pénztárhoz <ArrowRight/></button></div>}</>}</aside></div>
}

function Checkout({ total, close, setCart, toast }) { const [success,setSuccess]=useState(false); if(success) return <div className="checkout-success"><span><Check/></span><h2>Köszönjük a rendelést!</h2><p>A visszaigazolást elküldtük e-mailben. A csomagod hamarosan útnak indul.</p><button className="primary" onClick={()=>{setCart([]);close();toast('Rendelés sikeresen leadva')}}>Vissza a boltba</button></div>; return <form className="checkout" onSubmit={e=>{e.preventDefault();setSuccess(true)}}><h2>Pénztár</h2><label>Név<input required placeholder="Teljes név"/></label><label>E-mail<input required type="email" placeholder="email@cimed.hu"/></label><label>Szállítási cím<input required placeholder="Irányítószám, város, utca"/></label><div className="shipping"><Truck/><div><b>GLS házhozszállítás</b><small>{total>=20000?'Ingyenes':'1 490 Ft'} · 1–2 munkanap</small></div><Check/></div><label>Kártyaadatok<input required placeholder="1234 5678 9012 3456" inputMode="numeric"/></label><button className="primary full">Biztonságos fizetés · {money(total + (total>=20000?0:1490))}</button><button type="button" className="back" onClick={()=>location.reload()}>Vissza a kosárhoz</button></form> }

function Dashboard({ role, setRole }) {
  const owner = role === 'owner'; const [active,setActive]=useState('Áttekintés')
  const nav=['Áttekintés','Rendelések','Termékek','Vásárlók',...(owner?['Elemzések']:[]),'Beállítások']
  const icons=[LayoutDashboard,ShoppingCart,Package,Users,BarChart3,Settings]
  return <div className="dashboard"><aside className="side"><Logo light/><small>{owner?'TULAJDONOSI FELÜLET':'ADMINISZTRÁCIÓ'}</small><nav>{nav.map((n,i)=>{const I=icons[i];return <button className={active===n?'active':''} onClick={()=>setActive(n)} key={n}><I/>{n}</button>})}</nav><button className="back-store" onClick={()=>setRole('customer')}><ArrowRight/> Vissza a webshopba</button></aside><div className="dash-main"><div className="dash-top"><div><span>2026. szeptember 11., péntek</span><h1>{active}</h1></div><div className="admin-user"><span>EB</span><p><b>{owner?'Balogh Eszter':'Kovács Márk'}</b><small>{owner?'Tulajdonos':'Webshop admin'}</small></p></div></div>{active==='Áttekintés'?<Overview owner={owner}/>:<DataView title={active}/>}</div></div>
}

function Overview({owner}) { const cards=[['Mai bevétel','428 560 Ft','+18,2%'],['Új rendelések','34','+8,4%'],['Átlagos kosárérték','12 605 Ft','+3,1%'],[owner?'Havi eredmény':'Alacsony készlet',owner?'4,82 M Ft':'7 termék',owner?'+21,4%':'Ellenőrzés']]; return <><div className="welcome"><div><h2>Jó reggelt! 👋</h2><p>Itt van, mi történt ma az ElitBio webshopban.</p></div><button className="primary"><Plus/> Új termék</button></div><div className="stat-grid">{cards.map((c,i)=><article key={c[0]}><span className={`stat-icon c${i}`}><BarChart3/></span><small>{c[0]}</small><b>{c[1]}</b><em>{c[2]}</em></article>)}</div><div className="dash-grid"><section className="chart-card"><div className="card-title"><div><h3>Bevétel alakulása</h3><span>Az elmúlt 7 nap</span></div><b>2 684 200 Ft</b></div><div className="chart"><div className="gridlines"></div><svg viewBox="0 0 700 220" preserveAspectRatio="none"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#78a55a" stopOpacity=".32"/><stop offset="1" stopColor="#78a55a" stopOpacity="0"/></linearGradient></defs><path className="area" d="M0 181 C70 175 85 94 155 128 S255 167 325 96 S420 114 475 69 S585 99 700 26 L700 220 L0 220Z"/><path className="line" d="M0 181 C70 175 85 94 155 128 S255 167 325 96 S420 114 475 69 S585 99 700 26"/></svg><div className="days"><span>Sze 5.</span><span>Sze 6.</span><span>Sze 7.</span><span>Sze 8.</span><span>Sze 9.</span><span>Sze 10.</span><span>Ma</span></div></div></section><section className="top-card"><div className="card-title"><div><h3>Legnépszerűbb</h3><span>Eladott darabszám</span></div></div>{products.slice(0,4).map((p,i)=><div className="top-product" key={p.id}><span>{i+1}</span><img src={p.image} alt=""/><div><b>{p.name}</b><small>{p.brand}</small></div><strong>{48-i*7} db</strong></div>)}</section></div><section className="orders"><div className="card-title"><div><h3>Legutóbbi rendelések</h3><span>Valós idejű rendelési állapot</span></div><button>Összes megtekintése <ArrowRight/></button></div><div className="table"><div className="tr th"><span>Rendelés</span><span>Vásárló</span><span>Időpont</span><span>Összeg</span><span>Állapot</span></div>{orders.map(o=><div className="tr" key={o.id}><b>{o.id}</b><span>{o.customer}</span><span>{o.date}</span><b>{money(o.total)}</b><em className={o.status.toLowerCase()}>{o.status}</em></div>)}</div></section></> }

function DataView({title}) { return <div className="data-view"><div className="data-illus"><Package/></div><h2>{title} kezelése</h2><p>Ez a modul készen áll a napi feladatokra. Kereshetsz, szűrhetsz és exportálhatod az adatokat.</p><div className="data-actions"><label className="search"><Search/><input placeholder={`Keresés: ${title.toLowerCase()}...`}/></label><button className="primary"><Plus/> Új hozzáadása</button></div></div> }

function Footer(){return <footer id="footer"><div><Logo light/><p>Természetesebb mindennapok,<br/>egy jobb jövőért.</p></div><div><b>Vásárlás</b><a href="#shop">Újdonságok</a><a href="#shop">Akciók</a><a href="#shop">Márkáink</a></div><div><b>Segítség</b><a href="#footer">Szállítás és fizetés</a><a href="#footer">GYIK</a><a href="mailto:hello@elitbio.hu">hello@elitbio.hu</a></div><div><b>Kövess minket</b><p>@elitbiohu</p><span className="social">Instagram · Facebook</span></div><small>© 2026 ElitBio. Minden jog fenntartva.</small></footer>}

export default function App(){ const [role,setRole]=useState('customer'); const [cart,setCart]=useState([]); const [open,setOpen]=useState(false); const [checkout,setCheckout]=useState(false); const [toast,setToast]=useState(''); const notify=t=>{setToast(t);setTimeout(()=>setToast(''),2400)}; const add=p=>{setCart(c=>{const found=c.find(i=>i.id===p.id);return found?c.map(i=>i.id===p.id?{...i,qty:i.qty+1}:i):[...c,{...p,qty:1}]});notify(`${p.name} a kosárban`)}; if(role!=='customer')return <Dashboard role={role} setRole={setRole}/>; return <div><Header cartCount={cart.reduce((s,i)=>s+i.qty,0)} onCart={()=>{setOpen(true);setCheckout(false)}} role={role} setRole={setRole}/><Shop add={add} toast={notify}/><Footer/>{open&&<CartDrawer cart={cart} setCart={setCart} close={()=>setOpen(false)} checkout={checkout} onCheckout={()=>setCheckout(true)} toast={notify}/>}<div className={`toast ${toast?'show':''}`}><Check/>{toast}</div></div> }
