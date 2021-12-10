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
};

export const media = {
  small_mobile: `(max-width: ${breakpoints.small_mobile.max}px)`,
  mobile: `(max-width: ${breakpoints.mobile.max}px)`,
  tablet: `(max-width: ${breakpoints.tablet.max}px)`,
  desktop: `(max-width: ${breakpoints.desktop.max}px)`,
};

export const spacing = {
  nano: '4px',
  mini: '8px',
  tiny: '16px',
  tinier: '20px',
  small: '24px',
  medium: '32px',
  large: '48px',
  huge: '64px',
};

export const size = {
  logo: {
    large: '35px',
    madium: '20px',
  },
  icons: {
    large: '23px',
    medium: '17px',
    extra_large: '25px',
    extra: '50px',
  },
  heading: {
    extra_large: '96px',
    large: '80px',
    medium: '64px',
    small: '40px',
    smaller: '30px',
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
  main: 'Lato, sans-serif',
  secondary: 'Playfair Display, serif',
};

export const color = {
  text: {
    light: '#ffffff',
    light_darker: '#F2F2F2',
    dark: '#050505',
    secondary: '#B0976D',
    secondary_light: '#c6af89',
  },
  border: {
    dark: '#050505',
    light: '#c6af89',
  },
  background: {
    white: '#FFFFFF',
    white_darker: '#F2F2F2',
    light_dark: '#161616',
    dark: '#050505',
    extra_dark: '#000000',
    secondary: '#B0976D',
    secondary_light: '#c6af89',
    button: {
      default: '#111111',
      default_secondary: '#B0976D',
      hover: '#464646',
    },
  },
};
