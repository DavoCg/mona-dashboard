import React from 'react';
import {css} from 'aphrodite';
import style from './style';
import ReactDOM from 'react-dom';
import Search from '../search';
import Button from '../button';


const account = (props) => {
    return (
        <Button onClick={props.logout}
                text={'SIGN OUT'}/>
    );
};

const openPop = (e, props, content) => {
    const node = ReactDOM.findDOMNode(e.target);
    const position = node.getBoundingClientRect();
    return props.open({popover: true, popoverNode: position, popoverContent: content});
};

export default (props) => (
    <div className={css(style.top)}>
        <Search/>
        <div className={css(style.icons)}>
            <i onClick={(e) => openPop(e, props)}
               className={css(style.icon) + ' icon-book-open'}/>
            <i onClick={(e) => openPop(e, props)}
               className={css(style.icon) + ' icon-bell'}/>
            <i onClick={(e) => openPop(e, props, account(props))}
               className={css(style.iconAccount) + ' icon-user'}/>
        </div>
    </div>
);
