import TrafficLights from './components/TrafficLights.jsx';

function App() {
  return (
    <main className="app">
      <h1>Світлофор</h1>

      <div className="demo">
        <section className="demo__item">
          <h2>Вертикальний</h2>
          <TrafficLights orientation="vertical" />
        </section>

        <section className="demo__item">
          <h2>Горизонтальний</h2>
          <TrafficLights orientation="horizontal" />
        </section>
      </div>
    </main>
  );
}

export default App;
