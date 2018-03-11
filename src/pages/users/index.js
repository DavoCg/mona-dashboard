import React, {Component} from 'react';
import _ from 'lodash';
import {css} from 'aphrodite';
import {page, Table, Search} from '../../components';
import {cs} from '../../constants/style';
import style from './style';

const LABELS = {
  cardPicture: 'Card',
  firstname: 'First name',
  lastname: 'Last name',
};

const STYLES = {
  id: style.id,
  firstname: style.firstname,
  lastname: style.lastname,
  email: style.email,
  phone: style.phone,
  picture: style.picture,
  cardPicture: style.cardPicture,
  agentCard: style.agentCard,
  idCard: style.idCard,
  approved: style.approved,
} 

class Users extends Component {

    constructor(props){
        super(props);
        this.state = {
          search: '',
          orderBy: 'id',
          direction: 'asc'
        } 
    }
    
    componentDidMount(){
      const {actions} = this.props;
      return actions.user.fetchUsers();
    }
    
    filter(arr){
      const {search, orderBy, direction} = this.state;
      let copy = [...arr];
      
      if(search.length > 0){
        copy = copy.filter(x => {
          return x.firstname && x.firstname.toUpperCase().includes(search.toUpperCase()) 
            || x.lastname && x.lastname.toUpperCase().includes(search.toUpperCase())
            || x.email && x.email.toUpperCase().includes(search.toUpperCase())
            || x.agentCard && x.agentCard.toUpperCase().includes(search.toUpperCase())
            || x.idCard && x.idCard.toUpperCase().includes(search.toUpperCase())
            || x.phone && x.phone.toUpperCase().includes(search.toUpperCase())
        });
      }
      return _.orderBy(copy, orderBy, direction);
    }
    
    renderPicture(text){
      return text !== 'undefined' && <a href={text} target="_blank">image</a>
    }
    
    renderApproved(isApproved){
      return isApproved ? 'YES' : 'NO';
    }
    
    onChange = (e) => {
      return this.setState({search: e.target.value});
    }
    
    onOrderByChange = (e) => {
      return this.setState({orderBy: e.target.value});
    }
    
    onDirectionChange = (e) => {
      return this.setState({direction: e.target.value});
    }

    render(){
      const {users} = this.props;  
      const renders = {
        picture: this.renderPicture,
        cardPicture: this.renderPicture,
        approved: this.renderApproved,
      };
      
      return (
        <div>
          <div className={css(style.settings)}>
            <Search 
              value={this.state.search}
              onChange={this.onChange}/>
            <div className={css(style.settingSelectContainer)}>
              <p className={css(cs.upperText, style.title, style.topTitle)}>
                ORDER BY
              </p>
              <select 
                onChange={this.onOrderByChange}
                className={css(style.settingSelect)}>
                <option value={'id'}>{'ID'}</option>
                <option value={'firstname'}>{'First name'}</option>
                <option value={'lastname'}>{'Last name'}</option>
                <option value={'email'}>{'Email'}</option>
              </select>
            </div>
            <div className={css(style.settingSelectContainer)}>
              <p className={css(cs.upperText, style.title, style.topTitle)}>
                DIRECTIOn
              </p>
              <select 
                onChange={this.onDirectionChange}
                className={css(style.settingSelect)}>
                <option value={'asc'}>Asc</option>
                <option value={'desc'}>Desc</option>
              </select>
            </div>
          </div>
          <div className={css(cs.box, style.table)}>
              <p className={css(cs.upperText, style.title)}>
                Users
              </p>
              <Table data={this.filter(users)}
                     renders={renders}
                     style={STYLES}
                     labels={LABELS}/>
          </div>
        </div>
      );
    }
}

export default page((state) => ({
  users: state.user.all
}))(Users)