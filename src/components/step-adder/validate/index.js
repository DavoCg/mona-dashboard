import React, {Component} from 'react';
import {css} from 'aphrodite';
import style from './style';


export default class Validate extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className={css(style.container)}>
               <p className={css(style.text)}>
                   {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores atque beatae dolorem dolores ducimus ea eaque earum eum fuga, id maxime nam neque reprehenderit sed sequi similique soluta voluptas!'}
               </p>
            </div>
        );
    }
}