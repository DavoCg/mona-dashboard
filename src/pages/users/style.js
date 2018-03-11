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

  firstname: {
    width: '100px'
  },

  lastname: {
    width: '100px'
  },

  email: {
    width: '200px'
  },

  phone: {
    width: '80px'
  },

  picture: {
    width: '60px'
  },

  cardPicture: {
    width: '60px'
  },

  agentCard: {
    width: '80px'
  },

  idCard: {
    width: '80px'
  },

  approved: {
    width: '80px'
  }
});
