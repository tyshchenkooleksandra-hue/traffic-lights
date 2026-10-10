import { useState } from 'react';
import Light from './Light.jsx';
import StatsBar from './StatsBar.jsx';
import { SIGNAL_COLORS } from '../constants/signals.js';

function TrafficLights({ initialOrientation = 'vertical' }) {
  const [currentSignal, setCurrentSignal] = useState('red');
  const [clickCounts, setClickCounts] = useState({ red: 0, yellow: 0, green: 0 });
  const [orientation, setOrientation] = useState(initialOrientation);

  const totalClicks = clickCounts.red + clickCounts.yellow + clickCounts.green;

  function handleSignalSelect(color) {
    setCurrentSignal(color);
    setClickCounts((previous) => ({ ...previous, [color]: previous[color] + 1 }));
  }

  function handleOrientationToggle() {
    setOrientation((previous) => (previous === 'vertical' ? 'horizontal' : 'vertical'));
  }

  return (
    <div className="traffic-lights-panel">
      <div className={`traffic-lights traffic-lights--${orientation}`}>
        {SIGNAL_COLORS.map((color) => (
          <Light
            key={color}
            color={color}
            isActive={color === currentSignal}
            onSelect={handleSignalSelect}
          />
        ))}
      </div>

      <StatsBar
        clickCounts={clickCounts}
        totalClicks={totalClicks}
        currentSignal={currentSignal}
        orientation={orientation}
        onOrientationToggle={handleOrientationToggle}
      />
    </div>
  );
}

export default TrafficLights;
