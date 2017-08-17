import {StyleSheet} from 'aphrodite';
import {colors, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    container: {
        display: 'flex',
        paddingLeft: '20vh',
        paddingRight: '20vh'
    },

    content: {
        flexGrow: 4,
        backgroundColor: 'green',
        height: '200px'
    },

    sidebar: {
        flexGrow: 1,
        backgroundColor: 'red'
    }
});