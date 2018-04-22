import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addStudio } from './actions';

class AddStudio extends PureComponent {

  state = {
    name: '',
    city: '',
    state: '',
    country: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name] : target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addStudio({
      name: this.state.name,
      address: {
        city: this.state.city,
        state: this.state.state,
        country: this.state.country
      }
    });
  };

  render() {
    const { name, city, state, country } = this.state;
    return (
      <section>
        <h1>Add Studio</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <input name="name" onChange={this.handleChange} value={name} required />
          </label>
          <label htmlFor="city">
            <input name="city" onChange={this.handleChange} value={city} placeholder="City"/>
          </label>
          <label htmlFor="state">
            <input name="state" onChange={this.handleChange}  value={state}placeholder="State"/>
          </label>
          <label htmlFor="country">
            <input name="country" onChange={this.handleChange} value={country} placeholder="Country"/>
          </label>
          <button>submit</button>
        </form>
      </section>
    );
  }
}

export default connect(
  null,
  { addStudio }
)(AddStudio);
