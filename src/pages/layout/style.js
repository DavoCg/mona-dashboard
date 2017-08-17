import {StyleSheet} from 'aphrodite';
import {colors, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    container: {
        display: 'flex',
        marginLeft: '15vw',
        marginRight: '15vw'
    },

    content: {
        flexGrow: 10,
    },

    sidebar: {
        flexGrow: 1
    },

    top: {
        backgroundColor: 'red',
        height: 80
    }
});