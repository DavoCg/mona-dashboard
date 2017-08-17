import {StyleSheet} from 'aphrodite';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    container: {
        padding: 15
    },

    header: {
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
    }
});