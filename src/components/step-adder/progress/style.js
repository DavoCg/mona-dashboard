import {StyleSheet} from 'aphrodite';
import {darken, opacify} from 'polished';
import {colors, fontFamily, shadows} from '../../../constants/style';

export default StyleSheet.create({

    container: {
        marginBottom: 15,
        paddingBottom: 10
    },

    progress: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.lightgreyDarker(0.01),
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
        backgroundColor: colors.lightgreyDarker(0.01),
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
        fontSize: '0.75em',
        top: 0,
        transition: 'all 0.2s ease-out',
        margin: 0,
        padding: 0
    },

    activeTitle: {
        color: colors.popBlue,
        fontWeight: '400',
        transition: 'all 0.2s 0.22s ease-out'
    },

    active: {
        backgroundColor: colors.popBlue,
        transition: 'all 0.2s  ease-out'
    },

    dotActive: {
        backgroundColor: colors.popBlue,
        transition: 'all 0.2s 0.22s ease-out'
    }
});