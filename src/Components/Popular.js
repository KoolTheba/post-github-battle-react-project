import React from 'react'
import PropTypes from 'prop-types'
import { fetchPopularRepos } from '../utils/api'
function LanguagesNav ({selected, onUpdateLanguage}){
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
        <ul className='flex-center'>
            {languages.map(lang => (
                <li key={lang}>
                    <button 
                      className='btn-clear nav-link' 
                      style={lang === selected ? {color: 'rgb(187, 46, 31)'} : null}
                      onClick={() => onUpdateLanguage(lang)}>
                      {lang}
                    </button>
                </li>
            ))}
        </ul>
    )
}

LanguagesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
}

export default class Popular extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            selectedLanguage: 'All',
            repos: null,
            error: null
        }

        this.updateLanguage = this.updateLanguage.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }

    componentDidMount(){
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage(selectedLanguage){
        this.setState({
            selectedLanguage,
            error: null,
            repos: null
        })

        fetchPopularRepos(selectedLanguage)
            .then(repos => {
                this.setState({
                    repos,
                    error: null
                })
            })
            .catch(() => {
                this.setState({
                    error: `There was an error fetching the repositories of ${selectedLanguage}`
                })
            })
    }

    isLoading(){
        return this.state.repos === null && this.state.error === null
    }

    render(){
        const {selectedLanguage, repos, error} = this.state

        return (
            <React.Fragment>
                <LanguagesNav 
                    selected={selectedLanguage} 
                    onUpdateLanguage={this.updateLanguage}
                />
                {this.isLoading() && <p>Loading...</p>}

                {error && <p>{error}</p>}

                {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
            </React.Fragment>
        )
    }
}