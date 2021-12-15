const Month = (props) => {
  return (
    <article>
      <h2>{props.name}</h2>
      {props.staff.map(person => {
        return (
          <p key={person.id}>{person.name}: {person.month}/{person.day}</p>
        )
      })}
    </article>
  )
}

export default Month;