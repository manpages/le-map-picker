var React = require('react')
var WheelPicker = require('./WheelPicker.jsx')

var WheelPickerViewer = React.createClass({
  getInitialState() {
    return {selectedIndex: undefined}
  },

  getSrcPath(name) {
    return '/src/images/400px-' +name +'.jpg'
  },

  render() {
    var items = [
      {
        src: this.getSrcPath('Dusk_Towers'),
        name: 'Dusk Towers'
      },
      {
        src: this.getSrcPath('Orbital_Shipyard'),
        name: 'Orbital Shipyard'
      },
      {
        src: this.getSrcPath('Prion_Terraces'),
        name: 'Prion Terraces'
      },
      {
        src: this.getSrcPath('Ulrena'),
        name: 'Ulrena'
      },
      {
        src: this.getSrcPath('Central_Protocol'),
        name: 'Central Protocol'
      },
      {
        src: this.getSrcPath('Lerilak_Crest'),
        name: 'Lerilak Crest'
      },
      {
        src: this.getSrcPath('Ruins_of_Seras'),
        name: 'Ruins of Seras'
      }
    ]

    return (
      <div>
        <div>
          Le Map Picker
        </div>
        <div>
          Selected Map: {this.state.selectedIndex !== undefined ? items[this.state.selectedIndex].name : undefined}
        </div>
        <div>
          <WheelPicker
            items={items}
            selectedIndexCallback={(selectedIndex)=>{this.setState({selectedIndex})}}
            />
        </div>
      </div>
    )
  }
})

module.exports = WheelPickerViewer
