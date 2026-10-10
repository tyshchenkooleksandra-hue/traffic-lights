import { useEffect, useState } from 'react';
import Light from './Light.jsx';
import StatsBar from './StatsBar.jsx';
import AutoModeControls from './AutoModeControls.jsx';
import { SIGNAL_COLORS } from '../constants/signals.js';
import {
  PHASE_DURATION_MS,
  getNextPhaseIndex,
  getPhaseIndexBySignal,
  getSignalByPhase,
} from '../services/signalCycleService.js';

function TrafficLights({ initialOrientation = 'vertical' }) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [isAutomatic, setIsAutomatic] = useState(false);
  const [clickCounts, setClickCounts] = useState({ red: 0, yellow: 0, green: 0 });
  const [orientation, setOrientation] = useState(initialOrientation);

  const currentSignal = getSignalByPhase(phaseIndex);
  const totalClicks = clickCounts.red + clickCounts.yellow + clickCounts.green;

  useEffect(() => {
    if (!isAutomatic) {
      return;
    }

    const timerId = setInterval(() => {
      setPhaseIndex((previous) => getNextPhaseIndex(previous));
    }, PHASE_DURATION_MS);

    return () => clearInterval(timerId);
  }, [isAutomatic]);

  function handleSignalSelect(color) {
    setPhaseIndex(getPhaseIndexBySignal(color));
    setClickCounts((previous) => ({ ...previous, [color]: previous[color] + 1 }));
  }

  function handleOrientationToggle() {
    setOrientation((previous) => (previous === 'vertical' ? 'horizontal' : 'vertical'));
  }

  function handleAutoModeStart() {
    setIsAutomatic(true);
  }

  function handleAutoModeStop() {
    setIsAutomatic(false);
  }

  return (
    <div className="traffic-lights-panel">
      <div className={`traffic-lights traffic-lights--${orientation}`}>
        {SIGNAL_COLORS.map((color) => (
          <Light
            key={color}
            color={color}
            isActive={color === currentSignal}
            isDisabled={isAutomatic}
            onSelect={handleSignalSelect}
          />
        ))}
      </div>

      <AutoModeControls
        isAutomatic={isAutomatic}
        onStart={handleAutoModeStart}
        onStop={handleAutoModeStop}
      />

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
