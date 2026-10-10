import StatsBar from '../components/StatsBar.jsx';
import { useTrafficLights } from '../hooks/useTrafficLights.js';

function StatsPage() {
  const { clickCounts, totalClicks, currentSignal, orientation, isAutomatic } = useTrafficLights();

  return (
    <div className="page">
      <StatsBar
        clickCounts={clickCounts}
        totalClicks={totalClicks}
        currentSignal={currentSignal}
        orientation={orientation}
        isAutomatic={isAutomatic}
      />
    </div>
  );
}

export default StatsPage;
