import certificateImg from "../../assets/certificaates.png";
import assessmentCertImg from "../../assets/assesment_certificates.png";
import reactBasic from "../../assets/React-Basic.png";

export const certificatesData = [
  {
    id: 1,
    title: "Full Stack Web Development with Python, Django & React",
    type: "Certificate of Completion",
    issuer: "Ostad",
    certificateId: "C41307",
    date: "March 2025",
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
    date: "March 2025",
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

  {
    id: 3,
    title: "React (Basic)",
    type: "Certificate of Accomplishment",
    issuer: "HackerRank",
    certificateId: "BAD7C7025E2A",
    date: "18 Apr, 2026",
    image: reactBasic,
    credentialLink: "#",
    description:
      "The bearer of this certificate has passed the HackerRank skill certification test for React (Basic).",

    signatories: ["HackerRank Certification Team"],
  },
];
