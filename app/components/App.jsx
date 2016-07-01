import uuid from 'node-uuid';
import React from 'react';
import BucketList from './BucketList.jsx';
import Add from './Add.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      bucketList: [
        {
          id: uuid.v4(),
          city: 'New York City',
          country: 'USA',
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/f2/new-york-city.jpg',
          visited: true
        },
        {
          id: uuid.v4(),
          city: 'Paris',
          country: 'France',
          image: 'https://static.pexels.com/photos/1518/black-and-white-city-bird-people.jpg',
          visited: true
        },
        {
          id: uuid.v4(),
          city: 'Kuala Lumpur',
          country: 'Malaysia',
          image: 'https://static.pexels.com/photos/22804/pexels-photo.jpg',
          visited: false
        }
      ]
    }
  }
  render() {        
    return (
      <div class="main">
        <h1>Bucket List</h1>
        <Add addTrip={this.addTrip} />
        <BucketList details={this.state.bucketList} changeVisited={this.changeVisited} />
      </div>
    );
  }
  
  addTrip = (trip) => {
    this.setState({
      bucketList: [...this.state.bucketList, {
        id: uuid.v4(),
        city: trip.city,
        country: trip.country,
        image: trip.image,
        visited: trip.visited
      }]
    })
  }
  
  changeVisited = (key) => {
    const trip = this.state.bucketList[key];
    
    if (trip.visited === true) {
      trip.visited = false;
    } else {
      trip.visited = true;
    }
    
    this.setState({bucketList: this.state.bucketList})
  }
}

