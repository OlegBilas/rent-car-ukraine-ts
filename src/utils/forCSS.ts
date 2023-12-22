const parseUnit = (value: string) => {
  let unit = '';
  if (typeof value === 'string') {
    if (value.includes('px')) {
      unit = 'px';
    } else if (value.includes('rem')) {
      unit = 'rem';
    } else if (value.includes('em')) {
      unit = 'em';
    }
  }

  return unit;
};

//size - size in px, rem, em. Type: number (only for px) or string (with units - for example: "12px", "1.2rem", "5em")
// calcCSS - calculates width size or height size
// currentSize - current window size: width or height
// baseSize - base window size: width or height

const calcCSS = (
  size: string | number,
  currentSize: number,
  baseSize: number
) => {
  let unit = '';
  if (typeof size === 'string') {
    unit = parseUnit(size);
    size = parseInt(size);
  }

  return `${Math.round((currentSize / baseSize) * size)}${unit}`;
};

export const calcWidth = (
  width: string | number,
  currentWindowWidth: number,
  baseWindowWidth = 1440
) => {
  return calcCSS(width, currentWindowWidth, baseWindowWidth);
};

export const calcHeight = (
  height: string | number,
  currentWindowHeight: number,
  baseWindowHeight = 992
) => {
  return calcCSS(height, currentWindowHeight, baseWindowHeight);
};

// calcFontSize - calculates font size
// fontSize - font size for recalculating;
// currentWindowWidth - current window width
// baseWindowWidth - base window width
// minFontSize - min font size (only for units in "px")

export const calcFontSize = (
  fontSize: string | number,
  currentWindowWidth: number,
  baseWindowWidth = 1440,
  minFontSize = 12
) => {
  let unit = '';
  if (typeof fontSize === 'string') {
    unit = parseUnit(fontSize);
    fontSize = parseInt(fontSize);
  }

  let size = Math.round((fontSize * currentWindowWidth) / baseWindowWidth);

  if (unit === 'px' && size < minFontSize) {
    size = minFontSize;
  }

  return `${Math.round(size)}${unit}`;
};
