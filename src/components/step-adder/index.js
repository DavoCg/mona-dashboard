import React, {Component} from 'react';
import {css} from 'aphrodite';
import {Button, Modal, Image} from '../../components';
import style from './style';
import Progress from './progress';
import Summary from './summary';
import AddImage from './add-image';
import {cs} from '../../constants/style';

export default class StepAdder extends Component {

    constructor(props){
        super(props);
        this.state = {
            active: 0,
            modalOpen: false,
            steps: [
                {name: 'Add picture'},
                {name: 'Add description'},
                {name: 'Add pricing'},
                {name: 'Validate'}
            ],
            form: {
                pictures: [],
                description: '',
                price: 0
            }
        }
    }

    onChange(n){
        return this.setState(state => {
            const l = state.steps.length;
            let active = state.active + n;
            if(active < 0) active = 0;
            else if(active > l - 1) active = l - 1;
            return {active};
        })
    }

    setPictures(pictures){
        return this.setState((state) => ({form: {...state.form, pictures}}));
    }

    setDescription(description){
        return this.setState((state) => ({form: {...state.form, description}}));
    }

    setPrice(price){
        return this.setState((state) => ({form: {...state.form, price}}));
    }

    canContinue(){
        const {active, form} = this.state;
        const {pictures, description, price} = form;
        
        const conditions = {
            0: () => pictures.length > 0,
            1: () => description.length > 0,
            2: () => price > 0,
            3: () => true
        };
        return conditions[active]();
    }

    render(){
        const {steps, active, modalOpen, form} = this.state;
        const {pictures, description, price} = form;
        const isDisabled = !this.canContinue();

        return (
            <div className={css(style.container)}>
                <div className={css(cs.box, style.content)}>
                    <div>
                        <h3 className={css(style.title)}>{steps[active].name}</h3>
                        <Progress active={active}
                                  steps={steps}/>

                        <AddImage/>

                    </div>
                    <div className={css(style.footer)}>
                        <Button style={active === 0 && style.hidden}
                                onClick={() => this.onChange(-1)}
                                text={'Previous'}/>
                        <Button style={active === steps.length - 1 && style.hidden}
                                disabled={isDisabled}
                                onClick={() => this.onChange(1)}
                                text={'next'}/>
                    </div>
                </div>
                <div className={css(cs.box, style.summary)}>
                    <h3 className={css(style.title)}>{'Summary'}</h3>
                    <Summary description={description}
                             pictures={pictures}
                             price={price}/>
                </div>
                <Modal onClose={() => this.setState({modalOpen: false})}
                       open={modalOpen}/>
            </div>
        );
    }
}