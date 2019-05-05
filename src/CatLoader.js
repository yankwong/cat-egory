import React from 'react'
import {fetchRandomCat} from './catApi'

export class CatLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {catUrl: ''};
  }

  componentWillMount() {
    fetchRandomCat(function(error, catUrl){
      this.setState({catUrl: catUrl});
    }.bind(this));
  }

  render() {
    return <div>
      <img src={this.state.catUrl} alt="cat" />
      </div>
  }
}