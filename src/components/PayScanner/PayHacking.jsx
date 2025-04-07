import React from "react";

export default function PayHacking() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-black">
      <div className="bg-gray-900 p-6 rounded-xl flex gap-10 w-[90%] max-w-5xl">

        {/* Left Panel */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-purple-500">Hacking</h1>
          <div className="px-6 py-4 text-center bg-gray-700 rounded-xl">
            <h2 className="text-lg">Price Summary</h2>
            <p className="text-2xl font-semibold">₹300</p>
          </div>
          <div className="px-6 py-4 text-center bg-gray-700 rounded-xl">
            <p>Using as +91 82526 41019</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-6 bg-gray-800 rounded-xl">
          <h2 className="mb-4 text-2xl font-semibold text-center">Payment Options</h2>

          <div className="p-6 text-black bg-white rounded-xl">
            <p className="mb-2 text-sm font-semibold">Available Offers</p>

            <div className="flex items-center justify-between px-4 py-2 mb-4 bg-green-100 rounded-lg">
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5977/5977585.png"
                  alt="Cred" 
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">
                  UPTO ₹200 CRED cashback on CRED
                </span>
              </div>
              <button className="text-sm font-medium text-green-700">View all</button>
            </div>

            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">UPI QR</p>
              <span className="text-xs text-gray-500">⏱ 11:40</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-lg bg-green-50">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay&size=100x100"
                alt="QR Code"
                className="mb-2 w-28 h-28"
              />
              <p className="mb-2 text-xs text-gray-500">Scan the QR using any UPI App</p>
              <div className="flex gap-2 mb-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Google_Pay_logo.svg" alt="GPay" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/PhonePe_Logo.png" alt="PhonePe" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Paytm_logo.png" alt="Paytm" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BHIM_logo.svg/1024px-BHIM_logo.svg.png" alt="BHIM" className="h-6" />
              </div>
              <span className="px-3 py-1 text-sm text-green-800 bg-green-200 rounded-full">Upto ₹200 cashback</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
} 
