import React, { useState } from 'react';
import { ArrowLeft, Filter, Search } from 'lucide-react';
import SearchFlightModal from '../Modals/SearchFlightModal'; 

const ButtonHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedFlightNumber, setSelectedFlightNumber] = useState("");

  const handleFlightNumberSelect = (flightNumber) => {
    setSelectedFlightNumber(flightNumber);
    setIsModalOpen(false);
  };

  const handleSearchClick = () => {
    setIsModalOpen(true); 
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg flex items-center space-x-3">
      <button className='flex gap-8 bg-[#A06ECE] text-white rounded-[12px] p-5 w-full'>
        <ArrowLeft />
        Beranda
      </button>
      
      <button className='border-2 border-[#7126B5] rounded-[16px] w-[96px] h-[32px] flex items-center justify-center p-4'>
        <div className='flex gap-1'>
          <Filter color="#8A8A8A" strokeWidth={2} />
          Filter
        </div>
      </button>
      
      <button onClick={handleSearchClick} className="w-full sm:w-auto flex justify-center">
        <Search size={32} color="#7126B5" strokeWidth={3} />
      </button>

      <SearchFlightModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSelect={handleFlightNumberSelect}
      />
    </div>
  );
};

export default ButtonHeader;
