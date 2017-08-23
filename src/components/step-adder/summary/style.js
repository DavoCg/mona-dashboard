import {StyleSheet} from 'aphrodite';
import {darken, opacify} from 'polished';
import {colors, fontFamily, shadows} from '../../../constants/style';

export default StyleSheet.create({
    images: {
        display: 'flex',
        marginBottom: 15
    },

    description: {
        marginBottom: 15,
        maxWidth: '100%'
    },

    price: {

    },

    title: {
        color: colors.lightgreyDarker(0.2),
        fontSize: '0.9em',
        fontWeight: '300',
        userSelect: 'none',
        margin: 0,
        padding: 0,
        paddingBottom: 5
    },

    descriptionText: {
        margin: 0,
        padding: 0,
        color: colors.textGrey,
        fontSize: '0.92em',
        fontWeight: '300',
        lineHeight: 1.5
    },

    priceText: {
        margin: 0,
        color: colors.white,
        fontSize: '0.9em',
        fontWeight: '300',
        backgroundColor: colors.popBlue,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 2,
        letterSpacing: '0.5px',
        display: 'inline-block'
    }
});