import React from 'react';
import {css} from 'aphrodite';
import style from './style';
import ReactDOM from 'react-dom';

const openPop = (e, props) => {
    const node = ReactDOM.findDOMNode(e.target);
    const position = node.getBoundingClientRect();
    return props.open({popover: true, popoverNode: position});
};

export default (props) => (
    <div className={css(style.top)}>
        <i onClick={(e) => openPop(e, props)}
           className={css(style.icon) + ' icon-book-open'}/>
        <i onClick={(e) => openPop(e, props)}
           className={css(style.icon) + ' icon-bell'}/>
        <i onClick={(e) => openPop(e, props)}
           className={css(style.iconAccount) + ' icon-user'}/>
    </div>
);
