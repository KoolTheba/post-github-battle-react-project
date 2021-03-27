import React from 'react'

export default class Popular extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            selectedLanguage: 'All'
        }
    }

    updateLanguage(selectedLanguage){
        this.setState({
            selectedLanguage
        })
    }


    render(){
        const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']
        return (
            <ul className='flex-center'>
                {languages.map(lang => (
                    <li key={lang}>
                        <button 
                          className='btn-clear nav-link' 
                          style={lang === this.state.selectedLanguage ? {color: 'rgb(187, 46, 31)'} : null}
                          onClick={() => this.updateLanguage(lang)}>
                          {lang}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}