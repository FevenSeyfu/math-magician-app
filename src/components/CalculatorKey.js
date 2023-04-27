import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import '../Calculator.css';

function CalculatorKey(props) {
  const { BtnValue } = props;
  const { className } = props;
  return (
    <button type="submit" className={className}>
      {BtnValue}
    </button>
  );
}
CalculatorKey.propTypes = {
  BtnValue: PropTypes.string.isRequired,
};
CalculatorKey.propTypes = {
  className: PropTypes.string.isRequired,
};

export default CalculatorKey;
