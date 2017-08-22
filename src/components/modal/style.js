import {StyleSheet} from 'aphrodite';
import {rgba} from 'polished';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    overlay: {
        transition: 'opacity 0.25s ease-out',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        opacity: 1,
        backgroundColor: rgba(colors.blue, 0.5),
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },

    close: {
        transition: 'opacity 0.25s ease-out',
        height: 0,
        opacity: 0
    },

    content: {
        maxWidth: '30vw'
    }
});