import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Arrow from '../../assets/images/Arrow.svg';

const DetailCardTicket = () => {
  const flightData = {
    departureCity: 'Jakarta',
    arrivalCity: 'Melbourne',
    departureDate: '5 Maret 2023',
    arrivalDate: '5 Maret 2023',
    departureTime: '19:10',
    arrivalTime: '21:10',
    bookingCode: '6723/2GHK',
    flightClass: 'Economy',
    price: 9850000,
    distance: '4h 0m',
  };

  return (
    <div className="bg-white rounded-[10px] border-[#7126B5BF] border-2 px-[16px] py-[12px] w-full max-w-[468px] mx-auto h-auto sm:h-[215px]">
      <div className="justify-between items-center pt-1">
        <span className="px-4 py-1 bg-[#43A047] text-white text-xs rounded-full font-semibold">Issued</span>
        <div className="flex justify-between w-full py-5 space-x-6">
          <div className="flex space-x-2">
            <FaMapMarkerAlt size={24} color="#8A8A8A" />
            <div>
              <p className="text-black text-[14px] font-bold">{flightData.departureCity}</p>
              <p className="text-black text-[12px] font-medium">{flightData.departureDate}</p>
              <p className="text-black text-[12px] font-medium">{flightData.departureTime}</p>
            </div>
          </div>

          <div className="text-center pt-3">
            <p className="text-black text-xs font-medium">{flightData.distance}</p>
            <img src={Arrow} alt="arrow svg" />
          </div>

          <div className="flex space-x-2">
            <FaMapMarkerAlt size={24} color="#8A8A8A" />
            <div>
              <p className="text-black text-[14px] font-bold">{flightData.arrivalCity}</p>
              <p className="text-black text-[12px] font-medium">{flightData.arrivalDate}</p>
              <p className="text-black text-[12px] font-medium">{flightData.arrivalTime}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-3">
        <div className="flex justify-between flex-wrap">
          <div className="w-full sm:w-auto mb-2 sm:mb-0">
            <p className="text-black text-xs font-bold">Booking Code:</p>
            <p className="text-black text-xs font-medium">{flightData.bookingCode}</p>
          </div>
          <div className="w-full sm:w-auto mb-2 sm:mb-0">
            <p className="text-black text-xs font-bold">Class:</p>
            <p className="text-black text-xs font-medium">{flightData.flightClass}</p>
          </div>
          <div className="flex items-center">
            <p className="text-[#4B1979] text-[14px] font-bold">IDR {flightData.price.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCardTicket;
