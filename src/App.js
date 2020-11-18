import React, { Component } from 'react'
// import Samarth from './components/Samarth'
// import Forms from './components/Forms'
import Navbar from './components/Navbar'
import ToDo from './components/ToDo'
import Note from './components/Notes'
import EditNote from './components/EditNote'

export default class App extends Component {
  state = {
    notes: [],
    editNote: false,
    noteToEdit: null,
  }
  // Receiving Data from ToDo Component for the new note to be added
  noteData = (title, description) => {
    let newNote = {
      title: title,
      description: description
    }
    let updatedState = [...this.state.notes, newNote]
    this.setState({ notes: updatedState })
  }
  //Deleting a note
  deleteNote = (noteIndex) => {
    let allNotes = [...this.state.notes]
    let actualIndex = noteIndex - 1
    allNotes.splice(actualIndex, 1)
    this.setState({ notes: allNotes })
  }
  // Updating Note & Closing Edit Note Modal
  updateNote = (editedTitle, editedDescription) => {
    let updatedNote = {
      title: editedTitle,
      description: editedDescription
    }
    let allNotes = [...this.state.notes]
    console.log(allNotes);
    allNotes.splice(this.state.noteToEdit.index, 1, updatedNote)
    console.log(allNotes);
    this.setState({ notes: allNotes })
    setTimeout(() => {
      this.setState({ editNote: false, noteToEdit: null })
    }, 350)
  }
  // Handling Request For the Note To Be Edited And displaying Edit Note Modal
  editNoteRequest = (noteIndex) => {
    this.setState({
      noteToEdit: {
        index: [noteIndex - 1],
        note: this.state.notes[noteIndex - 1]
      }, editNote: true
    })
  }
  // Handling Request to close Edit note modal
  closeEditNoteModal = () => {
    setTimeout(() => {
      this.setState({ editNote: false, noteToEdit: null })
    }, 350)
  }
  render() {
    // Mapping All The Notes which are dynamically added to the state with the Note(card) Component if there are else showing an alert that there aren't any
    let { notes } = this.state;
    let mappingNotes;
    if (notes.length !== 0) {
      mappingNotes = notes.map((note, index) => {
        return <Note deleteNote={this.deleteNote} editNoteRequest={this.editNoteRequest} noteNumber={index + 1} key={index} noteTitle={note.title} noteDescription={note.description} />
      })
    } else {
      mappingNotes = <h1>NO NOTE YET, MAKE ONE</h1>
    }

    return (
      <React.Fragment>
        <Navbar />
        <ToDo noteData={this.noteData} />
        <div className="NoteContainer">
          {mappingNotes}
        </div>
        {this.state.editNote && <EditNote updateNote={this.updateNote} closeEditNoteModal={this.closeEditNoteModal} noteToEdit={this.state.noteToEdit.note} />}
      </React.Fragment>
    )
  }
}

/* export default class App extends Component {
  state = {
    name: this.props.name,
    verified: this.props.verify,
    verifyButton: this.props.verify ? 'De-Verify Yourself' : 'Verify Yourlself'
  }
  handleVerify = () => {
    this.setState({ verified: !this.state.verified })
    this.setState({ verifyButton: this.state.verified ? 'De-Verify Yourself' : 'Verify Yourlself' })
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/services' component={Services} />
            <Route path='/contact' component={Contact} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}
const Header = () => {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/services'>Services</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  )
}
const Home = () => {
  return (
    <React.Fragment>
      <h1>HomePage</h1>
      <p>This Is HomePage </p>
    </React.Fragment>
  )
}
const About = () => {
  return (
    <React.Fragment>
      <h1>About Page</h1>
      <p>This Is About Page </p>
    </React.Fragment>
  )
}
const Services = ({match}) => {
  console.log(match);
  return (
    <React.Fragment>
      <ul>
        <li><Link to={`${match.path}/web-designing`}>Web Designing</Link></li>
        <li><Link to={`${match.path}/website-development`}>Website Development</Link></li>
        <li><Link to={`${match.path}/software-development`}>Software Development</Link></li>
      </ul>
      <Route path={`${match.path}/:serviceRoute`} component={serviceRoutes}/>
    </React.Fragment>
  )
}
const serviceRoutes = ({match}) => {
  const perfectWord = (service)=>{
    let split = service.split('-')
    let word = ''
    split.forEach(e=>{
      let upperCase = e.charAt(0).toUpperCase()
      word += `${upperCase}${e.substr(1)} `
    })
    return word.trim()
  }
  return (
    <React.Fragment>
      <h1>Service Name: {perfectWord(match.params.serviceRoute)}</h1>
      <p>We Offer <strong>{perfectWord(match.params.serviceRoute)}</strong> at a very cheap rate</p>
    </React.Fragment>
  )
}
const Contact = () => {
  return (
    <React.Fragment>
      <h1>Contact Page</h1>
      <p>This Is Contact Page </p>
    </React.Fragment>
  )
}
const PageNotFound = () => {
  return (
    <React.Fragment>
      <h1>404 Page Not Found</h1>
    </React.Fragment>
  )
} */







// return <Forms />
// if(this.state.verified){
//   return (
//     <div>
//       <h1>Hello My Name is {this.state.name} This Is Practice of React Js of what I've learned till now</h1>
//       <Samarth thisIsProp='This is a prop sent to Samarth Component by App.js' name='Samarth'/>
//       <Samarth thisIsProp='Blah Blah Blah' name='Rohit'/>
//       <br/>
//       <br/>
//       <button onClick={this.handleVerify}>{this.state.verifyButton}</button>
//     </div>
//   )
// } else {
//   return (
//     <React.Fragment>
//       <h1>You Are not verified, please click button below to verify yourself</h1>
//       <button onClick={this.handleVerify}>{this.state.verifyButton}</button>
//     </React.Fragment>
//   )
// }