import PropTypes from "prop-types";

export default function TextArea({ label, name, value, onChange }) {
  return (
    <label>
      {label}
      <textarea
        name={name}
        cols="30"
        rows="10"
        value={value}
        onChange={onChange}
      ></textarea>
    </label>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
