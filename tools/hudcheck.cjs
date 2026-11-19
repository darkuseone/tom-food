// Проверка плашек (владелец, 19.11.2026: «текст за таблички вылазит, они друг на друга наслаиваются — такого быть не должно»).
//   node tools/hudcheck.cjs <эп>   (страница build/<эп>/film — check.sh / mkpage.py)
// Рисует ролик с шагом 0.2 с и собирает рамки плашек (hudBox в engine/core.js: карточка рецепта, шкала СОСТАВ, infoPlate,
// таблички в мирах — их тоже регистрировать hudBox). Печатает ⚠:
//   • НАЛОЖЕНИЕ — две плашки перекрываются больше чем на 8 px (кроме переходов);
//   • ЗА КРАЕМ — плашка вне кадра / вне безопасной зоны: x 96–984 (шкала СОСТАВ — от x 40, у самого края), y 250–1640, ниже y 900 — левее x 900.
// Последняя строка: «hudcheck: OK» или «hudcheck: N ⚠».
const puppeteer = require('puppeteer-core'); const path = require('path');
(async () => {
  const ep = process.argv[2], film = path.resolve(`build/${ep}/film`);
  const b = await puppeteer.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium', args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const p = await b.newPage(); p.on('pageerror', e => console.log('ERR', e.message));
  await p.goto('file://' + film + '/index.html'); await new Promise(r => setTimeout(r, 800));
  const res = await p.evaluate(() => {
    const out = [], seen = new Set(), inTr = t => TRANS.some(q => t >= q.t - q.a - 0.1 && t < q.t + q.b + 0.1);
    const cv = document.createElement('canvas'); cv.width = 1080; cv.height = 1920;
    for (let t = 0.1; t < DUR - 0.05; t += 0.2) {
      if (inTr(t)) continue; FRAME = Math.floor(t * 15);
      HUDB = []; lastFr = -1; try { draw(t); } catch (e) { out.push("ERR " + t.toFixed(1) + " " + e.stack.split("\n").slice(0, 5).join(" / ")); break; }
      const B = HUDB.filter(q => q.a > 0.5 && q.x1 > 0 && q.x0 < 1080 && q.y1 > 0 && q.y0 < 1920);   // целиком за кадром — не видно, не считаем
      for (let i = 0; i < B.length; i++) { const q = B[i];
        const bad = q.x0 < (/СОСТАВ/.test(q.id) ? 39 : 96) || q.x1 > 984 || q.y0 < 250 || q.y1 > 1640 || (q.y1 > 900 && q.x1 > 900 && !/СОСТАВ/.test(q.id));
        if (bad && !seen.has('E' + q.id)) { seen.add('E' + q.id); out.push(`⚠ ЗА КРАЕМ ${q.id} ${t.toFixed(1)} с (x ${q.x0 | 0}–${q.x1 | 0}, y ${q.y0 | 0}–${q.y1 | 0})`); }
        for (let j = i + 1; j < B.length; j++) { const r = B[j], ox = Math.min(q.x1, r.x1) - Math.max(q.x0, r.x0), oy = Math.min(q.y1, r.y1) - Math.max(q.y0, r.y0), key = q.id + '|' + r.id;
          if (ox > 8 && oy > 8 && !seen.has(key)) { seen.add(key); out.push(`⚠ НАЛОЖЕНИЕ ${q.id} × ${r.id} ${t.toFixed(1)} с (${ox | 0}×${oy | 0} px)`); } } }
    }
    return out;
  });
  await b.close(); res.forEach(l => console.log(l)); console.log(res.length ? `hudcheck: ${res.length} ⚠` : 'hudcheck: OK');
})();
