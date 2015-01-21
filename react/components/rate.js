/*** @jsx React.DOM */

var Star = React.createClass({
    getDefaultProps: function() {
        return {isSelected: false}
    },
    starClicked: function() {
      this.props.onStarClicked(this.props.index);
    },
    render: function() {
        var className = this.props.isSelected ? 'rater-star-selected' : 'rater-star-unselected';
        return <a className={className} onClick={this.starClicked}>★</a>;
    }
});

var Rate = React.createClass({
    getDefaultProps: function() {
        return {isEnabled: false}
    },
    changeRate: function(value) {
        if (this.props.isEnabled) {
            this.props.onRateChange(value);
        }
    },
    render: function() {
        var stars=[];
        for (var idx=0; idx < 10; idx++) {
            var selected = idx < this.props.score;
            stars.push(<Star isSelected={selected} onStarClicked={this.changeRate} index={idx + 1} />);
        }
        return <span>{stars}</span>;
    }
});
