'use client'

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";
import Image from "next/image";

// interface Order {
//   id: number;
//   user: {
//     image: string;
//     name: string;
//     role: string;
//   };
//   projectName: string;
//   team: {
//     images: string[];
//   };
//   status: string;
//   budget: string;
// }

interface Order {
  no_invoice: string,
  nama_perusahaan: string,
  progress: {
    progres_1: boolean,
    progres_2: boolean,
    progres_3: boolean,
    progres_4: boolean,
  },
  handle_by: {
    progres_1: any,
    progres_2: any,
    progres_3: any,
    progres_4: any,
  },
  invoice_date: string,
  due_date: string
}

// Define the table data using the interface
// const tableData: Order[] = [
//   {
//     id: 1,
//     user: {
//       image: "/images/user/user-17.jpg",
//       name: "Lindsey Curtis",
//       role: "Web Designer",
//     },
//     projectName: "Agency Website",
//     team: {
//       images: [
//         "/images/user/user-22.jpg",
//         "/images/user/user-23.jpg",
//         "/images/user/user-24.jpg",
//       ],
//     },
//     budget: "3.9K",
//     status: "Active",
//   },
//   {
//     id: 2,
//     user: {
//       image: "/images/user/user-18.jpg",
//       name: "Kaiya George",
//       role: "Project Manager",
//     },
//     projectName: "Technology",
//     team: {
//       images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
//     },
//     budget: "24.9K",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     user: {
//       image: "/images/user/user-17.jpg",
//       name: "Zain Geidt",
//       role: "Content Writing",
//     },
//     projectName: "Blog Writing",
//     team: {
//       images: ["/images/user/user-27.jpg"],
//     },
//     budget: "12.7K",
//     status: "Active",
//   },
//   {
//     id: 4,
//     user: {
//       image: "/images/user/user-20.jpg",
//       name: "Abram Schleifer",
//       role: "Digital Marketer",
//     },
//     projectName: "Social Media",
//     team: {
//       images: [
//         "/images/user/user-28.jpg",
//         "/images/user/user-29.jpg",
//         "/images/user/user-30.jpg",
//       ],
//     },
//     budget: "2.8K",
//     status: "Cancel",
//   },
//   {
//     id: 5,
//     user: {
//       image: "/images/user/user-21.jpg",
//       name: "Carla George",
//       role: "Front-end Developer",
//     },
//     projectName: "Website",
//     team: {
//       images: [
//         "/images/user/user-31.jpg",
//         "/images/user/user-32.jpg",
//         "/images/user/user-33.jpg",
//       ],
//     },
//     budget: "4.5K",
//     status: "Active",
//   },
// ];

const tableData: Order[] = [
  {
    "no_invoice": "#12301339",
    "nama_perusahaan": "PT Alpha",
    "progress": {
      "progres_1": true,
      "progres_2": true,
      "progres_3": true,
      "progres_4": false
    },
    "handle_by": {
      "progres_1": "Ade",
      "progres_2": "Dadang",
      "progres_3": "Suep",
      "progres_4": null
    },
    "invoice_date": "2023-10-01",
    "due_date": "2023-10-05"
  },
  {
    "no_invoice": "#12301340",
    "nama_perusahaan": "PT Beta",
    "progress": {
      "progres_1": true,
      "progres_2": false,
      "progres_3": false,
      "progres_4": false
    },
    "handle_by": {
      "progres_1": "khal",
      "progres_2": null,
      "progres_3": null,
      "progres_4": null
    },
    "invoice_date": "2023-10-02",
    "due_date": "2023-10-06"
  },
  {
    "no_invoice": "#12301341",
    "nama_perusahaan": "PT Gamma",
    "progress": {
      "progres_1": true,
      "progres_2": false,
      "progres_3": false,
      "progres_4": false
    },
    "handle_by": {
      "progres_1": "aleep",
      "progres_2": null,
      "progres_3": null,
      "progres_4": null
    },
    "invoice_date": "2023-10-03",
    "due_date": "2023-10-07"
  },
  {
    "no_invoice": "#12301342",
    "nama_perusahaan": "PT Delta",
    "progress": {
      "progres_1": false,
      "progres_2": false,
      "progres_3": false,
      "progres_4": false
    },
    "handle_by": {
      "progres_1": null,
      "progres_2": null,
      "progres_3": null,
      "progres_4": null
    },
    "invoice_date": "2023-10-04",
    "due_date": "2023-10-08"
  },
  {
    "no_invoice": "#12301343",
    "nama_perusahaan": "PT Epsilon",
    "progress": {
      "progres_1": true,
      "progres_2": true,
      "progres_3": false,
      "progres_4": false
    },
    "handle_by": {
      "progres_1": "kibre",
      "progres_2": "nina",
      "progres_3": null,
      "progres_4": null
    },
    "invoice_date": "2023-10-05",
    "due_date": "2023-10-09"
  },
  {
    "no_invoice": "#12301344",
    "nama_perusahaan": "PT Zeta",
    "progress": {
      "progres_1": true,
      "progres_2": false,
      "progres_3": false,
      "progres_4": false
    },
    "handle_by": {
      "progres_1": "nada",
      "progres_2": null,
      "progres_3": null,
      "progres_4": null
    },
    "invoice_date": "2023-10-06",
    "due_date": "2023-10-10"
  },
  {
    "no_invoice": "#12301345",
    "nama_perusahaan": "PT Eta",
    "progress": {
      "progres_1": true,
      "progres_2": true,
      "progres_3": true,
      "progres_4": true
    },
    "handle_by": {
      "progres_1": "nada",
      "progres_2": "sky",
      "progres_3": "lila",
      "progres_4": "dodi"
    },
    "invoice_date": "2023-10-07",
    "due_date": "2023-10-11"
  },
  {
    "no_invoice": "#12301346",
    "nama_perusahaan": "PT Theta",
    "progress": {
      "progres_1": true,
      "progres_2": true,
      "progres_3": true,
      "progres_4": false
    },
    "handle_by": {
      "progres_1": "khal",
      "progres_2": "khal",
      "progres_3": "khal",
      "progres_4": null
    },
    "invoice_date": "2023-10-08",
    "due_date": "2023-10-12"
  },
  {
    "no_invoice": "#12301347",
    "nama_perusahaan": "PT Iota",
    "progress": {
      "progres_1": true,
      "progres_2": true,
      "progres_3": true,
      "progres_4": false
    },
    "handle_by": {
      "progres_1": "chris",
      "progres_2": "khal",
      "progres_3": "khal",
      "progres_4": null
    },
    "invoice_date": "2023-10-09",
    "due_date": "2023-10-13"
  },
  {
    "no_invoice": "#12301348",
    "nama_perusahaan": "PT Kappa",
    "progress": {
      "progres_1": true,
      "progres_2": false,
      "progres_3": false,
      "progres_4": false
    },
    "handle_by": {
      "progres_1": "chris",
      "progres_2": null,
      "progres_3": null,
      "progres_4": null
    },
    "invoice_date": "2023-10-10",
    "due_date": "2023-10-14"
  }
];

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("id-ID", options).format(date);
};

export default function BasicTableOne() {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const handleRowClick = (no_invoice: string) => {
    setExpandedRow(expandedRow === no_invoice ? null : no_invoice);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-md dark:text-gray-400"
                >
                  No
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-md dark:text-gray-400"
                >
                  No Invoice
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-md dark:text-gray-400"
                >
                  Nama Perusahaan / vendor
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-md dark:text-gray-400"
                >
                  Progres 1
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-md dark:text-gray-400"
                >
                  Progres 2
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-md dark:text-gray-400"
                >
                  Progres 3
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-md dark:text-gray-400"
                >
                  Progres 4
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order, index) => (
                <React.Fragment key={order.no_invoice}>
                <TableRow onClick={() => handleRowClick(order.no_invoice)} className="cursor-pointer hover:bg-gray-100">
                  <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-md dark:text-gray-400">
                    {index + 1}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-md dark:text-gray-400">
                    {order.no_invoice}
                  </TableCell>
                  <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-md dark:text-gray-400">
                    {order.nama_perusahaan}
                  </TableCell>
                  {Object.values(order.progress).map((status, idx) => (
                    <TableCell key={idx} className="px-5 py-3 text-gray-500 text-start text-theme-md dark:text-gray-400">
                      <div
                        className={`w-4 h-4 rounded-full ${
                          status ? "bg-green-500" : "bg-gray-300"
                        }`}
                      ></div>
                    </TableCell>
                  ))}
                </TableRow>
                {expandedRow === order.no_invoice && (
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td colSpan={7}>
                      <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                        <h3 className="font-semibold text-lg mb-2 text-gray-700 dark:text-white">
                          Detail for {order.no_invoice}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <p className="text-gray-600 dark:text-gray-300">
                            <strong>Nama Perusahaan:</strong> {order.nama_perusahaan}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300">
                            <strong>Invoice Date:</strong> {formatDate(order.invoice_date)}
                          </p>
                          {(() => {
                              const progressKeys = Object.keys(order.progress);
                              const lastCompletedIndex = progressKeys.findIndex(
                                (key) => !order.progress[key]
                              );

                              return (
                                <p className="text-gray-600 dark:text-gray-300">
                                  <strong>Processing Began:</strong>{" "}
                                  {/* {formatDate(order.due_date)},{" "} */}
                                  {lastCompletedIndex !== -1 ? progressKeys[lastCompletedIndex].replace("_", " ") : "Selesai"}
                                </p>
                              );
                            })()}
                          <p className="text-gray-600 dark:text-gray-300">
                            <strong>Due Date:</strong> {formatDate(order.due_date)}
                          </p>
                        </div>
                        <div className="mt-4">
                          <h4 className="text-md font-semibold text-gray-700 dark:text-white mb-2">Progress Status:</h4>
                          <div className="grid grid-cols-4 gap-4">
                            {Object.entries(order.progress).map(([key, value]) => (
                              <div key={key} className="items-center gap-2 mt-1">
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`w-4 h-4 rounded-full ${value ? "bg-green-500" : "bg-gray-300"}`}
                                  ></span>
                                  <span className="text-gray-600 dark:text-gray-300">{key.replace("_", " ")}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mt-2">
                                  <strong>Handle By:</strong> {order.handle_by[key] ?? "-"}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
