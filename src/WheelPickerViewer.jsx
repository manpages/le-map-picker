var React = require('react')
var WheelPicker = require('./WheelPicker.jsx')

var WheelPickerViewer = React.createClass({
  getInitialState() {
    items = [
      {src: this.getSrcPath('400px-Dusk_Towers.jpg'),       name: 'Dusk Towers'},
      {src: this.getSrcPath('400px-Orbital_Shipyard.jpg'),  name: 'Orbital Shipyard'},
      {src: this.getSrcPath('400px-Prion_Terraces.jpg'),    name: 'Prion Terraces'},
      {src: this.getSrcPath('400px-Ulrena.jpg'),            name: 'Ulrena'},
      {src: this.getSrcPath('400px-Central_Protocol.jpg'),  name: 'Central Protocol'},
      {src: this.getSrcPath('400px-Lerilak_Crest.jpg'),     name: 'Lerilak Crest'},
      {src: this.getSrcPath('400px-Ruins_of_Seras.jpg'),    name: 'Ruins of Seras'},
    ]
    return {items, selectedItems: []}
  },

  componentDidMount() {
    document.body.style.backgroundColor = 'black'
  },

  handleSelection(selectedIndex) {
    var items = this.state.items.slice(0)
    var selected = items[selectedIndex]
    items.splice(selectedIndex, 1)
    var selectedItems = this.state.selectedItems.slice(0)
    selectedItems.push(selected)
    this.setState({items, selectedItems})
  },

  getSrcPath(filename) {
    return '/src/images/' +filename
  },

  render() {

    return (
      <div style={{textAlign: 'center'}}>
        <div style={{display: 'inline-block'}}>
          <div>
            Le Map Picker
          </div>
          <div>
            <WheelPicker
              items={this.state.items}
              selectedIndexCallback={this.handleSelection}
              />
          </div>
          <div>
            selectedItems:
            {
              this.state.selectedItems.map((x, i)=>{
                return (
                  <div key={i} style={{color: 'cyan', fontWeight: 'bold'}}>
                    {x.name}
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    )
  }
})

module.exports = WheelPickerViewer
