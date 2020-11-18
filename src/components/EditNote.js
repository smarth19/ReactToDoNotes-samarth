import React, { Component } from 'react'

export default class EditNote extends Component {
    state = {
        title: this.props.noteToEdit.title,
        description: this.props.noteToEdit.description,
        opacityZero: false
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    updateNote = () => {
        this.setState({opacityZero: true})
        this.props.updateNote(this.state.title, this.state.description)
    }
    closeEditNoteModal = () => {
        this.setState({opacityZero: true})
        this.props.closeEditNoteModal()
    }
    render() {
        return (
            <div className={`editNoteContainer ${this.state.opacityZero ? 'editNoteContainerZeroOpacity' : ''}`}>
                <div className="editNote">
                    <h1>Edit Your Note  <span onClick={this.closeEditNoteModal} ><i className="fas fa-times"></i></span> </h1>
                    <input type="text" className='textBoxStyling' placeholder='Edit Title' onChange={this.onChange} name='title' value={this.state.title} />
                    <textarea type="text" className='textBoxStyling' placeholder='Edit Desrcription' onChange={this.onChange} name='description' value={this.state.description} />
                    <button onClick={this.updateNote}>Update</button>
                </div>
            </div>
        )
    }
}
