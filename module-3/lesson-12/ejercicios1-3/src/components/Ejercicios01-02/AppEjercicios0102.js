import React from 'react';
import '../../stylesheets/App.css';
import { Route, Switch } from 'react-router-dom';
import Clock from './Clock';
import NoClock from './NoClock';
import Nav from './Nav';
import Header from './Header';

class AppEjercicios0102 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      theme: 'light'
    };
    this.getTheme = this.getTheme.bind(this);
  }

  getTheme(value){
    if(value === 'dark'){
      this.setState({
        theme: 'dark'
      });
    } else {
      this.setState({
        theme: 'light'
      });
    };
  };

  componentDidMount(){
    const storedTheme = localStorage.getItem('theme');
     if(storedTheme !== ''){
       this.setState({
         theme: storedTheme
       })
     }
  }

  componentDidUpdate(){
    localStorage.setItem('theme', this.state.theme);
  }

  render() {
    return (
      <div className={`App-clock ${this.state.theme === 'dark' ? ' dark' : ' light'}`}>
        <Header
          getTheme={this.getTheme}
        />
        <div className="wrapper-clock">
          <Nav/>
          <Switch>
              <Route exact path="/" component={Clock} />
              <Route path="/relax" component={NoClock} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default AppEjercicios0102;