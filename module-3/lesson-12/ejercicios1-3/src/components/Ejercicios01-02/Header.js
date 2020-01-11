import React from 'react';
import { checkPropTypes } from 'prop-types';

const Header = props => {

    const getTheme = event => {
        const value = event.target.value;
        props.getTheme(value);
    }

    return(
        <header className="header-clock">
            <form>
                <div>
                    <input type="radio" id="light" name="theme" value="light" onChange={getTheme}/>
                    <label for="light"><i class="fas fa-sun"></i> / &nbsp;</label>
                </div>
                <div>
                    <label for="dark"><i class="fas fa-moon"></i></label>
                    <input type="radio" id="dark" name="theme" value="dark" onChange={getTheme}/>
                </div>
            </form>
        </header>
    )
}

export default Header;