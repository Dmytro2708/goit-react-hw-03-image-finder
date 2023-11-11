import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    onSubmit: '',
  };

  handleInputChange = event => {
    this.setState({ onSubmit: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.onSubmit);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Search</button>
          <input
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            value={this.state.onSubmit}
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}
