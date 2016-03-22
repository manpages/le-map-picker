var React = require('react')

var WheelPicker = React.createClass({
  render() {
    return (
      <div>
        {
          this.props.items.map((x, i)=>{
            return (
              <div key={i}>
                <div>{x.name}</div>
                <img src={'/src/images/400px-' +x.src +'.jpg'} />
              </div>
            )
          })
        }
      </div>
    )
  }
})

module.exports = WheelPicker
