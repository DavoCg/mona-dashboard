import {StyleSheet} from 'aphrodite';
import {opacify} from 'polished';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    container: {
        display: 'flex',
        width: 500,
        height: 35,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.border,
        borderRadius: 2,
        paddingLeft: 15,
        fontSize: '0.9em',
        fontFamily: fontFamily,
        fontWeight: '300',
        color: colors.textGrey,
        transition: 'all 0.2s ease-out',
        userSelect: 'none',
        ':focus': {
            transition: 'all 0.2s ease-out',
        },
        ':hover': {
            transition: 'all 0.2s ease-out'
        }
    }
});