var React = require('react')

var WheelPicker = React.createClass({
  getInitialState() {
    return {
      speed: 5,
      top: 0,
      items: [],
    }
  },

  movePosition() {
    var top = this.state.top +this.state.speed
    this.setState({top})
  },

  componentDidMount() {
    this.setItems(this.props.items)
    setInterval(this.movePosition, 10)
  },

  setItems(propsItems) {
    var items =
      propsItems.map((x, i)=>{
        return (
          <div key={i}>
            <div>{x.name}</div>
            <img src={x.src} />
          </div>
        )
      })
    this.setState({items})
  },

  render() {
    var elemH = 400
    return (
      <div style={{position: 'relative', height: elemH, width: elemH, overflow: 'hidden'}}>
        {
          this.state.items.map((x, i)=>{
            var s = {
              position: 'absolute',
              top: (this.state.top +(i+1)*elemH) %(this.state.items.length *elemH)  -elemH
            }
            return (
              <div key={i} style={s}>
                {x}
              </div>
            )
          })
        }
      </div>
    )
  }
})

module.exports = WheelPicker
