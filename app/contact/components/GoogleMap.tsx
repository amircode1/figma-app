import { FC } from 'react';

const GoogleMap: FC = () => {
  return (
    <div className="w-full h-[500px] bg-gray-700 rounded-lg overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.0227639071474!2d51.4299!3d35.7177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQyJzE5LjgiTiA1McKwMjUnNDMuNyJF!5e0!3m2!1sen!2sir!4v1623240491106!5m2!1sen!2sir" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="گارنیک کافی"
      />
    </div>
  );
};

export default GoogleMap;
