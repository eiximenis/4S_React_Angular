/*** @jsx React.DOM */
var Beer = React.createClass({
    render: function() {
        return <div><span>{this.props.name}</span><span class="ratio"><Rate score={this.props.score} /></span><br />
                    {this.props.description}
               </div>
    }
});

var Beers = React.createClass({
    getDefaultProps: function() {
        return {beers: []};
    },
    render: function() {
        var beers=[];
        for (var beer of this.props.beers) {
            beers.push(<Beer name={beer.name} score={beer.score} description={beer.description} />);
        }
        return <div>{beers}</div>
    }
});