import {StyleSheet} from 'aphrodite';
import {rgba} from 'polished';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    overlay: {
        transition: 'opacity 0.1s ease-out',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        opacity: 1,
        backgroundColor: rgba(colors.blue, 0.3),
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        overflow: 'hidden',
        ':hover': {
            cursor: 'pointer'
        }
    },

    close: {
        transition: 'opacity 0.1s ease-out',
        height: 0,
        opacity: 0
    },

    content: {

    }
});