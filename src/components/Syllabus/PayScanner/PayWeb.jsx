import React from "react";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-xl flex gap-10 w-[90%] max-w-5xl">

        {/* Left Panel */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-purple-500">CodeHub</h1>
          <div className="bg-gray-700 text-center py-4 px-6 rounded-xl">
            <h2 className="text-lg">Price Summary</h2>
            <p className="text-2xl font-semibold">₹5999</p>
          </div>
          <div className="bg-gray-700 text-center py-4 px-6 rounded-xl">
            <p>Using as +91 82526 41019</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">Payment Options</h2>

          <div className="bg-white text-black p-6 rounded-xl">
            <p className="text-sm font-semibold mb-2">Available Offers</p>

            <div className="flex justify-between items-center bg-green-100 px-4 py-2 rounded-lg mb-4">
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
              <button className="text-sm text-green-700 font-medium">View all</button>
            </div>

            <div className="mb-2 flex justify-between items-center">
              <p className="font-medium">UPI QR</p>
              <span className="text-xs text-gray-500">⏱ 11:40</span>
            </div>

            <div className="bg-green-50 p-4 rounded-lg flex flex-col items-center">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay&size=100x100"
                alt="QR Code"
                className="w-28 h-28 mb-2"
              />
              <p className="text-xs text-gray-500 mb-2">Scan the QR using any UPI App</p>
              <div className="flex gap-2 mb-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Google_Pay_logo.svg" alt="GPay" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/PhonePe_Logo.png" alt="PhonePe" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Paytm_logo.png" alt="Paytm" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BHIM_logo.svg/1024px-BHIM_logo.svg.png" alt="BHIM" className="h-6" />
              </div>
              <span className="text-sm bg-green-200 text-green-800 px-3 py-1 rounded-full">Upto ₹200 cashback</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
} 
