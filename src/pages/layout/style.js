import {StyleSheet} from 'aphrodite';
import {colors, fontFamily, shadows} from '../../constants/style';

export default StyleSheet.create({
    container: {
        display: 'flex',
        marginLeft: '15vw',
        marginRight: '15vw'
    },

    main: {
        flexGrow: 10
    },

    content: {
        height: 2000
    },

    sidebar: {
        flexGrow: 1
    }
});