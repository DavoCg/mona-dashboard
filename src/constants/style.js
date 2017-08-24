import {StyleSheet} from 'aphrodite';
import {darken} from 'polished';

export const colors = {
    lightgrey: '#F8F9F9',
    lightgreyDarker: (v) => darken(v || 0.1, '#F8F9F9'),
    textGrey: '#656565',
    textBlack: '#464747',
    white: '#FFFFFF',
    blue: '#0a0a1c',
    border: '#efefef',
    red: '#E2222F',
    green: '#64C962',
    placeholder: '#E3E9ED',
    //popBlue: '#6772e5'
    popBlue: '#548FFD'
};

export const shadows = {
    1: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.12)',
    2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
};

export const fontFamily = 'Fira Sans';

export const cs = StyleSheet.create({
    box: {
        backgroundColor: colors.white,
        borderRadius: 2,
        padding: 15,
        boxShadow: shadows[1]
    },

    upperText: {
        alignSelf: 'baseline',
        color: colors.lightgreyDarker(0.4),
        textTransform: 'uppercase',
        fontSize: '0.80em',
        fontFamily: fontFamily,
        letterSpacing: 1.2,
        fontWeight: 300
    }
});