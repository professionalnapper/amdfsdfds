import React, { useState, useEffect } from 'react';
import Layout from '../../Layout';
import { Button, Input, Textarea } from '../../components/Form';
import { BiPlus } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
import { BsSend } from 'react-icons/bs';
import { IoArrowBackOutline } from 'react-icons/io5';
import { RiDeleteBinLine } from 'react-icons/ri'; // Importing the delete icon
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // Importing date picker
import 'react-datepicker/dist/react-datepicker.css'; // Date picker styles

// InvoiceProductsTable component
function InvoiceProductsTable({ data, functions, button }) {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 pl-3">Item</th>
            <th className="py-3 pl-3">Amount</th>
            {button && <th></th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-3 pl-3">{item.name}</td>
              <td className="py-3 pl-3">Php {item.amount.toFixed(2)}</td> {/* Display amount with "Php" */}
              {button && (
                <td className="py-3">
                  <button
                    className="flex items-center text-red-500 hover:text-red-700"
                    onClick={() => functions.deleteItem(index)}
                  >
                    <RiDeleteBinLine className="mr-1" /> Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CreateInvoice() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // State to hold selected date
  const [patientName, setPatientName] = useState(''); // State to hold patient's name
  const [invoiceId, setInvoiceId] = useState(''); // State to hold invoice ID
  const [currency, setCurrency] = useState('USD');
  const [newItem, setNewItem] = useState('');
  const [newItemAmount, setNewItemAmount] = useState('');
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0); // State to hold total amount
  const [paidAmount, setPaidAmount] = useState(''); // State to hold paid amount

  // Generate a unique invoice ID
  useEffect(() => {
    setInvoiceId(generateInvoiceId());
  }, []);

  function generateInvoiceId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < 6; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const addItem = () => {
    if (newItem.trim() !== '' && newItemAmount.trim() !== '') {
      const amount = parseFloat(newItemAmount);
      if (!isNaN(amount)) {
        setItems([...items, { name: newItem, amount }]);
        setNewItem('');
        setNewItemAmount('');
        setTotalAmount(totalAmount + amount); // Update total amount
      } else {
        toast.error('Please enter a valid amount');
      }
    }
  };

  const deleteItem = (index) => {
    const deletedItem = items[index];
    setItems(items.filter((item, i) => i !== index));
    setTotalAmount(totalAmount - deletedItem.amount); // Deduct the deleted item's amount from total
  };

  const handleChange = (e) => {
    const paid = e.target.value;
    setPaidAmount(paid);
  };

  const calculateChange = () => {
    if (paidAmount.trim() !== '') {
      const paid = parseFloat(paidAmount);
      if (!isNaN(paid)) {
        const change = paid - totalAmount;
        return change >= 0 ? `Php ${change.toFixed(2)}` : 'Invalid'; // Ensure change is not negative and display "Php"
      } else {
        return 'Invalid';
      }
    } else {
      return '';
    }
  };

  // Function to format date to words like "May 5, 2024"
  const formatDateToWords = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <Layout>
      <div className="flex items-center gap-4">
        <Link
          to="/invoices"
          className="bg-white border border-subMain border-dashed rounded-lg py-3 px-4 text-md"
        >
          <IoArrowBackOutline />
        </Link>
        <h1 className="text-xl font-semibold">Create Invoice</h1>
      </div>
      <div className="bg-white my-8 rounded-xl border-[1px] border-border p-5">
        {/* Patient Name */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 items-center">
          <div className="lg:col-span-3">
            <label className="text-sm font-semibold">Patient Name:</label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Enter patient name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
        </div>
        {/* products */}
        <div className="grid grid-cols-6 gap-6 mt-8">
          <div className="col-span-6 lg:col-span-4 p-6 border border-border rounded-xl overflow-hidden">
            <InvoiceProductsTable
              data={items}
              functions={{ deleteItem }}
              button={true}
            />
            {/* add */}
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter item"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              <input
                type="number"
                value={newItemAmount}
                onChange={(e) => setNewItemAmount(e.target.value)}
                placeholder="Amount"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              <button
                onClick={addItem}
                className="text-subMain flex-rows gap-2 rounded-lg border border-subMain border-dashed py-2 px-4 text-sm"
              >
                <BiPlus /> Add Item
              </button>
            </div>
          </div>
          {/* Total and payment section */}
          <div className="lg:col-span-2 col-span-6 flex flex-col gap-6">
            <Input
              label="Total Amount"
              color={true}
              type="number"
              value={totalAmount} // Display total amount
              onChange={(e) => setTotalAmount(parseFloat(e.target.value))} // Allow manual editing of total amount
              placeholder={'0000'}
            />
            <Input
              label="Paid"
              color={true}
              type="number"
              value={paidAmount} // Display paid amount
              onChange={handleChange} // Handle change in paid amount
              placeholder={'0000'}
            />
            <div className="flex gap-4">
              <p className="text-sm font-extralight">Change:</p>
              <h6 className="text-sm font-medium text-green-600">
                {calculateChange()} {/* Calculate and display change */}
              </h6>
            </div>
            {/* button */}
            <Button
              label="Save & Print Invoice"
              onClick={() => {
                const invoiceWindow = window.open('', '_blank');
                invoiceWindow.document.write('<html><head><title>Invoice</title>');
                invoiceWindow.document.write('<style>body {font-family: Arial, sans-serif;}</style>'); // Adding style
                invoiceWindow.document.write('</head><body>');
                invoiceWindow.document.write('<h2 style="text-align:center;">Invoice</h2>');
                // Displaying patient name
                invoiceWindow.document.write('<h4 style="text-align:center;">Patient Name: ' + patientName + '</h4>');
                // Displaying invoice ID (only in print)
                invoiceWindow.document.write('<h4 style="text-align:center;">Invoice ID: ' + invoiceId + '</h4>');
                // Displaying date in words
                invoiceWindow.document.write('<h4 style="text-align:center;">Date: ' + formatDateToWords(selectedDate) + '</h4>');
                // Displaying items and amounts in a table
                invoiceWindow.document.write('<table style="width:100%;"><tr><th style="text-align:left;">Item</th><th style="text-align:right;">Amount</th></tr>');
                items.forEach(item => {
                  invoiceWindow.document.write('<tr><td>' + item.name + '</td><td style="text-align:right;">Php ' + item.amount.toFixed(2) + '</td></tr>');
                });
                // Displaying total amount, paid amount, and change
                invoiceWindow.document.write('<tr><td style="text-align:right; padding-top:20px;">Total Amount:</td><td style="text-align:right; padding-top:20px;">Php ' + totalAmount.toFixed(2) + '</td></tr>');
                invoiceWindow.document.write('<tr><td style="text-align:right;">Paid:</td><td style="text-align:right;">Php ' + paidAmount + '</td></tr>');
                invoiceWindow.document.write('<tr><td style="text-align:right;">Change:</td><td style="text-align:right;">' + calculateChange() + '</td></tr>');
                invoiceWindow.document.write('</table>');
                invoiceWindow.document.write('<script>window.print()</script>'); // Printing automatically
                invoiceWindow.document.write('</body></html>');
                invoiceWindow.document.close();
              }}
              Icon={BsSend}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateInvoice;
