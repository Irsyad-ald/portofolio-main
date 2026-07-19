// src/components/CertificateCard/CertificateCard.jsx
import React from 'react';

const CertificateCard = ({ cert, onClick }) => {
    return (
        <div
            onClick={() => onClick(cert)}
            className="relative p-[2px] rounded-2xl bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
            <div className="bg-[#121212] rounded-2xl p-4 h-full flex flex-col">
                {/* Area Gambar */}
                <div className="w-full h-48 bg-gray-800 rounded-xl mb-4 overflow-hidden">
                    <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                </div>

                {/* Area Teks */}
                <h3 className="text-white text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-emerald-400 text-xs font-semibold mb-2">
                    {cert.issuer} • {cert.date}
                </p>
                <p className="text-gray-400 text-sm line-clamp-2">
                    {cert.description}
                </p>
            </div>
        </div>
    );
};

export default CertificateCard;