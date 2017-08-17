import React from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../utils';

export default (mapDispatchToState) => (component) => connect(mapDispatchToState, mapDispatchToProps)(component);