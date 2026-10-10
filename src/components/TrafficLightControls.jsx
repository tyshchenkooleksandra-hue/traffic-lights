import { getModeLabel } from '../services/trafficLightLabelService.js';

function TrafficLightControls({ isAutomatic, onStart, onStop, onOrientationToggle }) {
  return (
    <section className="traffic-light-controls">
      <p>Режим: {getModeLabel(isAutomatic)}</p>

      <button type="button" onClick={onStart} disabled={isAutomatic}>
        Запустити
      </button>
      <button type="button" onClick={onStop} disabled={!isAutomatic}>
        Зупинити
      </button>
      <button type="button" onClick={onOrientationToggle}>
        Змінити орієнтацію
      </button>
    </section>
  );
}

export default TrafficLightControls;
