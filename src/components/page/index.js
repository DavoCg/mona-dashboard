import React from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../utils';

// todo named fn
export default (mapDispatchToState) => (component) => connect(mapDispatchToState, mapDispatchToProps)(component);