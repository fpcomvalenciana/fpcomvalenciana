// ============================================================
// MAIN — orquestador principal
// ============================================================
import { applyUILang, setLang }                 from './ui/language.js';
import { initFilters, actualizarFiltrosCascada,
         fNivel, fFamilia, fCiclo }              from './ui/filters.js';
import { updateView, setTab, currentTab }        from './ui/render-cards.js';
import { initInfoPanel }                         from './ui/render-info.js';

function gotoFamiliaConCiclo({ familia, ciclo, nivel }) {
  setTab('familias', document.getElementById('tab-familias'));
  // Mostrar filtros de familia/ciclo
  document.getElementById('fg-familia').style.display   = '';
  document.getElementById('fg-ciclo').style.display     = '';
  document.getElementById('fg-centro').style.display    = 'none';
  document.getElementById('fg-tipologia').style.display = 'none';
  if (nivel) fNivel().value = nivel;
  fFamilia().value = familia;
  actualizarFiltrosCascada();
  setTimeout(() => { fCiclo().value = ciclo; updateView(); window.scrollTo({ top: 0, behavior: 'smooth' }); }, 60);
}

function init() {
  // ── Eventos personalizados (evitan dependencias circulares) ──
  document.addEventListener('fp:update',   updateView);
  document.addEventListener('fp:cascade',  actualizarFiltrosCascada);
  document.addEventListener('fp:goto-ciclo',  e => gotoFamiliaConCiclo(e.detail));
  document.addEventListener('fp:goto-nivel',  e => {
    const { fn, familia, ciclo } = e.detail;
    gotoFamiliaConCiclo({ familia, ciclo, nivel: fn === 'irAGM' ? 'GM' : 'GS' });
  });

  // ── Filtros ───────────────────────────────────────────────────
  initFilters();

  // ── Info panel (botones FPB→GM / GM→GS) ──────────────────────
  initInfoPanel();

  // ── Tabs ──────────────────────────────────────────────────────
  document.getElementById('tab-familias')?.addEventListener('click', e => setTab('familias', e.currentTarget));
  document.getElementById('tab-centros')?.addEventListener('click',  e => setTab('centros',  e.currentTarget));
  document.getElementById('tab-mapa')?.addEventListener('click',     e => setTab('mapa',     e.currentTarget));

  // ── Idioma ────────────────────────────────────────────────────
  document.getElementById('btn-es')?.addEventListener('click',  () => setLang('es'));
  document.getElementById('btn-val')?.addEventListener('click', () => setLang('val'));

  // ── Primer render ─────────────────────────────────────────────
  actualizarFiltrosCascada();
  updateView();
  applyUILang();
}

document.addEventListener('DOMContentLoaded', init);
