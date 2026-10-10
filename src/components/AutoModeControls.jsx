function AutoModeControls({ isAutomatic, onStart, onStop }) {
  return (
    <section className="auto-mode-controls">
      <p>Режим: {isAutomatic ? 'автоматичний' : 'ручний'}</p>

      <button type="button" onClick={onStart} disabled={isAutomatic}>
        Запустити
      </button>
      <button type="button" onClick={onStop} disabled={!isAutomatic}>
        Зупинити
      </button>
    </section>
  );
}

export default AutoModeControls;
