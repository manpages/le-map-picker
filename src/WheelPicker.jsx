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
    this.setState({items: propsItems.slice(0)})
  },

  render() {
    var elemH = 500
    var parentStyle = {
      position: 'relative',
      height: elemH,
      width: 400,

      overflow: 'hidden',
      border: 'solid red 1px',

    }
    var itemStyle = {
      position: 'absolute',
      height: elemH -8,
      width: 400,

      border: 'solid blue 1px',
      backgroundColor: '#004',
    }
    var textStyle = {
      color: 'cyan',
      fontWeight: 'bold',
      height: 20,
    }
    var imgStyle = {
      width: 400,
      height: 'auto',
    }
    return (
      <div style={parentStyle}>
        {
          this.state.items.map((x, i)=>{

            var top = (this.state.top +(i+1)*elemH) %(this.state.items.length *elemH)  -elemH
            return (
              <div key={i}>

                <div style={Object.assign({top}, itemStyle)}>
                  <span style={{height: '100%', display: 'inline-table'}}>
                    <span style={{display: 'table-cell', verticalAlign: 'middle', textAlign: 'center'}}>

                      <div style={textStyle}>{x.name}</div>
                      <img style={imgStyle} src={x.src} />

                    </span>
                  </span>

                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
})

module.exports = WheelPicker
