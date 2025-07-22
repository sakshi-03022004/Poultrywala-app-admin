import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockCompanies } from './CompanyOnbording';
import 'remixicon/fonts/remixicon.css';

const CompanyRequestView = () => {
  const { id } = useParams();
  const company = mockCompanies.find(c => c.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('profileoverview');

  if (!company) return <div className="p-6 text-red-500">Company not found</div>;

  const ProfileOverviewComponent = () => (
    <div className="p-4 text-sm text-gray-800 dark:text-gray-100">
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">About</h3>
        <p>{company.about}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p><strong>Company:</strong> {company.name}</p>
        <p><strong>Phone:</strong> {company.phone}</p>
        <p><strong>Email:</strong> {company.email}</p>
        <p><strong>Location:</strong> {company.serviceArea}</p>
        <p><strong>District:</strong> {company.district}</p>
        <p><strong>GST:</strong> {company.gst}</p>
        <p><strong>PAN:</strong> {company.pan}</p>
        <p><strong>Bank Holder:</strong> {company.bankHolder}</p>
        <p><strong>IFSC:</strong> {company.ifsc}</p>
        <p><strong>Account No:</strong> {company.accountNo}</p>
        <p><strong>Bank Name:</strong> {company.bankName}</p>
        <p>
          <strong>Status:</strong>{' '}
          <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
            company.status === 'Approved'
              ? 'bg-green-100 text-green-700'
              : company.status === 'Pending'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {company.status}
          </span>
        </p>
      </div>
    </div>
  );

  const DocumentsComponent = () => (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-4">Submitted Documents</h3>
      <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
        <li>
          <span className="font-medium">GST Certificate:</span>{' '}
          <a href="#" className="text-blue-600 hover:underline">Download GST_Certificate.pdf</a>
        </li>
        <li>
          <span className="font-medium">PAN Card:</span>{' '}
          <a href="#" className="text-blue-600 hover:underline">Download PAN_Card.jpg</a>
        </li>
        <li>
          <span className="font-medium">Cancelled Cheque:</span>{' '}
          <a href="#" className="text-blue-600 hover:underline">Download Cheque_Image.png</a>
        </li>
        <li>
          <span className="font-medium">Company Registration:</span>{' '}
          <a href="#" className="text-blue-600 hover:underline">Download Company_Registration.pdf</a>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="p-2 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold m-2 text-gray-800 dark:text-gray-100 font-sans">Company Profile Review</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Panel */}
        <div className="md:w-1/3 bg-white dark:bg-slate-900 rounded-xl p-6 shadow text-center">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop"
            alt="Company Avatar"
            className="w-40 h-40 mx-auto rounded-full shadow mb-4 object-cover border-4 border-green-500"
          />
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-4">{company.name}</p>
          <p className="text-sm text-gray-500"><i className="ri-mail-line"></i> {company.email}</p>

          <div className="p-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex justify-between">
              <span><i className="ri-map-pin-line mr-1"></i>Location</span>
              <span>{company.serviceArea}</span>
            </div>
            <div className="flex justify-between">
              <span><i className="ri-building-4-line"></i>Business</span>
              <span>{company.contactPerson}</span>
            </div>
            <div className="flex justify-between">
              <span><i className="ri-phone-line"></i>Phone</span>
              <span>{company.phone}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 justify-center mt-4 pb-6">
            <button className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">Approve</button>
            <button className="px-6 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition">Decline</button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-2/3 bg-white dark:bg-slate-900 rounded-xl shadow overflow-hidden">
          <div className="flex items-center justify-between mb-4 border-b">
            {['profileoverview', 'documents'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-1/2 text-center py-3 font-bold text-sm ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {tab === 'profileoverview' ? 'Profile Overview' : 'Documents'}
              </button>
            ))}
          </div>

          {activeTab === 'profileoverview' && <ProfileOverviewComponent />}
          {activeTab === 'documents' && <DocumentsComponent />}
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-4 text-right">
        <button
          onClick={() => window.history.back()}
          className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-slate-900 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CompanyRequestView;
