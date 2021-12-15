import Person from "../Person/Person";

const Month = (props) => {
  return (
    <article>
      <h2>{props.name}</h2>
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