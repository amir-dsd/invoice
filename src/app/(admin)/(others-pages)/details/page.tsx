"use client";

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";

interface Data {
  approved: boolean;
  title: string;
  recieveDate: string;
  approvalDate: string;
  dueDate: string;
  attatchments: any[];
  description: string;
  approvedBy: string;
  sentBy: string;
  sentTo: string;
  invoiceNumber: string; // Ensure each data item has an invoiceNumber
}

const LOCAL_STORAGE_KEY = "tableData";

const ProgressFlow = ({ data }: { data: Data[] }) => (
  <div className="space-y-4">
    {data.map((item, index) => (
      <div key={index} className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="my-1 w-4 h-4 bg-blue-500 rounded-full"></div>
        </div>
        <div className="flex-1 border-b-2 border-solid">
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
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Documents: 
          </p>
          <img className="my-3 h-[50px] w-[50px]" src="https://iili.io/3JFsmDx.png"/>
        </div>
      </div>
    ))}
  </div>
);

export default function DetailsPage() {
  const queryParams = new URLSearchParams(window.location.search);
  const invoice = queryParams.get('invoice');
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (!invoice) return;

    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
    console.log("Stored Data:", storedData);

    const filteredData = storedData.filter((item: Data) => item.no_invoice === '#'+invoice);
    console.log(filteredData,'FILTEREDDATA')
    setData(filteredData);
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <PageBreadcrumb pageTitle={`Details Invoice #${invoice}`} />
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
                  <span className="font-medium text-gray-800 dark:text-white/90">Title:</span> Invoice #{invoice}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">Invoice Date:</span> {data[0].invoice_date}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">Due Date:</span> {data[0].due_date}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                <ProgressFlow data={data[0].dataBPO} />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
                  PKS
                </h4>
                <ProgressFlow data={data[0].dataPKS} />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
                  BAST
                </h4>
                <ProgressFlow data={data[0].dataBAST} />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
                  INVOICE
                </h4>
                <ProgressFlow data={data[0].dataINOVICE} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
