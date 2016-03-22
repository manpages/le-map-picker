var React = require('react')
var WheelPicker = require('./WheelPicker.jsx')

var WheelPickerViewer = React.createClass({
  render() {
    var items = [
      {
        src: 'Dusk_Towers',
        name: 'Dusk Towers'
      },
      {
        src: 'Orbital_Shipyard',
        name: 'Orbital Shipyard'
      },
      {
        src: 'Prion_Terraces',
        name: 'Prion Terraces'
      },
      {
        src: 'Ulrena',
        name: 'Ulrena'
      },
      {
        src: 'Central_Protocol',
        name: 'Central Protocol'
      },
      {
        src: 'Lerilak_Crest',
        name: 'Lerilak Crest'
      },
      {
        src: 'Ruins_of_Seras',
        name: 'Ruins of Seras'
      }
    ]

    return (
      <div>
        <div>
          Le Wheel Picker
        </div>
        <div>
          <WheelPicker items={items} />
        </div>
      </div>
    )
  }
})

module.exports = WheelPickerViewer
