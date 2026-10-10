function Light({ color, isActive, onSelect }) {
  return (
    <button
      type="button"
      className={`light${isActive ? ' light--active' : ''}`}
      style={{ backgroundColor: color, color }}
      aria-label={color}
      aria-pressed={isActive}
      onClick={() => onSelect(color)}
    />
  );
}

export default Light;
