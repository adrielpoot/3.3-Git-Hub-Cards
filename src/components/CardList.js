import React from 'react';
import Card from './Card';

class CardList extends React.Component {
    constructor(props) {super(props);this.state = {profiles: testData,};}
    render() {
        return (
            <div>
                {this.props.profiles.map(profile => <Card key={profile.id}
            </div>
            );
            }
        }
export default CardList