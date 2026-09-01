/**
 * Style reminder — Good Things, Tapped: contemporary editorial retail with a guided WhatsApp-to-reward
 * narrative; airy pale-cyan surfaces, asymmetric composition, vivid-blue product fields, and rounded offer motifs.
 */
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Menu,
  MessageCircle,
  QrCode,
  Send,
  Smartphone,
  Store,
  Ticket,
  X,
} from "lucide-react";

const logoUrl = "/manus-storage/TappedInBrandLogo_b82afe7e.png";
const iconUrl = "/manus-storage/TappedInBrand-Icon_cde89059.png";

const steps = [
  {
    number: "01",
    icon: QrCode,
    title: "Spot a TappedIn QR code",
    text: "Find one at your nearest mall, retailer, or favourite spot.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Scan straight to WhatsApp",
    text: "One scan opens the TappedIn channel in the platform you already love.",
  },
  {
    number: "03",
    icon: Ticket,
    title: "Browse, save, and claim",
    text: "Explore mall deals, individual vouchers, coupons, and discounts.",
  },
];

const valuePoints = [
  "Offers that are relevant to where you are.",
  "Vouchers that are ready when you are.",
  "A simple way to make a day out go further.",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Main navigation">
        <a className="brand-lockup" href="#top" aria-label="TappedIn home" onClick={closeMenu}>
          <img src={logoUrl} alt="TappedIn" style={{height: '59px', width: '250px'}} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={23} strokeWidth={2.5} />}
        </button>

        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Primary">
          <a href="#scan" onClick={closeMenu}>Scan & chat</a>
          <a href="#offers" onClick={closeMenu}>What you can claim</a>
          <a href="#why" onClick={closeMenu}>Why TappedIn</a>
          <a className="nav-cta" href="https://rather.chat/?page_id=4534" target="_blank" rel="noreferrer">
            For partners <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-panel">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow"><span />YOUR NEXT REWARD IS CLOSER THAN YOU THINK...</p>
              <h1 id="hero-title">Deals that find you where you chat.</h1>
              <p className="hero-description">
                Scan a TappedIn QR code to open WhatsApp, then browse mall deals, vouchers, coupons, and discounts when you are out and about.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#scan">
                  See how to scan in <ChevronRight size={18} strokeWidth={2.5} />
                </a>
                <a className="button button-quiet" href="#offers">
                  Explore the good stuff <ArrowUpRight size={17} strokeWidth={2.4} />
                </a>
              </div>
              <p className="hero-footnote"><Check size={17} strokeWidth={3} /> No new app to download. Scan, chat, and claim.</p>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <img className="hero-photo" src="/manus-storage/tappedin-qr-friends_87bc42ca.jpg" alt="" />
              <div className="floating-status deal-status"><QrCode size={16} /><span><b>Point. Scan. Chat.</b>Your next offer is close</span></div>
              <div className="phone-demo">
                <div className="phone-top"><span>9:41</span><div className="speaker" /><span className="signal">●◔▰</span></div>
                <div className="chat-header"><img src={iconUrl} alt="" /><div><b>TappedIn</b><small>online now</small></div><span>•••</span></div>
                <div className="chat-body">
                  <p className="chat-date">TODAY</p>
                  <div className="bubble bubble-in">Thanks for Tapping in <span>10:28</span></div>
                  <div className="bubble bubble-in bubble-followup">Here are a few deals around you <span>10:28</span></div>
                  <div className="voucher-card">
                    <div className="voucher-mark"><Ticket size={19} /></div>
                    <div><strong>Your local deals are ready</strong><small>Mall deals and more in one place</small></div>
                    <ArrowUpRight size={18} />
                  </div>
                  <div className="chat-reward-art">
                    <img src={iconUrl} alt="" />
                    <span><b>YOU’RE TAPPED IN</b><small>A fresh voucher just landed</small></span>
                    <em>✦</em>
                  </div>
                  <div className="bubble bubble-out">Show me what’s on <span>10:29</span></div>
                  <div className="quick-replies"><span>Mall deals</span><span>My vouchers</span></div>
                  <div className="chat-typing"><span /><span /><span /> TappedIn is finding your deals</div>
                  <div className="claim-confirm"><Check size={14} /> Saved to your chat</div>
                </div>
                <div className="phone-homebar" />
                <div className="chat-compose"><span>Message TappedIn</span><Send size={16} /></div>
              </div>
              <div className="tap-coin"><img src="/manus-storage/tappedin-tap-accent_21e70302.png" alt="" /></div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="What TappedIn brings together">
          <p className="rail-label"><MessageCircle size={15} /> A note from TappedIn</p>
          <div><strong>Offers</strong><span>Worth opening</span><em>NEW</em></div>
          <div><strong>Vouchers</strong><span>Ready to save</span><em>CLAIM</em></div>
          <div><strong>Coupons</strong><span>Simple to claim</span><em>USE</em></div>
          <div><strong>Scan to chat</strong><span>Already in your pocket</span><em>QR</em></div>
        </section>

        <section className="deal-desk-section" aria-labelledby="deal-desk-title">
          <aside className="desk-rail desk-rail-left" aria-label="The TappedIn deal journey">
            <p className="desk-rail-title">THE TAP TRAIL</p>
            <div className="desk-rail-step"><b>01</b><QrCode size={20} /><span>Spot a code</span></div>
            <div className="desk-rail-step"><b>02</b><MessageCircle size={20} /><span>Open the chat</span></div>
            <div className="desk-rail-step"><b>03</b><Ticket size={20} /><span>Save the good stuff</span></div>
            <p className="desk-rail-caption">A smaller step between you and a better day out.</p>
          </aside>

          <div className="deal-desk-core">
            <p className="eyebrow"><span />A FULLER WAY TO FIND VALUE</p>
            <h2 id="deal-desk-title">Good things deserve more than an inbox.</h2>
            <p className="deal-desk-intro">TappedIn turns a simple scan into a lively little deal desk inside WhatsApp. Browse what is nearby, keep what is useful, and come back when the moment is right.</p>
            <div className="voucher-deck" aria-label="Illustrative deal vouchers">
              <article className="desk-voucher voucher-blue"><span>LOCAL FIND</span><b>Something good is close.</b><small><QrCode size={13} /> SCAN TO OPEN</small></article>
              <article className="desk-voucher voucher-light"><span>SAVED TO CHAT</span><b>Your next little extra</b><small><Check size={13} /> READY WHEN YOU ARE</small></article>
              <article className="desk-voucher voucher-green"><span>WORTH A TAP</span><b>More to explore today.</b><small><Ticket size={13} /> VOUCHER INSIDE</small></article>
              <div className="voucher-deck-note"><img src={iconUrl} alt="" /><span><b>TappedIn</b> has something for you</span><em>10:32</em></div>
            </div>
          </div>

          <aside className="desk-rail desk-rail-right" aria-label="Illustrative TappedIn chat status">
            <p className="desk-rail-title">IN YOUR CHAT</p>
            <div className="desk-chat-head"><img src={iconUrl} alt="" /><span><b>TappedIn</b><small>online now</small></span><i>•••</i></div>
            <p className="desk-message">A deal near you is ready to view.</p>
            <div className="desk-status"><Check size={16} /><span><b>Saved</b><small>Open again anytime</small></span></div>
            <p className="desk-rail-caption">Helpful, not noisy. There when you need it.</p>
          </aside>
        </section>

        <section id="how" className="journey-section" aria-labelledby="journey-title">
          <div className="journey-heading">
            <p className="eyebrow"><span />THE SIMPLE BIT</p>
            <h2 id="journey-title">A good offer should be easy to find.</h2>
            <p>TappedIn makes it simple to discover a little extra value in the places you visit.</p>
            <div className="journey-chat-artifact" aria-hidden="true">
              <div><img src={iconUrl} alt="" /><b>TappedIn</b><small>10:28</small></div>
              <p>Something worth claiming could be waiting nearby.</p>
              <span><Check size={12} /> Delivered</span>
            </div>
          </div>
          <div className="journey-steps">
            {steps.map(({ number, icon: Icon, title, text }) => (
              <article className="journey-step" key={number}>
                <div className="step-top"><span>{number}</span><Icon size={23} strokeWidth={2.15} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="scan" className="scan-section" aria-labelledby="scan-title">
          <div className="scan-image-card">
            <img src="/manus-storage/tappedin-qr-family_2d1a1bdc.jpg" alt="A multiracial family scanning a TappedIn QR code together at a mall" />
            <div className="scan-photo-note ticket-plate"><QrCode size={20} /><span><b>One small scan</b>One useful WhatsApp channel</span><em>OPEN CHAT</em></div>
          </div>
          <div className="scan-copy">
            <p className="eyebrow"><span />WHEREVER YOU SEE A TAP</p>
            <h2 id="scan-title">Point your camera at TappedIn, and you’re in.</h2>
            <p>QR codes make TappedIn easy to reach wherever you are. Scan one to open the WhatsApp channel, then access mall-wide deals, individual vouchers, coupons, or discounts.</p>
            <div className="qr-explainer ticket-plate" aria-label="Illustration of the QR code access route">
              <div className="qr-illustration" aria-hidden="true"><QrCode size={64} strokeWidth={1.65} /></div>
              <div><b>Scan. Chat. Claim.</b><span>No new app. No form to hunt down.</span></div>
              <Smartphone size={22} strokeWidth={2.2} />
            </div>
          </div>
        </section>

        <section id="offers" className="offer-section" aria-labelledby="offers-title">
          <div className="offer-panel">
            <div className="offer-photo-wrap">
              <img src="/manus-storage/tappedin-deal-table_9c10b8b7.jpg" alt="A selection of abstract deal cards and a smartphone" />
              <div className="photo-ticket ticket-top" aria-hidden="true"><Ticket size={16} /><span><b>DEAL DROP</b>Tap to claim</span></div>
              <div className="photo-ticket ticket-bottom" aria-hidden="true"><Check size={16} /><span><b>SAVED</b>In your chat</span></div>
              <div className="offer-detail-stamp" aria-hidden="true"><QrCode size={19} /><span><b>AT YOUR SPOT</b>Scan in for a saving</span></div>
              <div className="offer-mini-coupon" aria-hidden="true"><span>EXTRA</span><b>Tap. Save. Redeem.</b></div>
              <div className="coupon-font-card coupon-font-card-one" aria-hidden="true"><span>VOUCHER</span><b>A little more for your day</b><em>CLAIM</em></div>
              <div className="coupon-font-card coupon-font-card-two" aria-hidden="true"><span>COUPON</span><b>Made to be tapped</b><em>SCAN → CHAT</em></div>
            </div>
            <div className="offer-copy">
              <p className="eyebrow eyebrow-light"><span />A LITTLE EXTRA, ON THE GO</p>
              <h2 id="offers-title">Your chat is now where the good stuff lands.</h2>
              <p>
                From a same-day saving to a reason to try somewhere new, TappedIn puts offers in your WhatsApp chat when they are useful, not weeks later in an inbox.
              </p>
              <ul className="offer-list">
                <li><Check size={18} strokeWidth={3} />Relevant offers from places nearby</li>
                <li><Check size={18} strokeWidth={3} />A voucher you can keep in your chat</li>
                <li><Check size={18} strokeWidth={3} />A clear path from discovery to redemption</li>
              </ul>
              <a className="button button-white" href="#why">Why it works <ArrowUpRight size={17} strokeWidth={2.4} /></a>
            </div>
          </div>
        </section>

        <section id="why" className="why-section" aria-labelledby="why-title">
          <div className="why-copy">
            <p className="eyebrow"><span />A BETTER WAY TO STAY IN THE LOOP</p>
            <h2 id="why-title">Right place. Right moment. Right in your chat.</h2>
            <div className="value-list">
              {valuePoints.map((point, index) => <p key={point}><b>0{index + 1}</b>{point}</p>)}
            </div>
          </div>
          <div className="why-image-card">
            <img src="/manus-storage/tappedin-local-friends_968e7202.jpg" alt="Multiracial friends comparing an offer together during a shopping day" />
            <div className="image-note ticket-plate"><Store size={19} /><span><b>Made for people on the go</b>Discover a reason to pop in.</span><em>LOCAL</em></div>
            <div className="why-saved"><Check size={15} /><span><b>Deal saved</b><small>Keep it here for later</small></span><small>10:31</small></div>
          </div>
        </section>

        <section className="everyday-strip" aria-labelledby="everyday-title">
          <div className="everyday-kicker"><span>01</span><QrCode size={22} /> LITTLE MOMENTS. BETTER VALUE.</div>
          <div className="everyday-copy"><p className="eyebrow"><span />THE EVERYDAY DEAL DESK</p><h2 id="everyday-title">Out for the day? Your chat can come in handy.</h2></div>
          <div className="everyday-notes">
            <article><b>AT THE MALL</b><span>Scan in and see what is on.</span><QrCode size={17} /></article>
            <article><b>WITH FRIENDS</b><span>Save a find for later.</span><Check size={17} /></article>
            <article><b>ON YOUR WAY</b><span>Open a deal when it matters.</span><MessageCircle size={17} /></article>
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="closing-ornament ornament-left" aria-hidden="true"><QrCode size={54} strokeWidth={1.6} /></div>
          <img className="closing-icon" src={iconUrl} alt="" />
          <div className="closing-bubble" aria-hidden="true"><b>TappedIn</b><span>A little good news, just for you.</span><small>now</small></div>
          <div className="closing-voucher" aria-hidden="true"><QrCode size={20} /><span><b>YOUR NEXT TAP</b>Could be a little more rewarding.</span><em><Check size={12} /> READY</em></div>
          <div className="closing-copy">
            <p className="eyebrow"><span />READY WHEN YOU ARE</p>
            <h2 id="closing-title">A better deal is one message away.</h2>
            <p>Spot a TappedIn QR code, scan it, and let the next useful offer find your WhatsApp chat.</p>
            <a className="button button-turquoise" href="#scan"><QrCode size={17} strokeWidth={2.3} /> See the scan-to-claim journey <ArrowUpRight size={18} strokeWidth={2.4} /></a>
          </div>
          <div className="closing-ornament ornament-right" aria-hidden="true"><img src={iconUrl} alt="" /></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand"><img src={logoUrl} alt="TappedIn logo" /><p>Scan in. Chat. Claim deals, vouchers, and coupons where conversations already happen.</p></div>
          <div className="footer-links"><p>Explore</p><a href="#scan">Scan & chat</a><a href="#offers">What you can claim</a><a href="#why">Why TappedIn</a></div>
          <div className="footer-links"><p>For business</p><a href="https://rather.chat/?page_id=4534" target="_blank" rel="noreferrer">Meet Connect Pro <ArrowUpRight size={13} /></a><a href="mailto:human@rather.chat">Contact the team <ArrowUpRight size={13} /></a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 TappedIn. All rights reserved.</span><span>Powered by <a href="https://rather.chat/" target="_blank" rel="noreferrer">rather.chat</a></span></div>
      </footer>
    </div>
  );
}
