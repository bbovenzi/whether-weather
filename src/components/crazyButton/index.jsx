import React, {PropTypes, Component} from 'react';
import './style.scss';
import cn from 'classnames';

class CrazyButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const buttonClass = cn('button', {'circle': this.state.clicked});
    return (
      <div className={buttonClass} onClick={this.onClick}>
      </div>
    );
  }
}

export default CrazyButton;
