var React = require('react')
var WheelPicker = require('./WheelPicker.jsx')

var WheelPickerViewer = React.createClass({
  render() {
    return (
      <div>
        <div>
          Le Wheel Picker
        </div>
        <div>
          <WheelPicker />
        </div>
      </div>
    )
  }
})

module.exports = WheelPickerViewer
