import {StyleSheet} from 'aphrodite';
import {darken, opacify} from 'polished';
import {colors, fontFamily, shadows} from '../../constants/style';

export default StyleSheet.create({
    images: {
        display: 'flex',
        marginBottom: 5
    },

    description: {
        height: 100,
        marginBottom: 5
    },

    price: {
        height: 40
    },

    title: {
        color: colors.lightgreyDarker(0.2),
        fontSize: '0.8em',
        fontWeight: '300',
        userSelect: 'none',
        margin: 0,
        padding: 0,
        paddingBottom: 5,
    }
});