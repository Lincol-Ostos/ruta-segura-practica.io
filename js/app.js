const $=s=>document.querySelector(s);
const stage=$('#stage');

/* ---------- ilustraciones propias ---------- */
const HEAD=`<g>
<ellipse cx="0" cy="8" rx="40" ry="42" fill="#e3ab7c"/>
<rect x="-34" y="-6" width="68" height="22" rx="10" fill="#1b1b1b"/>
<circle cx="-15" cy="5" r="8.5" fill="#fff"/><circle cx="15" cy="5" r="8.5" fill="#fff"/>
<circle cx="-14" cy="6" r="5" fill="#111"/><circle cx="16" cy="6" r="5" fill="#111"/>
<path d="M-36 16 Q0 8 36 16 L30 44 Q0 56 -30 44Z" fill="#f6f8f8" stroke="#c0cbcf"/>
<path d="M-50 -12 Q-52 -62 0 -66 Q52 -62 50 -12 L50 -8 L-50 -8Z" fill="#f4f6f6" stroke="#c0cbcf" stroke-width="2"/>
<rect x="-10" y="-76" width="20" height="14" rx="5" fill="#d3dadd"/>
<rect x="-50" y="-16" width="100" height="9" rx="4" fill="#e2e8ea" stroke="#c0cbcf"/>
<path d="M-20 -36 Q0 -48 20 -36" fill="none" stroke="#2e7b8f" stroke-width="6" stroke-linecap="round"/>
</g>`;
function arm(pose){
  if(pose==='point') return `<path d="M42 66 L78 84 L74 22" fill="none" stroke="#1b2b55" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/><circle cx="74" cy="14" r="10" fill="#3b2c2c"/><rect x="70" y="-12" width="8" height="22" rx="4" fill="#3b2c2c"/>`;
  if(pose==='wave') return `<path d="M42 66 L86 74 L96 18" fill="none" stroke="#1b2b55" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/><circle cx="96" cy="10" r="11" fill="#3b2c2c"/>`;
  if(pose==='thumb') return `<path d="M42 66 L74 98 L66 70" fill="none" stroke="#1b2b55" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/><circle cx="64" cy="64" r="13" fill="#3b2c2c"/><rect x="58" y="36" width="10" height="26" rx="5" fill="#3b2c2c"/>`;
  return `<path d="M42 66 L54 150" fill="none" stroke="#1b2b55" stroke-width="20" stroke-linecap="round"/><circle cx="55" cy="156" r="10" fill="#3b2c2c"/>`;
}
function guide(pose='point',cls=''){
  return `<svg class="guide ${cls}" viewBox="-70 -90 190 360" role="img" aria-label="Guía de seguridad con casco y mascarilla">
  <ellipse cx="10" cy="262" rx="70" ry="10" fill="rgba(0,0,0,.2)"/>
  <rect x="-34" y="150" width="28" height="100" rx="8" fill="#1b2b55"/><rect x="6" y="150" width="28" height="100" rx="8" fill="#1b2b55"/>
  <path d="M-40 250 h36 v12 q0 8 -10 8 h-22 q-8 0 -8 -10z" fill="#6b4328"/><path d="M4 250 h36 v12 q0 8 -10 8 h-22 q-8 0 -8 -10z" fill="#6b4328"/>
  <path d="M-42 60 L-26 46 L26 46 L42 60 L42 158 L-42 158Z" fill="#1b2b55"/>
  <path d="M-40 56 L-14 48 L-14 158 L-40 158Z" fill="#ee6a3a"/><path d="M40 56 L14 48 L14 158 L40 158Z" fill="#ee6a3a"/>
  <rect x="-40" y="92" width="26" height="9" fill="#f7d83c"/><rect x="14" y="92" width="26" height="9" fill="#f7d83c"/>
  <rect x="-40" y="124" width="26" height="9" fill="#f7d83c"/><rect x="14" y="124" width="26" height="9" fill="#f7d83c"/>
  <path d="M-42 66 L-54 150" fill="none" stroke="#1b2b55" stroke-width="20" stroke-linecap="round"/><circle cx="-55" cy="156" r="10" fill="#3b2c2c"/>
  ${arm(pose)}
  <g transform="translate(0,0)">${HEAD}</g></svg>`;
}
function avatar(){return `<svg class="av" viewBox="-62 -80 124 124" aria-hidden="true" style="width:64px;height:64px;border-radius:50%;border:4px solid var(--amber);background:var(--panel);flex:0 0 auto">${HEAD}</svg>`}
function pickup(sleepy,w='100%'){
  return `<svg viewBox="0 0 420 230" style="width:${w};height:auto" role="img" aria-label="Camioneta con conductor">
  <ellipse cx="205" cy="208" rx="190" ry="10" fill="rgba(0,0,0,.18)"/>
  <rect x="20" y="88" width="190" height="10" fill="#5a5f64"/><rect x="20" y="96" width="190" height="76" fill="#dfe2e3"/><rect x="20" y="96" width="190" height="8" fill="#c7cbcd"/>
  <path d="M210 172 L210 85 L265 55 L332 55 L372 105 L388 120 L388 172Z" fill="#eceeee"/>
  <path d="M224 92 L268 66 L322 66 L352 105 L224 105Z" fill="#7f98a6"/>
  <circle cx="292" cy="92" r="13" fill="#e3ab7c"/><path d="M278 90 Q292 68 306 90Z" fill="#f4f6f6" stroke="#b9c3c7"/>
  ${sleepy?`<path d="M285 94 q4 3 8 0 M295 94 q4 3 8 0" stroke="#222" stroke-width="2" fill="none"/><text x="236" y="86" font-size="16" font-weight="700" fill="#fff" font-family="sans-serif">Z z z</text>`:`<circle cx="287" cy="92" r="2" fill="#222"/><circle cx="298" cy="92" r="2" fill="#222"/>`}
  <rect x="380" y="128" width="12" height="16" rx="3" fill="#f2b632"/><rect x="368" y="164" width="26" height="12" rx="4" fill="#3a3d40"/>
  <circle cx="92" cy="178" r="30" fill="#1e2124"/><circle cx="92" cy="178" r="12" fill="#8a9296"/>
  <circle cx="322" cy="178" r="30" fill="#1e2124"/><circle cx="322" cy="178" r="12" fill="#8a9296"/></svg>`;
}
function crash(){
  return `<svg viewBox="0 0 560 300" style="width:100%;height:auto" role="img" aria-label="Choque entre una camioneta y un bus">
  <ellipse cx="290" cy="270" rx="260" ry="12" fill="rgba(0,0,0,.18)"/>
  <g transform="translate(10,70) rotate(-3 160 100)">
    <rect x="10" y="60" width="150" height="70" fill="#dfe2e3"/><rect x="10" y="54" width="150" height="9" fill="#5a5f64"/>
    <path d="M160 130 L160 50 L205 25 L250 25 L282 70 L288 90 L288 130Z" fill="#eceeee"/>
    <path d="M170 56 L206 36 L244 36 L266 70 L170 70Z" fill="#6d818c"/>
    <path d="M200 40 L214 62 L230 44 L244 70 M180 60 L205 52" stroke="#e8eef0" stroke-width="2" fill="none"/>
    <path d="M250 96 L290 86 L292 134 L262 140Z" fill="#40454a"/>
    <circle cx="70" cy="140" r="26" fill="#1e2124"/><circle cx="70" cy="140" r="10" fill="#8a9296"/>
    <circle cx="238" cy="146" r="26" fill="#1e2124"/><circle cx="238" cy="146" r="10" fill="#8a9296"/>
  </g>
  <rect x="318" y="40" width="240" height="200" rx="16" fill="#ec7a2c"/><rect x="318" y="40" width="240" height="30" rx="16" fill="#f29a52"/>
  <rect x="332" y="86" width="60" height="70" rx="6" fill="#bfe3ee"/><rect x="402" y="86" width="60" height="70" rx="6" fill="#bfe3ee"/><rect x="472" y="86" width="70" height="70" rx="6" fill="#bfe3ee"/>
  <path d="M332 90 L350 120 L340 150 M410 92 L430 130" stroke="#fff" stroke-width="2" fill="none"/>
  <circle cx="380" cy="244" r="30" fill="#1e2124"/><circle cx="380" cy="244" r="11" fill="#8a9296"/>
  <g fill="#4b4540" opacity=".75"><circle cx="318" cy="64" r="20"/><circle cx="338" cy="40" r="26"/><circle cx="372" cy="22" r="20"/><circle cx="300" cy="40" r="14"/></g></svg>`;
}
function hauler(x,y,rot,s=1.15){
  return `<g transform="translate(${x},${y}) rotate(${rot}) scale(${s})">
  <ellipse cx="10" cy="68" rx="125" ry="9" fill="rgba(0,0,0,.2)"/>
  <rect x="-100" y="0" width="215" height="30" fill="#c58f17"/>
  <polygon points="-108,6 -98,-78 34,-62 44,6" fill="#f2b632"/>
  <polygon points="-94,-72 28,-56 24,-46 -92,-62" fill="#5a3c28"/>
  <polygon points="40,6 40,-46 98,-46 114,-10 120,6" fill="#f2b632"/><polygon points="62,-40 92,-40 102,-14 62,-14" fill="#8fb4c9"/>
  <circle cx="-56" cy="40" r="32" fill="#1b1b1b"/><circle cx="-56" cy="40" r="11" fill="#666"/>
  <circle cx="68" cy="40" r="32" fill="#1b1b1b"/><circle cx="68" cy="40" r="11" fill="#666"/></g>`;
}
const SKY={day:['#bfeff2','#eaf7f2'],dusk:['#f1a35f','#fbe3b4'],night:['#2c7a90','#0d2c3a'],pale:['#fdf0e1','#f7e6d2'],white:['#f6f7f7','#eef2f1']};
function roadBG(sky,opt={}){
  const [a,b]=SKY[sky];
  return `<svg class="bg" viewBox="0 0 1400 780" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>
  <rect width="1400" height="780" fill="url(#g)"/>
  <polygon points="30,500 300,240 420,330 570,190 770,400 700,520" fill="#6f5842"/><polygon points="200,540 420,330 520,400 650,290 820,520" fill="#85694d"/>
  <polygon points="860,300 980,170 1090,250 1200,120 1400,260 1400,330" fill="#7c614a"/>
  <polygon points="0,540 1400,60 1400,780 0,780" fill="#9b8566"/>
  <line x1="-60" y1="770" x2="1460" y2="30" stroke="#33465e" stroke-width="150"/>
  <line x1="-60" y1="770" x2="1460" y2="30" stroke="#fff" stroke-width="7" stroke-dasharray="46 40"/>
  <polygon points="1000,640 1090,560 1180,600 1260,520 1400,580 1400,780 1000,780" fill="#b69064"/>
  <polygon points="1180,700 1240,640 1330,660 1400,620 1400,780 1160,780" fill="#8a6a46"/>
  <ellipse cx="260" cy="650" rx="34" ry="14" fill="#8e9aa0"/><ellipse cx="760" cy="640" rx="30" ry="12" fill="#8e9aa0"/>
  ${opt.truck===false?'':hauler(700,400,-25.6)}
  ${opt.sign?`<g transform="translate(1000,360)"><rect x="-3" y="0" width="6" height="120" fill="#9aa0a4"/><polygon points="0,-60 52,-4 0,50 -52,-4" fill="#f4c21f" stroke="#222" stroke-width="3"/><path d="M-12 -30 q14 -8 6 8 t14 12 t-6 14" stroke="#222" stroke-width="5" fill="none"/></g>`:''}
  </svg>`;
}
function desertBG(sky,night){
  const [a,b]=SKY[sky]; const m1=night?'#5c5a56':'#7c614a', m2=night?'#6d6a64':'#a58763', gr=night?'#837b6b':'#dcb98a';
  return `<svg class="bg" viewBox="0 0 1400 780" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>
  <rect width="1400" height="780" fill="url(#g)"/>
  <polygon points="0,420 120,300 220,360 330,260 440,420" fill="${m1}"/><polygon points="1000,430 1100,320 1190,380 1290,250 1400,340 1400,440" fill="${m1}"/>
  <polygon points="780,450 900,360 1010,420 1120,330 1240,450" fill="${m2}"/><polygon points="60,460 200,380 300,440 420,350 560,460" fill="${m2}"/>
  <ellipse cx="760" cy="470" rx="260" ry="26" fill="rgba(255,255,255,.18)"/>
  <rect y="470" width="1400" height="310" fill="${gr}"/>
  <ellipse cx="400" cy="740" rx="420" ry="46" fill="rgba(0,0,0,.08)"/></svg>`;
}
const MARK=`<svg class="mark" viewBox="0 0 48 48" aria-hidden="true"><path d="M3 38 L18 12 L26 26 L32 18 L45 38Z" fill="currentColor" opacity=".9"/><path d="M8 42 Q24 30 40 42" stroke="currentColor" stroke-width="3" fill="none"/></svg>`;
/* iconos */
const IC={
 clock:`<svg class="ico" viewBox="0 0 80 80"><circle cx="40" cy="40" r="34" fill="#fff" stroke="#e5566b" stroke-width="7"/><path d="M40 18 V40 H58" stroke="#2c4e6b" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="40" cy="40" r="5" fill="#e5566b"/></svg>`,
 food:`<svg class="ico" viewBox="0 0 90 80"><rect x="10" y="12" width="16" height="42" rx="4" fill="#7cc1e8"/><circle cx="50" cy="52" r="22" fill="#e5543f"/><path d="M50 30 q4 -14 14 -14" stroke="#4e9a3b" stroke-width="5" fill="none"/><path d="M60 40 L84 30 L78 62Z" fill="#f08a2a"/></svg>`,
 work:`<svg class="ico" viewBox="0 0 120 90"><circle cx="24" cy="22" r="14" fill="#7ad8f0"/><path d="M24 22 V14 M24 22 L30 25" stroke="#14323a" stroke-width="3"/><rect x="14" y="70" width="100" height="10" fill="#f2b632"/><rect x="26" y="34" width="34" height="30" fill="#c7cbce"/><circle cx="82" cy="40" r="12" fill="#c9c0c0"/><path d="M66 70 q16 -26 32 0Z" fill="#6fd0ee"/></svg>`,
 nowork:`<svg class="ico" viewBox="0 0 120 90"><circle cx="60" cy="14" r="12" fill="#e5342f"/><path d="M54 8 l12 12 M66 8 l-12 12" stroke="#fff" stroke-width="3"/><g fill="#8aa4c4"><circle cx="24" cy="52" r="10"/><circle cx="60" cy="52" r="10" fill="#8a8ad4"/><circle cx="96" cy="52" r="10"/><path d="M10 84 q14 -28 28 0Z"/><path d="M46 84 q14 -28 28 0Z" fill="#8a8ad4"/><path d="M82 84 q14 -28 28 0Z"/></g></svg>`,
 bed:`<svg class="ico" viewBox="0 0 120 100" style="height:110px"><path d="M10 20 Q60 -4 108 28 L100 90 L12 92Z" fill="#f7e2d2"/><rect x="34" y="20" width="44" height="22" rx="6" fill="#fff" stroke="#ddd"/><circle cx="56" cy="34" r="14" fill="#8c5a3a"/><circle cx="56" cy="40" r="11" fill="#e3b08a"/><path d="M34 56 h46 v34 h-46z" fill="#cfe5f2"/><path d="M26 62 h66 v30 h-66z" fill="#bcd8c0"/></svg>`,
 pill:`<svg class="ico" viewBox="0 0 120 90"><rect x="30" y="8" width="40" height="22" rx="4" fill="#33465e"/><rect x="26" y="26" width="48" height="50" rx="8" fill="#4f7ff0"/><path d="M50 40 v22 M39 51 h22" stroke="#fff" stroke-width="6"/><rect x="62" y="22" width="36" height="22" rx="4" fill="#33465e"/><rect x="58" y="40" width="44" height="42" rx="8" fill="#e5493f"/><path d="M80 50 v22 M69 61 h22" stroke="#fff" stroke-width="6"/></svg>`,
 stress:`<svg class="ico" viewBox="0 0 120 100" style="height:110px"><circle cx="60" cy="40" r="22" fill="#e3b08a"/><path d="M38 38 q22 -28 44 0 q-4 -22 -22 -22 q-18 0 -22 22Z" fill="#7a4a2c"/><path d="M42 50 q18 -6 36 0" stroke="#7a4a2c" stroke-width="3" fill="none"/><path d="M34 98 q26 -48 52 0Z" fill="#a8d3ec"/><path d="M36 54 q-14 -20 4 -36 M84 54 q14 -20 -4 -36" stroke="#a8d3ec" stroke-width="10" fill="none" stroke-linecap="round"/></svg>`,
 stop:`<svg viewBox="0 0 120 220" style="width:clamp(90px,12vw,150px);height:auto"><rect x="54" y="90" width="12" height="110" fill="#9aa0a4"/><polygon points="38,6 82,6 112,36 112,80 82,110 38,110 8,80 8,36" fill="#d8352c" stroke="#fff" stroke-width="5"/><text x="60" y="68" text-anchor="middle" font-family="Barlow Semi Condensed,sans-serif" font-weight="700" font-size="30" fill="#fff">PARE</text><ellipse cx="60" cy="204" rx="40" ry="8" fill="rgba(0,0,0,.2)"/></svg>`,
 doctor:`<svg viewBox="0 0 120 120" style="width:clamp(110px,14vw,180px);height:auto"><circle cx="60" cy="60" r="58" fill="#a8c04f"/><path d="M26 118 q8 -44 34 -44 q26 0 34 44Z" fill="#fff"/><circle cx="60" cy="46" r="18" fill="#f1c8a2"/><path d="M42 42 q4 -20 18 -20 q16 0 18 20 q-8 -10 -18 -10 q-12 0 -18 10Z" fill="#5a4636"/><path d="M52 76 l8 22 l8 -22" fill="#2ba5b0"/><path d="M42 80 q-2 22 14 22" fill="none" stroke="#2a4a5a" stroke-width="3"/></svg>`,
 apple:`<svg viewBox="0 0 120 110" style="width:clamp(80px,11vw,130px);height:auto"><path d="M44 30 q-34 -4 -34 32 q4 36 34 36 q8 0 10 -2" fill="none" stroke="#e5543f" stroke-width="6" stroke-linecap="round"/><path d="M40 22 q6 -16 18 -16" stroke="#e5543f" stroke-width="5" fill="none"/><path d="M62 40 L90 26 L78 90 Z" fill="none" stroke="#f08a2a" stroke-width="6" stroke-linejoin="round"/><path d="M80 22 q4 -10 14 -10 M88 24 q10 -8 20 -2" stroke="#4e9a3b" stroke-width="5" fill="none"/><circle cx="86" cy="80" r="16" fill="#fff" stroke="#4e9a3b" stroke-width="4"/><path d="M78 80 l6 6 l12 -12" stroke="#4e9a3b" stroke-width="4" fill="none"/></svg>`,
 speaker:`<svg viewBox="0 0 120 130" style="width:clamp(80px,10vw,120px);height:auto"><rect x="38" y="14" width="44" height="86" rx="8" fill="#9aa3a8"/><circle cx="60" cy="40" r="11" fill="#33414a"/><circle cx="60" cy="72" r="14" fill="#33414a"/><rect x="52" y="100" width="16" height="14" fill="#9aa3a8"/><rect x="38" y="112" width="44" height="8" rx="3" fill="#7d868b"/><path d="M26 30 q-8 12 0 24 M94 30 q8 12 0 24" stroke="#59c3e0" stroke-width="4" fill="none" stroke-linecap="round"/><text x="8" y="92" font-size="22" fill="#f2b632">♪</text><text x="98" y="104" font-size="22" fill="#ee6a3a">♫</text></svg>`,
 tick:`<svg class="chk" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#2e7b8f"/><path d="M17 33 l10 10 l21 -22" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
 cross:`<svg class="chk" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#c93a31"/><path d="M20 20 l24 24 M44 20 l-24 24" stroke="#fff" stroke-width="7" stroke-linecap="round"/></svg>`
};
function spine(good){
  return `<svg viewBox="0 0 130 100" style="width:130px;height:auto" role="img" aria-label="${good?'Postura correcta':'Postura incorrecta'}"><path d="M20 90 L70 90 L74 62 L98 14" stroke="#7d8a92" stroke-width="12" stroke-linecap="round" fill="none"/><circle cx="${good?86:96}" cy="${good?22:26}" r="11" fill="#e3ab7c"/><path d="${good?'M84 34 L72 62 L60 82':'M96 38 Q76 46 70 62 L58 82'}" stroke="${good?'#3b9b5a':'#d9473a'}" stroke-width="8" fill="none" stroke-linecap="round"/><path d="${good?'M88 40 L112 52':'M98 42 L124 62'}" stroke="#c28b1b" stroke-width="7" stroke-linecap="round"/><path d="M58 82 L96 86" stroke="#2c3d55" stroke-width="9" stroke-linecap="round"/></svg>`;
}
function stretchFig(){
  return `<svg class="stretch" id="fig" viewBox="0 0 100 200" style="width:min(190px,60%);height:auto" role="img" aria-label="Figura que realiza un estiramiento lateral">
  <rect x="38" y="140" width="10" height="46" rx="4" fill="#ee6a3a"/><rect x="52" y="140" width="10" height="46" rx="4" fill="#ee6a3a"/><rect x="34" y="184" width="16" height="8" rx="3" fill="#222"/><rect x="50" y="184" width="16" height="8" rx="3" fill="#222"/>
  <g class="body"><rect x="36" y="62" width="28" height="82" rx="10" fill="#ee6a3a"/><rect x="36" y="98" width="28" height="6" fill="#fff"/><circle cx="50" cy="44" r="18" fill="#f4f6f6" stroke="#b9c3c7"/><rect x="38" y="46" width="24" height="10" rx="4" fill="#e3ab7c"/>
  <g class="arm"><rect x="46" y="62" width="9" height="62" rx="4" fill="#ee6a3a" transform="rotate(180 50 62)"/></g></g></svg>`;
}

/* ---------- diapositivas ---------- */
const cover=(txt,col)=>`<div class="cover" style="background:${col}">${txt}</div>`;
const pill=t=>`<div class="pill">${t}</div>`;
const mid=(...a)=>a.join('');
const GATE={act:'Resuelve la actividad para continuar',tabs:'Selecciona cada medida preventiva para continuar',pp:'Abre «Realiza pausas activas» para continuar',spk:'Selecciona el parlante para continuar'};

function activity(key,title,intro,caseHtml,opts,inline,note){
  return st=>`${pill(title)}<div class="act"><div class="askbar">${avatar()}<span>${intro}</span></div>
  <div class="case">${caseHtml}</div>
  <div class="opts ${inline?'inline':''}" role="radiogroup">${opts.map((o,i)=>`<label class="opt"><input type="radio" name="${key}" value="${i}" ${st.sel===i?'checked':''}><span>${o}</span></label>`).join('')}</div>
  ${note?`<div class="note">${note}</div>`:''}
  <button class="btn send" id="send" data-act="send" ${st.sel==null?'disabled':''}>Enviar</button></div>`;
}
const ACT={
 miguel:{ok:1,good:['¡Bien hecho!','Desde las 12 de la noche hasta las 6 de la mañana, así como después de comer, el cuerpo pasa por un momento de fatiga, lo que podría afectar el desenvolvimiento de un conductor y ocasionar, en el peor de los casos, un accidente.'],bad:'Piensa en qué pasa con el cuerpo después de comer y en la hora en que Miguel va a conducir.'},
 ruben:{ok:3,good:['¡Muy bien!','Ninguno de los dos está apto para empezar su trabajo con los volquetes ya que conducir un vehículo requiere una total concentración y capacidad de reacción.'],bad:'Un conductor que bosteza todo el día y otro que durmió apenas un par de horas, ¿tienen plena capacidad de reacción?'},
 ignacio:{ok:1,good:['¡Así se hace!','Ignacio debe dormir como mínimo 6 horas la noche anterior para que esté atento a su entorno. Además, es importante que su sueño haya sido reparador para que esté en un estado de alerta óptimo.'],bad:'Ningún truco de última hora reemplaza el descanso. Revisa cuántas horas de sueño recomienda el curso.'}
};
const MEAS=[
 {t:'Ten una adecuada alimentación.',h:()=>`<div class="center">${IC.apple}</div><ul><li>Procura cenar por lo menos dos horas antes de ir a dormir.</li><li>Evita los alimentos pesados como las grasas, frituras y comidas abundantes.</li><li>Evita fumar y/o tomar bebidas estimulantes (café o bebidas energéticas): pueden evitar la fatiga a corto plazo, pero pasados sus efectos volverá a aparecer.</li><li>Bebe mucho líquido ya que la deshidratación causa fatiga.</li></ul>`},
 {t:'Mantente más alerta durante la última hora de conducción.',h:()=>`<div class="row"><div class="col"><ul><li>Cuando se está llegando al destino hay mayor cansancio acumulado y se suele bajar la guardia, así que debes mantenerte más alerta en esta última hora de conducción.</li></ul></div><div class="col">${pickup(false)}</div></div>`},
 {t:'Ten un sueño reparador.',h:()=>`<ul><li>Duerme diariamente un mínimo de 6 horas sin interrupciones.</li><li>Descansa lo suficiente si vas a conducir en guardias de noche.</li></ul><b>Consejos para mejorar la calidad de sueño:</b><div class="row"><div class="col"><ul><li>Trata que la hora de ir a dormir y de levantarte sea siempre la misma.</li><li>Procura un entorno acogedor, sin ruidos y sin exceso de calor.</li><li>No te acuestes justo después de cenar.</li><li>Evita el tabaco y los excitantes (café, té, etc.) en las horas previas a irte a dormir.</li><li>Procura no usar el celular minutos antes de dormir.</li></ul></div><div style="flex:0 0 130px">${IC.bed}</div></div>`},
 {t:'Usa ropa cómoda y ten una buena postura de conducción.',h:()=>`<div class="posture">${spine(true)}<div><h4>Postura correcta</h4><ul><li>Apoyo completo en el espaldar.</li><li>El asiento debe tener una curvatura para el apoyo lumbar; si no, debe tener una almohadilla.</li></ul></div></div><div class="posture">${spine(false)}<div><h4>Postura incorrecta</h4><ul><li>Brazos estirados que dificultan el movimiento.</li><li>Cabeza sin apoyarse (genera mayor tensión y fatiga).</li><li>Posición sin margen de movimiento (genera tensión y fatiga).</li></ul></div></div>`},
 {t:'Evita medicamentos que produzcan sueño.',h:st=>(st.med||0)===0
   ?`<div class="row"><div class="col"><ul style="margin-top:30px"><li>Los antigripales, relajantes musculares, entre otros medicamentos producen sueño, así que no los consumas antes de conducir.</li><li>No te automediques, consulta a un médico primero.</li></ul></div><div style="flex:0 0 auto">${IC.doctor}</div></div>`
   :`<b>Medicamentos que producen somnolencia:</b><ul style="margin-top:12px"><li>Ansiolíticos: Diazepam, Alprazolam, Clonazepam.</li><li>Antihemético (para náuseas): Dimenhidrinato.</li><li>Antitusígenos: Dextrometorfano, Codeína.</li><li>Antiespasmódicos del tracto urinario: Buscapina, Hiosina.</li><li>Analgésicos: Tramal.</li><li>Relajantes musculares: Orfenadrina, Tensodox, Norflex.</li><li>Terapia del dolor neuropático: Gabapentina.</li><li>Antihistamínicos: Clorfenamina, Loratadina, Cetirizina.</li></ul>`}
];

const SL=[
/*1*/{n:'Tema 1: Fatiga',grp:'Tema 1 · Fatiga',bg:()=>roadBG('day'),html:()=>cover('Tema 1: Fatiga','var(--plum)')},
/*2*/{n:'¿Qué es la fatiga?',bg:()=>'',tone:'light',html:()=>`${pill('¿Qué es?')}<div class="row"><div class="col txt"><ul><li>Sensación de cansancio</li><li>Disminución de la energía y del estado de alerta</li><li>Debilidad</li></ul><h3>Señales de fatiga:</h3><ul><li>Bostezos frecuentes</li><li>Sensación de frío</li><li>Sequedad en la boca</li><li>Pesadez en los párpados</li><li>Desorientación</li></ul></div><div class="col"><div style="display:flex;gap:30px;justify-content:center">${IC.clock}${IC.food}</div><div class="ring" style="max-width:300px;margin:6px auto">${pickup(false)}</div></div></div>`},
/*3*/{n:'Causas de la fatiga',tone:'light',html:()=>`${pill('Causas')}<div class="twocol txt"><div>${IC.work}<div class="hd l">Causas laborales</div><ul><li>Duración de los turnos prolongados</li><li>Realizar tareas rutinarias o repetitivas</li><li>Días consecutivos de trabajo sin descansos</li><li>Conducción nocturna</li><li>Largas horas de conducción</li><li>Condiciones del lugar de trabajo (el calor, el frío, el ruido, la humedad, el polvo, la vibración)</li><li>Otras causas</li></ul></div><div class="sep">${IC.nowork}<div class="hd r">Causas no laborales</div><ul style="padding-left:1.5em"><li>Trastornos del sueño</li><li>Alcohol y/o drogas</li><li>Malos hábitos alimenticios</li><li>Sedentarismo</li><li>Tabaquismo</li><li>Otras causas</li></ul></div></div>`},
/*4*/{n:'Consecuencias de la fatiga',bg:()=>roadBG('day',{truck:false}),html:()=>`${pill('Consecuencias')}<div class="row"><div class="col"><div class="card txt"><ul><li>Reduce la capacidad de reacción.</li><li>Disminuye la capacidad de procesar la enorme cantidad de información que recibimos mientras se conduce (vehículos cerca, señales de tránsito, etc.).</li></ul></div></div><div class="col"><div class="ring" style="width:min(300px,80%);aspect-ratio:1;margin:auto">${pickup(true,'92%')}</div></div></div>`},
/*5*/{n:'Curva peligrosa',bg:()=>roadBG('day',{sign:true}),html:()=>`<div class="askbar" style="max-width:900px">${avatar()}<span style="font-size:1.1rem">¡Atención!, se acerca una curva peligrosa. Para pasarla de manera segura resuelve la actividad que se presenta a continuación.</span></div>`},
/*6*/{n:'Actividad: Miguel',tone:'pale',gate:'act',key:'miguel',bg:()=>desertBG('pale'),html:activity('miguel','Actividad','Lee el siguiente caso y selecciona la alternativa correcta.','<p>Miguel conduce uno de los buses de la empresa. Hoy debe trasladar personal a mina, pero minutos antes de partir quiere cenar ya que no lo ha hecho en el horario que debía. El viaje será largo y llegará al día siguiente a su destino.</p><p><b>En esta situación, ¿qué debió hacer Miguel para evitar que tenga fatiga durante el viaje?</b></p>',['Todo lo que ha hecho Miguel es correcto, no hay mayor señal de que vaya a tener fatiga durante la ruta.','Debió ser riguroso con la hora de su cena ya que después de comer hay un incremento de la fatiga.'])},
/*7*/{n:'¡Así se hace!',bg:()=>desertBG('day'),html:()=>`<div class="stagecol">${guide('thumb')}<div class="card dash-lime center"><span class="badge">¡Así se hace!</span><p>Pasaste con éxito la curva peligrosa.</p><p>Todos estamos propensos a tener fatiga; sin embargo, es importante que sepamos identificarla para tomar decisiones responsables.</p><p>¡Sigue avanzando en este viaje!</p></div></div>`},
/*8*/{n:'Tema 2: Somnolencia',grp:'Tema 2 · Somnolencia',bg:()=>roadBG('dusk'),html:()=>cover('Tema 2: Somnolencia','var(--navy)')},
/*9*/{n:'¿Qué es la somnolencia?',tone:'light',html:()=>`${pill('¿Qué es?')}<div class="row"><div class="col txt"><p style="margin-top:30px">Tendencia a quedarse dormido realizando una actividad.</p><h3>Señales de somnolencia:</h3><ul><li>Quedarse dormido por unos segundos («cabeceos»)</li><li>Visión borrosa</li><li>Bostezos frecuentes</li><li>Disminución del parpadeo</li></ul></div><div class="col">${pickup(true)}</div></div>`},
/*10*/{n:'Causas de la somnolencia',tone:'light',html:()=>`${pill('Causas')}<div class="row" style="align-items:stretch;justify-content:center">${[['Falta de sueño reparador.',IC.bed],['Consumir medicamentos que producen sueño.',IC.pill],['Tener problemas emocionales, familiares, etc.',IC.stress]].map(([t,i])=>`<div class="col card dash txt center" style="flex-basis:220px;display:flex;flex-direction:column;justify-content:center;gap:6px">${i}<p style="margin:0">${t}</p></div>`).join('')}</div>`},
/*11*/{n:'Consecuencia: accidente',bg:()=>desertBG('dusk'),html:()=>`${pill('Consecuencias')}<div class="stagecol" style="margin-top:0"><div style="flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:10px"><div class="say" style="padding:10px 22px;max-width:260px"><b>Ocasionar un accidente</b></div>${guide('point')}</div><div style="flex:1 1 360px;max-width:620px">${crash()}</div></div>`},
/*12*/{n:'Pausa activa',bg:()=>desertBG('dusk'),html:()=>`<div class="stagecol">${guide('wave')}<div class="say">¡Se está haciendo tarde! Es bueno que realices unos estiramientos luego de conducir tanto rato, así que realiza unas pausas activas. Luego de hacerlo, resuelve la actividad que te presentaré a continuación.</div></div>`},
/*13*/{n:'Actividad: Rubén y José',tone:'pale',gate:'act',key:'ruben',bg:()=>desertBG('pale'),html:activity('ruben','Actividad','Lee el siguiente caso y selecciona la alternativa correcta.','<p>Rubén y José son conductores de volquetes. El primero ha estado bostezando toda la mañana y el segundo ha comentado que apenas ha podido dormir un par de horas en la noche porque está preocupado por la salud de un familiar.</p><p><b>¿Cuál de los dos está apto para empezar a trabajar tomando en cuenta que están a punto de empezar su turno?</b></p>',['Rubén','José','Ambos','Ninguno'],true)},
/*14*/{n:'¡Excelente!',bg:()=>desertBG('dusk'),html:()=>`<div class="stagecol">${guide('thumb')}<div class="card dash-lime center"><span class="badge">¡Excelente!</span><p>Ahora que ya te tomaste una pausa y resolviste la actividad estás listo para seguir.</p><p>Recuerda que la somnolencia es una causa frecuente de accidentes vehiculares. No seas parte de las estadísticas.</p><p>¡Sube a tu vehículo y sigue tu recorrido!</p></div></div>`},
/*15*/{n:'Tema 3: Medidas preventivas',grp:'Tema 3 · Medidas preventivas',bg:()=>roadBG('night'),html:()=>cover('Tema 3: Medidas preventivas','var(--green-card)')},
/*16*/{n:'Medidas de control: fatiga',tone:'light',gate:'pp',html:st=>`${pill('Medidas de control – Fatiga')}<div class="row"><div class="col" style="display:flex;justify-content:center">${guide('point')}</div><div class="col txt center"><h3 style="font-size:1.5em;margin-top:0">¡La fatiga <span style="color:#6f8f1c">SÍ</span> se puede controlar!</h3><ul style="text-align:left;display:inline-block"><li>Abre la ventana del vehículo.</li><li>Enciende la radio y escucha música.</li><li>Evita las comidas con alto porcentaje de grasa.</li><li>Consume dulces.</li><li>Ten un descanso de cada 4 horas al conducir.</li></ul><div><button class="btn" data-act="pp-open" data-f="pp">Realiza pausas activas</button></div><p class="hint">Selecciona el botón.</p></div></div>${st.pp?ppModal(st):''}`},
/*17*/{n:'Medidas de control: somnolencia',tone:'light',html:()=>`${pill('Medidas de control – Somnolencia')}<div class="row"><div class="col" style="display:flex;justify-content:center">${guide('point')}</div><div class="col txt center"><h3 style="font-size:1.5em;margin-top:0">¡La somnolencia <span style="color:var(--bad)">NO</span> se puede controlar!</h3><p>Haz una <b style="color:#6f8f1c">parada de sueño</b>:</p><ul style="text-align:left;display:inline-block"><li>25 minutos para descansar</li><li>5 minutos de pausas activas</li></ul></div><div style="flex:0 0 auto;display:flex;justify-content:center">${IC.stop}</div></div>`},
/*18*/{n:'Medidas preventivas',tone:'light',gate:'tabs',html:st=>{const cur=st.tab??0;st.vis??=[0];return `${pill('Medidas preventivas – Fatiga y somnolencia')}<div class="tabs"><div><div class="tablist">${MEAS.map((m,i)=>`<button class="tab ${i===cur?'cur':st.vis.includes(i)?'vis':''}" data-act="tab" data-v="${i}" data-f="t${i}">${m.t}</button>`).join('')}</div><p class="hint">Selecciona cada medida preventiva.</p></div><div class="card dash tabpane">${MEAS[cur].h(st)}${cur===4?`<div class="pager"><button class="round" data-act="med" data-v="0" data-f="mp" ${(st.med||0)===0?'disabled':''} aria-label="Anterior">‹</button><span class="n">${(st.med||0)+1}/2</span><button class="round" data-act="med" data-v="1" data-f="mn" ${(st.med||0)===1?'disabled':''} aria-label="Siguiente">›</button></div>`:''}</div></div>`}},
/*19*/{n:'Importante: altura',bg:()=>desertBG('night',true),html:()=>`<div class="stagecol">${guide('point')}<div class="card center" style="background:var(--amber);color:var(--on-amber)"><b style="display:block;font-family:var(--f-d);font-size:1.5rem;margin-bottom:8px">Importante</b><p>En altura, la fatiga y somnolencia aumenta por la falta de oxígeno de la zona.</p><p>Ya sea la primera vez que manejes en altura o lo hagas con frecuencia, la falta de oxígeno puede afectarte.</p><p><b>¡Nunca bajes la guardia!</b></p></div></div>`},
/*20*/{n:'Cerca del destino',bg:()=>desertBG('night',true),html:()=>`<div class="stagecol">${guide('wave')}<div class="say">Estás cerca de tu destino, es momento de estar más alerta que nunca. Para no bajar la guardia, pon un poco de música, pero primero resuelve la actividad que verás a continuación.</div></div>`},
/*21*/{n:'Actividad: Ignacio',tone:'pale',gate:'act',key:'ignacio',bg:()=>desertBG('pale'),html:activity('ignacio','Actividad','Lee el siguiente caso y selecciona la alternativa correcta.','<p>Ignacio debe conducir una camioneta hasta una zona alejada.</p><p><b>¿Qué debe hacer Ignacio para evitar la somnolencia mientras conduce?</b></p>',['Tomar un analgésico si le duele el hombro.','Dormir como mínimo 6 horas la noche anterior.','Quedarse hasta tarde para estar más despierto.','Todas las anteriores.'],false,'Este caso se reconstruyó a partir de capturas parciales; el enunciado y las alternativas pueden diferir del original.')},
/*22*/{n:'Perfecto: el parlante',bg:()=>desertBG('night',true),gate:'spk',html:st=>`<div class="stagecol">${guide(st.spk?'point':'point')}<div class="card dash-lime center"><span class="badge">¡Perfecto!</span>${st.spk?`<p>Nunca olvides que ante la duda de sentirte cansado, fatigado o con sueño, lo mejor es <b>PARAR</b> y dormir 25 minutos. Esto te permitirá despejarte e incluso salvar tu vida o la de otros.</p>`:`<p>Como resolviste la actividad, puedes poner música para lo que queda del viaje.</p><button class="btn ghost" data-act="speaker" data-f="spk" style="border:0;background:transparent" aria-label="Poner música">${IC.speaker}</button><p class="hint">Selecciona el parlante.</p>`}</div></div>`},
/*23*/{n:'¡Felicidades!',bg:()=>desertBG('day'),html:()=>`<div class="stagecol">${guide('thumb')}<div class="card dash-lime center"><span class="badge">¡Felicidades!</span><p>Llegaste a tu destino sano y salvo, así es como siempre debes llegar cuando hagas tus turnos.</p><p>Ten en cuenta que la actitud hacia la seguridad guarda relación con la capacidad para identificar los peligros y actuar con prevención ante ellos; está en tus manos saber cuándo estás fatigado o con somnolencia y actuar conforme a ello.</p></div></div>`},
/*24*/{n:'Estándar de control',bg:()=>desertBG('day'),html:()=>`<div class="stagecol"><div class="card dash-lime center" style="max-width:720px"><h3 style="font-family:var(--f-d);font-size:1.5rem;margin:6px 0 12px">Estándar de Control de Fatiga y Somnolencia DC220</h3><p>Es el documento interno que regula el control de la fatiga y la somnolencia. Se consulta en la intranet corporativa buscando su código, <b>DC220</b>.</p><p class="note">Imagen de la intranet omitida en esta práctica.</p></div></div>`},
/*25*/{n:'Cierre del curso',tone:'teal',bg:()=>`<svg class="bg" viewBox="0 0 1400 780" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="1400" height="780" fill="#31758a"/><g fill="none" stroke="#3b8499" stroke-width="40" opacity=".6"><path d="M700 900 Q1000 300 1500 500"/><path d="M700 1000 Q1050 380 1600 580"/></g></svg>`,html:()=>`<div class="center" style="margin:auto;color:#fff;max-width:640px"><svg viewBox="0 0 48 48" style="width:90px;color:#fff" aria-hidden="true"><path d="M3 38 L18 12 L26 26 L32 18 L45 38Z" fill="currentColor"/><path d="M8 42 Q24 30 40 42" stroke="currentColor" stroke-width="3" fill="none"/></svg><h3 style="font-family:var(--f-d);font-size:2rem;margin:10px 0 0">¡Felicitaciones!</h3><p style="font-size:1.2rem;margin:4px 0">Has completado el contenido del curso</p><p style="font-family:var(--f-d);font-weight:700;font-size:2.4rem;margin:0 0 18px;line-height:1.1">Fatiga y somnolencia.</p><p>Para completarlo al 100% debes hacer la evaluación calificada. Aquí puedes practicarla.</p><button class="btn" data-act="mode" data-v="exam" data-f="goexam">Ir a la evaluación</button></div>`}
];
SL.forEach(s=>{s.mark=!['light','pale','teal'].includes(s.tone)});

function ppModal(st){
  const p=st.ppn||0;
  const bodies=[
   `<div><p>Las pausas activas son estiramientos físicos realizados en un breve espacio de tiempo durante las horas de trabajo para que tengas un mayor rendimiento físico.</p><p>Como debes realizarlas cada 2 horas de conducción, es necesario que detengas el vehículo en un lugar seguro y permitido para hacerlas.</p></div><div class="center">${stretchFig()}</div>`,
   `<div><p>Cuando realizas pausas activas tienes los siguientes beneficios:</p><ul><li>Mejora el estado de alerta.</li><li>Mejora la concentración y la atención.</li><li>Reduce la tensión muscular.</li><li>Mejora la postura.</li><li>Disminuye el estrés y la fatiga.</li><li>Mejora la circulación.</li></ul></div><div class="center">${stretchFig()}</div>`,
   `<div><p>Practica con la figura: lleva el brazo por encima de la cabeza e inclina el tronco hacia el lado contrario. Mantén cada lado unos segundos, sin rebotes y respirando con calma.</p><button class="btn alt" data-act="fig" data-f="fig">Pausar / reanudar animación</button></div><div class="center">${stretchFig()}</div>`
  ];
  return `<div class="pp" role="dialog" aria-label="Pausas activas"><div class="ppcard"><button class="x" data-act="pp-close" data-f="ppx" aria-label="Cerrar">×</button><div class="ttl">Pausas activas</div><div class="ppbody">${bodies[p]}</div><div class="pager"><button class="round" data-act="pp-go" data-v="${p-1}" data-f="ppp" ${p===0?'disabled':''} aria-label="Anterior">‹</button><span class="n">${p+1}/3</span><button class="round" data-act="pp-go" data-v="${p+1}" data-f="ppn" ${p===2?'disabled':''} aria-label="Siguiente">›</button></div></div></div>`;
}

/* ---------- estado y render ---------- */
const S={mode:'course',i:0,st:{},modal:null,menu:false,help:false,focus:null};
function can(sl,st){
  if(!sl.gate) return true;
  if(sl.gate==='act') return !!st.done;
  if(sl.gate==='tabs') return (st.vis||[0]).length>=MEAS.length;
  if(sl.gate==='pp') return !!st.ppSeen;
  if(sl.gate==='spk') return !!st.spk;
  return true;
}
function render(){
  document.querySelectorAll('.modes button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.v===S.mode)));
  if(S.mode==='exam'){stage.className='stage exam';stage.innerHTML=examHTML();bindExam();return}
  const sl=SL[S.i], st=(S.st[S.i]??={});
  stage.className='stage';
  const ok=can(sl,st);
  const modal=S.modal?`<div class="scrim"><div class="mcard" role="dialog" aria-modal="true" aria-label="Resultado"><span class="tag ${S.modal.ok?'':'bad'}">${S.modal.title}</span>${S.modal.ok?IC.tick:IC.cross}<p>${S.modal.text}</p><button class="btn" data-act="modal" data-f="modal">${S.modal.ok?'Continuar':'Intentar de nuevo'}</button></div></div>`:'';
  const menu=S.menu?menuHTML():'';
  const help=S.help?`<div class="scrim"><div class="mcard" role="dialog" aria-modal="true"><span class="tag">Ayuda</span><p style="margin-top:8px;text-align:left">Avanza con las flechas de la barra inferior o del teclado. Las actividades, las pestañas y los botones marcados deben completarse para continuar. El botón circular repite la diapositiva. El menú lateral lleva a cualquier pantalla. Esta práctica no es el curso oficial.</p><button class="btn" data-act="help" data-f="helpx">Entendido</button></div></div>`:'';
  stage.innerHTML=`${sl.bg?sl.bg():''}${sl.mark?MARK.replace('class="mark"','class="mark" style="color:#fff"'):`<svg class="mark" viewBox="0 0 48 48" style="color:var(--pill)" aria-hidden="true"><path d="M3 38 L18 12 L26 26 L32 18 L45 38Z" fill="currentColor" opacity=".9"/><path d="M8 42 Q24 30 40 42" stroke="currentColor" stroke-width="3" fill="none"/></svg>`}
  <div class="content">${sl.html(st)}</div>
  <div class="side"><button data-act="menu" data-f="menu" aria-label="Menú de diapositivas">☰</button><button data-act="help" data-f="help" aria-label="Ayuda">?</button></div>
  ${!ok?`<div class="gatemsg">${GATE[sl.gate]}</div>`:''}
  <nav class="dock" aria-label="Navegación"><span class="count">${S.i+1}/${SL.length}</span>
   <button class="nb" data-act="prev" data-f="prev" aria-label="Diapositiva anterior" ${S.i===0?'disabled':''}>‹</button>
   <button class="nb" data-act="next" data-f="next" aria-label="Diapositiva siguiente" ${(!ok||S.i===SL.length-1)?'disabled':''}>›</button>
   <span class="sep"></span><button class="nb" data-act="restart" data-f="restart" aria-label="Repetir diapositiva">↻</button></nav>${menu}${modal}${help}`;
  if(S.focus){const f=stage.querySelector(`[data-f="${S.focus}"]`);if(f&&!f.disabled)f.focus();S.focus=null}
}
function menuHTML(){
  let h='<div class="menu" role="dialog" aria-label="Diapositivas"><h2>Contenido</h2>';
  SL.forEach((s,i)=>{if(s.grp)h+=`<div class="grp">${s.grp}</div>`;h+=`<button data-act="goto" data-v="${i}" ${i===S.i?'aria-current="true"':''}><span class="n">${i+1}</span><span>${s.n}</span></button>`});
  return h+'</div>';
}
function go(i){S.i=Math.max(0,Math.min(SL.length-1,i));S.modal=null;S.menu=false;S.help=false;render();stage.scrollIntoView({block:'nearest'})}
function beep(){try{const c=new (window.AudioContext||window.webkitAudioContext)();[523,659,784].forEach((f,k)=>{const o=c.createOscillator(),g=c.createGain();o.frequency.value=f;o.connect(g);g.connect(c.destination);const t=c.currentTime+k*.16;g.gain.setValueAtTime(.12,t);g.gain.exponentialRampToValueAtTime(.001,t+.15);o.start(t);o.stop(t+.16)})}catch(e){}}

document.addEventListener('change',e=>{
  const t=e.target;
  if(S.mode==='course'&&t.matches('.opts input')){const st=S.st[S.i];st.sel=+t.value;const b=$('#send');if(b)b.disabled=false}
  if(S.mode==='exam'&&t.matches('.opts input')){E.ans[E.q]=+t.value;const c=document.querySelector(`.chip[data-v="${E.q}"]`);if(c)c.classList.add('ans');E.warn=false;const w=$('.warn');if(w)w.remove()}
});
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-act]');if(!b)return;
  const a=b.dataset.act,v=b.dataset.v,st=S.st[S.i]??={},sl=SL[S.i];
  if(b.dataset.f)S.focus=b.dataset.f;
  switch(a){
   case 'mode':S.mode=v;S.modal=null;S.menu=false;if(v==='exam'&&E.phase==='run'){}render();stage.scrollIntoView({block:'nearest'});break;
   case 'prev':go(S.i-1);break;
   case 'next':if(can(sl,st))go(S.i+1);break;
   case 'restart':S.st[S.i]={};S.modal=null;render();break;
   case 'menu':S.menu=!S.menu;S.focus=S.menu?null:'menu';render();break;
   case 'help':S.help=!S.help;render();break;
   case 'goto':go(+v);break;
   case 'send':{const A=ACT[sl.key];if(st.sel==null)break;if(st.sel===A.ok){st.done=true;S.modal={ok:true,title:A.good[0],text:A.good[1]}}else{S.modal={ok:false,title:'Casi',text:A.bad}}render();break}
   case 'modal':{const ok=S.modal.ok;S.modal=null;if(ok){go(S.i+1)}else{S.focus=null;render()}break}
   case 'tab':st.tab=+v;st.vis??=[0];if(!st.vis.includes(+v))st.vis.push(+v);render();break;
   case 'med':st.med=+v;render();break;
   case 'pp-open':st.pp=true;st.ppn=0;render();break;
   case 'pp-go':st.ppn=+v;if(st.ppn===2)st.ppSeen=true;if(st.ppn>=0&&st.ppn<=2)render();break;
   case 'pp-close':st.pp=false;st.ppSeen=st.ppSeen||false;S.focus='pp';render();break;
   case 'fig':document.getElementById('fig')?.classList.toggle('paused');break;
   case 'speaker':st.spk=true;beep();render();break;
   case 'ex-start':examStart();break;
   case 'ex-prev':E.q=Math.max(0,E.q-1);render();break;
   case 'ex-next':E.q=Math.min(9,E.q+1);render();break;
   case 'ex-chip':E.q=+v;render();break;
   case 'ex-send':{const miss=E.ans.filter(x=>x==null).length;if(miss&&!E.warn){E.warn=true;render()}else examFinish();break}
   case 'ex-keep':E.warn=false;render();break;
   case 'ex-retry':E.phase='intro';render();break;
   case 'ex-reset':resetAttempts();E.phase='intro';render();break;
   case 'ex-course':S.mode='course';render();break;
  }
});
document.addEventListener('keydown',e=>{
  if(S.mode!=='course'||/INPUT|TEXTAREA/.test(document.activeElement?.tagName)&&e.key!=='ArrowRight'&&e.key!=='ArrowLeft')return;
  if(e.key==='ArrowRight'&&can(SL[S.i],S.st[S.i]??={})&&!S.modal)go(S.i+1);
  if(e.key==='ArrowLeft'&&!S.modal)go(S.i-1);
  if(e.key==='Escape'){S.menu=false;S.help=false;if(S.st[S.i]?.pp&&SL[S.i].gate==='pp')S.st[S.i].pp=false;render()}
});

/* ---------- evaluación ---------- */
const Q=[
 {q:'¿Cuál de estas es una señal de fatiga?',o:['Cabeceos de unos segundos','Visión borrosa','Sensación de frío y sequedad en la boca','Disminución del parpadeo'],a:2,w:'La fatiga se muestra con bostezos, frío, sequedad en la boca, pesadez en los párpados y desorientación. Los cabeceos, la visión borrosa y el parpadeo reducido son señales de somnolencia.'},
 {q:'¿Qué es la somnolencia?',o:['Debilidad por falta de alimentos','Tendencia a quedarse dormido realizando una actividad','Dolor muscular por mala postura','Disminución de la energía durante la tarde'],a:1,w:'La somnolencia es la tendencia a quedarse dormido mientras se realiza una actividad.'},
 {q:'Además de después de comer, ¿en qué horario el cuerpo pasa por un momento de fatiga?',o:['De 6 a 12 de la mañana','De 12 del mediodía a 6 de la tarde','De 6 de la tarde a 12 de la noche','De 12 de la noche a 6 de la mañana'],a:3,w:'Desde las 12 de la noche hasta las 6 de la mañana y después de comer hay un incremento de la fatiga.'},
 {q:'¿Cuál es la medida recomendada ante la somnolencia?',o:['Abrir la ventana y seguir conduciendo','Subir el volumen de la radio','Hacer una parada de sueño: 25 minutos de descanso y 5 de pausas activas','Tomar bebidas energéticas'],a:2,w:'La somnolencia no se puede controlar: se hace una parada de sueño de 25 minutos para descansar y 5 de pausas activas.'},
 {q:'¿Cada cuánto tiempo de conducción se deben realizar pausas activas?',o:['Cada 30 minutos','Cada 2 horas','Cada 6 horas','Solo al terminar el turno'],a:1,w:'Las pausas activas se realizan cada 2 horas de conducción, deteniendo el vehículo en un lugar seguro y permitido.'},
 {q:'Para controlar la fatiga, ¿qué descanso se recomienda al conducir?',o:['Uno cada 4 horas','Uno cada hora','Uno cada 8 horas','Ninguno si no hay síntomas'],a:0,w:'Entre las medidas de control de la fatiga está tener un descanso cada 4 horas al conducir.'},
 {q:'¿Cuál es el mínimo de sueño diario recomendado, sin interrupciones?',o:['4 horas','5 horas','6 horas','3 horas'],a:2,w:'El curso recomienda dormir un mínimo de 6 horas diarias sin interrupciones, y que el sueño sea reparador.'},
 {q:'¿Por qué aumentan la fatiga y la somnolencia al manejar en altura?',o:['Por el exceso de ruido','Por la falta de oxígeno de la zona','Por el calor de la zona','Por el tipo de vehículo'],a:1,w:'En altura hay menos oxígeno, lo que aumenta la fatiga y la somnolencia, sea la primera vez o una conducción frecuente.'},
 {q:'Sobre los medicamentos y la conducción, ¿qué se debe hacer?',o:['Tomar antigripales para sentirse mejor antes de manejar','Consultar a un médico y no consumir antes de conducir los que producen sueño','Automedicarse si el síntoma es leve','Tomar relajantes musculares solo de noche'],a:1,w:'Antigripales, relajantes musculares y otros producen sueño. No los consumas antes de conducir y no te automediques.'},
 {q:'¿Por qué se debe mantener más alerta durante la última hora de conducción?',o:['Porque hay mayor cansancio acumulado y se suele bajar la guardia','Porque el tránsito siempre aumenta','Porque el vehículo consume más combustible','Porque los controles son más estrictos'],a:0,w:'Al llegar al destino hay mayor cansancio acumulado y se suele bajar la guardia.'}
];
const KEY='fs-practica-intentos';
function readAttempts(){try{return +localStorage.getItem(KEY)||0}catch(e){return 0}}
function saveAttempts(n){try{localStorage.setItem(KEY,String(n))}catch(e){}}
function resetAttempts(){E.used=0;saveAttempts(0)}
const E={phase:'intro',q:0,ans:Array(10).fill(null),score:0,warn:false,used:readAttempts(),deck:[]};
/* mezcla Fisher-Yates: el orden de preguntas y de alternativas cambia en cada intento */
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function buildDeck(){return shuffle(Q).map(q=>({q:q.q,w:q.w,opts:shuffle(q.o.map((t,j)=>({t,ok:j===q.a})))}))}
function examStart(){E.used+=1;saveAttempts(E.used);E.deck=buildDeck();E.phase='run';E.q=0;E.ans=Array(E.deck.length).fill(null);E.warn=false;render()}
function examFinish(){E.score=E.deck.reduce((n,d,i)=>n+(E.ans[i]!=null&&d.opts[E.ans[i]].ok?1:0),0);E.phase='result';render()}
function examHTML(){
  if(E.phase==='intro'){
    const left=2-E.used;
    return `<div class="ex"><h2>Evaluación calificada</h2><p class="sub">Práctica del examen · Fatiga y somnolencia</p>
    <p>Este examen es de formato libre: puedes responder en cualquier orden, volver a las preguntas anteriores y cambiar tus respuestas. Cuando termines, haz clic en Enviar examen y se evaluarán tus respuestas.</p>
    <div class="rules"><div><b>80%</b><span>Nota mínima aprobatoria</span></div><div><b>${Math.max(left,0)} de 2</b><span>Intentos disponibles</span></div><div><b>10</b><span>Preguntas</span></div></div>
    ${left>0?`<div><button class="btn alt" data-act="ex-start" data-f="start">Iniciar</button></div>`:`<p><b>Usaste los 2 intentos.</b> Como es una práctica, puedes reiniciarlos.</p><div><button class="btn alt" data-act="ex-reset" data-f="reset">Reiniciar intentos</button></div>`}
    <p class="note">Las preguntas son de práctica, escritas a partir del contenido del curso. No son las del examen oficial.</p></div>`;
  }
  if(E.phase==='run'){
    const q=E.deck[E.q],miss=E.ans.filter(x=>x==null).length;
    return `<div class="ex"><div class="navrow"><h2>Pregunta ${E.q+1} de 10</h2><span class="note">Intento ${E.used} de 2</span></div>
    <div class="chips" role="group" aria-label="Preguntas">${E.deck.map((_,i)=>`<button class="chip ${E.ans[i]!=null?'ans':''} ${i===E.q?'cur':''}" data-act="ex-chip" data-v="${i}" aria-label="Pregunta ${i+1}${E.ans[i]!=null?', respondida':''}">${i+1}</button>`).join('')}</div>
    <div class="qtxt">${q.q}</div>
    <div class="opts" role="radiogroup" aria-label="Alternativas">${q.opts.map((o,i)=>`<label class="opt"><input type="radio" name="q${E.q}" value="${i}" ${E.ans[E.q]===i?'checked':''}><span>${o.t}</span></label>`).join('')}</div>
    ${E.warn?`<div class="warn"><span>Te faltan ${miss} pregunta${miss>1?'s':''} sin responder.</span><span style="display:flex;gap:8px"><button class="btn ghost" style="color:#4a3500;border-color:#4a3500" data-act="ex-keep">Seguir revisando</button><button class="btn alt" data-act="ex-send">Enviar igual</button></span></div>`:''}
    <div class="navrow"><span style="display:flex;gap:8px"><button class="btn ghost" data-act="ex-prev" data-f="xp" ${E.q===0?'disabled':''}>Anterior</button><button class="btn ghost" data-act="ex-next" data-f="xn" ${E.q===9?'disabled':''}>Siguiente</button></span><button class="btn alt" data-act="ex-send" data-f="xs">Enviar examen</button></div></div>`;
  }
  const pct=E.score*10,pass=pct>=80,left=2-E.used;
  return `<div class="ex"><h2>Resultado</h2><div class="score"><span class="big">${pct}%</span><div><span class="verdict ${pass?'ok':'bad'}">${pass?'Aprobado':'No aprobado'}</span><p style="margin:6px 0 0">${E.score} de 10 correctas · mínimo 80%</p></div></div>
  <div style="display:flex;flex-wrap:wrap;gap:10px">${!pass&&left>0?`<button class="btn alt" data-act="ex-retry" data-f="retry">Usar el siguiente intento (${left} restante${left>1?'s':''})</button>`:''}<button class="btn ghost" data-act="ex-reset" data-f="reset">Reiniciar intentos</button><button class="btn ghost" data-act="ex-course">Volver al curso</button></div>
  <div class="rev">${E.deck.map((q,i)=>{const ok=E.ans[i]!=null&&q.opts[E.ans[i]].ok;return `<div class="it ${ok?'ok':'no'}"><p><b>${i+1}. ${q.q}</b></p><p>${ok?'✔':'✘'} Tu respuesta: ${E.ans[i]==null?'sin responder':q.opts[E.ans[i]].t}</p>${ok?'':`<p>Correcta: <b>${q.opts.find(o=>o.ok).t}</b></p>`}<p class="why">${q.w}</p></div>`}).join('')}</div></div>`;
}
function bindExam(){if(S.focus){const f=stage.querySelector(`[data-f="${S.focus}"]`);if(f&&!f.disabled)f.focus();S.focus=null}}

render();

/* ventana de inicio: se cierra con el botón, Enter o Escape */
(function(){
  const sp=$('#splash'),app=document.querySelector('.app'),go=$('#sp-go');
  if(!sp)return;
  app.inert=true;
  function close(){
    app.inert=false;sp.classList.add('hide');
    setTimeout(()=>sp.remove(),500);
    document.removeEventListener('keydown',onKey);
  }
  function onKey(e){if(e.key==='Enter'||e.key==='Escape'){e.preventDefault();close()}}
  go.addEventListener('click',close);
  document.addEventListener('keydown',onKey);
  go.focus();
})();
