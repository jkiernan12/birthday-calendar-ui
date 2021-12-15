import './App.css';
import { Component } from 'react';
import { months } from '../../months_data';
import Month from '../Month/Month';
import Form from '../Form/Form';

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

  postBirthday(newData) {
    fetch('http://localhost:3001/api/v1/birthdays', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newData)
    }).then(((req, res) => {
      if (res.ok) {
        console.log('Success!');
      } else {
        console.log('ERROR (PS I would do proper error handling if I had more time)')
      }
    })).catch(err => console.log(err))
  }

  addBirthday = ({dayValue, monthValue, nameValue}) => {
    const day = Number(dayValue);
    const month = Number(monthValue);
    const name = nameValue;
    const newStaff = { day, month, name}
    this.postBirthday(newStaff)
  }

  render() {
    return (
      <div className="App">
      <h1>Birthdays</h1>
      <div className='bday-form'>
      <Form addBirthday={this.addBirthday}/>
      </div>
      <div className='bday-container'>
      {this.state.months.map(month => {
        return <Month 
        name={month.name} 
        key={month.id} 
        staff={this.filterByMonth(month.id)} />
      })}
      </div>
    </div>
  );
}
}

export default App;
