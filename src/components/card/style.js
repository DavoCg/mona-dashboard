import {StyleSheet} from 'aphrodite';
import {darken} from 'polished';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    container: {
        padding: 8,
        ':hover': {
            cursor: 'pointer'
        }
    },

    content: {
       padding: 0
    },

    imageContainer: {
        position: 'relative'
    },

    infos: {
        padding: 10
    },

    description: {
        margin: 0,
        padding: 0,
        color: colors.textBlack,
        fontSize: '0.92em',
        fontWeight: '300',
        lineHeight: 1.5
    },

    over: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        padding: 17,
        paddingBottom: 0
    },

    tag: {
        backgroundColor: colors.popBlue,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 2,
        color: 'white',
        boxShadow: shadows[1]
    }
});