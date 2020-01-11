import React from 'react';
import '../../stylesheets/App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';


class AppEjercicio01 extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHeader(){
    return(
      <header>
        <Link to="/">
          <div className="tab tab1">
              <h2>Tab 1</h2>
          </div>
        </Link>
        <Link to="/tab2">
          <div className="tab tab2">
              <h2>Tab 2</h2>
          </div>
        </Link>
        <Link to="/tab3">
          <div className="tab tab3">
              <h2>Tab 3</h2>
          </div>
        </Link>
      </header>
    )
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        <main>
          <Switch>
            <Route exact path="/" component={Tab1} />
            <Route path="/tab2" component={Tab2} />
            <Route path="/tab3" component={Tab3} />
          </Switch>
        </main>

        
      </div>
    );
  }
}

export default AppEjercicio01;

