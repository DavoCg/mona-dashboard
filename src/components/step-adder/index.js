import React, {Component} from 'react';
import {css} from 'aphrodite';
import {Button} from '../../components';
import style from './style';
import Progress from './progress';
import {cs} from '../../constants/style';

export default class StepAdder extends Component {

    constructor(props){
        super(props);
        this.state = {
            active: 0,
            steps: [
                {name: 'Add picture'},
                {name: 'Add description'},
                {name: 'Add pricing'}
            ]
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

    render(){
        const {steps, active} = this.state;

        return (
            <div className={css(style.container)}>
                <div className={css(cs.box, style.content)}>
                    <div>
                        <h3 className={css(style.title)}>{'Choose picture'}</h3>
                        <Progress active={active}
                                  steps={steps}/>
                    </div>

                    <div className={css(style.footer)}>
                        <Button style={active === 0 && style.hidden}
                                onClick={() => this.onChange(-1)}
                                text={'Previous'}/>
                        <Button style={active === steps.length - 1 && style.hidden}
                                onClick={() => this.onChange(1)}
                                text={'next'}/>
                    </div>
                </div>
                <div className={css(cs.box, style.summary)}>
                    <h3 className={css(style.title)}>{'Summary'}</h3>
                </div>
            </div>
        );
    }
}