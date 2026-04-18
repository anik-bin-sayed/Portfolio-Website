import React, { useState } from "react";

import ShowCertificate from "../../components/Modals/ShowCertificate";
import { certificatesData } from "./certificatesData";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className="relative w-full min-h-screen py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-crimson/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Certificates & Achievements
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and assessments that validate my skills
            and dedication to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-crimson/50 hover:shadow-2xl hover:shadow-crimson/20 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3 bg-crimson/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-black">
                  {cert.type}
                </div>
                {/* View badge */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
                  Click to view
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-crimson transition-colors line-clamp-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-crimson/80 font-medium">
                  {cert.issuer}
                </p>
                <p className="text-gray-400 text-sm">
                  ID: {cert.certificateId}
                </p>
                <p className="text-gray-400 text-sm">{cert.date}</p>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-crimson/0 via-crimson/30 to-crimson/0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <ShowCertificate
          selectedCert={selectedCert}
          setSelectedCert={setSelectedCert}
        />
      )}
    </section>
  );
};

export default Certificates;
