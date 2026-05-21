import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'text']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
  };

  static defaultProps = {
    type: 'button',
    variant: 'primary',
    size: 'md',
    className: '',
    disabled: false,
    icon: null,
    iconPosition: 'right',
  };

  render() {
    const {
      children,
      onClick,
      type,
      variant,
      size,
      className,
      disabled,
      icon,
      iconPosition,
    } = this.props;

    const baseStyles = 'inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm',
      secondary: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
      text: 'text-amber-600 hover:text-amber-700 hover:underline p-0 bg-transparent',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1',
      md: 'text-sm px-4 py-2 gap-1.5',
      lg: 'text-base px-6 py-2.5 gap-2',
    };

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </button>
    );
  }
}

export default Button;
