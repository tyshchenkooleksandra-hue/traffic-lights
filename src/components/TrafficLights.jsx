import Light from './Light.jsx';

const SIGNAL_COLORS = ['red', 'yellow', 'green'];

function TrafficLights({ orientation = 'vertical' }) {
  return (
    <div className={`traffic-lights traffic-lights--${orientation}`}>
      {SIGNAL_COLORS.map((color) => (
        <Light key={color} color={color} />
      ))}
    </div>
  );
}

export default TrafficLights;
