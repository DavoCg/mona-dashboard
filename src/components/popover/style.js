import {StyleSheet} from 'aphrodite';
import {lighten} from 'polished';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    container: {
        maxHeight: 'auto',
        display: 'flex',
        position: 'absolute',
        width: 300,
        paddingTop: 10,
        transform: 'scale(1) opacity(1)',
        transition: 'transform 5s ease-out'
    },

    content: {
        backgroundColor: colors.white,
        position: 'relative',
        padding: 15,
        width: 300,
        borderRadius: 3,
        boxShadow: shadows[1],
        zIndex: 11
    },

    close: {
        maxHeight: 0,
        overflow: 'hidden',
        visibility: 'hidden',
        transition: 'transform 5s ease-out',
        transform: 'scale(0.7) opacity(0.8)'
    },

    over: {
        position: 'absolute',
        width: 0,
        height: 0,
        top: -8,
        right: 20,
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderBottom: '10px solid white',
        zIndex: 10
    },

    under: {
        position: 'absolute',
        width: 0,
        height: 0,
        top: -9,
        right: 20,
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderBottom: `10px solid ${lighten(0.5, colors.textGrey)}`,
        zIndex: 10
    }
});