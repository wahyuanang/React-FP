import React from 'react';
import { Bell } from 'lucide-react';

const NotificationList = () => {
  const notifications = [
    {
      id: 1,
      type: 'Promosi',
      title: 'Dapatkan Potongan 50% Tiket!',
      description: 'Syarat dan Ketentuan berlaku!',
      date: '20 Maret, 14:04',
      isRead: true
    },
    {
      id: 2,
      type: 'Notifikasi',
      title: 'Terdapat perubahan pada jadwal penerbangan kode booking 45GT6.',
      description: 'Cek jadwal perjalanan Anda disini!',
      date: '5 Maret, 14:04',
      isRead: false
    },
    {
      id: 3,
      type: 'Promosi',
      title: 'Promo Spesial Akhir Pekan!',
      description: 'Diskon hingga 70% untuk penerbangan domestik',
      date: '1 Maret, 09:15',
      isRead: true
    }
  ];

  return (
    <div className="mx-auto p-4 max-w-screen-lg md:px-20 px-4">
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg shadow-sm"
          >
            <div className="flex-shrink-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                notification.type === 'Promosi' ? 'bg-purple-100' : 'bg-blue-100'
              }`}>
                <Bell size={16} className={`${
                  notification.type === 'Promosi' ? 'text-purple-500' : 'text-blue-500'
                }`} />
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-start flex-col sm:flex-row">
                <div className="mb-2 sm:mb-0">
                  <p className="text-gray-500 text-sm">{notification.type}</p>
                  <h3 className="font-medium mt-1">{notification.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{notification.description}</p>
                </div>
                <div className="flex items-center mt-2 sm:mt-0">
                  <span className="text-gray-400 text-sm">{notification.date}</span>
                  {!notification.isRead && (
                    <div className="w-2 h-2 rounded-full bg-red-500 ml-2"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
