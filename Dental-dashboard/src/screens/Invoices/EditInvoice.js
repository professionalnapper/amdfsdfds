import React, { useState } from 'react';
import Layout from '../../Layout';
import { Button, FromToDate, Input, Select, Textarea } from '../../components/Form';
import { BiChevronDown, BiPlus } from 'react-icons/bi';
import PatientMedicineServiceModal from '../../components/Modals/PatientMedicineServiceModal';
import { invoicesData, sortsDatas } from '../../components/Datas';
import { toast } from 'react-hot-toast';
import { BsSend } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import { InvoiceProductsTable } from '../../components/Tables';
import SenderReceverComp from '../../components/SenderReceverComp';

function EditInvoice() {
  const { id } = useParams();
  const [dateRange, setDateRange] = useState([new Date(), new Date(new Date().setDate(new Date().getDate() + 7))]);
  const [currency, setCurrency] = useState(sortsDatas.currency[0]);
  const [isOpen, setIsOpen] = useState(false); // State to manage the visibility of PatientMedicineServiceModal

  const onChangeDates = (update) => {
    setDateRange(update);
  };

  const invoice = invoicesData.find((invoice) => invoice.id.toString() === id);

  return (
    <Layout>
      {isOpen && (
        <PatientMedicineServiceModal
          closeModal={() => setIsOpen(false)}
          isOpen={isOpen}
          patient={true}
        />
      )}
      <div className="flex items-center gap-4">
        <Link to="/invoices" className="bg-white border border-subMain border-dashed rounded-lg py-3 px-4 text-md">
          <IoArrowBackOutline />
        </Link>
        <h1 className="text-xl font-semibold">Edit Invoice</h1>
      </div>
      <div className="bg-white my-8 rounded-xl border-[1px] border-border p-5">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 items-center">
          <div className="lg:col-span-3">
            <img src="/images/healthflow-logo.png" alt="logo" className=" w-32 object-contain" />
          </div>
          <div className="flex flex-col gap-4">
            <FromToDate startDate={dateRange[0]} endDate={dateRange[1]} label="Dates" onChange={onChangeDates} />
          </div>
        </div>
        <SenderReceverComp
          item={invoice?.to}
          functions={{
            openModal: () => {
              setIsOpen(true); // Open PatientMedicineServiceModal
            },
          }}
          button={true}
        />
        <div className="grid grid-cols-6 gap-6 mt-8">
          <div className="lg:col-span-4 col-span-6 p-6 border border-border rounded-xl overflow-hidden">
            <InvoiceProductsTable
              data={invoice?.items}
              functions={{
                deleteItem: (id) => {
                  toast.error('This feature is not available yet');
                },
              }}
              button={true}
            />
            <button
              onClick={() => setIsOpen(true)} // Open PatientMedicineServiceModal when the button is clicked
              className=" text-subMain flex-rows gap-2 rounded-lg border border-subMain border-dashed py-4 w-full text-sm mt-4"
            >
              <BiPlus /> Add Item
            </button>
          </div>
          <div className="lg:col-span-2 col-span-6 flex flex-col gap-6">
            <Select
              selectedPerson={currency}
              setSelectedPerson={setCurrency}
              datas={sortsDatas?.currency}
            >
              <div className="h-14 w-full text-xs text-main rounded-md border border-border px-4 flex items-center justify-between">
                <p>{currency?.name}</p>
                <BiChevronDown className="text-xl" />
              </div>
            </Select>
            <div className="grid sm:grid-cols-2 gap-6">
              <Input label="Discount" color={true} type="number" placeholder={'3000'} />
              <Input label="Tax(%)" color={true} type="number" placeholder={'3'} />
            </div>
            <div className="flex-btn gap-4">
              <p className="text-sm font-extralight">Sub Total:</p>
              <h6 className="text-sm font-medium">$459</h6>
            </div>
            <div className="flex-btn gap-4">
              <p className="text-sm font-extralight">Discount:</p>
              <h6 className="text-sm font-medium">$49</h6>
            </div>
            <div className="flex-btn gap-4">
              <p className="text-sm font-extralight">Tax:</p>
              <h6 className="text-sm font-medium">$4.90</h6>
            </div>
            <div className="flex-btn gap-4">
              <p className="text-sm font-extralight">Grand Total:</p>
              <h6 className="text-sm font-medium text-green-600">$6000</h6>
            </div>
            <Textarea
              label="Notes"
              placeholder="Thank you for your business. We hope to work with you again soon!"
              color={true}
              rows={3}
            />
            <Button
              label="Update"
              onClick={() => {
                toast.error('This feature is not available yet');
              }}
              Icon={BsSend}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EditInvoice;
