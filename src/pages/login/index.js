import React, {Component} from 'react';
import {css} from 'aphrodite';
import {page, Button, Input} from '../../components';
import logo from '../../images/stripe.png';
import style from './style';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
          email: 'admin@shatap.co',
          password: 'david'
        }
    }
    
    onClick = () => {
      const {actions} = this.props;
      return actions.user.login(this.state);
    }
    
    onChange = (name) => {
      return e => this.setState({[name]: e.target.value});
    }

    render(){
        return (
            <div className={css(style.container)}>
                <img className={css(style.logo)}
                     src={logo}
                     alt={'Mona logo'}/>
                <div className={css(style.box)}>
                    <Input onChange={this.onChange('email')}
                           value={this.state.email}
                           placeholder={'Email'}/>
                    <Input onChange={this.onChange('password')}
                           value={this.state.password}
                           placeholder={'Password'}
                           type={'password'}/>
                    <Button style={style.button}
                            onClick={this.onClick}
                            theme={'dark'}
                            text={'Signin to shatap dashboard'}/>
                </div>
            </div>
        );
    }
}

export default page()(Login)

