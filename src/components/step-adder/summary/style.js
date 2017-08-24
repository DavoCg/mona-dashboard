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
        fontSize: '0.75em'
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
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 2,
        letterSpacing: '1px',
        display: 'inline-block'
    }
});