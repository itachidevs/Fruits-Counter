// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCouter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  increaseMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  increaseBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="inner-container-heading">
            Bob ate <span className="mango-count">{mangoCount}</span> mangoes
            <span className="banana-count"> {bananaCount}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="mango-container">
              <img
                className="fruit-img"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button
                type="button"
                className="btn"
                onClick={this.increaseMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                className="fruit-img"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button
                type="button"
                className="btn"
                onClick={this.increaseBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCouter
