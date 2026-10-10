import { SIGNAL_COLORS, SIGNAL_LABELS } from '../constants/signals.js';
import { getModeLabel, getOrientationLabel } from '../services/trafficLightLabelService.js';

function StatsBar({ clickCounts, totalClicks, currentSignal, orientation, isAutomatic }) {
  return (
    <section className="stats-bar">
      <h2>Статистика</h2>

      <ul className="stats-bar__list">
        {SIGNAL_COLORS.map((color) => (
          <li key={color}>
            {SIGNAL_LABELS[color]}: {clickCounts[color]}
          </li>
        ))}
      </ul>

      <p>Усього натискань: {totalClicks}</p>
      <p>Поточний сигнал: {SIGNAL_LABELS[currentSignal]}</p>
      <p>{getOrientationLabel(orientation)}</p>
      <p>Режим: {getModeLabel(isAutomatic)}</p>
    </section>
  );
}

export default StatsBar;
