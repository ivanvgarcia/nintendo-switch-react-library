import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { games } from '../components/games';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            games: games,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render () {
        const { games, searchfield } = this.state;
        const filteredGames = games.filter(game => {
            return game.title.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <div className='header'>
                    <h1>My Nintendo Switch Library</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                </div>
                <CardList games={filteredGames}/>
            </div>
        );
    } 
}

export default App;