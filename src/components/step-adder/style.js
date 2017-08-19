import {StyleSheet} from 'aphrodite';
import {darken, opacify} from 'polished';
import {colors, fontFamily, shadows} from '../../constants/style';

export default StyleSheet.create({

    container: {
        display: 'flex',
        height: 400
    },

    title: {
        margin: 0,
        padding: 0,
        color: colors.textGrey,
        fontWeight: '400'
    },

    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 3,
        marginRight: 15
    },

    summary: {
        flexGrow: 1
    },

    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    hidden: {
        visibility: 'hidden'
    }
});