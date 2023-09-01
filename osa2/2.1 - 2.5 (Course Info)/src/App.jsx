const App = () => {
  
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses[0]} /> 
    </div>
  )
}

const Course = ({ courses }) => {

  return(
    <div>
    <Header name={courses.name} />
    <Content parts={courses.parts} />
    <Total parts={courses.parts} />
    </div>
  )
}

const Header = (props) => {
  
  return(
      <div>
        <h1>{props.name}</h1>
      </div>
    )
}

const Content = (parts) => {
  console.log(parts);

  return(
    <div>
      <ul>
        {parts.map(part => <li key={part.id}>
          {part.name + " " + part.exercises}
          </li>)}
      </ul>
    </div>
  )
  //parts.map is not a function, parts.map is not a function, parts.map is not a function
  //Miksi parts.map ei ole funktio? No en minä tiedä. Koko homman pitäisi olla oikein ja
  //parts arraykin näkyy console.logissa normaalisti.
}

const Total = (parts) => {
  //Myöskin tämä kiva juttu vaan mystisesti lakkasi toimimasta eikä mikään käy järkeen.
  const totals = parts.exercises.reduce(function(previousVal, currentVal) {
    return previousVal + currentVal.exercises;
   }, 0);
  

  return(
    <div>
      <b>Number of exercises {totals}</b>
    </div>
  )
}

export default App