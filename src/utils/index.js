import actions from '../actions';
import {bindActionCreators} from 'redux';

export const NOOP = () => ({});

export function mapDispatchToProps(dispatch){
    return {actions: getBound(actions, dispatch)};
}

function getBound(actions, dispatch){
    return Object.keys(actions).reduce((acc, curr) => {
        return (acc[curr] = bindActionCreators(actions[curr], dispatch), acc);
    }, {});
}