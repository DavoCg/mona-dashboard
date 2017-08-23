import {StyleSheet} from 'aphrodite';
import {lighten} from 'polished';
import {colors, fontFamily} from '../../constants/style';

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.blue,
        backgroundImage: `linear-gradient(to top, ${lighten(0.05, colors.blue)} 0%, ${colors.blue} 100%)`,
        height: '100vh',
        width: '100vw'
    },

    logo: {
        height: '5vh',
        minHeight: '5vh',
        marginBottom: 30
    },

    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '20vw',
        minWidth: '300px',
        backgroundColor: colors.white,
        borderRadius: 2,
        padding: 15
    },

    button: {
        marginTop: 15,
        width: '92%'
    }
});