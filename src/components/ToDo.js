import React, { Component } from 'react'

class ToDo extends Component {
    state = {
        title: '',
        description: '',
        titleAlert: false,
        descriptionAlert: false
    }
    onChangeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    addNote = () => {
        if (this.state.title.length !== 0 && this.state.description.length !== 0) {
            this.props.noteData(this.state.title, this.state.description)
            this.setState({title: '', description: ''})
        } else if (this.state.title.length === 0 && this.state.description.length === 0) {
            this.setState({ titleAlert: true, descriptionAlert: true })
        } else if (this.state.title.length == 0) {
            this.setState({ titleAlert: true })
        } else if (this.state.description.length == 0) {
            this.setState({ descriptionAlert: true })
        }
    }
    elementFocused = e => {
        if (e.target.name == 'title') {
            this.setState({ titleAlert: false })
        }
        if (e.target.name == 'description') {
            this.setState({ descriptionAlert: false })
        }
    }
    render() {
        // let inputBoxStyling = 'textBoxStyling'
        // if (this.state.titleAlert) {
        //     inputBoxStyling += ' alertTrue'
        // } else {
        //     inputBoxStyling = inputBoxStyling.replace(' alertTrue', '')
        // }
        // let textareaStyling = 'textBoxStyling'
        // if (this.state.descriptionAlert) {
        //     textareaStyling += ' alertTrue'
        // } else {
        //     textareaStyling = textareaStyling.replace(' alertTrue', '')
        // }
        return (
            <div className="todoContainer">
                <h1>To-Do Notes</h1>
                <div className="addTodo">
                    <input type="text" onFocus={this.elementFocused} className={`textBoxStyling ${this.state.titleAlert ? 'alertTrue' : ''}`} onChange={this.onChangeHandler} name="title" placeholder='Give It A Title' value={this.state.title} />
                    <textarea type="text" onFocus={this.elementFocused} className={`textBoxStyling ${this.state.descriptionAlert ? 'alertTrue' : ''}`} onChange={this.onChangeHandler} name="description" placeholder='Description Of Your Note' value={this.state.description} />
                    <button onClick={this.addNote} >Add</button>
                </div>
            </div>
        )
    }
}
export default ToDo