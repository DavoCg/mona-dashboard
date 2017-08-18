import {StyleSheet} from 'aphrodite';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: '100%',
        borderRadius: 2,
        backgroundColor: colors.blue,
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
    }
});