export const breakpoints = {
  small_mobile: {
    min: 250,
    max: 500,
  },
  mid_mobile: {
    min: 500,
    max: 767,
  },
  mobile: {
    max: 767,
  },
  tablet: {
    min: 768,
    max: 1023,
  },
  desktop: {
    min: 1024,
    max: 1679,
  },
  wide: {
    min: 1680,
  },
};

export const spacing = {
  nano: '4px',
  mini: '8px',
  tiny: '16px',
  small: '24px',
  medium: '32px',
  large: '48px',
  huge: '64px',
};

export const size = {
  logo: {
    large: '30px',
    madium: '20px',
  },
  icons: {
    large: '20px',
    medium: '17px',
    extra_large: '25px',
  },
  heading: {
    extra_large: '96px',
    large: '80px',
    medium: '64px',
    small: '40px',
    extra_small: '25px',
  },
  text: {
    main: '14px',
    large: '18px',
    extra_large: '25px',
  },
  button: '20px',
};

export const font = {
  main: 'Poppins',
  secondary: 'Croissant One, cursive',
};

export const color = {
  text: {
    light: '#ffffff',
    light_darker: '#AEAEAE',
    dark: '#000000',
    secondary: '#A6934F',
  },
  border: {
    dark: '#000000',
  },
  background: {
    white: '#FFFFFF',
    dark: '#000000',
    button: {
      default: '#111111',
      hover: '#464646',
    },
  },
};

export default {
  breakpoints,
  spacing,
  size,
  font,
  color,
};
