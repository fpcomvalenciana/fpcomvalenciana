// ============================================================
// MAIN — punto de entrada de la aplicación
// ============================================================
import { applyUILang, setLang }        from './ui/language.js';
import { initFilters, actualizarFiltrosCascada } from './ui/filters.js';
import { updateView, setTab }          from './ui/render-cards.js';
import { initInfoPanel }               from './ui/render-info.js';

function init() {
  // Registrar listeners de filtros y btn-reset
  initFilters();

  // Registrar delegación del info-panel (FPB→GM / GM→GS)
  initInfoPanel();

  // Registrar tabs
  document.getElementById('tab-familias')?.addEventListener('click', e =>
    setTab('familias', e.currentTarget));
  document.getElementById('tab-centros')?.addEventListener('click', e =>
    setTab('centros', e.currentTarget));
  document.getElementById('tab-mapa')?.addEventListener('click', e =>
    setTab('mapa', e.currentTarget));

  // Registrar cambio de idioma
  document.getElementById('btn-es')?.addEventListener('click', () => setLang('es'));
  document.getElementById('btn-val')?.addEventListener('click', () => setLang('val'));

  // Primer render
  actualizarFiltrosCascada();
  updateView();
  applyUILang();
}

// Esperar a que el DOM esté listo (el script se carga con type=module, que es diferido por defecto)
document.addEventListener('DOMContentLoaded', init);
