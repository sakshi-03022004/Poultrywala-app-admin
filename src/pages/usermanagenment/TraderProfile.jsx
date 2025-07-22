import React from 'react';
import { useParams } from 'react-router-dom';
import { tradersData } from './AproovedTraders';
import 'remixicon/fonts/remixicon.css';

const TraderProfile = () => {
  const { id } = useParams();
  const trader = tradersData.find(t => t.id === parseInt(id));
  const [activetab, setActivetab] = React.useState('profileoverview');

  if (!trader) return <div className="p-6 text-red-500">Trader not found</div>;

  // Tab Components
  const ProfileOverviewComponent = () => (
    <div className="p-4 text-sm text-gray-800 dark:text-gray-100">
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">About</h3>
        <p>{trader.about}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p><strong>Trader:</strong> {trader.business}</p>
        <p><strong>Phone:</strong> {trader.phone}</p>
        <p><strong>Email:</strong> {trader.email}</p>
        <p><strong>Location:</strong> {trader.location}</p>
        <p><strong>District:</strong> {trader.district}</p>
        <p><strong>GST:</strong> {trader.gst}</p>
        <p><strong>PAN:</strong> {trader.pan}</p>
        <p><strong>Bank Holder:</strong> {trader.bankHolder}</p>
        <p><strong>IFSC:</strong> {trader.ifsc}</p>
        <p><strong>Account No:</strong> {trader.accountNo}</p>
        <p><strong>Bank Name:</strong> {trader.bankName}</p>
        <p>
          <strong>Status:</strong>{' '}
          <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
            trader.status === 'Approved'
              ? 'bg-green-100 text-green-700'
              : trader.status === 'Pending'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {trader.status}
          </span>
        </p>
      </div>
    </div>
  );

  const OrdersComponent = () => (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Orders</h3>
      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
        <li>Order #1001 – 500 Eggs – Delivered</li>
        <li>Order #1002 – 200 Chickens – In Transit</li>
      </ul>
    </div>
  );

  const DocumentsComponent = () => (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Documents</h3>
      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
        <li>GST Certificate.pdf</li>
        <li>PAN Card.jpg</li>
      </ul>
    </div>
  );

  const RatingsComponent = () => (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Ratings</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">⭐ 4.5 / 5 from 36 reviews</p>
    </div>
  );

  return (
    <div className="p-2 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold m-2 text-gray-800 dark:text-gray-100 font-sans">Trader Profile</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section: Avatar and Info */}
        <div className="md:w-1/3 bg-white dark:bg-slate-900 rounded-xl p-6 shadow text-center">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop"
            alt="Trader Avatar"
            className="w-40 h-40 mx-auto rounded-full shadow mb-4 object-cover border-4 border-green-500"
          />
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-4">{trader.name}</p>
          <p className="text-sm text-gray-500"><i className="ri-mail-line"></i> {trader.email}</p>

          <div className="p-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex justify-between">
              <span><i className="ri-map-pin-line mr-1"></i>Location</span>
              <span>{trader.location}</span>
            </div>
            <div className="flex justify-between">
              <span><i className="ri-building-4-line"></i>Business</span>
              <span>{trader.business}</span>
            </div>
            <div className="flex justify-between">
              <span><i className="ri-phone-line"></i>Phone</span>
              <span>{trader.phone}</span>
            </div>
          </div>

          <div className="flex gap-14 justify-center mt-4 pb-6">
            <button className="px-6 py-2 bg-gray-100 dark:text-gray-100 border border-slate-500 rounded">Delete</button>
            <button className="px-6 py-2 bg-gray-100 dark:text-gray-100 border border-slate-500 rounded">Edit</button>
          </div>
        </div>

        {/* Right Section: Tabs and Content */}
        <div className="md:w-2/3 bg-white dark:bg-slate-900 rounded-xl shadow overflow-hidden">
          {/* Tabs */}
          <div className="flex items-center justify-between mb-4 border-b">
            {['profileoverview', 'orders', 'documents', 'ratings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActivetab(tab)}
                className={`w-1/4 text-center py-3 font-bold text-sm ${
                  activetab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activetab === 'profileoverview' && <ProfileOverviewComponent />}
          {activetab === 'orders' && <OrdersComponent />}
          {activetab === 'documents' && <DocumentsComponent />}
          {activetab === 'ratings' && <RatingsComponent />}
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

export default TraderProfile;
