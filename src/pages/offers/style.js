import {StyleSheet} from 'aphrodite';
import {colors, fontFamily} from '../../constants/style';

export default StyleSheet.create({
  title: {
      fontSize: '0.90em'
  },

  settings: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  settingSelectContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '30px'
  },

  settingSelect: {
    marginLeft: '10px',
    height: '35px',
    width: '120px',
    borderRadius: '1px',
    fontFamily: fontFamily,
    fontSize: 14,
    fontWeight: '400',
    color: colors.textGrey
  },

  table: {
    marginTop: '10px'
  },

  id: {
    width: '25px'
  },

  description: {
    width: '200px'
  },

  city: {
    width: '80px'
  },

  district: {
    width: '80px'
  },

  street: {
    width: '80px'
  },
});
