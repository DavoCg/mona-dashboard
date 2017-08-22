import {StyleSheet} from 'aphrodite';
import {darken, opacify} from 'polished';
import {colors, fontFamily, shadows} from '../../constants/style';

export default StyleSheet.create({

    container: {
        display: 'flex'
    },

    title: {
        margin: 0,
        padding: 0,
        color: colors.textGrey,
        fontWeight: '400',
        userSelect: 'none',
        marginBottom: 15
    },

    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 3,
        marginRight: 15
    },

    summary: {
        flexGrow: 1,
        alignSelf: 'flex-start'
    },

    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15
    },

    hidden: {
        visibility: 'hidden'
    }
});