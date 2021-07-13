import React from 'react';
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

class Card extends React.Component {

    constructor(props) {
        super(props);this.state = {
            userName: ''};}handleSubmit = event => {
                event.preventDefault();console.log(this.state.userName);
                const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
                console.log(resp.data);
            };

    render() {
        return (<div className="github-profile">
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Nombre de usuario de GitHub"onChange={
                event => this.setState({userName: event.target.value})} />
                <button>Agregar tarjeta</button>
                </form>
        </div>
        );
        }
    }