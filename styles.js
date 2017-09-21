import createTheme from 'spectacle/lib/themes/default';

import images from 'images';

const colors = {
  primary: '#171E26',
  secondary: '#FFFFFF',
  tertiary: '#CDFFFF',
  quartenary: '#E00098',
};

const fonts = {
  primary: 'Montserrat',
  secondary: 'Playfair Display',
};

export const backgroundWithImage = {
  backgroundImage: `url(${images.background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const boldedPrimary = {
  color: colors.primary,
  fontWeight: 'bold',
};

export const boldedTertiary = {
  color: colors.tertiary,
  fontWeight: 'bold',
};

export const theme = createTheme(colors, fonts);
