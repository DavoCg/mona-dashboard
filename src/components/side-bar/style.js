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
        marginRight: 15,
        userSelect: 'none'
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
            backgroundColor: colors.lightgreyDarker(0.05)
        }
    },

    last: {
        marginBottom: 15
    },

    text: {
        padding: 0,
        margin: 0,
        userSelect: 'none'
    },

    instaText: {
        fontWeight: '300',
        fontSize: '0.65em',
        marginTop: 5,
        cursor: 'pointer',
        color: colors.popBlue
    },

    icon: {
        marginRight: 10,
        color: colors.lightgreyDarker(0.3)
    },

    current: {
        transition: 'all 0.25s ease-out',
        color: colors.popBlue,
        fontWeight: '400'
    }
});