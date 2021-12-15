import './App.css';
import { Component } from 'react';
import { months } from '../../months_data';
import Month from '../Month/Month';

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

  filterByMonth(monthID) {
    return this.state.staff.filter(person => {
      return person.month === monthID;
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Birthdays</h1>
      <div className='bday-form'>

      </div>
      <div className='bday-container'>
      {this.state.months.map(month => {
        return <Month name={month.name} key={month.id} staff={this.filterByMonth(month.id)} />
      })}
      </div>
    </div>
  );
}
}

export default App;
