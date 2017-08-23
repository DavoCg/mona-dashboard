import {StyleSheet} from 'aphrodite';
import {rgba} from 'polished';
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
        alignItems: 'center',
        zIndex: 1
    },

    icon: {
        fontSize: '2.3em',
        color: colors.lightgreyDarker(0.15)
    },

    iconTrash: {
        fontSize: '1em',
        color: 'white',
        padding: 6,
        position: 'absolute',
        backgroundColor: rgba(colors.blue, 0.25),
        transition: 'all 0.1s ease-out',
        borderRadius: 2,
        top: 0,
        right: 0,
        ':hover': {
            backgroundColor: rgba(colors.blue, 0.5),
            fontSize: '1.2em',
            transition: 'all 0.1s ease-out'
        }
    },

    image: {
        width: '100%',
        height: '100%'
    }
});