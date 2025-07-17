"use client";
import React from "react";
export default function Poform(){
    return(
        
        <div className="min-h-screen bg-[#f8fafc] p-6 space-y-6 text-sm text-black font-sans m-5">
      {/* Header Section */
}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-md border border-gray-300">
        <input
          type="text"
          defaultValue="8102000025"
          className="w-full md:w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none hover:border-blue-700 transition"
        />
        <div className="flex gap-2 md:gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            View PO Details
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            View All Changed PO Details
          </button>
        </div>
      </div>

      {/* Early Delivery Button */}
      <div className="text-left">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Early Delivery
        </button>
      </div>

      {/* PO Main Section */}
      <div className="bg-white border border-gray-300 rounded-md p-4 space-y-6 overflow-x-auto">
        {/* Grid with 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-black ">
          {/* Left Column */}
          <div className="border-r border-black">
            <div className="flex justify-center border-b border-black py-4">
              <div className="text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNeWQPPw3D0A-4GbBqyuGJa6KHFOa6cO3giQ&s"
                  alt="Meril Logo"
                  className="h-25 w-25 mx-auto mb-1"
                />
                <div className="text-gray-700 text-sm">More to Life</div>
              </div>
            </div>

            {/* Supplier and Address */}
            <div className="grid grid-cols-4 border-b border-black">
              <div className="col-span-2 border-r border-black p-2 font-semibold">
                Supplier
              </div>
              <div className="col-span-2 p-2">
                <span className="font-semibold">Code :</span> 0000011054
              </div>
            </div>
            <div className="border-b border-black p-2 leading-4 text-sm">
              ,<br />,<br />,-<br />
            </div>

            {/* Vendor Info List */}
            {[
              ["VENDOR GSTIN NO:", ""],
              ["Contact Person :", ""],
              ["Phone/Mobile No :", ""],
              ["E-mail :", ""],
              ["Delivery Terms :", ""],
              ["Dispatch Mode :", "By Ship"],
              ["Currency :", ""],
              ["Supplier Quote Ref :", ""],
            ].map((item, idx) => (
              <div className="grid grid-cols-2 border-b border-black" key={idx}>
                <div className="border-r border-black p-2 font-semibold">
                  {item[0]}
                </div>
                <div className="p-2">{item[1]}</div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="border-l border-black">
            <div className="border-b border-black p-2">
              <div className="font-semibold">Bill To : Meril Life Sciences Private Limited</div>
              <div>Bilakhia House, Survey No 135/139</div>
              <div>Muktanand Marg, Chala,</div>
              <div>Vapi - 369191 (24-Gujarat)</div>
              <div>Phone No: 0260-3052100</div>
            </div>

            {[
              ["P.O. No.", "8102000025", "Date", "2024-12-09"],
              ["Amd. Ver No.", "0", "Date", ""],
              ["Purchase Grp.", "", "", ""],
              ["Ref. PR No", "", "Ref. PR Date", ""],
              ["Ref. PR Person", "", "", ""],
              ["Contact Person", "", "Phone No.", ""],
            ].map((row, idx) => (
              <div className="grid grid-cols-4 border-b border-black" key={idx}>
                <div className="border-r border-black p-2 font-semibold">{row[0]}</div>
                <div className="border-r border-black p-2">{row[1]}</div>
                <div className="border-r border-black p-2 font-semibold">{row[2]}</div>
                <div className="p-2">{row[3]}</div>
              </div>
            ))}

            {[
              ["E-mail", ""],
              ["D/L No", "Meril Life Sciences Private Limited"],
              ["GSTIN No.", "Meril Life Sciences Private Limited"],
              ["SSI Regn No.", "Meril Life Sciences Private Limited"],
            ].map((item, idx) => (
              <div className="grid grid-cols-4 border-b border-black" key={idx}>
                <div className="border-r border-black p-2 font-semibold">{item[0]}</div>
                <div className="col-span-3 p-2">{item[1]}</div>
              </div>
            ))}

            {/* Ship To */}
            <div className="border-t border-black p-2">
              <div className="font-semibold">Ship To : Meril Endo Surgery Private Limited</div>
              <div>Bilakhia House, Survey No 135/139</div>
              <div>Muktanand Marg, Chala,</div>
              <div>Vapi - 369191 (24-Gujarat)</div>
              <div>Phone No: 0260-3052100</div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto border border-black">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-200 text-center font-semibold">
              <tr>
                {[
                  "Sr No.",
                  "Material Code",
                  "Description",
                  "HSN/SAC",
                  "UOM",
                  "Quantity",
                  "Rate",
                  "Amount",
                  "Sche. Date",
                  "Sche. Qty",
                ].map((header, idx) => (
                  <th key={idx} className="border border-black px-2 py-1">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Total Gross Amount", "0.00"],
                ["Total Discount on Gross Amount", "200.00"],
                ["Total INPUT CGST", "0.00"],
                ["Total INPUT SGST", "0.00"],
                ["Total Value of Purchase Order / Service Order", "0.00"],
              ].map(([label, value], idx) => (
                <tr key={idx} className={idx % 2 ? "bg-gray-50" : ""}>
                  <td colSpan={7} className="text-right px-4 py-2 border border-black font-medium">
                    {label}:
                  </td>
                  <td className="text-right px-4 py-2 border border-black">₹{value}</td>
                  <td className="border border-black"></td>
                  <td className="border border-black"></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="px-4 py-2 text-sm ">Total Value in Words: Zero Only</p>
        </div>

        {/* Terms and Footer */}
        <div className="border border-black p-4 text-sm space-y-2">
          <p className="font-semibold underline">Terms & Conditions</p>
          <p className="font-semibold">Terms of Payment:</p>
          <p>100% within 30 Days from the Date of Invoice</p>
          <p className="font-semibold">Delivery Schedule:</p>
          <p className="font-semibold py-2">Shipping Instructions:</p>
          <p className="font-semibold">Pre Shipment Documentation:</p>
          <p className="">The following is required defore of material.</p>
          <ol className="list-decimal list-inside">
            <li>Commercial Invoice</li>
            <li>Packing List</li>
            <li>Certificate of Analysis (COA)</li>
            <li>Material Safety Data Sheet (MSDS)</li>
            <li>Test Certificate</li>
          </ol>
        </div>

        <div className="border border-black bg-white text-left text-xs font-semibold p-2">
          PLEASE ACKNOWLEDGE THIS PURCHASE ORDER AND ADHERE TO IN ACCORDANCE WITH INSTRUCTION MENTIONED IN P.O. AND CONDITION OVERLEAF/AS AGREED, IF ANY.
        </div>

        {/* Signature Section */}
        <div className="grid grid-cols-2 border border-black text-xs">
          <div className="p-2 border-r border-black">
            "Invoice should reflect in our GSTR2B and no credit should be disallow to us against your default of any reason, otherwise we will raised the debit note without any intimation."
            <div className="border-t border-black mt-2 pt-1 font-semibold">Remark:</div>
          </div>
          <div className="p-0">
            <div className="border-b border-black text-center p-1 bg-gray-50">
              For Meril Endo Surgery Private Limited
            </div>
            <div className="grid grid-cols-3 text-center border-b border-black">
              <div className="border-r border-black h-20 flex items-center justify-center">Sign 1</div>
              <div className="border-r border-black h-20 flex items-center justify-center">Sign 2</div>
              <div className="h-20 flex items-center justify-center">Sign 3</div>
            </div>
            <div className="grid grid-cols-3 text-center text-[11px]">
              <div className="border-r border-black p-1">Purchase Team</div>
              <div className="border-r border-black p-1">Purchase Manager</div>
              <div className="p-1">Head of Group Purchase</div>
            </div>
          </div>
        </div>

        <div className="border border-black text-center text-[10px] p-2 font-semibold">
          Regd. office: BILAKHIA HOUSE, SURVEY NO 135/139, MUKTANAND MARG, CHALA, Vapi - 396191 (24-Gujarat), India, Phone No: 0260-3052100
        </div>

        <div className="text-[10px] py-2 text-right">FMT/MM/PUR/003.Issue No.03.Rev.NO.01</div>
      </div>
    </div>
  );
}