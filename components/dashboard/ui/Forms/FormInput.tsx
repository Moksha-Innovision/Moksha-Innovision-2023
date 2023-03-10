type Props = {
  label: string;
  labelColor?: string;
  type?: string;
  id?: string;
  name?: string;
  className?: string;
  pattern?: string;
  placeholder?: string;
  value?: any;
  accept?: string;
  disable?: boolean;
  title?: string;
  max?: any;
  min?: any;
  onChange?: (a: any) => any;
  required?: boolean;
  sublabel?: string;
  defaultValue?: any;
};

const FormInput = ({ label, className, disable, ...otherProps }: Props) => {
  const numberInputOnWheelPreventChange = (e: any) => {
    // Prevent the input value change
    e.target.blur();

    // Prevent the page/container scrolling
    e.stopPropagation();

    // Refocus immediately, on the next tick (after the current function is done)
    setTimeout(() => {
      e.target.focus();
    }, 0);
  };
  return (
    <div className={"group my-4 flex flex-col items-start gap-2"}>
      <label
        htmlFor={label}
        className={`flex items-center gap-3 font-koulen text-lg text-${otherProps.labelColor} tracking-widest`}
      >
        {label}
        <span className="font-serif text-xl italic text-red-500 ">
          {otherProps.required && "*"}
        </span>
        <span className="font-koulen text-sm text-gray-600 ">
          {otherProps.sublabel}
        </span>
      </label>
      {otherProps.type !== "textarea" ? (
        <input
          defaultValue={otherProps.defaultValue}
          onWheel={numberInputOnWheelPreventChange}
          disabled={disable}
          {...otherProps}
          className={
            className ||
            "w-full rounded bg-gray-200 bg-opacity-70 px-3 py-2 text-gray-800 placeholder:font-bold placeholder:italic focus:outline-gray-300 "
          }
        />
      ) : (
        <textarea
          disabled={disable}
          {...otherProps}
          rows={5}
          defaultValue={otherProps.defaultValue}
          className={
            className ||
            "w-full rounded bg-gray-200 px-3 py-2 text-gray-800 placeholder:font-bold placeholder:italic focus:outline-gray-300 "
          }
        ></textarea>
      )}
    </div>
  );
};

export default FormInput;
