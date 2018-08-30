import React from 'react';
import PropTypes from 'prop-types';

class BoilerplateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const styles = this.props.styles || {};

    return (
      <div>
        <label style={styles.label}>{this.props.label}</label>
        <input type="text" style={styles.input} onChange={this.handleChange} />
      </div>
    );
  }
}

BoilerplateComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  styles: PropTypes.object
};

BoilerplateComponent.defaultProps = {
  styles: {
    label: {
      fontFamily: 'Comic Sans MS',
      color: 'green'
    },
    input: {
      background: '#ddd',
      border: '1px solid red'
    }
  }
};

export default BoilerplateComponent;
