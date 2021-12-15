import './Person.css'

const Person = ({id, name, month, day}) => {
  return(
    <p className="person" key={id}>{name}: {month}/{day}</p>
  )
}

export default Person;