import React from 'react';
import NavbarAuthentication from '../components/fragments/NavbarAuthentication';
import OrderHeaderHistory from '../components/fragments/OrderHeaderHistory';
import { PencilLine, Settings, LogOut } from 'lucide-react';  

const Profile = () => {
    const flightData = {
        date: "Maret 2025",
    };

    return (
        <div>
            <NavbarAuthentication search={false} />
            <OrderHeaderHistory />
            <div className="mx-auto px-4 sm:px-6 lg:px-16 max-w-screen-lg py-8 flex flex-col md:flex-row gap-8">
                {/* Left Section */}
                <div className="left-section w-full md:w-[370px] h-[189px] flex-col space-y-2">
                    <div className="space-y-5">
                        <div className="flex items-center space-x-3 p-2 border-b-[1.5px] pb-4">
                            <PencilLine size={28} color='#7126B5' />
                            <span>Ubah Profil</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-2 cursor-pointer border-b-[1.5px] pb-4">
                            <Settings size={28} color='#7126B5' />
                            <span>Pengaturan Akun</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-2 cursor-pointer border-b-[1.5px] pb-4">
                            <LogOut size={28} color='#7126B5' />
                            <span>Keluar</span>
                        </div>
                    </div>
                    
                    <div className="text-gray-400 text-sm mt-4 text-center">
                        Version 1.1.0
                    </div>
                </div>

                {/* Right Section (Profile Form) */}
                <div className="mt-8 md:mt-0 w-full md:w-[518px] h-[462px] border-2 p-4 rounded-[4px]">
                    <h1 className="text-xl font-semibold py-4">Ubah Data Profil</h1>
                    
                    <div className="mb-6">
                        <div className="bg-purple-400 text-white p-3 rounded-t-lg">
                            Data Diri
                        </div>
                        
                        <div className="space-y-4 p-4 border-gray-200 rounded-b-lg">
                            <div>
                                <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    defaultValue="Harry"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium mb-1">Nomor Telepon</label>
                                <input 
                                    type="tel" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    defaultValue="+62 897823232"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    defaultValue="johndoe@gmail.com"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-end mt-4">
                        <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors w-full sm:w-auto">
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
