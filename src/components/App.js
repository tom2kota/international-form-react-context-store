import React, {Component} from 'react';
import UserCreate from "./UserCreate";

import {LanguageStore} from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends Component {

    render() {
        console.log('App state:', this.state);
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector/>

                    <ColorContext.Provider value="teal">
                        <UserCreate/>
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App;
