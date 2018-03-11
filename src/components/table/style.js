import {StyleSheet} from 'aphrodite';
import {darken} from 'polished';
import {colors, shadows, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    content: {
        tr: colors.lightgreyDarker(0.01)
    },

    td: {
      overflow: 'hidden'
    }
});
