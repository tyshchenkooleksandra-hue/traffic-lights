export function getModeLabel(isAutomatic) {
  return isAutomatic ? 'автоматичний' : 'ручний';
}

export function getOrientationLabel(orientation) {
  return orientation === 'vertical' ? 'Вертикальна орієнтація' : 'Горизонтальна орієнтація';
}
