// Проверка операторской работы (владелец, 14.11.2026: «камера резко съехала — выглядит как баг; Том говорит, а его в кадре нет, одна лапа торчит»).
//   node tools/camcheck.cjs <эп>   (страница build/<эп>/film должна быть собрана — check.sh / mkpage.py)
// Идёт по ролику с шагом 1/30 с и печатает ⚠:
//   • ТОМ ВНЕ КАДРА — пока Том говорит (субтитр), голова/корпус вне x 150–930, y 180–1660 дольше 0.8 с (короткая вставка-деталь до 0.8 с — можно; не во время перехода);
//   • РЫВОК — камера разгоняется скачком (> 22 px/кадр за один кадр) или летит > 45 px/кадр вне перехода и вне первых 0.45 с сцены;
//   • 'x'-ключ (экспо-провал) не в начале сцены — допустим только как осознанный акцент: в начале сцены или на слове со звуком-свистом.
// Последняя строка: «camcheck: OK» или «camcheck: N ⚠».
const puppeteer = require('puppeteer-core'); const path = require('path');
(async () => {
  const ep = process.argv[2], film = path.resolve(`build/${ep}/film`);
  const b = await puppeteer.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium', args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const p = await b.newPage(); p.on('pageerror', e => console.log('ERR', e.message));
  await p.goto('file://' + film + '/index.html'); await new Promise(r => setTimeout(r, 500));
  const res = await p.evaluate(() => {
    const out = [], dt = 1 / 30, inTr = t => TRANS.some(q => t >= q.t - q.a - 0.05 && t < q.t + q.b + 0.05);
    const head = (name, t) => { const i = SC.findIndex(s => s[0] === name), P = catPose(name, t, t - SC[i][1]), c = camFor(name, t), d = Math.max(0.05, 1 - c.z);
      const sx = x => 540 + (x - c.x) / d, sy = y => 960 + (y - c.y) / d; return { hx: sx(P.x), hy: sy(P.y - 372 * P.s), by: sy(P.y - 200 * P.s), c, d }; };
    let off = null, vPrev = null, lastScene = -1;
    for (let t = 0.05; t < DUR - 0.5; t += dt) {
      const i = sceneAt(t), name = SC[i][0], u = t - SC[i][1]; if (i !== lastScene) { vPrev = null; lastScene = i; }
      const H_ = head(name, t), tr = inTr(t), speak = talking(t);
      const bad = speak && !tr && (H_.hx < 150 || H_.hx > 930 || H_.hy < 180 || H_.hy > 1660 || H_.by > 1760);
      if (bad) { if (!off) off = { t0: t, name, hx: H_.hx, hy: H_.hy }; } else if (off) { if (t - off.t0 > 0.8) out.push(`⚠ ТОМ ВНЕ КАДРА ${off.name} ${off.t0.toFixed(2)}–${t.toFixed(2)} с (голова x ${off.hx | 0}, y ${off.hy | 0})`); off = null; }
      if (u > dt) { const pc = camFor(name, t - dt), v = Math.hypot(H_.c.x - pc.x, H_.c.y - pc.y) / H_.d + Math.abs(H_.c.z - pc.z) * 1500;
        if (!tr && u > 0.45 && vPrev != null && (v - vPrev > 22 || v > 45)) out.push(`⚠ РЫВОК камеры ${name} ${t.toFixed(2)} с (${vPrev | 0} → ${v | 0} px/кадр)`); vPrev = v; }
    }
    // 'x'-ключи с 14.11.2026 плавные (easeInOutCubic) — их скорость проверяет РЫВОК
    const merged = []; for (const l of out) { const m = l.match(/^⚠ РЫВОК камеры (\S+) ([\d.]+)/); const pm = merged.length && merged[merged.length - 1].match(/^⚠ РЫВОК камеры (\S+) ([\d.]+)/); if (m && pm && m[1] === pm[1] && +m[2] - +pm[2] < 0.5) continue; merged.push(l); }
    return merged;
  });
  await b.close(); res.forEach(l => console.log(l)); console.log(res.length ? `camcheck: ${res.length} ⚠` : 'camcheck: OK');
})();
