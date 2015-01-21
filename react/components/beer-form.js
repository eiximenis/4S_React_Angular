/*** @jsx React.DOM */

var BeerForm = React.createClass({
    getInitialState: function() {
        return {
            name: '',
            desc: '',
            score :1
        }
    },
    changeData: function() {
        this.setState({
            name: this.refs.name.getDOMNode().value,
            desc: this.refs.desc.getDOMNode().value
        });
    },
    addBeer: function() {
      var beer = {
          name: this.state.name,
          description: this.state.desc,
          score: this.state.score
      };
      this.props.onAddBeer(beer);
    },
    changeScore: function(value) {
        this.setState({score: value});
    },
    render: function() {
       return <div>
                    Name: <input type="text" value={this.state.name} onChange={this.changeData} ref="name" /> <br />
                    Description: <input type="text" value={this.state.desc} onChange={this.changeData} ref="desc" /><br />
                    Score: <Rate score={this.state.score} isEnabled={true} onRateChange={this.changeScore} /> <br/>
                    <input type="button" value="Add" onClick={this.addBeer} />
              </div>
    }
});
