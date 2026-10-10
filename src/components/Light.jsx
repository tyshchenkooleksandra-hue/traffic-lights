function Light({ color, isActive, isDisabled, onSelect }) {
  return (
    <button
      type="button"
      className={`light${isActive ? ' light--active' : ''}`}
      style={{ backgroundColor: color, color }}
      aria-label={color}
      aria-pressed={isActive}
      disabled={isDisabled}
      onClick={() => onSelect(color)}
    />
  );
}

export default Light;
