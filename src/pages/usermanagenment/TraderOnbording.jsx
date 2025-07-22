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
    about: "Sunil Mehta has over 15 years of experience in the poultry industry, supplying high-quality eggs across MP and Maharashtra. His farms are fully automated, and he ensures hygienic production and packaging. Known for timely deliveries and excellent customer service, Sunil focuses on sustainable farming practices and organic feed. He plans to expand his reach to Southern India soon."
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
    about: "Ravi Sharma runs a mid-scale poultry business and is known for quality eggs and consistent supply. Based in Varanasi, he primarily serves markets in UP and Bihar. Ravi emphasizes humane poultry practices, eco-friendly packaging, and cost-effective supply chains. He has built strong relationships with local vendors and aims to become a top poultry distributor in Northern India."
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
    about: "Anjali Verma is a small-scale trader focused on supplying organic and chemical-free eggs to local markets in Jaipur and Ahmedabad. Despite her scale, she maintains high standards of cleanliness and quality. Her goal is to gain more certifications and expand her distribution. She often partners with women-led co-operatives to support rural employment."
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
    about: "Rajeev Yadav is a seasoned poultry entrepreneur with automated farms in Punjab. He maintains high biosecurity standards and supplies to major retailers and hotels. With a robust cold chain logistics system, Rajeev has built a reputation for reliability and freshness. His future plan includes exporting eggs and setting up a training center for new farmers."
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
    about: "Kiran Joshi has been active in the coastal egg distribution business, supplying to local supermarkets and beach resorts. With strong logistics and an eye for quality, she handles timely deliveries even in remote areas. Kiran is currently working on a tech-based inventory system to better manage orders and reduce spoilage."
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
    about: "Amit Rawat runs one of the most organized poultry supply businesses in NCR. His company supplies to retail chains, food delivery services, and hospitals. Amit emphasizes data-driven operations, quality control labs, and zero-waste farming. He's recently started investing in solar-powered facilities to lower carbon emissions."
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
    about: "Neha Patel started her egg business as a student project, which later grew into a small organic poultry farm. Her focus is on cage-free hens and hormone-free feed. She promotes ethical farming and partners with NGOs to spread awareness about healthy food habits. Her business, although small, has a loyal customer base."
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
    about: "Sanjay Gupta operates a chain of egg farms in semi-urban and tribal belts, providing jobs to locals. His team focuses on low-cost but high-nutrition egg varieties. Sanjay has collaborated with state programs to enhance food security and improve dietary habits among children in rural schools."
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
    about: "Pooja Iyer manages a modern poultry unit with automatic grading and quality control systems. She is known for her fresh supply chains to hotels, bakeries, and online grocery services. Pooja believes in customer satisfaction and has introduced recyclable cartons and a loyalty program for bulk buyers."
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
    about: "Manoj Tiwari is an independent trader supplying fresh eggs to schools and local groceries. He focuses on rural markets, maintaining low prices without compromising quality. Manoj’s vision is to build a cold storage unit to preserve unsold stock and minimize waste. He is also training youth in poultry basics."
  }
];




const statusColors = {

  Pending: "bg-yellow-200 text-yellow-900",
  Declined: "bg-red-200 text-red-900",
};

export default function TraderOnboarding() {
  const [search, setSearch] = useState("");
  const [District, setDistrict] = useState("");
  const [state,setState] = useState("");
  const navigate = useNavigate();

  const filteredTrader = mockTrader.filter((trader) => {
     const matchesSearch =
      [trader.name, trader.serviceArea, trader.contactPerson,].some((field) =>
        field.toLowerCase().includes(search.toLowerCase())
      );
    const matchesState = state ? trader.serviceArea.includes(state): true;
    const matchesDistrict = District ? trader.serviceArea.includes(District) : true;

    const isNotAprooved = trader.verified !== "Approved";
    return matchesSearch && matchesState && matchesDistrict && isNotAprooved;
    
  });


  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold dark:text-gray-100">Trader Onboarding Requests</h1>
        {/* <button
          onClick={() => navigate("/trader-registration")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + New Trader
        </button> */}
      </div>


            <p className="text-sm text-gray-500 mb-4">Manage and monitor onboarding trader requests</p>


      <div >
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <input 
          type="text"
          placeholder="Search companies by name, head name, phone... "
          className="w-full md:w-1/3 p-2 border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
           />
           <div className="flex gap-2 w-full md:w-auto">
            <select 
             value={District}
             onChange={(e) => setDistrict(e.target.value)}
             className="p-2 border  rounded-lg transition"
             >
            <option value="">All Districts</option>
            <option value="MP">Bhopal</option>
             </select>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="p-2 border  rounded-lg transition"
          >
            <option value="">All State</option>
            <option value="Rajasthan">Rajsthan</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharastra">Maharashtra</option>

            
          </select>
          
        </div>

        </div>
        
      </div>
     

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm border-slate-300 dark:border-gray-700">
          <thead className="bg-slate-100 dark:bg-slate-800 text-left justify-between">
            <tr>
              
              <th className="p-4 text-center">Trader Name</th>
              <th className="p-4 text-center">Phone</th>
              <th className="p-4 text-center">Operation Scale</th>
              <th className="p-4 text-center">Location</th>
              <th className="p-4 text-center">Production</th>
              <th className="p-4 text-center">GST No</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrader.map((trader) => (
              <tr
                key={trader.id}
                className="border-t dark:border-slate-700 text-left justify-between dark:text-gray-200"
              >
                <td className="p-4 text-center">{trader.name}</td>
                <td className="p-4 text-center">{trader.phone}</td>
                <td className="p-4 text-center">{trader.scale}</td>
                <td className="p-4 text-center">{trader.serviceArea}</td>
                <td className="p-4 text-center">{trader.productionVolume}</td>
                <td className="p-4 text-center">{trader.gstNumber}</td>
                <td className="p-4 text-center">
                 
                {/* </td>
                <td className="p-3"> */}
                  <span
                    className={`px-4 py-1 rounded-full text-center text-xs font-medium ${statusColors[trader.verified]}`}
                  >
                    {trader.verified}
                  </span>
                </td>
                <td className="p-4  flex gap-3 text-center space-x-1">
                   <button
                    onClick={() => navigate(`/trader-request-view/${trader.id}`)}
                    className="text-blue-600 text-center hover:underline decoration-none"
                  >
                    View
                  </button>
                  {/* <button className="text-green-600 hover:text-green-800 text-sm">Approve</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Decline</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
    </div>
  );
}
