import { SelectWrapper } from "./selectStyles";

interface selectOption {
  title: string;
  value: string;
}
const Select = (props: {
  Hint: string;
  Options: selectOption[];
  onSelectChange: React.ChangeEventHandler<HTMLSelectElement>;
}) => {
  return (
    <SelectWrapper onChange={props.onSelectChange} defaultValue={props.Hint}>
      <option value="none">{props.Hint}</option>
      {props.Options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </SelectWrapper>
  );
};
export default Select;