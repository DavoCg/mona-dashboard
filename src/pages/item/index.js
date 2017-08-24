import React, {Component} from 'react';
import {css} from 'aphrodite';
import {page, Image, Table} from '../../components';
import {cs} from '../../constants/style';
import style from './style';

const ORDERS_HISTORY = [
    {id: 1, description: 'Description 1', price: 200, status: 'delivered'},
    {id: 2, description: 'Description 2', price: 200, status: 'waiting'},
    {id: 3, description: 'Description 3', price: 200, status: 'delivered'}
];

const METRICS = [
    {views: 3538, favorites: 466, purchases: 356, quantityAvailable: 56}
];


const LABELS = {
    views: 'views',
    quantityAvailable: 'Remaining quantity'
};

class Item extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={css(style.container)}>
                <div className={css(cs.box, style.content)}>
                    <p className={css(cs.upperText, style.title)}>Orders history</p>
                    <Table data={ORDERS_HISTORY}
                           labels={LABELS}/>
                    <p className={css(cs.upperText, style.title)}>Metrics</p>
                    <Table data={METRICS}
                           labels={LABELS}/>
                </div>
                <div className={css(cs.box, style.images)}>
                    <div style={{flexGrow: 2.06}}>
                        <Image/>
                    </div>
                    <div style={{flexGrow: 1}}>
                        <Image/>
                        <Image/>
                    </div>
                </div>
            </div>
        );
    }
}

export default page((state) => ({

}))(Item)