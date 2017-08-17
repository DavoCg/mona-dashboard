import React, {Component} from 'react';
import {css} from 'aphrodite';
import {mapDispatchToProps} from '../../utils';
import {page} from '../../components';
import {connect} from 'react-redux';
import style from './style';

class Home extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const {name} = this.props;
        return (
            <div>
                <p className={css(style.text)}>
                    {`Hello, ${name}`}
                </p>
            </div>
        );
    }
}

export default page((state) => ({
    name: state.user.name
}))(Home)