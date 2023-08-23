import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
  }

  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const mostVotes = {
    name: anecdotes[votes.indexOf(Math.max(...votes))],
    value: Math.max(...votes)
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleClick}>Next</button>
      <button onClick={handleVotes}>Vote</button>
      <Header text="Anecdote with most votes" />
      <Most mostVotes={mostVotes} />
    </div>
  )
}

const Header = (props) => {

  return(
    <h1>{props.text}</h1>
  )
}

const Most = (props) => {
  if (props.mostVotes.value == 0)
  return (
    <p>No votes</p>
    )

  return(
    <p>
      {props.mostVotes.name} <br /><br />
      has {props.mostVotes.value} votes
    </p>
  )
}


export default App
