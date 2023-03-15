import { theme } from 'theme';

export const getTextAlign = (textAlign = 'left') => {
    const textAlignMap = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return `${textAlignMap[textAlign]}` || '';
};

export const getTextColor = (color = 'black') => {

    //if color is a hex value, return it
    if (color.startsWith('#')) {
        return color;
    }

    const colorMap = {
        black: theme.colors.contrast,
        white: theme.colors.base,
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        tertiary: theme.colors.tertiary,
        slate: theme.colors.slate,
    };

    return `${colorMap[color]}` || '';
};

export const getFontSizeForHeading = (level = 1) => {
    const fontSizeMap = {
        1: 'text-6xl',
        2: 'text-5xl',
        3: 'text-4xl',
        4: 'text-3xl',
        5: 'text-2xl',
        6: 'text-xl',
    };

    return `${fontSizeMap[level]}` || '1';
}

