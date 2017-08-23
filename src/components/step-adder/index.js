import React, {Component} from 'react';
import {css} from 'aphrodite';
import {Button, Modal, Image} from '../../components';
import style from './style';
import Progress from './progress';
import Summary from './summary';
import AddImage from './add-image';
import AddDescription from './add-description';
import AddPrice from './add-price';
import Validate from './validate';
import {cs} from '../../constants/style';
import {isOK, isSubmitable} from './utils';

export default class StepAdder extends Component {

    constructor(props){
        super(props);
        this.state = {
            active: 0,
            steps: [
                {name: 'Add picture'},
                {name: 'Add description'},
                {name: 'Add pricing'},
                {name: 'Validate'}
            ],
            form: {
                pictures: [],
                description: '',
                price: null
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
        return this.setState(state => ({form: {...state.form, pictures}}));
    }

    setDescription(description){
        return this.setState(state => ({form: {...state.form, description}}));
    }

    setPrice(price){
        return this.setState(state => ({form: {...state.form, price}}));
    }

    validate(){
        const {onValidate} = this.props;
        const {form} = this.state;
        return onValidate(form);
    }

    is(index){
        const {active} = this.state;
        return active === index;
    }

    render(){
        const {steps, active, form} = this.state;
        const {pictures, description, price} = form;

        return (
            <div className={css(style.container)}>
                <div className={css(cs.box, style.content)}>
                    <div>
                        <Progress active={active}
                                  steps={steps}/>
                        {this.is(0) && <AddImage pictures={pictures}
                                                 setPictures={pictures => this.setPictures(pictures)}/>}
                        {this.is(1) && <AddDescription description={description}
                                                       setDescription={description => this.setDescription(description)}/>}
                        {this.is(2) && <AddPrice price={price}
                                                 setPrice={price => this.setPrice(price)}/>}
                        {this.is(3) && <Validate/>}
                    </div>
                    <div className={css(style.footer)}>
                        <Button style={active === 0 && style.hidden}
                                onClick={() => this.onChange(-1)}
                                text={'Previous'}/>
                        {!this.is(3) && <Button disabled={!isOK(form, active)}
                                                onClick={() => this.onChange(1)}
                                                text={'next'}/>}
                        {this.is(3) && <Button disabled={!isSubmitable(form)}
                                               onClick={() => this.validate()}
                                               theme={'success'}
                                               text={'validate'}/>}
                    </div>
                </div>
                <div className={css(cs.box, style.summary)}>
                    <h4 className={css(style.title)}>{'Summary'}</h4>
                    <Summary description={description}
                             pictures={pictures}
                             price={price}/>
                </div>
            </div>
        );
    }
}