type Props = {
  label: string;
  labelColor?: string;
  type?: string;
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  accept?: string;
  disable?: boolean;
  title?: string;
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
        {label}
        <span className="font-serif text-xl text-red-500 italic ">
          {otherProps.required && "*"}
        </span>
      </label>
      {otherProps.type !== "textarea" ? (
        <input
          disabled={disable}
          {...otherProps}
          className={
            className ||
            "w-full rounded bg-gray-200 px-3 py-2 text-gray-800 focus:outline-gray-300 placeholder:italic placeholder:font-bold "
          }
        />
      ) : (
        <textarea
          disabled={disable}
          {...otherProps}
          rows={5}
          className={
            className ||
            "w-full rounded bg-gray-200 px-3 py-2 text-gray-800 focus:outline-gray-300 placeholder:italic placeholder:font-bold "
          }
        ></textarea>
      )}
    </div>
  );
};

export default FormInput;
