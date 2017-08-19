import {StyleSheet} from 'aphrodite';
import {colors, fontFamily, shadows} from '../../constants/style';

export default StyleSheet.create({
    container: {
        display: 'flex',
        marginLeft: '15vw',
        marginRight: '15vw'
    },

    main: {
        flexGrow: 8
    },

    content: {
        paddingTop: 30
    },

    sidebar: {
        flexGrow: 1
    }
});