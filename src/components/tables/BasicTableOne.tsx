'use client'; // Pastikan directive ini ada di bagian atas file

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Button from "../ui/button/Button";
import { useRouter } from "next/navigation"; // Gunakan next/navigation untuk App Router

const LOCAL_STORAGE_KEY = "tableData";


type Progress = {
  progres_1: boolean;
  progres_2: boolean;
  progres_3: boolean;
  progres_4: boolean;
};


interface Order {
  no_invoice: string;
  nama_perusahaan: string;
  progress: {
    progres_1: boolean;
    progres_2: boolean;
    progres_3: boolean;
    progres_4: boolean;
  };
  handle_by: {
    progres_1: any;
    progres_2: any;
    progres_3: any;
    progres_4: any;
  };
  invoice_date: string;
  due_date: string;
}

type HandleBy = {
  progres_1: string | null;
  progres_2: string | null;
  progres_3: string | null;
  progres_4: string | null;
};

type TableData = {
  no_invoice: string;
  nama_perusahaan: string;
  progress: Progress;
  handle_by: HandleBy;
  invoice_date: string;
  due_date: string;
};

const defaultData: TableData[] = [
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
    "due_date": "2023-10-05",
    "dataBPO": [
      {
        approved: true,
        title: "Dept Sales",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
      {
        approved: true,
        title: "Director",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
      {
        approved: true,
        title: "Dept Sales",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
      {
        approved: true,
        title: "Customers",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
      {
        approved: true,
        title: "Dept Sales",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
    ],
    "dataPKS": [
      {
        approved: true,
        title: "Dept Sales",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
      {
        approved: true,
        title: "Customers",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
      {
        approved: true,
        title: "Dept Sales",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
    ],
    "dataBAST": [
      {
        approved: true,
        title: "Dept Sales",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
      {
        approved: true,
        title: "Customers",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
      {
        approved: true,
        title: "Dept Sales",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
    ],
    "dataINOVICE":[
      {
        approved: true,
        title: "Dept Sales",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
      {
        approved: true,
        title: "Dept Fin",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
      {
        approved: true,
        title: "Director",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
      {
        approved: true,
        title: "Customers",
        recieveDate: "2023-10-01",
        approvalDate: "2023-10-01",
        dueDate: "2023-10-01",
        attatchments: [
          
        ],
        description: "Diterima",
        approvedBy: "dodi",
        sentBy: "dodi",
        sentTo: "dodi"
      },
    ]
  }
,  
{
  "no_invoice": "#12301340",
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
  "due_date": "2023-10-05",
  "dataBPO": [
    {
      approved: true,
      title: "Dept Sales",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
    {
      approved: true,
      title: "Director",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
    {
      approved: true,
      title: "Dept Sales",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
    {
      approved: true,
      title: "Customers",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
    {
      approved: true,
      title: "Dept Sales",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
  ],
  "dataPKS": [
    {
      approved: true,
      title: "Dept Sales",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
    {
      approved: true,
      title: "Customers",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
    {
      approved: true,
      title: "Dept Sales",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
  ],
  "dataBAST": [
    {
      approved: true,
      title: "Dept Sales",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
    {
      approved: true,
      title: "Customers",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
    {
      approved: true,
      title: "Dept Sales",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
  ],
  "dataINOVICE":[
    {
      approved: true,
      title: "Dept Sales",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
    {
      approved: true,
      title: "Dept Fin",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
    {
      approved: true,
      title: "Director",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
    {
      approved: true,
      title: "Customers",
      recieveDate: "2023-10-01",
      approvalDate: "2023-10-01",
      dueDate: "2023-10-01",
      attatchments: [
        
      ],
      description: "Diterima",
      approvedBy: "dodi",
      sentBy: "dodi",
      sentTo: "dodi"
    },
  ]
},
// {
//   "no_invoice": "#12301340",
//   "nama_perusahaan": "PT Beta",
//   "progress": {
//     "progres_1": true,
//     "progres_2": false,
//     "progres_3": false,
//     "progres_4": false
//   },
//   "handle_by": {
//     "progres_1": "khal",
//     "progres_2": null,
//     "progres_3": null,
//     "progres_4": null
//   },
//   "invoice_date": "2023-10-02",
//   "due_date": "2023-10-06"
// },
// {
//   "no_invoice": "#12301341",
//   "nama_perusahaan": "PT Gamma",
//   "progress": {
//     "progres_1": true,
//     "progres_2": false,
//     "progres_3": false,
//     "progres_4": false
//   },
//   "handle_by": {
//     "progres_1": "aleep",
//     "progres_2": null,
//     "progres_3": null,
//     "progres_4": null
//   },
//   "invoice_date": "2023-10-03",
//   "due_date": "2023-10-07"
// },
// {
//   "no_invoice": "#12301342",
//   "nama_perusahaan": "PT Delta",
//   "progress": {
//     "progres_1": false,
//     "progres_2": false,
//     "progres_3": false,
//     "progres_4": false
//   },
//   "handle_by": {
//     "progres_1": null,
//     "progres_2": null,
//     "progres_3": null,
//     "progres_4": null
//   },
//   "invoice_date": "2023-10-04",
//   "due_date": "2023-10-08"
// },
// {
//   "no_invoice": "#12301343",
//   "nama_perusahaan": "PT Epsilon",
//   "progress": {
//     "progres_1": true,
//     "progres_2": true,
//     "progres_3": false,
//     "progres_4": false
//   },
//   "handle_by": {
//     "progres_1": "kibre",
//     "progres_2": "nina",
//     "progres_3": null,
//     "progres_4": null
//   },
//   "invoice_date": "2023-10-05",
//   "due_date": "2023-10-09"
// },
// {
//   "no_invoice": "#12301344",
//   "nama_perusahaan": "PT Zeta",
//   "progress": {
//     "progres_1": true,
//     "progres_2": false,
//     "progres_3": false,
//     "progres_4": false
//   },
//   "handle_by": {
//     "progres_1": "nada",
//     "progres_2": null,
//     "progres_3": null,
//     "progres_4": null
//   },
//   "invoice_date": "2023-10-06",
//   "due_date": "2023-10-10"
// },
// {
//   "no_invoice": "#12301345",
//   "nama_perusahaan": "PT Eta",
//   "progress": {
//     "progres_1": true,
//     "progres_2": true,
//     "progres_3": true,
//     "progres_4": true
//   },
//   "handle_by": {
//     "progres_1": "nada",
//     "progres_2": "sky",
//     "progres_3": "lila",
//     "progres_4": "dodi"
//   },
//   "invoice_date": "2023-10-07",
//   "due_date": "2023-10-11"
// },
// {
//   "no_invoice": "#12301346",
//   "nama_perusahaan": "PT Theta",
//   "progress": {
//     "progres_1": true,
//     "progres_2": true,
//     "progres_3": true,
//     "progres_4": false
//   },
//   "handle_by": {
//     "progres_1": "khal",
//     "progres_2": "khal",
//     "progres_3": "khal",
//     "progres_4": null
//   },
//   "invoice_date": "2023-10-08",
//   "due_date": "2023-10-12"
// },
// {
//   "no_invoice": "#12301347",
//   "nama_perusahaan": "PT Iota",
//   "progress": {
//     "progres_1": true,
//     "progres_2": true,
//     "progres_3": true,
//     "progres_4": false
//   },
//   "handle_by": {
//     "progres_1": "chris",
//     "progres_2": "khal",
//     "progres_3": "khal",
//     "progres_4": null
//   },
//   "invoice_date": "2023-10-09",
//   "due_date": "2023-10-13"
// },
// {
//   "no_invoice": "#12301348",
//   "nama_perusahaan": "PT Kappa",
//   "progress": {
//     "progres_1": true,
//     "progres_2": false,
//     "progres_3": false,
//     "progres_4": false
//   },
//   "handle_by": {
//     "progres_1": "chris",
//     "progres_2": null,
//     "progres_3": null,
//     "progres_4": null
//   },
//   "invoice_date": "2023-10-10",
//   "due_date": "2023-10-14"
// }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("id-ID", options).format(date);
};

export default function BasicTableOne() {
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter(); // Gunakan useRouter dari next/navigation
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      setTableData(JSON.parse(storedData));
    } else {
      setTableData(defaultData);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultData));
    }
    setLoading(false);
  }, []);

  const handleRowClick = (no_invoice: string) => {
    setExpandedRow(expandedRow === no_invoice ? null : no_invoice);
  };

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-md dark:text-gray-400"
                >No</TableCell>
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
                  Bussiness Proposal Offering
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-md dark:text-gray-400"
                >
                  PKS
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-md dark:text-gray-400"
                >
                  BAST
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-md dark:text-gray-400"
                >
                  Invoice & Tax Inovice
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-md dark:text-gray-400"
                >
                  Opsi
                </TableCell>
              </TableRow>
            </TableHeader>
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
                    <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-md dark:text-gray-400">
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={(e) => {
                          // e.stopPropagation();
                          window.location.href = `/details?invoice=${order.no_invoice.replace('#', '')}`;
                        }}
                      >
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  {expandedRow === order.no_invoice && (
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td colSpan={8}>
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