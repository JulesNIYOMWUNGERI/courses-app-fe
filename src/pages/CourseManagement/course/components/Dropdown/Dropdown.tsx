import "./Dropdown.css";

interface DropdownProps {
  options: Array<{ label: string; value: string | number }>;
  value?: string | number | undefined;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
}

const Dropdown = ({ options, value, onChange, placeholder }: DropdownProps) => {
  return (
    <div className="dropdown-wrapper">
      <select
        className="dropdown-select"
        name="department"
        value={value}
        onChange={onChange}
        defaultValue="all"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="dropdown-arrow"></div>
    </div>
  );
};

export default Dropdown;
