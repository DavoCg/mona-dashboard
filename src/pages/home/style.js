import {StyleSheet} from 'aphrodite';
import {colors, fontFamily} from '../../constants/style';

export default StyleSheet.create({

    container: {

    },

    toggler: {
        display: 'flex',
        justifyContent: 'flex-end'
    },

    togglerChoice: {
        alignSelf: 'baseline',
        marginLeft: 25
    },

    active: {
        color: colors.popBlue,
        fontWeight: 400,
        fontSize: '0.90em'
    }

});