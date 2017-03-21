import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Winner extends Component {
  render() {
    return (
      <div className="winner">
        Winner is {this.props.winner}!
      </div>
    );
  }
};

Winner.mixins = [PureRenderMixin];

export default Winner;
