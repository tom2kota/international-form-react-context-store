import React, {Component} from "react";
import LanguageContext from "../contexts/LanguageContext"

class LanguageSelector extends Component {
    static contextType = LanguageContext

    render() {
        console.log('LanguageSelector this.context:', this.context)
        return (
            <>
                <div className="ui stackable menu">

                    <div className="item">
                        <h2 className="ui header blue">
                            <a href="/">
                                <i className="large icons">
                                    <i className="home icon"/>
                                    <i className="corner blue world icon"/>
                                </i>
                                HOME
                            </a>
                        </h2>
                    </div>

                    <div className="right menu">
                        <div className="item" onClick={() => this.context.onLanguageChange('English')}>
                            <i className="flag gb"/>
                        </div>
                        <div className="item" onClick={() => this.context.onLanguageChange('Netherlandish')}>
                            <i className="flag nl"/>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default LanguageSelector