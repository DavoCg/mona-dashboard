import {StyleSheet} from 'aphrodite';
import {opacify} from 'polished';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    container: {
        display: 'flex',
        width: 500,
        height: 35,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: colors.border,
        borderRadius: 2,
        paddingLeft: 15,
        fontSize: '0.9em',
        fontFamily: fontFamily,
        color: colors.textGrey,
        boxShadow: shadows[1],
        transition: 'all 0.2s ease-out',
        ':focus': {
            transition: 'all 0.2s ease-out',
        },
        ':hover': {
            transition: 'all 0.2s ease-out'
        }
    }
});