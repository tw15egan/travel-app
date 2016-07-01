import React from 'react';
import Card from './Card.jsx';

export default class BucketList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  renderCard = (key) => {
    return (
        <Card key={key} index={key} details={this.props.details[key]} changeVisited={this.props.changeVisited} />
      )
    }
    
  render() {
    return (
      <ul>
        {Object.keys(this.props.details).map(this.renderCard)}
      </ul>
    )
  }
}