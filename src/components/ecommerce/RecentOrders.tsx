'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import Button from "../ui/button/Button";

const LOCAL_STORAGE_KEY = "tableData";

type Progress = {
  progres_1: boolean;
  progres_2: boolean;
  progres_3: boolean;
  progres_4: boolean;
};

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

export default function RecentOrders() {
  const router = useRouter();
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      const filterPending = JSON.parse(storedData).filter((x) => {
        return Object.values(x.progress).findIndex(x => x == false) >= 0;
      })
      setTableData(filterPending);
    } else {
      const filterPending = JSON.parse(defaultData).filter((x) => {
        return Object.values(x.progress).findIndex(x => x == false) >= 0;
      })
      setTableData(filterPending);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filterPending));
    }
    setLoading(false);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Pending
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <svg
              className="stroke-current fill-white dark:fill-gray-800"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.29004 5.90393H17.7067"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7075 14.0961H2.29085"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
              <path
                d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
            </svg>
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
            onClick={() => {
              router.push('/basic-tables');
            }}
          >
            See all
          </button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 w-1/4"
              >
                No Invoice
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 w-1/4"
              >
                Nama Perusahaan
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 w-1/4"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 w-1/4"
              >
                Opsi
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((order, index) => { 
              const seacrhIndexValuesPending = Object.values(order.progress).findIndex(x => x == false);
              const seacrhIndexKeyPending = Object.keys(order.progress)[seacrhIndexValuesPending];
              return (
              <TableRow key={order.no_invoice} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <TableCell className="py-3">
                  <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                    {order.no_invoice}
                  </p>
                </TableCell>
                <TableCell className="py-3">
                  <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                    {order.nama_perusahaan}
                  </p>
                </TableCell>
                <TableCell className="py-3">
                  <Badge
                    size="sm"
                    color={"warning"}
                  >
                    {seacrhIndexKeyPending.replace("_", " ")}
                  </Badge>
                </TableCell>
                <TableCell className="py-3">
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => {
                      window.location.href = `/details?invoice=${order.no_invoice.replace('#', '')}`;
                    }}
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            )})}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}