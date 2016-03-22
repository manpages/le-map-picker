var React = require('react')

var WheelPicker = React.createClass({
  getInitialState() {
    return {
      elemH: 500,
      imageH: 400,
      betweenElementSpace: 20,
      speed: 0,
      top: 0,
      items: [],
      spinning: false,
      spinningStartTs: undefined,
    }
  },

  toggleSpin() {
    var spinning = !this.state.spinning
    var spinningStartTs = spinning ? new Date().getTime() : undefined
    var speed = spinning ? 5 : 0
    var currentIndex = this.getCurrentIndex()
    var top = currentIndex *-this.state.elemH
    this.setState({speed, spinning, spinningStartTs, top}, this.handleSpinning)
  },

  handleSpinning() {
    if ( !this.isMounted() ) return
    if ( !this.state.spinning ) return
    if (this.state.items.length == 1) return

    var elemH = this.state.elemH
    var length = this.state.items.length -1

    var timestamp = new Date().getTime() -this.state.spinningStartTs
    var top = this.state.speed *timestamp
    var height = elemH*length

    if (top < -height) top += height
    this.setState({top})

    setTimeout(this.handleSpinning, 20)
  },

  handleShortcuts: function handleShortcuts(e) {
    if (document.activeElement.tagName !== 'BODY') return

    if (e.keyCode == '32') //space
      this.toggleSpin()

    if (e.keyCode == '13') //enter
      if (this.state.items.length > 0 && !this.state.spinning )
        this.props.selectedIndexCallback(this.getCurrentIndex())
  },

  componentDidMount() {
    document.addEventListener('keydown', this.handleShortcuts)
    this.setItems(this.props.items, this.toggleSpin)
  },

  componentWillUnmount: function componentWillUnmount() {
    document.removeEventListener('keydown', this.handleShortcuts)
  },

  setItems(propsItems, cb) {
    this.setState({
      items: propsItems.slice(0),
      top: 0,
    }, cb)
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.items != this.props.items)
      this.setItems(nextProps.items)
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
      height: this.state.elemH -this.state.betweenElementSpace,
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

    if (this.state.spinning)
      itemStyle.filter =
      itemStyle.WebkitFilter = 'blur(5px)'

    var elemH = this.state.elemH
    var length = this.state.items.length
    return (
      <div style={parentStyle}>
        {
          this.state.items.map((x, i)=>{

            var top = (this.state.top +(i+1)*elemH) %(length *elemH) +(length == 1 ? 0: -elemH)
            top += this.state.betweenElementSpace /2 -1
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
