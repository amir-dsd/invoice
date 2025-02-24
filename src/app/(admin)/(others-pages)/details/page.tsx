import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

// export const metadata: Metadata = {
//   title: "Next.js Blank Page | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Blank Page TailAdmin Dashboard Template",
// };

interface data {
  approved: boolean,
  title: string,
  recieveDate: string,
  approvalDate: string,
  dueDate: string,
  attatchments: any,
  description: string,
  approvedBy: string,
  sentBy: string,
  sentTo: string
}

const dataBPO: data[] = [
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
]

const dataPKS: data[] = [
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
]

const dataBAST: data[] = [
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
]

const dataINOVICE: data[] = [
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

const ProgressFlow = ({ data }: { data: data[] }) => {
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
              {item.title}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              <span className="font-medium">Receive Date:</span> {item.recieveDate}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              <span className="font-medium">Approval Date:</span> {item.approvalDate}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              <span className="font-medium">Due Date:</span> {item.dueDate}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Approved by: {item.approvedBy} | Sent by: {item.sentBy} | Sent to: {item.sentTo}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function DetailsPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Details Invoice" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Bagian Kiri: Detail Invoice */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
              Detail Invoice
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">Title:</span> Invoice #12345
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">Receive Date:</span> 2023-10-01
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">Due Date:</span> 2023-10-15
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">Documents:</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Alur Progres */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
              Alur Progres
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
                  BPO
                </h4>
                <ProgressFlow data={dataBPO} />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
                  PKS
                </h4>
                <ProgressFlow data={dataPKS} />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
                  BAST
                </h4>
                <ProgressFlow data={dataBAST} />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
                  INVOICE
                </h4>
                <ProgressFlow data={dataINOVICE} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}