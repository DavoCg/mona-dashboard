import {StyleSheet} from 'aphrodite';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    container: {
        display: 'flex',
        height: 200
    },

    header: {
        display: 'flex',
        alignItems: 'space-between',
        height: 120
    },

    image: {
        height: 100,
        width: 100
    }
});