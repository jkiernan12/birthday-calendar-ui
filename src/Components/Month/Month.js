import Person from "../Person/Person";
import './Month.css';

const Month = (props) => {
  return (
    <article className="month-container">
      <h3 className="month-name">{props.name}</h3>
      {props.staff.map(person => {
        return (
          <Person 
          key={person.id}
          name={person.name}
          month={person.month}
          day={person.day} />
        )
      })}
    </article>
  )
}

export default Month;