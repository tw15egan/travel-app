import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const trip = this.props.details;
    var hasVisited = trip.visited ? 'Done' : 'On the list'
    return (
        <ul>
          <li>{trip.city}</li>
          <li>{trip.country}</li>
          <a onClick={this.markTrip}>{hasVisited}</a>
          <img src={trip.image} />
        </ul>
    )
  }
  
  markTrip = () => {
    const key = this.props.index;
    this.props.changeVisited(key);
  }
}