import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { tradersData } from './AproovedTraders';

const validationSchema = Yup.object({
  name: Yup.string().min(2).max(30).matches(/^[A-Za-z ]+$/, 'Only letters are allowed').required(),
  contact: Yup.string().matches(/^\d{10}$/, 'Enter a valid 10-digit number').required(),
  email: Yup.string().email().required(),
  aadharNumber: Yup.string().matches(/^\d{12}$/, 'Aadhar must be exactly 12 digits').required(),
  businessName: Yup.string().min(2).max(30).matches(/^[A-Za-z ]+$/, 'Only letters are allowed').required(),
  pin: Yup.string().matches(/^\d{6}$/, 'PIN must be 6 digits').required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  licence: Yup.string().required(),
  gst: Yup.string().required(),
  accountNumber: Yup.string().matches(/^\d{10}$/, 'Account number must be exactly 10 digits').required(),
  adharcard: Yup.mixed().test('fileSize', 'Max 2MB', value => !value || value.size <= 2000000).required(),
  businessLicence: Yup.mixed().test('fileSize', 'Max 2MB', value => !value || value.size <= 2000000).required(),
  addressProof: Yup.mixed().test('fileSize', 'Max 2MB', value => !value || value.size <= 2000000).required()
});

const TraderRegistration = () => {
  const initialValues = {
    name: '', contact: '', email: '', aadharNumber: '',
    businessName: '', pin: '', city: '', state: '',
    licence: '', gst: '', accountNumber: '',
    adharcard: null, businessLicence: null, addressProof: null
  };

  const handleFileChange = (setFieldValue, field, e) => {
    setFieldValue(field, e.currentTarget.files[0]);
  };

  return (
    <div className="max-w-[1000px] mx-auto p-3 bg-white rounded shadow  dark:bg-slate-800">
      <h2 className="text-2xl font-semibold mb-2 text-center dark:text-gray-100">Trader Registration</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          tradersData.push({
            id: tradersData.length + 1,
            name: values.name,
            contact: values.contact,
            email: values.email,
            aadharNumber: values.aadharNumber,
            businessName: values.businessName,
            status: 'Approved',
            pin: values.pin,
            city: values.city,
            state: values.state,
            licence: values.licence,
            gst: values.gst,
            accountNumber: values.accountNumber,
            adharcard: values.adharcard.name,
            businessLicence: values.businessLicence.name,
            pancard: values.addressProof.name
          });
          alert('Form submitted successfully!');
          resetForm();
        }}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-1.5">

            {/* Personal Information */}
            <fieldset className="border p-1 rounded">
              <legend className="text-sm font-medium px-1">Personal Information</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                <TextField label="Full Name" name="name" />
                <TextField label="Contact Number" name="contact" type="tel" />
                <TextField label="Email Address" name="email" type="email" />
                <TextField label="Aadhar Number" name="aadharNumber" />
              </div>
            </fieldset>

            {/* Business Info */}
            <fieldset className="border p-1 rounded mt-1.5">
              <legend className="text-sm font-medium px-1">Address Details</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                <TextField  label="Business Name" name="businessName" />
                <TextField  label="Licence Number" name="licence" />
                <TextField  label="GST Number" name="gst" />
                <TextField  label="City" name="city" />
                <TextField  label="State" name="state" />
                <TextField  label="PIN Code" name="pin" />
              </div>
            </fieldset>

            {/* Bank Info */}
            <fieldset className="border p-1 rounded mt-1.5">
              <legend className="text-sm font-medium px-1">Bank Details</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                <TextField label="Account Number" name="accountNumber" />
                <TextField label="IFSC Code" name="ifscCode" />
                <TextField label="Bank Holder Name" name="bankHolderName" />
                <TextField label="Bank Name" name="bankName" />

              </div>
            </fieldset>

            {/* Documents Upload */}
            <fieldset className="border p-1 rounded mt-1.5">
              <legend className="text-sm font-medium px-1">Upload Documents</legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10">
                <FileUpload label="Upload Aadharcard" name="adharcard" onChange={handleFileChange} setFieldValue={setFieldValue} />
                <FileUpload label="Upload Business Licence" name="businessLicence" onChange={handleFileChange} setFieldValue={setFieldValue} />
                <FileUpload label="Upload Address Proof (PAN)" name="addressProof" onChange={handleFileChange} setFieldValue={setFieldValue} />
              </div>
            </fieldset>

            <button type="submit" className="w-full bg-green-600 text-white mt-2 py-1 rounded hover:bg-green-700 text-sm">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const TextField = ({ label, name, type = 'text' }) => {
  const handleKey = (e) => {
    if (name === "name" || name === "businessName") {
      const allowed = /^[A-Za-z\s]*$/;
      if (!allowed.test(e.key)) e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col">
      <label className="mb-0.5 text-xs">{label}</label>
      <Field
        name={name}
        type={type}
        className="px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring blue-500"
        placeholder={`Enter ${label.toLowerCase()}`}
        onKeyPress={handleKey}
      />
      <ErrorMessage name={name} component="div" className="text-red-500 text-[0.65rem] mt-0.5" />
    </div>
  );
};

const FileUpload = ({ label, name, onChange, setFieldValue }) => (
  <div className="flex flex-col">
    <label className="mb-0.5 text-xs">{label}</label>
    <input
      type="file"
      name={name}
      accept=".pdf,.jpg,.jpeg,.png"
      onChange={(e) => onChange(setFieldValue, name, e)}
      className="px-2 py-1 border rounded focus:outline-none focus:ring"
    />
    <ErrorMessage name={name} component="div" className="text-red-500 text-[0.65rem] mt-0.5" />
  </div>
);

export default TraderRegistration;
