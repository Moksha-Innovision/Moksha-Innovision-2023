import { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { FaFileDownload } from "react-icons/fa";
type Props = {};

const ParticipantTable = (props: any) => {
  const tableRef = useRef(null);
  return (
    <div className="w-full pt-4">
      <div className="mb-2 flex gap-3 ">
        <DownloadTableExcel
          filename="User Registrations"
          sheet="Registrations"
          currentTableRef={tableRef.current}
        >
          <button className="flex flex-col items-center justify-center rounded-md  bg-yellow-200 bg-opacity-30 p-2 hover:bg-opacity-40">
            <FaFileDownload className="h-[30px] w-[30px]" />
            <span className="text-sm font-semibold">Get .XLS</span>
          </button>
        </DownloadTableExcel>
        <span className="flex flex-col items-center justify-center rounded-md  bg-yellow-200 bg-opacity-30 p-2 font-semibold hover:bg-opacity-40">
          Registrations : {props.data?.length}
        </span>
      </div>
      <div className="relative min-h-screen max-w-full overflow-x-auto overflow-y-auto rounded-lg shadow-md ">
        <table
          ref={tableRef}
          className="w-full text-left text-sm text-gray-500  "
        >
          <thead className="w-full bg-saffron-500 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className=" p-1 px-2 py-4 text-center">
                <div className="h-full w-full rounded-lg bg-yellow-200  p-2">
                  <span className="rounded-md  p-2">Name</span>
                </div>
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                <div className="h-full w-full rounded-lg bg-yellow-200 p-2">
                  <span className="rounded-md  p-2">Contact</span>
                </div>
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                <div className="h-full w-full rounded-lg bg-yellow-200 p-2">
                  <span className="rounded-md  p-2">Email</span>
                </div>
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                <div className="h-full w-full rounded-lg bg-yellow-200 p-2">
                  <span className="rounded-md  p-2">College</span>
                </div>
              </th>
              {props.data[0]?.t_name && (
                <th scope="col" className="px-2 py-4 text-center">
                  <div className="h-full w-full rounded-lg bg-yellow-200 p-2">
                    <span className="rounded-md  p-2">Team</span>
                  </div>
                </th>
              )}
              {props.data[0] &&
                Object.keys(props.data[0]?.form_data[0]).map((obj, k) => (
                  <th scope="col" key={k} className="  px-2 py-4 text-center">
                    <div className="h-full w-full rounded-lg bg-yellow-200 p-2">
                      <span className="rounded-md  p-2">{obj}</span>
                    </div>
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {props.data?.map((dobj: any, i: any) => (
              <tr key={i} className="bg-white  ">
                <td className="border-r-2 border-black px-2 py-4 text-center text-gray-900">
                  {dobj?.profiles?.name}
                </td>
                <td className="border-r-2 border-black px-2 py-4 text-center text-gray-900">
                  {dobj?.profiles?.contact}
                </td>
                <td className="border-r-2 border-black px-2 py-4 text-center text-gray-900">
                  {dobj?.profiles?.email}
                </td>
                <td className="border-r-2 border-black px-2 py-4 text-center text-gray-900">
                  {dobj?.profiles?.college}
                </td>
                {dobj?.t_name && (
                  <td className="border-r-2 border-black px-2 py-4 text-center text-gray-900">
                    {dobj?.t_name}
                  </td>
                )}
                {Object.keys(dobj?.form_data[0]).map((obj, k) => (
                  <td
                    key={k}
                    className="border-r-2 border-black px-2 py-4 text-center text-gray-900"
                  >
                    {dobj.form_data[0][obj]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*<ChakraProvider>
        <TableContainer>
          <Table ref={tableRef}>
            {/*<TableCaption>Imperial to metric conversion factors</TableCaption>}
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Contact</Th>
                <Th>Email</Th>
                <Th>College</Th>
                {props.data[0].t_name && <Th>Team</Th>}
                {Object.keys(props.data[0].form_data[0]).map((obj, k) => (
                  <Th key={k}>{obj}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {props.data.map((dobj: any, i: any) => (
                <Tr key={i}>
                  <Td>{dobj.profiles.name}</Td>
                  <Td>{dobj.profiles.contact}</Td>
                  <Td>{dobj.profiles.email}</Td>
                  <Td>{dobj.profiles.college}</Td>
                  {dobj.t_name && <Tr>{dobj.t_name}</Tr>}
                  {Object.keys(dobj.form_data[0]).map((obj, k) => (
                    <Td key={k}>{dobj.form_data[0][obj]}</Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
            {/*<Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
  </Tfoot>}
          </Table>
        </TableContainer>
      </ChakraProvider>*/}
    </div>
  );
};

export default ParticipantTable;

{
  /*const myJson = {
    Student: { name: "Jack", email: "jack@xyz.com" },
    "Student id": 888,
    Sponsors: [
      { name: "john", email: "john@@xyz.com" },
      { name: "jane", email: "jane@@xyz.com" },
    ],
  };
  return (
    <div className="App">
      {/* ===================== */
}
{
  /* HOW TO USE IT         */
}
{
  /* ===================== }
      <JsonToTable json={myJson} />
      {/* ===================== }
    </div>
  );
  <div className="relative max-h-[80vh] max-w-full overflow-x-auto overflow-y-auto rounded-lg shadow-md ">
        <table className="w-full text-left text-sm text-gray-500  ">
          <thead className="bg-saffron-500 text-xs uppercase text-gray-700  ">
            <tr>
              <th scope="col" className="px-2 py-4 text-center">
                <span className="rounded-md bg-gray-200 p-2">Name</span>
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                <span className="rounded-md bg-gray-200 p-2">Email</span>
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                <span className="rounded-md bg-gray-200 p-2">Roll No.</span>
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                <span className="rounded-md bg-gray-200 p-2">Branch</span>
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                <span className="rounded-md bg-gray-200 p-2">Disqualify?</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRow
              name="Anisdfdsferfdt"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
            <TableRow
              name="Anit"
              email="anitjha31@gmail.com"
              rollno="2021UCA1871"
            />
          </tbody>
        </table>
      </div>*/
}
