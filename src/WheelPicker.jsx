var React = require('react')

var WheelPicker = React.createClass({
  getInitialState() {
    return {
      elemH: 500,
      imageH: 400,
      speed: 0,
      top: 0,
      items: [],
      spinning: false,
    }
  },

  toggleSpin() {
    var spinning = !this.state.spinning
    var speed = spinning ? 50 : 0
    if ( !spinning )
      this.props.selectedIndexCallback(this.getCurrentIndex())
    this.setState({speed, spinning})
  },

  movePosition() {
    var elemH = this.state.elemH
    var length = this.state.items.length -1

    var top = this.state.top -this.state.speed
    var height = elemH*length

    if (top < -height) top += height
    this.setState({top})
  },

  handleShortcuts: function handleShortcuts(e) {
    if (document.activeElement.tagName !== 'BODY') return

    if (e.keyCode == '32') //space
      this.toggleSpin()
  },

  componentDidMount() {
    document.addEventListener('keydown', this.handleShortcuts)
    this.setItems(this.props.items)
    setInterval(this.movePosition, 10)
  },

  componentWillUnmount: function componentWillUnmount() {
    document.removeEventListener('keydown', this.handleShortcuts)
  },

  setItems(propsItems) {
    this.setState({items: propsItems.slice(0)})
  },

  getCurrentIndex() {
    var length = this.state.items.length
    var height = this.state.elemH *length
    var position = this.state.top %height
    return Math.abs(Math.round(position /height*length) %length)
  },

  render() {
    var parentStyle = {
      position: 'relative',
      height: this.state.elemH,
      width: this.state.imageH,

      overflow: 'hidden',
      border: 'solid red 1px',

    }
    var itemStyle = {
      position: 'absolute',
      height: this.state.elemH -8,
      width: this.state.imageH,

      border: 'solid blue 1px',
      backgroundColor: '#004',
    }
    var textStyle = {
      color: 'cyan',
      fontWeight: 'bold',
      height: 20,
    }
    var imgStyle = {
      width: this.state.imageH,
      height: 'auto',
    }

    var elemH = this.state.elemH
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
