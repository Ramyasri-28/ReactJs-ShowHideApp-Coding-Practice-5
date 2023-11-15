// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameVisible: false, isLastNameVisible: false}

  showFirstName = () => {
    this.setState(previousState => ({
      isFirstNameVisible: !previousState.isFirstNameVisible,
    }))
  }

  showLastName = () => {
    this.setState(previousState => ({
      isLastNameVisible: !previousState.isLastNameVisible,
    }))
  }

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading"> Show/Hide </h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstNameVisible && <p className="name"> Joe </p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="button"
              onClick={this.showLastName}
            >
              Show/Hide Lastname
            </button>
            {isLastNameVisible && <p className="name"> Jonas </p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
