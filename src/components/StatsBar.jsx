import { SIGNAL_COLORS, SIGNAL_LABELS } from '../constants/signals.js';

function StatsBar({ clickCounts, totalClicks, currentSignal, orientation, onOrientationToggle }) {
  const orientationLabel =
    orientation === 'vertical' ? 'Вертикальна орієнтація' : 'Горизонтальна орієнтація';

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
      <p>{orientationLabel}</p>

      <button type="button" onClick={onOrientationToggle}>
        Змінити орієнтацію
      </button>
    </section>
  );
}

export default StatsBar;
