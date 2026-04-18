import React, { memo } from "react";
import { RxCross2 } from "react-icons/rx";

const ShowCertificate = ({ selectedCert, setSelectedCert }) => {
  console.log("Rendering ShowCertificate for:", selectedCert?.title);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300"
      onClick={() => setSelectedCert(null)}
    >
      <div
        className="relative max-w-5xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20 max-h-[80vh] overflow-y-auto "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-crimson transition-colors flex items-center justify-center cursor-pointer hover:border group"
          onClick={() => setSelectedCert(null)}
        >
          <span className="transition-transform duration-500 group-hover:rotate-180">
            <RxCross2 />
          </span>
        </button>
        <div className="flex flex-col md:flex-row items-start md:items-center p-6 border-b border-white/20">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6">
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              loading="lazy"
              className="w-full h-auto object-contain bg-gray-800 rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
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
                <p className="text-white font-medium">{selectedCert.issuer}</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ShowCertificate);
