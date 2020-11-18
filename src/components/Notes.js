import React, { Component } from 'react'

export default class Notes extends Component {
    deleteNoteHandler = () => {
        this.props.deleteNote(this.props.noteNumber) 
    }
    editNoteHandler = () => {
        this.props.editNoteRequest(this.props.noteNumber)
    }
    render() {
        return (
            <div className='notesCard' >
            <h1>{this.props.noteNumber}. {this.props.noteTitle}</h1>
            <p>{this.props.noteDescription}</p>
            <div className="btns">
                <button onClick={this.editNoteHandler}>Edit</button>
                <button onClick={this.deleteNoteHandler}>Delete</button>
            </div>
        </div>
        )
    }
}