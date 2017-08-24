import {StyleSheet} from 'aphrodite';
import {colors, fontFamily} from '../../constants/style';

export default StyleSheet.create({

    container: {
        display: 'flex'
    },

    images: {
        display: 'flex',
        alignSelf: 'flex-start',
        width: '30%'
    },

    content: {
        width: '70%',
        marginRight: 15
    },

    title: {
        fontSize: '0.90em'
    }
});