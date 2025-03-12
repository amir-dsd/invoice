"use client";

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { getUserData } from "../../../../../utils/auth";

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
  const [queryParams, setQueryParams] = useState<URLSearchParams | null>(null);
  const [invoice,setInvoice]=useState('')
  const [data, setData] = useState<Data[]>([]);
  const [dueDate, setDueDate] = useState<string>(''); // For Due Date
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [person, setPerson] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const userData=getUserData()
  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
  };


  useEffect(() => {
    if (typeof window !== "undefined") {
      setQueryParams(new URLSearchParams(window.location.search));
    }
  }, []);

  useEffect(() => {
    if (queryParams) {
      setInvoice(queryParams.get("invoice") || null);
    }
  }, [queryParams]);
  const handleSubmit = () => {
    setOpen(false);
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");

  
    // Filter the stored data based on invoice number
    const filteredData = storedData.filter((item: Data) => item.no_invoice === '#'+invoice);
  
    if (filteredData.length > 0) {
      // Find the invoice data
      const invoiceData = filteredData[0]; // Assuming only one match, based on invoice number
  
      // Check all possible arrays (dataBPO, dataPKS, dataBAST, dataINOVICE) for pending: true
      const allCategories = ['dataBPO', 'dataPKS', 'dataBAST', 'dataINOVICE'];
  
      let updated = false; // Flag to track if any update is made
  
      allCategories.forEach(category => {
        if (!updated && invoiceData[category]) {
          const array = invoiceData[category];
  
          // Find the first item with pending: true
          const pendingItem = array.find((item: any) => item.pending === true);
  
          if (pendingItem) {
            // Set the first pending item to pending: false
            pendingItem.pending = false;
            pendingItem.approvalDate=new Date().toISOString().split('T')[0]
  
            // Log the updated pending item
            console.log("Updated Pending Item:", pendingItem);
  
            // Append the new item with pending: true
            const newItem = {
              description,
              department,
              sentTo:person,
              sentBy:userData.username,
              attachments: attachment, // Assuming attachment is an array or relevant data
              pending: true, // Set pending to true for the new item
              recieveDate: new Date().toISOString().split('T')[0], // Current date as the receive date
              dueDate: dueDate || "", // Due date from the date picker
            };
            array.push(newItem);
  
            // Log the newly appended item
            console.log("Appended New Item:", newItem);
  
            updated = true; // Mark as updated to avoid further iterations
          }
        }
      });
  
      if (updated) {
        // After modification, store the updated data back to localStorage
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedData));
      } else {
        console.log("No pending items found.");
      }
    } else {
      console.log("Invoice not found.");
    }
  };
  useEffect(() => {
    if (!invoice) return;

    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
    console.log("Stored Data:", storedData);

    const filteredData = storedData.filter((item: Data) => item.no_invoice === '#'+invoice);
    const allData = [
      ...filteredData[0].dataBPO,
      ...filteredData[0].dataPKS,
      ...filteredData[0].dataBAST,
      ...filteredData[0].dataINOVICE
    ];
  
    const pendingItems = allData.filter(item => item.pending === true);
     console.log(pendingItems.map(item => item.sentTo))
    console.log(pendingItems,"PENDING ITEMS")
    setData(filteredData);
    setLoading(false);
  }, [invoice]);

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
      {/* Date picker for Due Date */}
      <input 
        type="date" 
        className="w-full border p-2 mb-2" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
      />
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
