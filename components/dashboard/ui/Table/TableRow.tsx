import React from "react";

type Props = {
  name: string;
  email: string;
  rollno: string;
};

const TableRow = (props: Props) => {
  const { name, email, rollno } = props;

  return (
    <tr className="bg-white  dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-2 border-r-2 border-black py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-2 border-r-2 border-black py-4 text-center">{email}</td>
      <td className="px-2 border-r-2 border-black py-4 text-center">
        {rollno}
      </td>
      <td className="px-2 border-r-2 border-black py-4 text-center">Etc</td>
      <td className="px-2 border-r-2 border-black py-4 text-center">
        <a href="#" className="font-medium text-red-600  hover:underline">
          Remove
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
