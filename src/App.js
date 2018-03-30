import React, { Component } from 'react';
import {Core, Stats} from './Core.js';
import './style.css';

class Thing extends Component {
    constructor (props){
        super(props);
        this.state = {thing: this.props.thing}
    }

    componentDidMount(){
        Stats.registerListener(this.props.listener, (val) => {
            this.setState({
                thing: val
            });
        });
    }

    render (){
        return <li><a className="subheader"><h6>{this.props.text}: {this.state.thing}</h6></a></li>
    }
}

class Statistics extends Component {
    render(){
        return (
            <ul id="stats" className="sidenav sidenav-fixed">
                <li><h5>Your stuff: </h5></li>
                <Thing text="Money" thing={Stats.money} listener="money"></Thing>
                <Thing text="Bacon" thing={Stats.bacon} listener="bacon"></Thing>
                <Thing text="Wheat" thing={Stats.wheat} listener="wheat"></Thing>
                <Thing text="Rape" thing={Stats.rape} listener="rape"></Thing>
                <Thing text="Bought pigs" thing={Stats.boughtPigs} listener="boughtPigs"></Thing>
                <Thing text="Fed pigs" thing={Stats.fedPigs} listener="fedPigs"></Thing>
                <Thing text="Wheat fields" thing={Stats.wheatFields} listener="wheatFields"></Thing>
                <Thing text="Rape fields" thing={Stats.rapeFields} listener="rapeFields"></Thing>
                <Thing text="Raw bacon" thing={Stats.rawBacon} listener="rawBacon"></Thing>                                                    
                <Thing text="Oil" thing={Stats.oil} listener="oil"></Thing>                                                                                                                        
            </ul>
        )
    }
}

class Settings extends Component {
    render(){
        return (
            <div id="settings">
                <div className="card-panel">
                    <h4>Credits</h4>
                    <h6>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></h6>
                </div>
            </div>
        )
    }
}

class Machine extends Component {
    render(){
        return (
            <div id="machine">
                <div className="card-panel center">
                    <i className="material-icons medium turning">settings</i>
                    <i className="material-icons turning">settings</i>                    
                    <h5>Machine is under construction</h5>                  
                </div>
            </div>
        )
    }
}

class Button extends Component {
    render(){
        return (
            <button className={`${this.props.big ? `btn-large` : `btn`} waves-effect waves-light red`} onClick={this.props.onClick}>
                {this.props.text}
            </button>
        )   
    }
}

class Shop extends Component {
    render(){
        return (
            <div id="shop">
                <div className="card-panel">
                    <div className="row center">
                        <h5>Shop</h5>
                    </div>
                    <div className="row">
                        <div className="col s12 m6 l4">
                            <Button text="buy wheat field" onClick={() => {Core.buyWheatField()}}/>
                        </div>
                        <div className="col s12 m6 l4">
                            <Button text="buy rape field" onClick={() => {Core.buyRapeField()}}/>                            
                        </div>
                        <div className="col s12 m6 l4">
                            <Button text="buy pig" onClick={() => {Core.buyPig()}}/>                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Game extends Component {
    render() {
        return (
            <div id="game">
                <div className="card-panel">
                    <div className="center">
                        <h5>Buisness</h5>
                        <Button text="work" big onClick={() => {Core.work()}}/>
                        <span> or </span>
                        <Button text="sell bacon" big onClick={() => {Core.sellBacon()}}/>                        
                    </div>
                </div>

                <div className="card-panel">
                    <div className="center">
                        <h5>Farm</h5>
                        <div className="row">
                            <div className="col s6">
                                <Button text="harvest wheat" onClick={() => {Core.harvestWheat()}}/>
                                <br/>
                                <br/>
                                <Button text="harvest rape" onClick={() => {Core.harvestRape()}}/>    
                            </div>

                            <div className="col s6">
                                <Button text="feed pig" big onClick={() => {Core.feedPig()}}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-panel">
                    <div className="center">
                        <h5>Bacon</h5>
                        <div className="row">
                            <div className="col s6">
                                <Button text="make oil" onClick={() => {Core.makeOil()}}/>
                                <br/>
                                <br/>
                                <Button text="make raw bacon" onClick={() => {Core.makeRawBacon()}}/>    
                            </div>

                            <div className="col s6">
                                <Button text="fry bacon" big onClick={() => {Core.fryBacon()}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Navbar extends Component {
    render() {
        return (
            <nav className="nav-extended red">
                <div className="nav-wrapper">
                    <a className="brand-logo center">e-becon</a>
                    <a href="#" data-target="stats" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a className="active" href="#game">Game</a></li>
                        <li className="tab"><a href="#shop">Shop</a></li>
                        <li className="tab"><a href="#machine">Machine</a></li>                        
                        <li className="tab"><a href="#settings">Settings</a></li>
                    </ul>
                </div>
            </nav>
        )   
    }
}

class CookieInfo extends Component {
    render(){
        return(
            <div className="center" id="cookie-info">
                <div className="card-panel">
                    <span>By playing e-becon you accept using cookies (don't worry, we are only storing your save there)</span>
                    <br/>
                    <button className="btn-floating black waves-effect waves-light" onClick={()=>{document.querySelector(`#cookie-info`).classList.add(`close`); setTimeout(() => {document.querySelector(`#cookie-info`).style = `display: none;`}, 490)}}><i className="material-icons">close</i></button>
                </div>
            </div>
        )
    }
}

class App extends Component {
  render() {
    return (
      <div>
        <header>
            <Navbar />
            <Statistics />
        </header>
        <main>
            <div className="container">
                <Game />
                <Shop />
                <Machine />
                <Settings />
            </div>
        </main>
        <footer>
            <CookieInfo />
        </footer>      
      </div>
    );
  }
}

export default App;