import React, {Component} from 'react';
import {TextWindow} from './TextWindow.js';
import Image from 'grommet/components/Image';
import Animate from 'grommet/components/Animate';

import Box from 'grommet/components/Box';

export class ScrollBar extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(i){
        //console.log(i);
        //this.props.onChange(name);
        this.props.onChange(i);
    }

    render() {

        // const pictures = ['http://www.petmd.com/sites/default/files/scared-kitten-shutterstock_191443322.jpg', 
        //                     'https://www.bluecross.org.uk/sites/default/files/assets/images/cat%20tick.jpg', 
        //                         'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg']
        
        const pictures = this.props.people;
        
        const listPictures = pictures.map((image, index) => 
            <Box direction='row' justify='start' align='center' wrap={true} pad='medium' margin='small'>
                <div style={{backgroundColor:'white'}} className='gradPics'>
                    <Image onClick={(e) => this.handleChange(index)} src={image.portrait} size='small' style={{height: '200px', width: '200px', margin: '10px'}} />
                    <h3 style={{margin:'auto'}}>{image.name}</h3>
                </div>
            </Box>
        );

        return (
            
            <div id="scrollBar">
                <div id='imagewrapper'>
                    {listPictures}
                </div>
            </div>
        );
    }
}