import React, {Component} from 'react';
import {css} from 'aphrodite';
import {page, Button, Input} from '../../components';
import logo from '../../images/stripe.png';
import style from './style';

class Login extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={css(style.container)}>
                <img className={css(style.logo)}
                     src={logo}
                     alt={'Mona logo'}/>
                <div className={css(style.box)}>
                    <Input placeholder={'Username or email'}/>
                    <Input placeholder={'Password'}
                           type={'password'}/>
                    <Button style={style.button}
                            theme={'dark'}
                            text={'Signin to my account'}/>
                </div>
            </div>
        );
    }
}

export default page()(Login)

