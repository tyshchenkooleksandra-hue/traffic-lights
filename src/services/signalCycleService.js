// Yellow appears twice, so the cycle position (phase index) is the source of truth, not the color.
export const SIGNAL_CYCLE = ['red', 'yellow', 'green', 'yellow'];

export const PHASE_DURATION_MS = 2000;

export function getSignalByPhase(phaseIndex) {
  return SIGNAL_CYCLE[phaseIndex];
}

export function getNextPhaseIndex(phaseIndex) {
  return (phaseIndex + 1) % SIGNAL_CYCLE.length;
}

// For manual selection yellow always maps to its first position (red → yellow → green).
export function getPhaseIndexBySignal(signal) {
  return SIGNAL_CYCLE.indexOf(signal);
}
