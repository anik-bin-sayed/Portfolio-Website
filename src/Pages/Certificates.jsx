import React, { useState } from "react";
import certificateImg from "../assets/certificaates.png"; // your completion certificate image
import assessmentCertImg from "../assets/assesment_certificates.png"; // your assessment certificate image

const certificatesData = [
  {
    id: 1,
    title: "Full Stack Web Development with Python, Django & React",
    type: "Certificate of Completion",
    issuer: "Ostad",
    certificateId: "C41307",
    date: "March 2025", // adjust to actual date
    image: certificateImg,
    credentialLink: "#",
    description:
      "Successfully completed the comprehensive Full Stack Web Development course covering Python, Django, React, and modern web technologies.",
    signatories: [
      "Abdullah Zayed (Ostad The Coach)",
      "Imam Hossain (Ostad The Coach)",
      "Abdullah Al Musabbir (CEO, Ostad Ltd.)",
    ],
  },
  {
    id: 2,
    title: "Full Stack Web Development with Python, Django & React",
    type: "Certificate of Assessment",
    issuer: "Ostad",
    certificateId: "A41306",
    date: "March 2025", // adjust to actual date
    image: assessmentCertImg,
    credentialLink: "#",
    description:
      "Achieved outstanding results in the online live course assessment for Full Stack Web Development with Python, Django & React (Batch 6).",
    assessmentResults: {
      assignment: "98.6%",
      quiz: "95.4%",
      liveTest: "100%",
    },
    signatories: [
      "Abdullah Zayed (Ostad The Coach)",
      "Abdullah Al Musabbir (CEO, Ostad Ltd.)",
    ],
  },
];

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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-crimson transition-colors flex items-center justify-center"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto max-h-[50vh] object-contain bg-gray-800"
            />

            {/* Details */}
            <div className="p-6 space-y-4">
              <div>
                <span className="inline-block px-3 py-1 bg-crimson/20 text-crimson rounded-full text-sm font-semibold mb-3">
                  {selectedCert.type}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {selectedCert.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Issuer</p>
                  <p className="text-white font-medium">
                    {selectedCert.issuer}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Certificate ID</p>
                  <p className="text-white font-mono">
                    {selectedCert.certificateId}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Date</p>
                  <p className="text-white">{selectedCert.date}</p>
                </div>
              </div>

              <div>
                <p className="text-gray-400">Description</p>
                <p className="text-gray-300">{selectedCert.description}</p>
              </div>

              {/* Assessment Results (if present) */}
              {selectedCert.assessmentResults && (
                <div>
                  <p className="text-gray-400 mb-2">Assessment Scores</p>
                  <div className="bg-white/5 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Assignment</span>
                      <span className="text-crimson font-bold">
                        {selectedCert.assessmentResults.assignment}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Quiz</span>
                      <span className="text-crimson font-bold">
                        {selectedCert.assessmentResults.quiz}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Live Test</span>
                      <span className="text-crimson font-bold">
                        {selectedCert.assessmentResults.liveTest}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Signatories */}
              <div>
                <p className="text-gray-400 mb-2">Signatories</p>
                <div className="space-y-1">
                  {selectedCert.signatories.map((signatory, idx) => (
                    <p key={idx} className="text-gray-300 text-sm">
                      {signatory}
                    </p>
                  ))}
                </div>
              </div>

              {selectedCert.credentialLink &&
                selectedCert.credentialLink !== "#" && (
                  <a
                    href={selectedCert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-crimson rounded-lg text-white text-sm font-semibold hover:bg-red-600 transition"
                  >
                    Verify Credential ↗
                  </a>
                )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
