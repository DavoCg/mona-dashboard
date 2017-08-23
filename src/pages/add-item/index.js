import React, {Component} from 'react';
import {css} from 'aphrodite';
import {page, StepAdder} from '../../components';
import style from './style';

class AddItem extends Component {

    constructor(props){
        super(props);
    }

    onValidate(payload){
        console.log('payload', payload);
    }

    render(){
        return (
            <StepAdder onValidate={payload => this.onValidate(payload)}/>
        );
    }
}

export default page((state) => ({

}))(AddItem)