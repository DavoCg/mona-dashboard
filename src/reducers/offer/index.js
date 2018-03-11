import constants from '../../constants';
import * as modifiers from './modifiers';
import exporter from '../exporter';

const initialState = {
    all: []
};

const handlers = {
    [constants.LIST_OFFERS_SUCCESS]: modifiers.onListOffersSuccess
};

export default exporter(initialState, handlers);
