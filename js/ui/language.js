import { uiEs, uiVal, famNomVal, cicleNomVal } from '../data/translations.js';

// Usamos eventos para evitar dependencias circulares
function requestUpdate() { document.dispatchEvent(new CustomEvent('fp:update')); }
function requestCascade() { document.dispatchEvent(new CustomEvent('fp:cascade')); }

export let currentLang = 'es';

export function t(k) {
  return (currentLang === 'val' ? uiVal : uiEs)[k] ?? '';
}
export function tFam(f) {
  return currentLang === 'val' ? (famNomVal[f] ?? f) : f;
}
export function tCicle(c) {
  return currentLang === 'val' ? (cicleNomVal[c] ?? c) : c;
}

export function setLang(lang) {
  currentLang = lang;
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.getElementById('btn-val').classList.toggle('active', lang === 'val');
  applyUILang();
  requestUpdate();
}

export function applyUILang() {
  const l = currentLang === 'val' ? uiVal : uiEs;

  document.querySelector('h1').innerHTML         = l.title ?? '';
  document.querySelector('.header-sub').textContent = l.subtitle ?? '';
  document.querySelector('.header-tag').textContent = l.tag ?? '';

  const sl = document.querySelectorAll('.stat-label');
  if (sl.length >= 4) {
    sl[0].textContent = l.statCentres ?? '';
    sl[1].textContent = l.statCicles ?? '';
    sl[2].textContent = l.statMunicipis ?? '';
    sl[3].textContent = l.statNivells ?? '';
  }

  const li = document.querySelectorAll('.legend-item');
  if (li.length >= 3) {
    li[0].innerHTML = '<div class="legend-dot pub"></div> ' + (l.legPub ?? '');
    li[1].innerHTML = '<div class="legend-dot priv"></div> ' + (l.legPriv ?? '');
    li[2].innerHTML = l.legColors ?? '';
  }

  const ns = document.getElementById('f-nivel');
  if (ns?.options.length >= 4) {
    ns.options[0].text = l.allNivells ?? '';
    ns.options[1].text = l.optFPB ?? '';
    ns.options[2].text = l.optGM ?? '';
    ns.options[3].text = l.optGS ?? '';
  }
  const ms = document.getElementById('f-municipio');
  if (ms?.options.length > 0) ms.options[0].text = l.allMunicipis ?? '';

  const rb = document.querySelector('.btn-reset');
  if (rb) rb.textContent = l.btnReset ?? '';

  const tb = document.querySelectorAll('.tab-btn');
  if (tb.length >= 3) {
    tb[0].textContent = l.tabFamilies ?? '';
    tb[1].textContent = l.tabCentres ?? '';
    tb[2].textContent = l.tabMapa ?? '';
  }

  const fgFam = document.getElementById('fg-familia');
  const fgCic = document.getElementById('fg-ciclo');
  const fgCen = document.getElementById('fg-centro');
  const fgTip = document.getElementById('fg-tipologia');
  if (fgFam) fgFam.querySelector('label').textContent = l.lblFamilia ?? '';
  if (fgCic) fgCic.querySelector('label').textContent = l.lblCicle ?? '';
  if (fgCen) fgCen.querySelector('label').textContent = l.lblCentre ?? '';
  if (fgTip) fgTip.querySelector('label').textContent = l.lblTipologia ?? '';

  // Opciones del select tipología
  const fTip = document.getElementById('f-tipologia');
  if (fTip && fTip.options.length >= 3) {
    fTip.options[0].text = l.allTipologies ?? '';
    fTip.options[1].text = l.tipPublico ?? '';
    fTip.options[2].text = l.tipPrivado ?? '';
  }

  document.querySelector('#f-municipio')?.closest('.filter-group')
    ?.querySelector('label')?.textContent === undefined ||
    (document.querySelector('#f-municipio').closest('.filter-group').querySelector('label').textContent = l.lblMunicipi ?? '');
  document.querySelector('#f-nivel')?.closest('.filter-group')
    ?.querySelector('label')?.textContent === undefined ||
    (document.querySelector('#f-nivel').closest('.filter-group').querySelector('label').textContent = l.lblNivell ?? '');

  const ft = document.getElementById('footer');
  if (ft) {
    const ftitles = ft.querySelectorAll('div[style*="Unbounded"]');
    if (ftitles.length >= 3) {
      ftitles[0].textContent = l.footerLegal ?? '';
      ftitles[1].textContent = l.footerPriv ?? '';
      ftitles[2].textContent = l.footerCookies ?? '';
    }
    const fps = ft.querySelectorAll('p');
    if (fps.length >= 2) {
      fps[0].innerHTML = (l.footerResponsable ?? '') + '<br>Email: fpcomvalenciana@gmail.com<br>' + (l.footerDesc ?? '');
      fps[1].innerHTML = (l.footerPrivDesc ?? '') + '<br>' + (l.footerContacte ?? '') + ' fpcomvalenciana@gmail.com';
    }
    const fcp = ft.querySelector('span[style*=".35"]');
    if (fcp) fcp.textContent = l.footerCopy ?? '';
  }

  // Label comarca
  const lblComarca = document.getElementById('lbl-comarca');
  if (lblComarca) lblComarca.textContent = l.lblComarca ?? 'Comarca';

  // Bloc SEO
  const seoH2 = document.getElementById('seo-h2');
  const seoP1 = document.getElementById('seo-p1');
  const seoP2 = document.getElementById('seo-p2');
  if (seoH2) seoH2.textContent = l.seoH2 ?? '';
  if (seoP1) seoP1.textContent = l.seoP1 ?? '';
  if (seoP2) seoP2.textContent = l.seoP2 ?? '';

  // Repoblar selects con traducción actualizada
  // Importamos dinámicamente para evitar circular
  import('../ui/filters.js').then(({ poblarComarcas, poblarProvincies }) => {
    poblarProvincies();
    poblarComarcas();
  });
  requestCascade();
}
