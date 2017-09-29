var NewItem= React.createClass({
  handleClick() {
    var name    = this.name.value;
    var description = this.description.value;
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: { name: name, description: description } },
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
  },
  render() {
    return (
      <div>
        <input type="text" ref={(input) => { this.name = input; }} placeholder="Enter the name of the item" />
        <input type="text" ref={(input) => { this.description = input; }} placeholder="Enter a description" />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});