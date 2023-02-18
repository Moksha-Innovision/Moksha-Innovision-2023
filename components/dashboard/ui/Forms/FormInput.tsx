type Props = {
  label: string;
  labelColor?: string;
  type?: string;
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  disable?: boolean;
  onChange?: (a: any) => any;
  required?: boolean;
};

const FormInput = ({ label, className, disable, ...otherProps }: Props) => {
  return (
    <div className={"group my-4 flex flex-col items-start gap-2"}>
      <label
        htmlFor={label}
        className={` text-lg font-semibold text-${otherProps.labelColor} tracking-widest`}
      >
        {label}{" "}
      </label>
      <input
        disabled={disable}
        {...otherProps}
        className={
          className ||
          "w-full rounded bg-gray-200 px-3 py-2 text-gray-800 focus:outline-gray-300"
        }
      />
    </div>
  );
};

export default FormInput;
