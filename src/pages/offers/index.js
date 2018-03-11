import React, {Component} from 'react';
import _ from 'lodash';
import {css} from 'aphrodite';
import {page, Table, Search} from '../../components';
import {cs} from '../../constants/style';
import style from './style';

const LABELS = {
  habitationType: 'Hab Type'
};

const STYLES = {
  id: style.id,
  description: style.description,
  city: style.city,
  district: style.district,
  street: style.street,
} 

class Offers extends Component {

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
      return actions.offer.fetchOffers();
    }
    
    filter(arr){
      const {search, orderBy, direction} = this.state;
      let copy = [...arr];
      
      if(search.length > 0){
        copy = copy.filter(x => {
          return x.description && x.description.toUpperCase().includes(search.toUpperCase())
            || x.city && x.city.toUpperCase().includes(search.toUpperCase())
            || x.district && x.district.toUpperCase().includes(search.toUpperCase())
            || x.street && x.street.toUpperCase().includes(search.toUpperCase())
        });
      }
      return _.orderBy(copy, (obj) => {
        if(orderBy === 'price' || orderBy === 'surface') return parseInt(obj[orderBy], 10)
        return obj[orderBy];
      }, direction);
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
    
    renderCoords = () => {
      return null;
    }
    
    renderOwnerPicture = () => {
      return null;
    }
    
    renderPictures = () => {
      return null;
    }

    render(){
      const {offers} = this.props;  

      console.log('offers', offers);
      
      const renders = {
        coords: this.renderCoords,
        ownerPicture: this.renderOwnerPicture,
        pictures: this.renderPictures
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
                <option value={'surface'}>{'Surface'}</option>
                <option value={'price'}>{'Price'}</option>
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
              <Table data={this.filter(offers)}
                     renders={renders}
                     style={STYLES}
                     labels={LABELS}/>
          </div>
        </div>
      );
    }
}

export default page((state) => ({
  offers: state.offer.all
}))(Offers)