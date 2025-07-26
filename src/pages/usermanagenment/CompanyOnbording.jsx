import { useState } from "react";
import { useNavigate } from "react-router-dom";

const statusColors = {
  "Verified On-Site": "bg-green-300 text-white-700",
  Pending: "bg-yellow-200 text-yellow-700",
  Declined: "bg-red-200 text-red-700",
};

export const mockCompanies = [
  {
    id: 1,
    name: "AgroFresh Pvt Ltd",
    contactPerson: "Sunil Mehta",
    phone: "9876543210",
    email: "sunil@agrofresh.com",
    gst: "22ABCDE1234F1Z5",
    pan: "ABCDE1234F",
    bankHolder: "AgroFresh Pvt Ltd",
    accountNo: "1234567890",
    bankName: "State Bank of India",
    ifsc: "SBIN0001234",
    scale: "Large",
    farmsManaged: 50,
    productionVolume: "10000 tons/year",
    serviceArea: "North India",
    documents: ["pan.pdf", "gst.pdf", "bank_statement.pdf"],
    documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
    verified: "Approved",
    about:
      "AgroFresh Pvt Ltd is a leading agricultural company specializing in modern and organic farming practices. Established in 2005, the company manages over 50 farms and produces a variety of crops, vegetables, and fruits that are distributed across Northern India. Their mission is to enhance food quality through sustainable and innovative farming solutions.",
  },
  {
    id: 2,
    name: "Green Harvest Ltd",
    contactPerson: "Priya Sharma",
    phone: "9812345678",
    email: "priya@greenharvest.com",
    gst: "07ABCDE5678G1Z7",
    pan: "ABCDE5678G",
    bankHolder: "Green Harvest Ltd",
    accountNo: "2345678901",
    bankName: "HDFC Bank",
    ifsc: "HDFC0004321",
    scale: "Medium",
    farmsManaged: 20,
    productionVolume: "4500 tons/year",
    serviceArea: "Delhi NCR",
    documents: ["pan.pdf", "license.pdf", "gst.pdf"],
        documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",

    verified: "Approved",
    about:
      "Green Harvest Ltd is committed to promoting eco-friendly farming techniques while maintaining high productivity. With 20 operational farms, they supply organic produce to various cities in Delhi NCR and aim to support local farmers through training and employment.",
  },
  {
    id: 3,
    name: "Bharat Agro Solutions",
    contactPerson: "Ravi Kumar",
    phone: "9123456789",
    email: "ravi@bharatagro.com",
    gst: "27ABCDR2345P2Z8",
    pan: "ABCDR2345P",
    bankHolder: "Bharat Agro Solutions",
    accountNo: "3456789012",
    bankName: "ICICI Bank",
    ifsc: "ICIC0000456",
    scale: "Large",
    farmsManaged: 60,
    productionVolume: "12000 tons/year",
    serviceArea: "Pan India",
    documents: ["license.pdf", "pan.pdf", "gst.pdf"],
        documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",

    verified: "Pending",
    about:
      "Bharat Agro Solutions is a large-scale farming company engaged in growing and distributing grains, cereals, and pulses across India. They integrate advanced technology and sustainable practices to meet the growing food demands of the country.",
  },
  {
    id: 4,
    name: "FreshRoots Organics",
    contactPerson: "Anjali Verma",
    phone: "9988776655",
    email: "anjali@freshroots.com",
    gst: "24XYZAB1234C1Z2",
    pan: "XYZAB1234C",
    bankHolder: "FreshRoots Organics",
    accountNo: "4567890123",
    bankName: "Axis Bank",
    ifsc: "UTIB0001234",
    scale: "Small",
    farmsManaged: 5,
    productionVolume: "800 tons/year",
    serviceArea: "Gujarat",
    documents: ["license.pdf", "certificate.pdf"],
        documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",

    verified: "Approved",
    about:
      "FreshRoots Organics focuses on cultivating purely organic vegetables and fruits. With a small team and limited but high-quality production, they target health-conscious consumers and local organic food markets in Gujarat.",
  },
  {
    id: 5,
    name: "AgriGrow Co.",
    contactPerson: "Manoj Singh",
    phone: "9876501234",
    email: "manoj@agrigrow.com",
    gst: "09MNSHP2345H1Z9",
    pan: "MNSHP2345H",
    bankHolder: "AgriGrow Co.",
    accountNo: "5678901234",
    bankName: "Punjab National Bank",
    ifsc: "PUNB0123456",
    scale: "Medium",
    farmsManaged: 18,
    productionVolume: "3500 tons/year",
    serviceArea: "Uttar Pradesh",
    documents: ["pan.pdf", "gst.pdf"],
        documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",

    verified: "Declined",
    about:
      "AgriGrow Co. supports local agriculture by providing both farming and distribution services to small-scale farmers. Their mission is to enhance farm productivity through affordable services and digital support.",
  },
  {
    id: 6,
    name: "HarvestHub India",
    contactPerson: "Sneha Rathi",
    phone: "9012345678",
    email: "sneha@harvesthub.in",
    gst: "08GHJKL6789P1Z6",
    pan: "GHJKL6789P",
    bankHolder: "HarvestHub India",
    accountNo: "6789012345",
    bankName: "Kotak Mahindra Bank",
    ifsc: "KKBK0005678",
    scale: "Large",
    farmsManaged: 40,
    productionVolume: "9000 tons/year",
    serviceArea: "Rajasthan",
    documents: ["certificate.pdf", "gst.pdf"],
        documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",

    verified: "Approved",
    about:
      "HarvestHub India is a large-scale farm management company working in Rajasthan, offering a network of farms that grow cereals and oilseeds. They utilize tech-enabled solutions for improving yield and managing resources efficiently.",
  },
  {
    id: 7,
    name: "Organic Bloom Farms",
    contactPerson: "Neha Gupta",
    phone: "9821345678",
    email: "neha@organicbloom.com",
    gst: "33LKMNB9876F1Z4",
    pan: "LKMNB9876F",
    bankHolder: "Organic Bloom Farms",
    accountNo: "7890123456",
    bankName: "Bank of Baroda",
    ifsc: "BARB0AGRICO",
    scale: "Small",
    farmsManaged: 8,
    productionVolume: "1200 tons/year",
    serviceArea: "Tamil Nadu",
    documents: ["license.pdf", "tax_doc.pdf"],
        documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",

    verified: "Approved",
    about:
      "Organic Bloom Farms is a small collective of farmers working to bring pesticide-free and naturally grown produce to markets in Tamil Nadu. They emphasize eco-conscious practices and have received multiple sustainability certifications.",
  },
  {
    id: 8,
    name: "AgroTech Solutions",
    contactPerson: "Rajeev Joshi",
    phone: "9701234567",
    email: "rajeev@agrotech.com",
    gst: "10POIUY1234Z1A6",
    pan: "POIUY1234Z",
    bankHolder: "AgroTech Solutions",
    accountNo: "8901234567",
    bankName: "Yes Bank",
    ifsc: "YESB0000456",
    scale: "Large",
    farmsManaged: 55,
    productionVolume: "11000 tons/year",
    serviceArea: "Bihar and Jharkhand",
    documents: ["pan.pdf", "address_proof.pdf"],
        documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",

    verified: "Pending",
    about:
      "AgroTech Solutions empowers farmers by integrating IoT-based monitoring systems across 50+ farms. They ensure consistent quality and transparency in supply chains for grains, pulses, and oil crops.",
  },
  {
    id: 9,
    name: "Nature's Basket",
    contactPerson: "Divya Kapoor",
    phone: "9612345678",
    email: "divya@naturesbasket.com",
    gst: "18ASDFG4567B1Z3",
    pan: "ASDFG4567B",
    bankHolder: "Nature's Basket",
    accountNo: "9012345678",
    bankName: "IDFC First Bank",
    ifsc: "IDFB0045678",
    scale: "Medium",
    farmsManaged: 22,
    productionVolume: "4000 tons/year",
    serviceArea: "Assam and Northeast",
    documents: ["id_proof.pdf", "farm_license.pdf"],
        documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",

    verified: "Approved",
    about:
      "Nature’s Basket is known for its high-altitude organic farming in Assam. They promote biodiversity, native crops, and green packaging for eco-conscious delivery throughout Northeast India.",
  },
  {
    id: 10,
    name: "FarmTech India",
    contactPerson: "Amit Patel",
    phone: "9345678901",
    email: "amit@farmtechindia.com",
    gst: "06ZXCVB6789N1Z2",
    pan: "ZXCVB6789N",
    bankHolder: "FarmTech India",
    accountNo: "0123456789",
    bankName: "IndusInd Bank",
    ifsc: "INDB0000456",
    scale: "Large",
    farmsManaged: 65,
    productionVolume: "13000 tons/year",
    serviceArea: "Haryana and Punjab",
    documents: ["gst.pdf", "insurance.pdf"],
        documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",

    verified: "Approved",
    about:
      "FarmTech India specializes in large-scale, tech-driven agriculture. Their operations are spread across Haryana and Punjab, focusing on precision farming and automated irrigation for maximum yield.",
  },
  {
    id: 11,
    name: "Krishi Sathi Enterprises",
    contactPerson: "Meera Nair",
    phone: "9234567890",
    email: "meera@krishisathi.com",
    gst: "23LKJHG1234D1Z5",
    pan: "LKJHG1234D",
    bankHolder: "Krishi Sathi Enterprises",
    accountNo: "1122334455",
    bankName: "Canara Bank",
    ifsc: "CNRB0001234",
    scale: "Small",
    farmsManaged: 10,
    productionVolume: "1500 tons/year",
    serviceArea: "Madhya Pradesh",
    documents: ["pan.pdf", "license.pdf"],
        documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",

    verified: "Declined",
    about:
      "Krishi Sathi Enterprises is a grassroots farming collective that brings together independent farmers in Madhya Pradesh. Their strength lies in collaborative decision-making and traditional farming wisdom.",
  },
  {
    id: 12,
    name: "Harvest India Ltd",
    contactPerson: "Tarun Bansal",
    phone: "9871234560",
    email: "tarun@harvestindia.com",
    gst: "30QWERT1234Y1Z8",
    pan: "QWERT1234Y",
    bankHolder: "Harvest India Ltd",
    accountNo: "9988776655",
    bankName: "Federal Bank",
    ifsc: "FDRL0004567",
    scale: "Large",
    farmsManaged: 70,
    productionVolume: "15000 tons/year",
    serviceArea: "All India",
    documents: ["bank.pdf", "pan.pdf", "gst.pdf"],
        documentUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",

    verified: "Approved",
    about:
      "Harvest India Ltd is a national-level agro-industrial firm that manages a vast network of farms across India. Their primary focus is food security and efficient logistics, with exports to neighboring countries.",
  },
];




export default function CompanyOnboarding() {
  const [search, setSearch] = useState("");

  const [District, setDistrict] = useState(null);
  const [state, setState] = useState("");

  
  const navigate = useNavigate();

  const openCompanyRegistrationForm = () => {
    navigate("/company-registration");
  };

  const filteredCompanies = mockCompanies.filter((company) => {
     const matchesSearch =
      [company.name, company.serviceArea, company.contactPerson,].some((field) =>
        field.toLowerCase().includes(search.toLowerCase())
      );
    const matchesState = state ? company.serviceArea.includes(state): true;
    const matchesDistrict = District ? company.serviceArea.includes(District) : true;

    const isNotAprooved = company.verified !== "Approved";
    return matchesSearch && matchesState && matchesDistrict && isNotAprooved;
    
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold dark:text-gray-100">Company Onboarding</h1>
        {/* <button
          onClick={openCompanyRegistrationForm}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          + New Company Registration
        </button> */}
      </div>

            <p className="text-sm text-gray-500 mb-4">Manage and monitor onboarding company requests</p>


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
        <table className="min-w-[1089px] text-sm border border-gray-200 rounded">
          <thead className="bg-slate-100 text-left dark:bg-gray-100">
            <tr>
              <th className="p-4 text-center text-xs">Company Name</th>
              <th className="p-4 text-center text-xs">Head Name</th>
              <th className="p-4 text-center text-xs">Scale</th>
              <th className="p-4 text-center text-xs">Farms Managed</th>
              <th className="p-4 text-center text-xs">Production Volume</th>
              <th className="p-4 text-center text-xs">Service Area</th>
              <th className="p-4 text-center text-xs">Documents</th> 

              <th className="p-4 text-center text-xs">Verification</th>
              <th className="p-4 text-center text-xs text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company) => (
              <tr key={company.id} className="border-t border-gray-200 dark:text-gray-300 dark:bg-slate-900">
                <td className="p-4 text-center">{company.name}</td>
                <td className="p-4 text-center">{company.contactPerson}</td>
                <td className="p-4 text-center">{company.scale}</td>
                <td className="p-4 text-center">{company.farmsManaged}</td>
                <td className="p-4 text-center">{company.productionVolume}</td>
                <td className="p-4 text-center">{company.serviceArea}</td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => navigate(`/company-request-view/${company.id}?tab=documents`) }
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                </td> 
                <td className="p-4 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs text-center font-medium ${statusColors[company.verified]}`}>
                    {company.verified}</span>
                </td>
                <td className="p-4 text-center">
                  <div className="font-medium flex gap-1 justify-center">
                    <button 
                    onClick={() => navigate(`/company-request-view/${company.id}`)}
                    className="text-green-600 px-2 py-1 rounded active:text-green-800 active:scale-95">View</button>                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="text-left px-2 py-1 dark:text-gray-300">
          Showing {filteredCompanies.length > 0 ? 1 : 0} to {filteredCompanies.length} of {mockCompanies.length} results
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
