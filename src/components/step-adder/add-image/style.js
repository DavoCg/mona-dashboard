import {StyleSheet} from 'aphrodite';
import {darken, opacify} from 'polished';
import {colors, fontFamily, shadows} from '../../../constants/style';

export default StyleSheet.create({
    container: {
        display: 'flex'
    },

    modalContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: 600,
        height: 600,
        overflow: 'auto',
        'hover:': {
            cursor: 'default'
        }
    },

    modalImage: {
        width: '49%',
        height: 'auto',
        display: 'block',
        marginBottom: 10
    }


});