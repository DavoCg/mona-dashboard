import React from 'react';
import {css} from 'aphrodite';
import style from './style';

export default (props) => (
    <div onClick={props.onClick}
         className={css(style.container)}>
        <div className={css(style.content)}>
            {!props.source && <i className={css(style.icon) + ' icon-picture'}/>}
            {props.source && <img className={css(style.image)} src={props.source} alt={'image'}/>}
            {props.onDelete && props.source && <i onClick={(e) => {e.stopPropagation(); props.onDelete()}}
                                                  className={css(style.iconTrash) + ' icon-trash'}/>}
        </div>
    </div>
);