const Person = ({id, name, month, day}) => {
  return(
    <p key={id}>{name}: {month}/{day}</p>
  )
}

export default Person;