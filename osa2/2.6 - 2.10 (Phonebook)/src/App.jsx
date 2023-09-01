import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [showAll] = useState(false)

    const addContact = (event) => {
      event.preventDefault()
      const contact = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(contact))
      setNewName("") 
      setNewNumber("")
    }

  const contactsToShow = showAll
  ? persons
  : persons.filter(person => person.name.includes(filter))
  
  const handleNewContact = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h3>Add New</h3>
      <Form addContact={addContact} handleNewContact={handleNewContact} handleNewNumber={handleNewNumber} newName={newName} newNumber={newNumber} persons={persons} />
      <h3>Numbers</h3>
      <Numbers persons={contactsToShow} />
    </div>
  )

}

const Filter = ({ filter, handleFilter }) => {

  return(
    <div>
      filter: <input value={filter} onChange={handleFilter} />
    </div>
  )
}

const Form = ({ addContact, handleNewContact, handleNewNumber, newName, newNumber, persons }) => {
  const duplicate = persons.find((person) => person.name === newName)

  if(duplicate) {
    return(
      <div>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewContact} /><br />
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
    </div>
    )
  }

  return(
    <div>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNewContact} /><br />
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const Numbers = ({ persons }) => {

  return(
    <div>
      <ul>
        {persons.map(person => <li key={person.id}>
          {person.name + ' ' + person.number}
        </li>)}
      </ul>
      ...
    </div>
  )
}

export default App
