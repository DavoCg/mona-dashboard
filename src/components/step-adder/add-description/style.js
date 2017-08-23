import {StyleSheet} from 'aphrodite';
import {darken, opacify} from 'polished';
import {colors, fontFamily, shadows} from '../../../constants/style';

export default StyleSheet.create({
    input: {
        width: '98%',
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.border,
        borderRadius: 2,
        paddingLeft: 15,
        fontSize: '0.9em',
        fontFamily: fontFamily,
        fontWeight: '300',
        color: colors.textGrey,
        userSelect: 'none'
    }
});