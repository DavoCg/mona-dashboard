import {StyleSheet} from 'aphrodite';
import {darken, opacify} from 'polished';
import {colors, fontFamily, shadows} from '../../constants/style';

export default StyleSheet.create({
    progress: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: darken(0.01, colors.lightgrey),
        height: 6,
        borderRadius: 3,
        marginTop: 15,
        marginBottom: 15,
        transition: 'all 0.2s ease-out'
    },

    avancement: {
        position: 'absolute',
        borderRadius: 3,
        top: 0,
        bottom: 0,
        left: 0,
        transition: 'all 0.2s ease-out'
    },

    dotContainer: {
        backgroundColor: 'red'
    },

    dot: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: darken(0.01, colors.lightgrey),
        transition: 'all 0.2s ease-out'
    },

    titles: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 5
    },

    dotTitle: {
        color: darken(0.2, colors.lightgrey),
        fontSize: '0.75em',
        top: 0,
        transition: 'all 0.2s ease-out'
    },

    activeTitle: {
        color: colors.popBlue,
        transition: 'all 0.2s ease-out'
    },

    active: {
        backgroundColor: colors.popBlue,
        transition: 'all 0.2s ease-out'
    }
});