import {StyleSheet} from 'aphrodite';
import {opacify} from 'polished';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 30,
        marginBottom: 10,
        borderWidth: 0,
        borderRadius: 2,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: '0.9em',
        fontFamily: fontFamily,
        color: colors.blue,
        transition: 'all 0.2s ease-out',
        ':focus': {
            transition: 'all 0.2s ease-out'
        },
        ':hover': {
            backgroundColor: colors.lightgrey,
            transition: 'all 0.2s ease-out'
        }
    }
});