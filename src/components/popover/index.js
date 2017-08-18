import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {css} from 'aphrodite';
import style from './style';

export default class Popover extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {onHide} = this.props;
        return document.body.addEventListener('click', onHide);
    }

    render(){
        const {open, node, content} = this.props;

        const customStyle = {
            top: node.top + node.height,
            left: node.left - 285 + node.width
        };

        return (
            <div style={customStyle}
                 className={css(style.container, !open && style.close)}>
                <div className={css(style.content)}>
                    {content}
                    <div className={css(style.under)}/>
                    <div className={css(style.over)}/>
                </div>
            </div>
        );
    }
}
