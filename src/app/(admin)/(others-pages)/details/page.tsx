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
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [person, setPerson] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log({ description, department, person, attachment });
    setOpen(false);
  };
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
              <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded">Open Modal</button>
            </div>
          </div>
          {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Submit Details</h2>
            <textarea 
              className="w-full border p-2 mb-2" 
              placeholder="Enter description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
            />
            <select className="w-full border p-2 mb-2" value={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value="">Select Department</option>
              <option value="sales">Sales</option>
<option value="director">Director</option>
<option value="customers">Customers</option>
<option value="finance">Finance</option>
<option value="legal">Legal</option>
            </select>
            <select className="w-full border p-2 mb-2" value={person} onChange={(e) => setPerson(e.target.value)}>
  <option value="">Select Person</option>
  <option value="john">John Doe</option>
  <option value="jane">Jane Smith</option>
  <option value="michael">Michael Johnson</option>
  <option value="emily">Emily Davis</option>
  <option value="david">David Wilson</option>
  <option value="sophia">Sophia Martinez</option>
  <option value="james">James Brown</option>
  <option value="olivia">Olivia Taylor</option>
  <option value="robert">Robert Anderson</option>
  <option value="emma">Emma Thomas</option>
</select>
            <input type="file" className="w-full border p-2 mb-2" onChange={handleFileChange} />
            <div className="flex justify-end space-x-2">
              <button onClick={() => setOpen(false)} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
              <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
            </div>
          </div>
        </div>
      )}

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
