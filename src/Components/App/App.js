import './App.css';
import { Component } from 'react';
import { months } from '../../months_data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      months,
      staff: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/birthdays')
    .then(res => res.json())
    .then(data => this.setState({staff: data}))
  }

  render() {
    return (
      <div className="App">
      <h1>Birthdays</h1>
      <div className='bday-form'>

      </div>
      <div className='bday-container'>
      {this.state.months.map(month => {
        return <h2 key={month.id}>{month.name}</h2>
      })}
      {this.state.staff.map(person => {
        return <h3 key={person.id}>{person.name}</h3>
      })}
      </div>
    </div>
  );
}
}

export default App;
