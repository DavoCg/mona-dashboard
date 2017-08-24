import React, {Component} from 'react';
import {css} from 'aphrodite';
import {page, Card} from '../../components';
import {cs} from '../../constants/style';
import style from './style';

const ITEMS =  [
    'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/20905009_353190005118729_6556487922051186688_n.jpg',
    'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/20968836_227825191077572_723722141362552832_n.jpg',
    'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e15/20766408_1942848852671289_6101445276730392576_n.jpg',
    'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/20590301_1458196560883063_8249039438533885952_n.jpg',
    'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/e35/20582960_1828216584159868_8188990388371980288_n.jpg',
    'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/20479150_1839300806384475_2819652588239060992_n.jpg',
    'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/20213789_678683588993185_4502878966217965568_n.jpg',
    'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/20393943_255124145002775_5671951055391293440_n.jpg',
    'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/s640x640/e15/20347156_1515449878493320_2129014799000928256_n.jpg',
    'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/20184630_882446988570710_8466404735497273344_n.jpg',
    'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/20180513_666599596871633_2250268005009195008_n.jpg',
    'https://scontent-cdg2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/20181387_135766190346774_7214048836702961664_n.jpg'
].map((x, i) => ({pictures: [x], id: i, price: 290, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi atque debitis enim fugiat ipsa maxime voluptates!'}));


class Home extends Component {

    constructor(props){
        super(props);
    }

    navigate(id){
        const {actions} = this.props;
        return actions.navigation.push(`/items/${id}`);
    }

    render(){
        return (
            <div className={css(style.container)}>
                <div className={css(style.toggler)}>
                    <p className={css(cs.upperText, style.togglerChoice, style.active)}>All</p>
                    <p className={css(cs.upperText, style.togglerChoice)}>On Sale</p>
                    <p className={css(cs.upperText, style.togglerChoice)}>Sold</p>
                </div>
                <div className={'row'}>
                    {ITEMS.map(x => <Card data={x}
                                          onClick={() => this.navigate(x.id)}/>)}
                </div>
            </div>
        );
    }
}

export default page((state) => ({
    name: state.user.name
}))(Home)