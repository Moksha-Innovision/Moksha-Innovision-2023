type Props = {
  label: string;
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
    <div className={"group flex flex-col items-start gap-2 my-4"}>
      <label htmlFor={label} className="text-black font-semibold text-lg">
        {label}{" "}
      </label>
      <input
        disabled={disable}
        {...otherProps}
        className={
          className ||
          "bg-gray-200 focus:outline-gray-300 text-gray-800 px-3 py-2 w-full rounded"
        }
      />
    </div>
  );
};

export default FormInput;
