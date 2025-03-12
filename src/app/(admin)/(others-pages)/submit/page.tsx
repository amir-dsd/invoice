'use client'
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Input from "@/components/form/input/InputField";
import Select from "@/components/form/Select";
import TextArea from "@/components/form/input/TextArea";
import Button from "@/components/ui/button/Button";
import ComponentCard from "@/components/common/ComponentCard";
import { useState } from "react";

export default function InvoiceForm() {
  const [formData, setFormData] = useState({
    nama_perusahaan: "",
    due_date: "",
    main_description: "",
    description: "",
    role: "",
    sentTo: "",
  });

  // Options for role dropdown
  const roleOptions = [
    { value: "", label: "Select role", disabled: true },
    { value: "Sales", label: "Sales" },
    { value: "Finance", label: "Finance" },
    { value: "Legal", label: "Legal" },
    { value: "Customer", label: "Customer" },
    { value: "Director", label: "Director" },
  ];

  // Options for sentTo dropdown
  const sentToOptions = [
    { value: "", label: "Select recipient", disabled: true },
    { value: "Jack", label: "Jack" },
    { value: "Morris", label: "Morris" },
    { value: "Wowza", label: "Wowza" },
  ];

  // Handle input changes
  const handleInputChange = (name: string, value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const actualValue = typeof value === 'string' 
      ? value 
      : value.target.value;
    
    setFormData(prev => ({
      ...prev,
      [name]: actualValue
    }));
  };

  // Handle select changes (for dropdowns)
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log(formData,"FORM")
    // Validate form fields
    if (!formData.nama_perusahaan.target.value || !formData.due_date || 
        !formData.main_description || !formData.description || 
        !formData.role || !formData.sentTo) {
      alert("Please fill in all required fields");
      return;
    }
    
    // Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(formData.due_date)) {
      alert("Please enter a valid date in YYYY-MM-DD format");
      return;
    }
    
    // Generate a random invoice number
    const invoiceNumber = `#${Math.floor(Math.random() * 10000000)}`;
    
    // Get current date for invoice_date
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Build the invoice object based on the example structure
    const invoiceObject = {
      no_invoice: invoiceNumber,
      nama_perusahaan: formData.nama_perusahaan.target.value,
      stage: 'Invoice',
      description: formData.main_description,
      progress: {
        progres_1: true,
        progres_2: false,
        progres_3: false,
        progres_4: false
      },
      handle_by: {
        progres_1: "System",
        progres_2: null,
        progres_3: null,
        progres_4: null
      },
      invoice_date: currentDate,
      due_date: formData.due_date,
      dataBPO: [
        {
          pending: false,
          approved: false,
          role: formData.role,
          title: formData.role === "Director" ? "Director" : `Dept ${formData.role}`,
          recieveDate: currentDate,
          approvalDate: null,
          dueDate: formData.due_date,
          attatchments: [],
          description: formData.description,
          approvedBy: null,
          sentBy: "System",
          sentTo: formData.sentTo,
        }
      ]
    };
    
    // Log the created object to console
    console.log(invoiceObject);
    
    // You might want to add API call or other actions here
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Invoice Form" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          {/* Company Information */}
          <ComponentCard title="Company Information">
            <div className="p-6.5">
              {/* Nama Perusahaan */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Nama Perusahaan <span className="text-meta-1">*</span>
                </label>
                <Input
                  type="text"
                  id="nama_perusahaan"
                  name="nama_perusahaan"
                  placeholder="Enter company name"
                  value={formData.nama_perusahaan}
                  onChange={(e) => handleInputChange("nama_perusahaan", e)}
                />
              </div>

              {/* Due Date */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Due Date <span className="text-meta-1">*</span>
                </label>
                <Input
                  type="date"
                  id="due_date"
                  name="due_date"
                  value={formData.due_date}
                  onChange={(e) => handleInputChange("due_date", e)}
                  min="1900-01-01"
                  max="2100-12-31"
                />
              </div>
            </div>
          </ComponentCard>

          {/* Assignment Information */}
          <ComponentCard title="Assignment Information">
            <div className="p-6.5">
              {/* Role */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Role <span className="text-meta-1">*</span>
                </label>
                <Select
                  options={roleOptions}
                  placeholder="Select role"
                  defaultValue={formData.role}
                  onChange={(value) => handleSelectChange("role", value)}
                />
              </div>

              {/* Sent To */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Sent To <span className="text-meta-1">*</span>
                </label>
                <Select
                  options={sentToOptions}
                  placeholder="Select recipient"
                  defaultValue={formData.sentTo}
                  onChange={(value) => handleSelectChange("sentTo", value)}
                />
              </div>
            </div>
          </ComponentCard>
        </div>

        <div className="space-y-6">
          {/* Description Information */}
          <ComponentCard title="Description Information">
            <div className="p-6.5">
              {/* Main Description */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Main Description <span className="text-meta-1">*</span>
                </label>
                <TextArea
                  id="main_description"
                  name="main_description"
                  rows={4}
                  placeholder="Enter main description"
                  value={formData.main_description}
                  onChange={(e) => handleInputChange("main_description", e)}
                />
              </div>

              {/* Description */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Description <span className="text-meta-1">*</span>
                </label>
                <TextArea
                  id="description"
                  name="description"
                  rows={3}
                  placeholder="Enter description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e)}
                />
              </div>
            </div>
          </ComponentCard>

          {/* Submit Button */}
          <ComponentCard title="Submit">
            <div className="p-6.5">
              <Button
                type="button"
                onClick={handleSubmit}
                className="w-full"
              >
                Submit Invoice
              </Button>
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}