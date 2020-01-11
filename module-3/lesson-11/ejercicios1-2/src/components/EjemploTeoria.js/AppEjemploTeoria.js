import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Child from './Child';

class AppEjemploTeoria extends React.Component {
    constructor(props) {
        super(props);
    
        this.babyEmoji = '👶🏽';
    }
  
    render() {
        return (
            <div>
                <header>
                <nav>
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/child/1">Child 1</Link>
                    </li>
                    <li>
                        <Link to="/child/2">Child 2</Link>
                    </li>
                    <li>
                        <Link to="/child/3">Child 3</Link>
                    </li>
                    </ul>
                </nav>
                </header>
                <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route path="/child/:id" component={Child} /> */}
                    <Route
                        path="/child/:id"
                        render={routerProps => (
                            <Child match={routerProps.match} babyemoji={this.babyEmoji} />
                        )}
                    />
                </Switch>
                </main>
            </div>
        );
    }
}

export default AppEjemploTeoria;