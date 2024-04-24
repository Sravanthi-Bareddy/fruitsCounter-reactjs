import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }
  byClickingMangoBtn = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }
  byClickingBananaBtn = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="fruits-bg-container">
        <div className="fruits-container">
          <h1 className="main-heading">
            Bob ate <span>{mangoesCount}</span> mangoes
            <span>{bananasCount}</span> bananas
          </h1>
          <div className="mango-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="mango"
              alt="mango"
            />
            <br />
            <div>
              <button
                type="button"
                className="mango-btn"
                onClick={this.byClickingMangoBtn}
              >
                Eat Mango
              </button>
            </div>
          </div>
          <div className="banana-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="banana"
              alt="banana"
            />
            <br />
            <div>
              <button
                className="banana-btn"
                type="button"
                onClick={this.byClickingBananaBtn}
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
export default FruitsCounter
