/* Обложка 002: аукцион — Том в смокинге+фартуке в шоке держит наггетс-человечка за $99 997 (крупно, сияет); «$100 000 / ЗА НАГГЕТС?!», плашка «НАГГЕТСЫ». */
Object.assign(PROPS, { amongBigP() { glow(0, -80, 220, 'rgba(255,230,140,1)', 0.7); nugget(0, -90, 1.5, -0.1, { kind: 'among', key: 7710 }); } });
const COVER = { scene: 'hook', t: 2.95, cam: { x: 620, y: 1060, z: 0.5 }, pose: { expr: 'shock', expr2: 'shock', ek: 1, look: [0.5, 0.1], tailUp: true, hand: [220, -230], handF: [-90, -330], prop: 'amongBigP', propAng: 0.2 },
  title: [['$100 000', '#f4e6c8'], ['ЗА НАГГЕТС?!', '#d9482b']], size: 150, ty: 300, badge: 'НАГГЕТСЫ', sub: 'история за минуту' };
