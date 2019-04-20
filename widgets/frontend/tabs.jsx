import React from 'react';
import Tab from './tab';

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: 0
        }
        this.createTabs = this.createTabs.bind(this);
    }

    // changeColor(e){
    //     e.currentTarget
    // }

    createTabs(){
        // debugger
        return(
                                            /// the i here is the index for the map
            this.props.content.map( ({title, content}, i) => {
                return (
                    <ul key={i}>
                        <h1>
                        {title}</h1>

                        <Tab title={title} content={content} />
                    </ul>
                )
            })
        ) 
    }

    render(){
        // debugger;
        return(
            <div>
                <h1>Tabs go here!</h1>
                {this.createTabs()}
            </div>
        )
    }
}

export default Tabs;