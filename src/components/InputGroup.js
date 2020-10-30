import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function InputGroup({
  label,
  name,
  id,
  type,
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        label={label}
        type={type}
        name={name}
        id={id}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}
InputGroup.defaultProps = {
  type: "text",
};
InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default InputGroup;
