import {StyleSheet} from 'aphrodite';
import {opacify} from 'polished';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    container: {
        width: '100%',
        padding: 3,
        position: 'relative',
        boxSizing: 'border-box',
        ':before': {
            content: '" "',
            display: 'block',
            paddingBottom: '100%'
        },
        ':hover': {
            cursor: 'pointer'
        }
    },

    content: {
        backgroundColor: colors.lightgreyDarker(0.04),
        position: 'absolute',
        borderRadius: 2,
        top: 3,
        left: 3,
        right: 3,
        bottom: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        fontSize: '3em',
        color: colors.lightgreyDarker(0.15),
    }
});