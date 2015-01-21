/*** @jsx React.DOM */

var App = React.createClass({
    getInitialState: function() {
        return {beers: this.props.beers}
    },
    onAddBeer: function(beer) {
        var data  = this.state.beers;
        data.push(beer);
        this.setState({beers: data});
    },
    render: function() {
        return <div><Beers beers={this.state.beers} />
               <p></p>
              <BeerForm  onAddBeer={this.onAddBeer} /></div>;
    }
});
