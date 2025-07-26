import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const mockTrader = [
  {
    id: 1,
    name: "Sunil Mehta",
    phone: "8463857264",
    email: "sunil.mehta@gmail.com",
    serviceArea: "MP, Maharashtra",
    district: "Bhopal",
    gstNumber: "23ABCDE1234F1Z1",
    pan: "ABCDE1234F",
    bankHolder: "Sunil Mehta",
    ifsc: "SBIN0001234",
    accountNo: "1234567890",
    bankName: "State Bank of India",
    verified: "Pending",
    scale: "Large",
    productionVolume: "5000 eggs/day",
    adharUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    buisnessUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    panUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    about: "Sunil Mehta has over 15 years of experience in poultry farming and operates a modern farm with automated systems."
  },
  {
    id: 2,
    name: "Ravi Sharma",
    phone: "9123456789",
    email: "ravi.sharma@farmtraders.in",
    serviceArea: "UP, Bihar",
    district: "Varanasi",
    gstNumber: "09FGHIJ5678K2Z2",
    pan: "FGHIJ5678K",
    bankHolder: "Ravi Sharma",
    ifsc: "HDFC0005678",
    accountNo: "2345678901",
    bankName: "HDFC Bank",
    verified: "Approved",
    scale: "Medium",
    productionVolume: "3000 eggs/day",
    adharUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    buisnessUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    panUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    about: "Ravi focuses on high-quality supply and has a strong logistics chain for consistent deliveries in UP and Bihar."
  },
  {
    id: 3,
    name: "Anjali Verma",
    phone: "7984563210",
    email: "anjali.verma@poultrymart.com",
    serviceArea: "Rajasthan, Gujarat",
    district: "Jaipur",
    gstNumber: "08KLMNO3456P3Z3",
    pan: "KLMNO3456P",
    bankHolder: "Anjali Verma",
    ifsc: "ICIC0003456",
    accountNo: "3456789012",
    bankName: "ICICI Bank",
    verified: "Declined",
    scale: "Small",
    productionVolume: "1200 eggs/day",
    adharUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    buisnessUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    panUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    about: "Anjali is a small-scale organic egg trader supplying to premium markets in Jaipur and Ahmedabad."
  },
  {
    id: 4,
    name: "Rajeev Yadav",
    phone: "8877665544",
    email: "rajeev.yadav@agrilink.in",
    serviceArea: "Punjab, Haryana",
    district: "Ludhiana",
    gstNumber: "03PQRST6789U4Z4",
    pan: "PQRST6789U",
    bankHolder: "Rajeev Yadav",
    ifsc: "PNB0007890",
    accountNo: "4567890123",
    bankName: "Punjab National Bank",
    verified: "Approved",
    scale: "Large",
    productionVolume: "6000 eggs/day",
    adharUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    buisnessUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    panUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    about: "Rajeev is known for high biosecurity standards and bulk supplies to hotels and large vendors."
  },
  {
    id: 5,
    name: "Kiran Joshi",
    phone: "9345621789",
    email: "kiran.joshi@eggsupply.com",
    serviceArea: "Goa, Karnataka",
    district: "Panaji",
    gstNumber: "30ABCDE1234F5Z5",
    pan: "ABCDE1234F",
    bankHolder: "Kiran Joshi",
    ifsc: "BOI0007890",
    accountNo: "5678901234",
    bankName: "Bank of India",
    verified: "Pending",
    scale: "Medium",
    productionVolume: "2800 eggs/day",
    documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    about: "Kiran supplies to coastal hotels and supermarkets, focusing on freshness and timely delivery."
  },
  {
    id: 6,
    name: "Amit Rawat",
    phone: "9812345670",
    email: "amit.rawat@poultryworld.in",
    serviceArea: "Delhi, NCR",
    district: "Noida",
    gstNumber: "07FGHIJ1234V6Z6",
    pan: "FGHIJ1234V",
    bankHolder: "Amit Rawat",
    ifsc: "AXIS0001234",
    accountNo: "6789012345",
    bankName: "Axis Bank",
    verified: "Approved",
    scale: "Large",
    productionVolume: "7000 eggs/day",
    documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    about: "Amit runs one of the most organized poultry businesses in NCR with focus on data-driven operations."
  },
  {
    id: 7,
    name: "Neha Patel",
    phone: "9321009988",
    email: "neha.patel@greeneggs.in",
    serviceArea: "Maharashtra, Gujarat",
    district: "Surat",
    gstNumber: "24KLMNO9876W7Z7",
    pan: "KLMNO9876W",
    bankHolder: "Neha Patel",
    ifsc: "YESB0002345",
    accountNo: "7890123456",
    bankName: "Yes Bank",
    verified: "Declined",
    scale: "Small",
    productionVolume: "1000 eggs/day",
    documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    about: "Neha promotes cage-free, hormone-free eggs and ethical farming with women co-op partnerships."
  },
  {
    id: 8,
    name: "Sanjay Gupta",
    phone: "9001234567",
    email: "sanjay.gupta@farmxpress.com",
    serviceArea: "Chhattisgarh, Odisha",
    district: "Raipur",
    gstNumber: "22XYZAB1234D8Z8",
    pan: "XYZAB1234D",
    bankHolder: "Sanjay Gupta",
    ifsc: "UBIN0004321",
    accountNo: "8901234567",
    bankName: "Union Bank",
    verified: "Pending",
    scale: "Medium",
    productionVolume: "3500 eggs/day",
    documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    about: "Sanjay supports tribal farmers and supplies low-cost, high-nutrition eggs to state food programs."
  },
  {
    id: 9,
    name: "Pooja Iyer",
    phone: "9101234567",
    email: "pooja.iyer@eggdelights.in",
    serviceArea: "Tamil Nadu, Kerala",
    district: "Chennai",
    gstNumber: "33LMNOP5432Z9Z9",
    pan: "LMNOP5432Z",
    bankHolder: "Pooja Iyer",
    ifsc: "KARB0005432",
    accountNo: "9012345678",
    bankName: "Karnataka Bank",
    verified: "Approved",
    scale: "Large",
    productionVolume: "6500 eggs/day",
    documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    about: "Pooja runs a high-tech poultry unit and focuses on recyclable packaging and online grocery delivery."
  },
  {
    id: 10,
    name: "Manoj Tiwari",
    phone: "9876543210",
    email: "manoj.tiwari@poultryhub.in",
    serviceArea: "Jharkhand, West Bengal",
    district: "Ranchi",
    gstNumber: "20QRSTU9876X0Z0",
    pan: "QRSTU9876X",
    bankHolder: "Manoj Tiwari",
    ifsc: "IOBA0003210",
    accountNo: "0123456789",
    bankName: "Indian Overseas Bank",
    verified: "Declined",
    scale: "Small",
    productionVolume: "1500 eggs/day",
    documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    about: "Manoj focuses on rural market supply and aims to set up a cold chain system for egg preservation."
  },
  {
    id: 11,
    name: "Deepak Nair",
    phone: "9008765432",
    email: "deepak.nair@keralaeggs.in",
    serviceArea: "Kerala",
    district: "Kochi",
    gstNumber: "32ABCDE1234X1Z1",
    pan: "ABCDE1234X",
    bankHolder: "Deepak Nair",
    ifsc: "FDRL0003210",
    accountNo: "1122334455",
    bankName: "Federal Bank",
    verified: "Pending",
    scale: "Medium",
    productionVolume: "2500 eggs/day",
    documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    about: "Deepak is a health-conscious supplier known for Omega-3 enriched eggs and organic feed techniques."
  },
  {
    id: 12,
    name: "Sneha Kulkarni",
    phone: "9876123450",
    email: "sneha.kulkarni@eggsupreme.in",
    serviceArea: "Maharashtra",
    district: "Pune",
    gstNumber: "27ABCDE1234X2Z2",
    pan: "ABCDE1234X",
    bankHolder: "Sneha Kulkarni",
    ifsc: "MAHB0004567",
    accountNo: "6677889900",
    bankName: "Bank of Maharashtra",
    verified: "Approved",
    scale: "Medium",
    productionVolume: "3200 eggs/day",
    documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    about: "Sneha supplies farm-fresh eggs to urban markets and supports clean labeling and quality certification."
  }
];


const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Declined: "bg-red-100 text-red-800",
  Aprooved: "bg-green-100 text-red-800"
};





export default function TraderOnboarding() {
  const [search, setSearch] = useState("");
  const [District, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  // const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate();


  const itemsPerPage = 8;
  const filteredTrader = mockTrader.filter((trader) => {
    const matchesSearch = [trader.name, trader.serviceArea, trader.district, trader.email]
      .some((field) => field?.toLowerCase().includes(search.toLowerCase()));
    const matchesState = state ? trader.serviceArea.includes(state) : true;
    const matchesDistrict = District ? trader.serviceArea.includes(District) : true;
    const isNotApproved = trader.verified !== "Approved";
    return matchesSearch && matchesState && matchesDistrict && isNotApproved;
  });



  // const totalPages = Math.ceil(filteredTrader.length / itemPerPage);
  // const currentItems = filteredTrader.slice(currentPage - 1) * itemsPerPage,
  // currentPage * itemsPerPage );


  const openModal = (url) => {
    setSelectedDoc(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedDoc(null);
    setShowModal(false);
  };

  return (
    <div className="p-6  bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold dark:text-gray-100">Trader Onboarding Requests</h1>
      </div>
      <p className="text-sm text-gray-500 mb-4">Manage and monitor onboarding trader requests</p>

      {/* Search and Filters */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 dark:bg-slate-400">
        <input
          type="text"
          placeholder="Search by name, service area..."
          className="w-full md:w-1/3 p-2 border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-2 w-full md:w-auto">
          <select
            value={District}
            onChange={(e) => setDistrict(e.target.value)}
            className="p-2 border rounded-lg transition"
          >
            <option value="">All Districts</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Jaipur">Jaipur</option>
          </select>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="p-2 border rounded-lg transition"
          >
            <option value="">All State</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm border-slate-300 dark:border-gray-700">
          <thead className="bg-slate-100 dark:bg-slate-800 text-left justify-between">
            <tr>
              <th className="p-4 text-center">Trader Name</th>
              <th className="p-4 text-center">Phone</th>
              <th className="p-4 text-center">Scale</th>
              <th className="p-4 text-center">Location</th>
              <th className="p-4 text-center">Production</th>
              <th className="p-4 text-center">GST No</th>
              <th className="p-4 text-center">Document</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrader.map((trader) => (
              <tr key={trader.id} className="border-t dark:border-slate-700 dark:text-gray-200">
                <td className="p-4 text-center">{trader.name}</td>
                <td className="p-4 text-center">{trader.phone}</td>
                <td className="p-4 text-center">{trader.scale}</td>
                <td className="p-4 text-center">{trader.serviceArea}</td>
                <td className="p-4 text-center">{trader.productionVolume}</td>
                <td className="p-4 text-center">{trader.gstNumber}</td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => navigate(`/trader-request-view/${trader.id}?tab=documents`)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                </td>
                <td className="p-4 text-center">
                  <span
                    className={`px-4 py-1 rounded-full text-center text-xs font-medium ${statusColors[trader.verified]}`}
                  >
                    {trader.verified}
                  </span>
                </td>
                <td className="p-4 flex gap-3 justify-center">
                  <button
                    onClick={() => navigate(`/trader-request-view/${trader.id}`)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="text-left px-2 py-1 dark:text-gray-300">
          Showing {filteredTrader.length > 0 ? 1 : 0} to {filteredTrader.length} of {mockTrader.length} results
        </span>
        <div className="space-x-2 text-right">
          <button className="px-2 py-1 m-2 bg-gray-200 rounded">Previous</button>
          <button className="px-2 py-1 m-2 bg-green-500 text-white rounded">1</button>
          <button className="px-2 py-1 m-2 bg-gray-200 rounded">2</button>
          <button className="px-2 py-1 m-2 bg-gray-200 rounded">Next</button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && selectedDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-md shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"

            >
              &#x2715;
            </button>
            <h2 className="text-lg font-semibold mb-2">Trader Document</h2>
            <img
              src={selectedDoc}
              alt="Trader Document"
              className="w-full h-auto rounded border"
            />
          </div>
          
          
        </div>
      )}
    </div>
  );
}
