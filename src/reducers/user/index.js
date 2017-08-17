import constants from '../../constants';
import * as modifiers from './modifiers';
import exporter from '../exporter';

const initialState = {
    logged: true,
    name: 'Dave'
};

const handlers = {
    [constants.RESET]: () => initialState
};

export default exporter(initialState, handlers);