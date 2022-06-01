import React from "react"
import { ThemeConsumer } from "../contexts/theme"

export default class Nav extends React.Component {
    render(){
        return (
            <ThemeConsumer>
                {({ theme, toggleTheme}) => (
                    <nav className="row space-between">
                        <button
                            style={{ fontSize: 30}}
                            className="btn-clear"
                            onClick={toggleTheme}
                        >
                        {theme === 'light' ? '🔦' : '💡'}
                        </button>
                    </nav>
                )}
            </ThemeConsumer>
        )
    }
}