// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0}

  clearTimeInterval = () => {
    clearInterval(this.InterID)
  }

  onStart = () => {
    this.InterID = setInterval(() => this.Tick(), 1000)
    console.log('started')
  }

  Tick = () => {
    const {seconds} = this.state
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  onStop = () => {
    this.clearTimeInterval()
  }

  onReset = () => {
    this.clearTimeInterval()
    this.setState({seconds: 0})
  }

  GetFormat = () => {
    const {seconds} = this.state
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)

    const strmin = mins < 10 ? `0${mins}` : `${mins}`
    const strsec = secs < 10 ? `0${secs}` : `${secs}`
    return `${strmin}:${strsec}`
  }

  render() {
    const {seconds} = this.state
    return (
      <div className="container">
        <div className="content">
          <h1>Stopwatch</h1>
          <div className="tabitem">
            <p className="timercontent">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              Timer
            </p>
            <h1>{this.GetFormat()}</h1>
            <div>
              <button className="button1" onClick={this.onStart}>
                Start
              </button>
              <button className="button2" onClick={this.onStop}>
                Stop
              </button>
              <button className="button3" onClick={this.onReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
