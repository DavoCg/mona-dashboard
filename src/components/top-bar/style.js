import {StyleSheet} from 'aphrodite';
import {darken} from 'polished';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    top: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 60,
        marginTop: 15
    },

    iconAccount: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.textGrey,
        backgroundColor: colors.white,
        height: 32,
        width: 32,
        borderRadius: 16,
        boxShadow: shadows[1],
        marginLeft: 15,
        ':hover': {
            cursor: 'pointer'
        }
    },

    icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        width: 32,
        borderRadius: 16,
        color: colors.textGrey,
        fontSize: '1.1em',
        marginLeft: 15,
        ':hover': {
            cursor: 'pointer'
        }
    }
});