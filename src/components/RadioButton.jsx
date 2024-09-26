import PropTypes from "prop-types";

export default function RadioButton({
  label,
  name,
  value,
  checked,
  onChange,
  id,
}) {
  return (
    <>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
}

RadioButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.string,
};
