import { Component } from "react";
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      nameValue: '',
      monthValue: '',
      dayValue: ''
    }
  }

  resetState() {
    this.setState({
      nameValue: '',
      monthValue: '',
      dayValue: ''
    })
  }

  updateValue = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  createBirthday = (e) => {
    e.preventDefault();
    this.props.addBirthday(this.state);
    this.resetState();
  }

  render() {
    return (
    <form>
      <div className="input-container">
        <label htmlFor='nameValue'>Name:</label>
        <input id='nameValue' type='text' value={this.state.nameValue} onChange={this.updateValue}/>
      </div>
      <div className="input-container">
        <label htmlFor='monthValue' >Month:</label>
        <input id='monthValue' type='number' value={this.state.monthValue} onChange={this.updateValue} />
      </div>
      <div className="input-container">
        <label htmlFor='dayValue'>Day:</label>
        <input id='dayValue' type='number' value={this.state.dayValue} onChange={this.updateValue} />
      </div>
      <button className="submit-button" type="submit" onClick={this.createBirthday}>Add this birthday!</button>
    </form>
    )
  }
}

export default Form;