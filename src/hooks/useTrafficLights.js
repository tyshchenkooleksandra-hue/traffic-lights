import { useContext } from 'react';
import { TrafficLightsContext } from '../context/TrafficLightsContext.js';

export function useTrafficLights() {
  const context = useContext(TrafficLightsContext);

  if (!context) {
    throw new Error('useTrafficLights must be used within TrafficLightsProvider');
  }

  return context;
}
