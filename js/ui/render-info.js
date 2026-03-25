import { t, tFam, tCicle, currentLang } from './language.js';
import { fFamilia, fNivel, fCiclo }     from './filters.js';
import { fpbAGm, gmAGs }                from '../data/transitions.js';
import { cicloInfo, familiaDescripcion, familiaEmoji } from '../data/cycles.js';
import { cicleNomVal, famNomVal, cicleInfoVal, famDescVal } from '../data/translations.js';

const safe = (txt) => txt ?? '';

function tCicleInfo(c) {
  if (currentLang === 'val') {
    const vk = cicleNomVal[c] ?? c;
    return cicleInfoVal[vk] ?? cicloInfo[c] ?? {};
  }
  return cicloInfo[c] ?? {};
}

function tFamDesc(f) {
  if (currentLang === 'val') {
    const vk = famNomVal[f] ?? f;
    return famDescVal[vk] ?? familiaDescripcion[f] ?? '';
  }
  return familiaDescripcion[f] ?? '';
}

export function updateInfoPanel(filtered) {
  const panel   = document.getElementById('info-panel');
  const statsPn = document.getElementById('stats-panel');
  if (!panel || !statsPn) return;

  const familiaActiva = safe(fFamilia()?.value);

  if (!familiaActiva) {
    panel.classList.remove('visible');
    const centrosUnicos    = new Set(filtered.map(d => d.centro)).size;
    const familiasUnicas   = new Set(filtered.map(d => d.familia)).size;
    const municipiosUnicos = new Set(filtered.map(d => d.municipio)).size;
    statsPn.style.display = 'block';
    statsPn.querySelector('.stats-cards').innerHTML = `
      <div class="stat-card"><div class="stat-card-num">${centrosUnicos}</div><div class="stat-card-label">${t('statCentres')}</div></div>
      <div class="stat-card"><div class="stat-card-num">${filtered.length}</div><div class="stat-card-label">${t('statCiclesDisp')}</div></div>
      <div class="stat-card"><div class="stat-card-num">${municipiosUnicos}</div><div class="stat-card-label">${t('statMunicipis')}</div></div>
      <div class="stat-card"><div class="stat-card-num">${familiasUnicas}</div><div class="stat-card-label">${t('statFamiliesPro')}</div></div>`;
    return;
  }

  statsPn.style.display = 'none';

  const cicloActivo    = safe(fCiclo()?.value);
  // Solo mostrar progresión si el nivel está explícitamente filtrado
  const nivelActivo    = safe(fNivel()?.value);
  const info           = cicloActivo ? tCicleInfo(cicloActivo) : {};
  const descFamilia    = tFamDesc(familiaActiva);
  const descMostrar    = cicloActivo ? (info.desc ?? descFamilia) : descFamilia;
  const salidasMostrar = cicloActivo ? (info.salidas ?? '') : '';
  const tituloMostrar  = cicloActivo || familiaActiva;

  document.getElementById('ip-icon').textContent    = safe(familiaEmoji[familiaActiva]) || '📁';
  document.getElementById('ip-familia').textContent = tFam(familiaActiva);
  document.getElementById('ip-ciclo').textContent   =
    currentLang === 'val'
      ? (cicleNomVal[tituloMostrar] ?? famNomVal[tituloMostrar] ?? tituloMostrar)
      : tituloMostrar;
  document.getElementById('ip-desc').textContent    = descMostrar;
  document.getElementById('ip-salidas').innerHTML   =
    salidasMostrar ? '<strong>' + t('salidas') + '</strong> ' + salidasMostrar : '';

  const nBadge = document.getElementById('ip-nivel-wrap');
  if (nivelActivo && cicloActivo) {
    const labels = { FPB: t('fpbLabel'), GM: t('gmLabel'), GS: t('gsLabel') };
    nBadge.innerHTML = `<span class="info-nivel-badge ${nivelActivo.toLowerCase()}">${labels[nivelActivo] ?? nivelActivo}</span>`;
  } else {
    nBadge.innerHTML = '';
  }

  const gmSection = document.getElementById('ip-gm');
  const gmTitle   = document.querySelector('#ip-gm .info-gm-title');
  const gmBtns    = document.getElementById('ip-gm-btns');

  // Solo mostrar botones si nivel está explícitamente seleccionado
  if (nivelActivo === 'FPB' && fpbAGm[familiaActiva]) {
    gmBtns.innerHTML = fpbAGm[familiaActiva].map(c => mkBtn(familiaActiva, c, 'irAGM', '#22c55e')).join('');
    if (gmTitle) gmTitle.textContent = t('fpbToGm');
    gmSection.style.display = 'block';
  } else if (nivelActivo === 'GM' && gmAGs[familiaActiva]) {
    gmBtns.innerHTML = gmAGs[familiaActiva].map(c => mkBtn(familiaActiva, c, 'irAGS', '#4f46e5')).join('');
    if (gmTitle) gmTitle.textContent = t('gmToGs');
    gmSection.style.display = 'block';
  } else {
    gmSection.style.display = 'none';
  }

  panel.classList.add('visible');
}

function mkBtn(familia, ciclo, fn, color) {
  const label = currentLang === 'val' ? (cicleNomVal[ciclo] ?? ciclo) : ciclo;
  return `<button class="btn-gm" style="background:${color}"
    data-fn="${fn}"
    data-familia="${familia.replace(/"/g, '&quot;')}"
    data-ciclo="${ciclo.replace(/"/g, '&quot;')}">${label}</button>`;
}

export function initInfoPanel() {
  document.getElementById('info-panel')?.addEventListener('click', e => {
    const btn = e.target.closest('.btn-gm[data-fn]');
    if (!btn) return;
    // Usar evento para evitar import circular con render-cards
    document.dispatchEvent(new CustomEvent('fp:goto-nivel', {
      detail: { fn: btn.dataset.fn, familia: btn.dataset.familia, ciclo: btn.dataset.ciclo }
    }));
  });
}
