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

  render() {
    return (
    <form>
      <label htmlFor='nameInput'>Name:</label>
      <input id='nameInput' type='text' />
      <label htmlFor='monthInput'>Month:</label>
      <input id='monthInput' type='number' />
      <label htmlFor='dayInput'>Day:</label>
      <input id='dayInput' type='number' />
      <button type="submit">Submit</button>
    </form>
    )
  }
}

export default Form;