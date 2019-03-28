var colors = {
    black: '#171717',
};
var opacity = [1, 0.6, 0.3];
var theme = {
    borders: [
        { borderColor: colors.black, borderWidth: 1 },
        { borderColor: colors.black, borderWidth: 3 },
        { borderColor: colors.black, borderWidth: 5 },
    ],
    colors: colors,
    fonts: {},
    fontSizes: [12, 14, 16, 20, 24, 32],
    letterSpacings: [0, 1, 2],
    lineHeights: [12, 16, 32],
    opacity: opacity,
    shadows: [
        {
            elevation: 1,
            shadowColor: colors.black,
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: opacity[2],
            shadowRadius: 3,
        },
        {
            elevation: 3,
            shadowColor: colors.black,
            shadowOffset: { height: 2, width: 2 },
            shadowOpacity: opacity[2],
            shadowRadius: 3,
        },
        {
            elevation: 5,
            shadowColor: colors.black,
            shadowOffset: { height: 3, width: 3 },
            shadowOpacity: opacity[2],
            shadowRadius: 3,
        },
    ],
    space: [0, 4, 8, 16, 32, 64],
};
export default theme;
