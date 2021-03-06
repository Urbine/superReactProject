import React, {Component} from 'react';
import Animate from 'grommet/components/Animate';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';

export class TextWindow extends Component {
    render () { 

        
        // class Grads{
        //     constructor(name, desc, team, hobby, portrait){
        //         this.name = name;
        //         this.desc = desc;
        //         this.team = team;
        //         this.hobby = hobby;
        //         this.portrait = portrait;
        //     }
        // }

        
        // var people = [
        //     new Grads('Amrit', 'Five words to describe me', 'team', 'hobby', 'http://www.petmd.com/sites/default/files/scared-kitten-shutterstock_191443322.jpg'),
        //     new Grads('Holly', 'Five words to describe me', 'blue', 'book', 'https://www.bluecross.org.uk/sites/default/files/assets/images/cat%20tick.jpg'),
        //     new Grads('Gaurav', 'Five words to describe me', 'red', 'dancing', 'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg')
        // ]
        

        /*
        var listPeople = people.map((person, i) =>

            <div id={i} className = "people">
                <h1>{person.name}</h1>
                <h2>{person.team}</h2>  
                <h3>{person.desc}</h3>
                <h3>{person.hobby}</h3> 
            </div>
        
        );
        */

    let renderPerson = (personName) => {
        let person = this.props.people.find(x => x.name === this.props.selectedPerson);
        return <Box className="people" style={{backgroundColor:'blue'}}>
                <div style={{width:'40%', margin:'auto'}}>
                    <h1>{person.name}</h1>
                    <h2>{person.team}</h2>  
                    <h3>{person.desc}</h3>
                    <h3>{person.hobby}</h3> 
                </div>
                </Box>

            // return <Card colorIndex='light-2' contentPad='large' thumbnail={person.portrait} label={person.team} heading={person.name} description={person.desc} />
    }
        return(
            <Box id='textWindow' >
                <Animate enter={{animation: 'slide-left', duration: '1000', delay: '2s'}}>
                    <h1>{this.props.welcome}</h1>
                </Animate>

                <Animate enter={{animation:'fade', duration: '1000', delay:'2s'}}>
                    {this.props.selectedPerson && renderPerson(this.props.selectedPerson)}
                </Animate>
            </Box>
        );
    }
} 