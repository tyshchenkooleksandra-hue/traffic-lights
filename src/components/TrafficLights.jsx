import Light from './Light.jsx';
import { SIGNAL_COLORS } from '../constants/signals.js';

function TrafficLights({ currentSignal, orientation = 'vertical', isDisabled = false, onSignalSelect }) {
  return (
    <div className={`traffic-lights traffic-lights--${orientation}`}>
      {SIGNAL_COLORS.map((color) => (
        <Light
          key={color}
          color={color}
          isActive={color === currentSignal}
          isDisabled={isDisabled}
          onSelect={onSignalSelect}
        />
      ))}
    </div>
  );
}

export default TrafficLights;
