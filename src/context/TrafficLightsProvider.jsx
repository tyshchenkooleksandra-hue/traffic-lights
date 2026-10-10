import { useEffect, useState } from 'react';
import { TrafficLightsContext } from './TrafficLightsContext.js';
import {
  PHASE_DURATION_MS,
  getNextPhaseIndex,
  getPhaseIndexBySignal,
  getSignalByPhase,
} from '../services/signalCycleService.js';

function TrafficLightsProvider({ children }) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [isAutomatic, setIsAutomatic] = useState(false);
  const [clickCounts, setClickCounts] = useState({ red: 0, yellow: 0, green: 0 });
  const [orientation, setOrientation] = useState('vertical');

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

  function selectSignal(color) {
    setPhaseIndex(getPhaseIndexBySignal(color));
    setClickCounts((previous) => ({ ...previous, [color]: previous[color] + 1 }));
  }

  function startAutomatic() {
    setIsAutomatic(true);
  }

  function stopAutomatic() {
    setIsAutomatic(false);
  }

  function toggleOrientation() {
    setOrientation((previous) => (previous === 'vertical' ? 'horizontal' : 'vertical'));
  }

  const value = {
    currentSignal,
    clickCounts,
    totalClicks,
    orientation,
    isAutomatic,
    selectSignal,
    startAutomatic,
    stopAutomatic,
    toggleOrientation,
  };

  return <TrafficLightsContext.Provider value={value}>{children}</TrafficLightsContext.Provider>;
}

export default TrafficLightsProvider;
