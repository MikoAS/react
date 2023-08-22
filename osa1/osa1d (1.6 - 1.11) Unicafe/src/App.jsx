import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState([])

  const states = [good, neutral, bad, total, average]

  const handleGoodClick = () => {
    setAverage(average.concat(1))
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    setAverage(average.concat(0))
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
  }

  const handleBadClick = () => {
    setAverage(average.concat(-1))
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Header text="statistics" />
      <Statistics states={states}  />
    </div>
  )
}

const Statistics = (props) => {
  if (props.states[3] === 0)
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )

  return(
    <div>
      <StatisticLine text="good: " number={props.states[0]} />
      <StatisticLine text="neutral: " number={props.states[1]} />
      <StatisticLine text="bad: " number={props.states[2]} />
      <StatisticLine text="total: " number={props.states[3]} />
      <Average avg={props.states[4]} />
      <Positive states={props.states} />
    </div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Header = (props) => {
  return(
    <h1>{props.text}</h1>
  )
}

const StatisticLine = (props) => {
  return(
    <p>{props.text} {props.number}</p>
  )
}

const Average = (props) => {
  let sum = 0
  props.avg.forEach( num => {
    sum += num})
  return(
    <p>average: {sum / props.avg.length}</p>
  )
}

const Positive = (props) => {
  return(
    <p>positive: {props.states[0] / props.states[3] * 100}%</p>
  )
}

export default App