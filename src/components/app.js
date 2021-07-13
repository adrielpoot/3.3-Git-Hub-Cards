import React from 'react';
import CardList from './CardList';
import Form from './Form';

const testData = [{
    id: 5025309,
    name: "Jorge L Chuc Lopez",
    avatar_url: "https://avatars.githubusercontent.com/u/5025309?v=4",
    company: "GISoft"
},

{id: 25519322,
    name: "Jorge Chuc Lopez",
    avatar_url: "https://avatars.githubusercontent.com/u/25519322?v=4",
    company: "UACam"
},

{id: 25960217,
    name: "Jorge Luis Chuc Lopez",
    avatar_url: "https://avatars.githubusercontent.com/u/81385825?v=4",
    company: "ITCampeche"}
];


class App extends React.Component {render() {

    constructor(props) {
        super(props);
        this.state = {profiles[],};
    }

    addNewProfile = (profileData) => {console.log(profileData);this.setState(prevState => ({profiles: [...prevState.profiles, profileData]}));};
    return <div className="header">{this.props.title}
    <Card />
    <CardList profiles={this.state.profiles}/>
    <Form onSubmit={this.addNewProfile}/>
    </div>

export default App;
    
}
}
