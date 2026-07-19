// src/components/CertificateModal/CertificateModal.jsx
import React from 'react';

const CertificateModal = ({ cert, onClose }) => {
    if (!cert) return null; // Jika tidak ada data, jangan tampilkan apa-apa

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">

            {/* Kotak Modal */}
            <div className="relative w-full max-w-lg bg-[#16161a] rounded-2xl border border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.15)] overflow-hidden">

                {/* Header Modal (Gambar & Judul) */}
                <div className="flex flex-col items-center p-6 bg-gradient-to-b from-[#2d2442] to-[#16161a]">
                    <h2 className="text-xl font-bold text-white mb-4 text-center">{cert.title}</h2>
                    <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-auto h-40 object-contain rounded-md shadow-lg"
                    />
                </div>

                {/* Konten Modal */}
                <div className="p-6 bg-[#16161a]">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                            <p className="text-sm text-emerald-400 mt-1">{cert.issuer} • {cert.date}</p>
                        </div>
                        {/* Tombol X (Close) */}
                        <button onClick={onClose} className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {cert.description}
                    </p>

                    {/* Tombol Aksi */}
                    <a
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-colors gap-2"
                    >
                        Lihat Sertifikat Penuh
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CertificateModal;