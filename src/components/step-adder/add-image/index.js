import React, {Component} from 'react';
import {css} from 'aphrodite';
import {Image, Modal} from '../../../components';
import style from './style';

const choices = [
    'https://scontent-cdg2-1.cdninstagram.com/t51.2885-19/s150x150/12599183_1599275403726431_627841935_a.jpg',
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
].map(x => ({source: x}));



export default class AddImage extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false,
            current: null
        }
    }

    setPictures(picture){
        const {setPictures, pictures} = this.props;
        const {current} = this.state;
        const pics = [].concat(pictures);
        pics[current] = picture;
        this.setState({open: false});
        return setPictures(pics)
    }

    deletePicture(index){
        const {setPictures, pictures} = this.props;
        const pics = [].concat(pictures);
        pics[index] = null;
        return setPictures(pics)
    }

    picture(picture){
        return <img className={css(style.modalImage)}
                    onClick={() => this.setPictures(picture)}
                    src={picture.source}
                    alt={'image'}/>;
    }

    render(){
        const {open} = this.state;
        const {pictures} = this.props;

        return(
            <div>
                <div className={css(style.container)}>
                    <div style={{flexGrow: 2.02}}>
                        <Image source={pictures[0] && pictures[0].source}
                               onDelete={() => this.deletePicture(0)}
                               onClick={() => this.setState({open: true, current: 0})}/>
                    </div>
                    <div style={{flexGrow: 1}}>
                        <Image source={pictures[1] && pictures[1].source}
                               onDelete={() => this.deletePicture(1)}
                               onClick={() => this.setState({open: true, current: 1})}/>

                        <Image source={pictures[2] && pictures[2].source}
                               onDelete={() => this.deletePicture(2)}
                               onClick={() => this.setState({open: true, current: 2})}/>
                    </div>
                </div>
                <Modal onClose={() => this.setState({open: false})}
                       open={open}>
                    <div onClick={e => e.stopPropagation()}
                         className={css(style.modalContainer)}>
                        {choices.map((image) => this.picture(image))}
                    </div>
                </Modal>
            </div>
        );
    }
}