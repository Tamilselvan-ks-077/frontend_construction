import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { children, className } = this.props;
    return (
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${className}`}>
        {children}
      </div>
    );
  }
}

export default Container;
