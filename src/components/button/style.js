import {StyleSheet} from 'aphrodite';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 2,
        cursor: 'pointer',
        boxShadow: shadows[1],
        ':active': {
            boxShadow: 'none'
        }
    },

    text: {
        color: colors.white,
        textTransform: 'uppercase',
        fontSize: '0.75em',
        letterSpacing: 1.75,
        fontWeight: 400
    },

    full: {
        width: '100%'
    },

    pop: {
        backgroundColor: colors.popBlue,
    },

    dark: {
        backgroundColor: colors.blue
    }
});