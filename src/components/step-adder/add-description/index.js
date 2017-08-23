import React, {Component} from 'react';
import {css} from 'aphrodite';
import style from './style';


export default class AddDescription extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    setDescription(e){
        const {setDescription} = this.props;
        return setDescription(e.target.value);
    }

    render(){
        const {description} = this.props;
        return(
            <textarea className={css(style.input)}
                      onChange={(e) => this.setDescription(e)}
                      value={description}
                      placeholder={'Add your description here'}
                      type={'text'}/>
        );
    }
}