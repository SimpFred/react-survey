import PropTypes from "prop-types";

export default function Input({ label, type, name, value, onChange }) {
  return (
    <label>
      {label}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};
