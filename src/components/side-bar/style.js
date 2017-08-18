import {StyleSheet} from 'aphrodite';
import {darken} from 'polished';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    container: {
        padding: 15
    },

    header: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center'
    },

    image: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 15
    },

    content: {
        paddingTop: 15
    },

    item: {
        display: 'flex',
        margin: 0,
        padding: '10px 5px',
        borderRadius: 2,
        fontWeight: '300',
        transition: 'all 0.25s ease-out',
        ':hover': {
            transition: 'all 0.25s ease-out',
            cursor: 'pointer',
            color: darken(0.9, colors.textGrey),
            backgroundColor: darken(0.05, colors.lightgrey)
        }
    },

    last: {
        marginBottom: 15
    },

    text: {
        color: colors.textGrey,
        padding: 0,
        margin: 0
    },

    instaText: {
        fontWeight: '300',
        fontSize: '0.75em',
        marginTop: 2,
        cursor: 'pointer',
        color: colors.popBlue
    },

    icon: {
        marginRight: 10,
        color: colors.textGrey
    },

    current: {
        transition: 'all 0.25s ease-out',
        color: colors.popBlue,
        fontWeight: '400'
    }
});