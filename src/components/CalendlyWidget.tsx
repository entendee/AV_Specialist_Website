import React, { useEffect } from 'react';
import { Calendar, X } from 'lucide-react';

interface CalendlyWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  eventType?: string;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  isOpen, 
  onClose, 
  eventType = 'frame-tv-consultation' 
}) => {
  useEffect(() => {
    if (isOpen) {
      // Load Calendly widget script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || `https://calendly.com/your-username/${eventType}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl h-[80vh] relative">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Schedule Your Service</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 h-full">
          {/* Calendly Inline Widget */}
          <div
            className="calendly-inline-widget h-full"
            data-url={calendlyUrl}
            style={{ minWidth: '320px', height: '100%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyWidget;