import React from "react";

type Props = {
  name: string;
  email: string;
  rollno: string;
};

const TableRow = (props: Props) => {
  const { name, email, rollno } = props;

  return (
    <tr className="bg-white  ">
      <th
        scope="row"
        className="whitespace-nowrap border-r-2 border-black px-2 py-4 text-center font-medium text-gray-900 "
      >
        {name}
      </th>
      <td className="border-r-2 border-black px-2 py-4 text-center">{email}</td>
      <td className="border-r-2 border-black px-2 py-4 text-center">
        {rollno}
      </td>
      <td className="border-r-2 border-black px-2 py-4 text-center">Etc</td>
      <td className="border-r-2 border-black px-2 py-4 text-center">
        <a href="#" className="font-medium text-red-600  hover:underline">
          Remove
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
