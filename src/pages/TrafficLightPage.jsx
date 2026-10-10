import TrafficLights from '../components/TrafficLights.jsx';
import TrafficLightControls from '../components/TrafficLightControls.jsx';
import { useTrafficLights } from '../hooks/useTrafficLights.js';

function TrafficLightPage() {
  const {
    currentSignal,
    orientation,
    isAutomatic,
    selectSignal,
    startAutomatic,
    stopAutomatic,
    toggleOrientation,
  } = useTrafficLights();

  return (
    <div className="page traffic-light-page">
      <h2>Керування світлофором</h2>

      <TrafficLights
        currentSignal={currentSignal}
        orientation={orientation}
        isDisabled={isAutomatic}
        onSignalSelect={selectSignal}
      />

      <TrafficLightControls
        isAutomatic={isAutomatic}
        onStart={startAutomatic}
        onStop={stopAutomatic}
        onOrientationToggle={toggleOrientation}
      />
    </div>
  );
}

export default TrafficLightPage;
