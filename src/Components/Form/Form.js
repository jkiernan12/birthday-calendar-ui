import { Component } from "react";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      nameValue: '',
      monthValue: '',
      dayValue: ''
    }
  }

  updateValue = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  render() {
    return (
    <form>
      <label htmlFor='nameValue'>Name:</label>
      <input id='nameValue' type='text' onChange={this.updateValue}/>
      <label htmlFor='monthValue' >Month:</label>
      <input id='monthValue' type='number' onChange={this.updateValue} />
      <label htmlFor='dayValue'>Day:</label>
      <input id='dayValue' type='number' onChange={this.updateValue} />
      <button type="submit">Submit</button>
    </form>
    )
  }
}

export default Form;