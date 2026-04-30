import { useState, useEffect } from "react";
import cheers from './assets/cheers.png';
import cake from './assets/cake.png';
import rings from './assets/rings.png';
import clock from './assets/clock.png';
import photoSrc from './assets/image.png';
import qrCode from './assets/qrCode.png';
import flowers from './assets/flowers.png';
import heart from './assets/heart.png';
import dog from './assets/dog.png';
import fontUrl from './assets/New-YorkerC.ttf';
import mapGanka from './assets/gankamap.png';

const TELEGRAM_LINK = "https://t.me/+GUQaNuzAfM1mNDFi";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Playfair+Display:wght@400;700;900&family=Raleway:wght@300;400;500;600&display=swap');

  @font-face {
    font-family: 'test';
    src: url('${fontUrl}') format('truetype');
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #fdf5f0;
    --pink-light: #f5d6dc;
    --pink-mid: #e8a0b0;
    --pink-deep: #b5687e;
    --pink-section: #b5687e; 
    --pink-muted: #d4849a;
    --mauve: #b5687e;
    --text-dark: #4a2a35;
    --text-mid: #7a4a55;
    --text-light: #b08090;
    --orange: #d4684a;
    --salmon: #e8907a;
    --rose: #d4707a;
    --green: #5a7a5a;
  }

  #root {
    display: flex;
    align-content: center;
    align-items: center;
  }

  body {
    background: #e8e0dc;
    display: flex;
    justify-content: center;
    font-family: 'Raleway', sans-serif;
    min-height: 100vh;
    padding: 0;
  }

  .page {
    background: var(--cream);
    width: 100%;
    max-width: 480px;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }

  /* ─── HEADER ─── */
  .header {
    text-align: center;
    position: relative;
  }

  .bow-svg {
    width: 180px;
    margin: 0 auto 8px;
    display: block;
  }

  .date-line {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    letter-spacing: 4px;
    color: var(--pink-deep);
    margin-bottom: 6px;
  }

  a {
    text-decoration: none;
  }

  .names {
     font-family: 'test', serif;
    font-size: clamp(32px, 8vw, 44px);
    font-weight: 700;
    color: var(--pink-deep);
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1;
  }

  .names .amp {
    font-weight: 400;
    font-style: italic;
    font-size: 0.85em;
  }

  /* ─── PHOTO SECTION ─── */
  .photo-section {
    padding: 0 24px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .heart-frame {
    position: relative;
    width: 280px;
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .heart-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .photo-placeholder {
    position: relative;
    z-index: 2;
    width: 220px;
    height: 200px;
    background: linear-gradient(135deg, var(--pink-light) 0%, var(--pink-mid) 100%);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    border: 2px dashed var(--pink-muted);
    overflow: hidden;
  }

  .photo-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .photo-placeholder .upload-hint {
    font-family: 'Raleway', sans-serif;
    font-size: 13px;
    color: var(--mauve);
    text-align: center;
    padding: 0 16px;
    letter-spacing: 0.5px;
    pointer-events: none;
  }

  .photo-placeholder .upload-icon {
    font-size: 28px;
    pointer-events: none;
  }

  .photo-input { display: none; }

  .invitation-title {
    font-family: 'test', serif;
     text-shadow: 0.3px 0 0 currentColor, -0.3px 0 0 currentColor;
    font-size: 22px;
    font-weight: 700;
    color: var(--pink-deep);
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-top: 20px;
    text-align: center;
  }

  .invitation-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 14px;
    font-weight: 100;
    color: var(--text-mid);
    text-align: center;
    line-height: 1.7;
    padding: 8px 16px 0;
    max-width: 320px;
  }

  /* ─── CHERUBS ─── */
  .cherubs-row {
    display: flex;
    justify-content: center;
    padding: 12px 0 20px;
  }

  /* ─── CALENDAR ─── */
  .calendar-section {
    padding: 12px 32px 32px;
    text-align: center;
  }

  .section-title {
     font-family: 'test', serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--pink-deep);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .cal-month {
    font-family: 'Cormorant Garamond', serif;
    font-size: 15px;
    letter-spacing: 3px;
    color: var(--text-light);
    margin-bottom: 10px;
    text-transform: lowercase;
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    max-width: 320px;
    margin: 0 auto;
  }

  .cal-day-header {
    font-family: 'Raleway', sans-serif;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-light);
    letter-spacing: 1px;
    padding: 4px 0;
  }

  .cal-day {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    color: var(--text-dark);
    padding: 4px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;
  }

  .cal-day.empty { color: transparent; }

  .cal-day.highlighted {
    position: relative;
  }

  .cal-day.highlighted::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cpath d='M20 6 C20 6 8 10 8 20 C8 30 20 34 20 34 C20 34 32 30 32 20 C32 10 20 6 20 6Z' fill='%23e8a0b0' opacity='0.5'/%3E%3C/svg%3E") center/28px no-repeat;
  }

  .cal-day.highlighted span {
    position: relative;
    z-index: 1;
    color: var(--pink-deep);
    font-weight: 600;
  }

  /* ─── DIVIDER ─── */
  .pink-divider {
    height: 3px;
    background: var(--pink-mid);
    margin: 0;
  }

/* ─── COUNTDOWN ─── */
  .countdown-section {
    padding: 32px 32px 28px;
    text-align: center;
    background: var(--cream);
  }

  .countdown-grid {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 20px;
  }

  .countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 54px;
  }

  .countdown-number {
    font-family: 'test', serif;
    font-size: 36px;
    font-weight: 900;
    color: var(--pink-deep);
    line-height: 1;
    background: var(--pink-light);
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    position: relative;
  }

  .countdown-number::after {
    content: '';
    position: absolute;
    left: 6px;
    right: 6px;
    top: 50%;
    height: 1px;
    background: var(--pink-mid);
    opacity: 0.5;
  }

  .countdown-label {
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px;
    color: var(--text-light);
    letter-spacing: 2px;
    margin-top: 6px;
    text-transform: lowercase;
  }

  .countdown-sep {
    font-family: 'test', serif;
    font-size: 36px;
    color: var(--pink-mid);
    align-self: flex-start;
    margin-top: 16px;
    font-weight: 300;
  }

  .countdown-done {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    color: var(--pink-deep);
    font-style: italic;
    margin-top: 16px;
  }


  /* ─── TIMELINE ─── */
  .timeline-section {
    padding: 32px 32px 28px;
    text-align: center;
  }

  .timeline-title {
     font-family: 'test', serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--pink-deep);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .timeline-item {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }

  .timeline-icon {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .timeline-icon svg {
    width: 36px;
    height: 36px;
    stroke: var(--pink-deep);
    fill: none;
    stroke-width: 1.5;
  }

  .timeline-info {
    text-align: left;
  }

  .timeline-time {
     font-family: 'test', serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--pink-deep);
    line-height: 1;
  }

  .timeline-label {
    font-family: 'Cormorant Garamond', serif;
    font-size: 15px;
    color: var(--text-mid);
    letter-spacing: 0.5px;
  }

  /* ─── PINK CARD SECTIONS ─── */
  .pink-card {
    background: var(--pink-section);
    padding: 28px 32px;
    text-align: center;
    margin: 0;
  }

  .pink-card .card-title {
     font-family: 'test', serif;
    font-size: 20px;
    font-weight: 700;
    color: white;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .pink-card .card-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    color: rgba(255,255,255,0.9);
    line-height: 1.6;
    margin-bottom: 16px;
  }

  /* ─── DRESS CODE ─── */
  .dress-section {
    padding: 28px 32px;
    text-align: center;
  }

  .color-dots {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 14px 0;
  }

  .color-dot {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  .dress-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    color: var(--text-mid);
    line-height: 1.6;
    max-width: 300px;
    margin: 0 auto;
  }

  /* ─── ADDITIONAL / CONTACT ─── */
  .additional-section {
    padding: 28px 32px;
    text-align: center;
  }

  .additional-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    color: var(--text-mid);
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .outline-btn {
    display: inline-block;
    border: 1.5px solid var(--pink-deep);
    color: var(--pink-deep);
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 10px 28px;
    cursor: pointer;
    background: transparent;
    transition: all 0.2s;
    text-decoration: none;
  }

  .outline-btn:hover {
    background: var(--pink-deep);
    color: white;
  }

  /* ─── RSVP CARD ─── */
  .rsvp-card {
    background: var(--mauve);
    padding: 28px 32px;
    text-align: center;
  }

  .rsvp-card .card-title {
     font-family: 'test', serif;
    font-size: 20px;
    font-weight: 700;
    color: white;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .rsvp-card .card-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    color: rgba(255,255,255,0.9);
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .solid-btn {
    display: inline-block;
    border: 1.5px solid white;
    color: var(--mauve);
    background: white;
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 10px 28px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .solid-btn:hover {
    background: transparent;
    color: white;
  }

  /* ─── FOOTER ─── */
  .footer {
    padding: 28px 32px 40px;
    text-align: center;
  }

  .footer-bye {
     font-family: 'test', serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--pink-deep);
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  .ornament-line {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;
    margin: 12px 0;
  }

  .ornament-line::before,
  .ornament-line::after {
    content: '';
    flex: 1;
    max-width: 60px;
    height: 1px;
    background: var(--pink-mid);
  }

  /* ─── MODAL RSVP ─── */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(74, 42, 53, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    padding: 24px;
  }

  .modal {
    background: var(--cream);
    width: 100%;
    max-width: 400px;
    padding: 36px 28px;
    text-align: center;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
  }

  .modal-close {
    position: absolute;
    top: 12px;
    right: 16px;
    background: none;
    border: none;
    font-size: 20px;
    color: var(--text-light);
    cursor: pointer;
  }

  .modal-title {
     font-family: 'test', serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--pink-deep);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .form-field {
    margin-bottom: 14px;
    text-align: left;
  }

  .form-label {
    font-family: 'Raleway', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--text-light);
    display: block;
    margin-bottom: 4px;
  }

  .form-input {
    width: 100%;
    border: 1px solid var(--pink-mid);
    background: white;
    padding: 10px 12px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    color: var(--text-dark);
    outline: none;
  }

  .form-input:focus { border-color: var(--pink-deep); }

  .radio-group {
    display: flex;
    gap: 16px;
    margin-top: 4px;
  }

  .radio-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    color: var(--text-mid);
    cursor: pointer;
  }

  .form-submit {
    width: 100%;
    background: var(--pink-deep);
    color: white;
    border: none;
    padding: 13px;
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.2s;
  }

  .form-submit:hover { background: var(--mauve); }

  .success-msg {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    color: var(--pink-deep);
    line-height: 1.6;
    padding: 16px 0;
  }

  /* ─── RESPONSIVE ─── */
  @media (min-width: 520px) {
    body { padding: 24px 0; }
    .page {
      border-radius: 2px;
      box-shadow: 0 8px 60px rgba(74, 42, 53, 0.18);
    }
  }

  @media (max-width: 360px) {
    .names { font-size: 28px; }
    .heart-frame { width: 240px; height: 220px; }
    .photo-placeholder { width: 185px; height: 165px; }
  }
`;

// ─── SVG ILLUSTRATIONS ───────────────────────────────────────────────

const BowSVG = () => (
  <svg viewBox="0 0 220 80" className="bow-svg" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="#c8607a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Left bow loop */}
      <path d="M110 40 C95 20 60 10 45 20 C30 30 35 50 55 48 C75 46 100 35 110 40" />
      <path d="M110 40 C95 55 65 65 50 60 C35 55 38 40 55 48" />
      {/* Right bow loop */}
      <path d="M110 40 C125 20 160 10 175 20 C190 30 185 50 165 48 C145 46 120 35 110 40" />
      <path d="M110 40 C125 55 155 65 170 60 C185 55 182 40 165 48" />
      {/* Center knot */}
      <ellipse cx="110" cy="40" rx="8" ry="6" />
      {/* Ribbons */}
      <path d="M106 44 C95 60 85 72 80 76" />
      <path d="M114 44 C125 60 135 72 140 76" />
      {/* Frame corners */}
      <path d="M20 56 C14 56 10 60 10 66 L10 72" />
      <path d="M200 56 C206 56 210 60 210 66 L210 72" />
    </g>
  </svg>
);

const HeartSVG = () => (
  <svg viewBox="0 0 20 25" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M140 220 C140 220 20 155 20 85 C20 50 48 28 80 28 C100 28 118 38 130 54 C132 57 136 60 140 60 C144 60 148 57 150 54 C162 38 180 28 200 28 C232 28 260 50 260 85 C260 155 140 220 140 220Z"
      fill="#e8a0b0"
      opacity="0.5"
    />
    <path
      d="M140 210 C140 210 30 148 30 85 C30 55 55 38 80 38 C102 38 118 50 130 66 C133 70 136 72 140 72 C144 72 147 70 150 66 C162 50 178 38 200 38 C225 38 250 55 250 85 C250 148 140 210 140 210Z"
      fill="none"
      stroke="#c8607a"
      strokeWidth="2"
      strokeDasharray="5 4"
    />
  </svg>
);

const ClockIcon = () => (
  <img src={clock} alt="clock" width={30} />
);

const RingsIcon = () => (
   <img src={rings} alt="rings" width={40} />
);

const CakeIcon = () => (
  <img src={cheers} alt="cheers" width={40} />
);

const StarIcon = () => (
 <img src={cake} alt="cake" width={40} /> 
);

const DovesSVG = () => (
   <img src={flowers} alt="flowers" width={60} /> 
);

const CarSVG = () => (
  <img src={dog} alt="flowers" width={60} /> 
);

const CherubsSVG = () => (
  <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" width="200" height="80">
    <g fill="none" stroke="#c8607a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Left cherub */}
      <circle cx="45" cy="25" r="10" />
      <path d="M38 32 Q35 48 40 56 Q45 60 50 56 Q55 48 52 32" />
      <path d="M30 36 C20 30 18 20 25 18 C32 16 38 28 38 32" fill="#fce4e8" />
      <path d="M60 36 C70 30 72 20 65 18 C58 16 52 28 52 32" fill="#fce4e8" />
      <line x1="50" y1="56" x2="55" y2="70" />
      <line x1="40" y1="56" x2="35" y2="70" />
      <circle cx="42" cy="22" r="1.5" fill="#c8607a" />
      <circle cx="48" cy="22" r="1.5" fill="#c8607a" />
      <path d="M42 28 Q45 31 48 28" />
      {/* Cake */}
      <rect x="88" y="40" width="24" height="20" rx="1" />
      <rect x="92" y="30" width="16" height="12" rx="1" />
      <line x1="100" y1="26" x2="100" y2="30" />
      <circle cx="100" cy="25" r="2" fill="#c8607a" />
      <path d="M88 46 Q96 42 112 46" />
      {/* Right cherub (mirrored) */}
      <circle cx="155" cy="25" r="10" />
      <path d="M148 32 Q145 48 150 56 Q155 60 160 56 Q165 48 162 32" />
      <path d="M140 36 C130 30 128 20 135 18 C142 16 148 28 148 32" fill="#fce4e8" />
      <path d="M170 36 C180 30 182 20 175 18 C168 16 162 28 162 32" fill="#fce4e8" />
      <line x1="160" y1="56" x2="165" y2="70" />
      <line x1="150" y1="56" x2="145" y2="70" />
      <circle cx="152" cy="22" r="1.5" fill="#c8607a" />
      <circle cx="158" cy="22" r="1.5" fill="#c8607a" />
      <path d="M152 28 Q155 31 158 28" />
    </g>
  </svg>
);

// ─── CALENDAR DATA ───────────────────────────────────────────────────

const AUGUST_2026 = {
  name: "август | 2026",
  startDay: 2, // Friday (0=Sun)
  days: 31,
  highlight: 2,
};

const DAY_HEADERS = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

function buildCalendar({ startDay, days, highlight }) {
  // startDay: 0=Sun … 6=Sat, we display Mon-Sun so offset
  // Aug 1 2025 is Friday = index 4 in Mon-Sun grid
  const offset = 5; // Friday in Mon-Sun grid (Mon=0)
  const cells = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);
  return cells;
}

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) {
        setTimeLeft(null);
        return;
      }
      setTimeLeft({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calculate();
    const id = setInterval(calculate, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────

export default function WeddingInvitation() {
  const [showRsvp, setShowRsvp] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", guests: "1", attending: "yes" });
  const timeLeft = useCountdown("2026-08-02T15:00:00");
  const calCells = buildCalendar(AUGUST_2026);
  const handleSubmit = async () => {
    await fetch("https://hammerhead-app-xw9wl.ondigitalocean.app/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name:      form.name,
        attending: form.attending,
      }),
    });

    // После отправки — открыть чат
    window.open(TELEGRAM_LINK, "_blank");
    setShowRsvp(false);
  };

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <>
      <style>{style}</style>
      <div className="page">

        {/* ── HEADER ── */}
        <div className="header">
          <BowSVG />
          <div className="date-line">02 / 08 / 26</div>
          <div className="names">
            КСЕНИЯ 
            <span className="amp"><br/></span>
            <span className="amp">+</span>
             <span className="amp"><br/></span>
             ЕВГЕНИЙ
          </div>
        </div>

        {/* ── PHOTO ── */}
        <div className="photo-section">
          <div className="heart-frame">
            <label className="photo-placeholder" style={{ cursor: "pointer" }}>
                <img src={photoSrc} alt="Фото пары" />
            </label>
          </div>

          <div className="invitation-title">А У нас свадьба!</div>
          <p className="invitation-text">
            Лето близится, и мы хотим провести <br/>его лучший день с вами!
            <br/>Мы решили пожениться и сделать это красиво, уютно и по-нашему.<br/>
           Приглашаем вас радоваться за нашу семью и танцевать до упаду
            <br/>С нетерпением ждём встречи!
          </p>
        </div>

        {/* ── CALENDAR ── */}
        <div className="calendar-section">
          <div className="section-title">Дата торжества</div>
          <div className="cal-month">{AUGUST_2026.name}</div>
          <div className="calendar-grid">
            {DAY_HEADERS.map(h => (
              <div key={h} className="cal-day-header">{h}</div>
            ))}
            {calCells.map((d, i) => (
              <div
                key={i}
                className={`cal-day${d === null ? " empty" : ""}${d === AUGUST_2026.highlight ? " highlighted" : ""}`}
              >
                {d === AUGUST_2026.highlight ? <span>{d}</span> : d || ""}
              </div>
            ))}
          </div>
        </div>

        <div className="photo-section">
          <div className="section-title">Место проведения</div>
          <p className="invitation-text">
             Агроусадьба Ганка. Находится в 50км от Минска
          </p>

          <p><br/></p>
           <label className="photo-placeholder" style={{ cursor: "pointer" }}>
              
               <a
                target="_blank"
                rel="noopener noreferrer" 
                href="https://yandex.ru/maps/org/ganka/1017457615/?l=night&ll=27.083714%2C54.048309&mode=search&rtext=53.901178%2C27.558229~54.048309%2C27.083714&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D1017457615&sctx=ZAAAAAgBEAAaKAoSCaWfcHZrJTtAEXsRbcfU%2FUpAEhIJg%2FjAjv%2FC%2Fj8ReGLWi6Gc5j8iBgABAgMEBSgKOABAvucBSAFiWHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vQWR2ZXJ0cy9SZWFycmFuZ2VCeUF1Y3Rpb24vU2ltaWxhck9yZ3NMaXN0QXVjdGlvbi9QYWdlSWQ9MTkwOTIwNDBqAmJ5nQHNzMw9oAEAqAEAvQE6CG5jwgEFz9eU5QOCAgrQs9Cw0L3QutCwigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=27.083714%2C54.048309&sspn=0.015020%2C0.005512&text=%D0%B3%D0%B0%D0%BD%D0%BA%D0%B0&z=17">
 <img src={mapGanka} alt="Фото пары"/>
                  </a>
           
            </label>
        </div>

        {/* ── COUNTDOWN ── */}
        <div className="countdown-section">
          <div className="section-title">До свадьбы осталось</div>
          {timeLeft ? (
            <div className="countdown-grid">
              <div className="countdown-item">
                <div className="countdown-number">{pad(timeLeft.days)}</div>
                <div className="countdown-label">дней</div>
              </div>
              <div className="countdown-sep">:</div>
              <div className="countdown-item">
                <div className="countdown-number">{pad(timeLeft.hours)}</div>
                <div className="countdown-label">часов</div>
              </div>
              <div className="countdown-sep">:</div>
              <div className="countdown-item">
                <div className="countdown-number">{pad(timeLeft.minutes)}</div>
                <div className="countdown-label">минут</div>
              </div>
              <div className="countdown-sep">:</div>
              <div className="countdown-item">
                <div className="countdown-number">{pad(timeLeft.seconds)}</div>
                <div className="countdown-label">секунд</div>
              </div>
            </div>
          ) : (
            <div className="countdown-done">Этот день настал! 🎉</div>
          )}
        </div>

        <div className="pink-divider" />

        {/* ── TIMELINE ── */}
        <div className="timeline-section">
          <div className="timeline-title">Тайминг дня</div>
          {[
            { time: "15:00", label: "сбор гостей", Icon: ClockIcon },
            { time: "16:00", label: "церемония", Icon: RingsIcon },
            { time: "17:00", label: "банкет", Icon: CakeIcon },
            { time: "22:30", label: "свадебный тортик", Icon: StarIcon },
          ].map(({ time, label, Icon }) => (
            <div className="timeline-item" key={time}>
              <div className="timeline-icon">
                <Icon />
              </div>
              <div className="timeline-info">
                <div className="timeline-time">{time}</div>
                <div className="timeline-label">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── ПОЖЕЛАНИЯ ── */}
        <div className="pink-card">
          <div className="card-title">Миссия для гостей</div>
          <p className="card-text">
           Найти цветок, который <br/> ассоциируется с невестой, <br/>и привезти с собой.<br/>
           Из них мы создадим особенное<br/> украшение праздника!
          </p>
          <DovesSVG />
        </div>

        {/* ── DRESS CODE ── */}
        <div className="dress-section">
          <div className="section-title">Дресс-код</div>
          <p className="dress-text">
            Мы очень ждём и с удовольствием <br/> готовимся к нашему празднику.<br/>
            Просим поддержать нас улыбками, а также красивыми нарядами в палитре торжества.<br/>
            Нам будет приятно, если в ваших образах будут отголоски природных оттенков. 
          </p>
          <div className="color-dots">
            <div className="color-dot" style={{ background: "#4a2c21" }} />
            <div className="color-dot" style={{ background: "#f8e7b6" }} />
            <div className="color-dot" style={{ background: "#e8b4bc" }} />
            <div className="color-dot" style={{ background: "#818263" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
            <CarSVG />
          </div>
          <p className="dress-text"> 
            Кстати, наш хвостатый друг <br/> (и по совместительству член семьи)<br/> очень ждёт возможности потереться <br/> о ваши ноги в красивых нарядах.
          </p>
        </div>

        {/* ── ДОПОЛНИТЕЛЬНО ── */}
        <div className="additional-section">
          <div className="section-title">Дополнительно</div>
          <p className="additional-text">
            Вся-вся важная информация,<br/> где парковаться и что дарить, <br/>будет в специальном чате.
          </p>
          {/* <img src={qrCode} alt="qrCode" width={100}/> */}
        </div>

        {/* ── RSVP ── */}
        <div className="rsvp-card">
          <div className="card-title">Вы придёте?</div>
          <p className="card-text">
            Мы будем очень рады видеть вас<br/> на нашем торжестве!<br/>
Будет красиво, вкусно и очень по-любви.<br/>
Женя, Ксюша, Тёрк
          </p>
          <button className="solid-btn" onClick={() => setShowRsvp(true)}>
            Подтвердить присутствие
          </button>
        </div>

        {/* ── FOOTER ── */}
        <div className="footer">
          <div className="ornament-line">
            <img src={heart} alt="heart" width={30} />
          </div>
          <div className="footer-bye">До встречи!</div>
        </div>

      </div>

      {/* ── RSVP MODAL ── */}
      {showRsvp && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && setShowRsvp(false)}>
          <div className="modal">
            <button className="modal-close" onClick={() => setShowRsvp(false)}>✕</button>
            {submitted ? (
              <div>
                <div className="modal-title">Спасибо!</div>
                <p className="success-msg">
                  Мы с нетерпением ждём встречи с вами на нашем торжестве 🤍
                </p>
              </div>
            ) : (
              <>
                <div className="modal-title">Подтверждение</div>

                <div className="form-field">
                  <label className="form-label">Ваше имя</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Имя и фамилия"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Присутствие</label>
                  <div className="radio-group">
                    {[["yes", "Приду"], ["no", "Не смогу"]].map(([val, lbl]) => (
                      <label key={val} className="radio-label">
                        <input
                          type="radio"
                          name="attending"
                          value={val}
                          checked={form.attending === val}
                          onChange={() => setForm({ ...form, attending: val })}
                        />
                        {lbl}
                      </label>
                    ))}
                  </div>
                </div>

               {form.attending === "yes" && (
                <a
                className="form-submit"
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSubmit}
              >
                Перейти в чат
              </a>)}

              {form.attending === "no" && (
                <a
                className="form-submit"
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                 onClick={handleSubmit}
              >
                Отправить
              </a>)}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
