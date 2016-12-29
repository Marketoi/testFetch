import React, {Component} from 'react';

class Fetch extends Component {
    constructor() {
      super();
      this.state = { items: [] };
    }
    componentDidMount() {
        console.log("will call api");
        fetch(`https://catalogue.marketoi.com/index.php/api/Front/order?mo_id=yerAMurASH9sg6xh9`)
        .then(result=>result.json())
        .then(items=>{this.setState({items: items.result})})
    }
    render() {
      console.log(this.state);
      return (<div>
        {JSON.stringify(this.state)};
      </div>);
    }
}

export default Fetch;
