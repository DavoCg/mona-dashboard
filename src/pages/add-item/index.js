import React, {Component} from 'react';
import {css} from 'aphrodite';
import {page, StepAdder} from '../../components';
import style from './style';

class AddItem extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <StepAdder/>
        );
    }
}

export default page((state) => ({

}))(AddItem)