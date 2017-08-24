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
        fontSize: '0.9em',
        userSelect: 'none',
        marginBottom: 15
    },

    content: {
        display: 'flex',
        alignSelf: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight: 15,
        width: '70%',
        transition: 'all 0.2s ease-out'
    },

    summary: {
        width: '30%',
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