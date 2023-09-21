import { FaEdit, FaTrash } from "react-icons/fa";
import "../comstyles/component.css";

export const usercolumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "dob", headerName: "Date of Birth", width: 180 },
  { field: "phone_number", headerName: "Phone Number", width: 180 },
  { field: "email", headerName: "Email", width: 180 },
  { field: "role", headerName: "Role", width: 150 },
  { field: "createdAt", headerName: "Created At", width: 150 },
  { field: "updatedAt", headerName: "Updated At", width: 150 },
  {
    field: 'action',
    headerName: 'Action',
    width: 100,
    renderCell: (params) => {
      const handleEditClick = () => {
        // Implement your edit logic here
        console.log(`Editing row with ID: ${params.row.id}`);
      };
      const handleDeleteClick = () => {
        // Implement your edit logic here
        console.log(`Editing row with ID: ${params.row.id}`);
      };

      return (
        <>
        <button onClick={handleEditClick} className="px-2">
          <FaEdit  className="icons"/>
        </button>
        <button onClick={handleDeleteClick} className="px-2">
          <FaTrash  className="icons"/>
        </button>
        </>
      );
    },
  }, 
];

export const riskreviewcolumn = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "riskID", headerName: "Risk Code", width: 100 },
  { field: "riskName", headerName: "Risk Name", width: 150 },
  { field: "riskReview", headerName: "Risk Review", width: 150 },
  { field: "NextRiskReviewDate", headerName: "Next Risk Review Date", width: 170 },
  { field: "riskReviewer", headerName: "Risk Reviewer", width: 150 },
  { field: "createdAt", headerName: "Created At", width: 150 },
  {
    field: 'action',
    headerName: 'Action',
    width: 100,
    renderCell: (params) => {
      const handleEditClick = () => {
        // Implement your edit logic here
        console.log(`Editing row with ID: ${params.row.id}`);
      };

      return (
        <>
        <button onClick={handleEditClick} className="px-2">
          <FaEdit  className="icons"/>
        </button>
        <button onClick={handleEditClick} className="px-2">
          <FaTrash  className="icons"/>
        </button>
        </>
      );
    },
  },
];

export const riskreviewrow = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "riskID", headerName: "Risk Code", width: 100 },
  { field: "riskName", headerName: "Risk Name", width: 150 },
  { field: "riskReview", headerName: "Risk Review", width: 150 },
  { field: "NextRiskReviewDate", headerName: "Next Risk Review Date", width: 170 },
  { field: "riskReviewer", headerName: "Risk Reviewer", width: 150 },
  { field: "createdAt", headerName: "Created At", width: 150 },
]


export const riskmitigationcolumn = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "riskID", headerName: "Risk Code", width: 70 },
  { field: "riskName", headerName: "Risk Name", width: 70 },
  { field: "mitigatedRiskProbabilityLevel", headerName: "Mitigated Risk Probability Level", width: 150 },
  { field: "mitigatedRiskImpactLevel", headerName: "Mitigated Risk Impact Level", width: 150 },
  { field: "mitigatedRiskScore", headerName: "Mitigated Risk Score", width: 150 },
  { field: "mitigationEffort", headerName: "Mitigation Effort", width: 150 },
  { field: "mitigationCost", headerName: "Mitigation Cost", width: 150 },
  { field: "mitigationControl", headerName: "Mitigation Control", width: 150 },
  { field: "mitigationOwner", headerName: "Mitigation Owner", width: 150 },
  { field: "createdAt", headerName: "Created At", width: 150 },
  {
    field: 'action',
    headerName: 'Action',
    width: 100,
    renderCell: (params) => {
      const handleEditClick = () => {
        // Implement your edit logic here
        console.log(`Editing row with ID: ${params.row.id}`);
      };

      return (
        <>
        <button onClick={handleEditClick} className="px-2">
          <FaEdit  className="icons"/>
        </button>
        <button onClick={handleEditClick} className="px-2">
          <FaTrash  className="icons"/>
        </button>
        </>
      );
    },
  },
];


export const reportriskmitigationcolumn = [
  {
    label: "Risk Name",
    field: "RiskName",
    width: 200,
  },
  {
    label: "Risk Owner",
    field: "RiskOwner",
    width: 150,
  },
  {
    label: "Mitigatioin Effort",
    field: "MitigationEffort",
    width: 200,
  },
  {
    label: "Date",
    field: "Date",
    width: 100,
  },
  {
    label: "Risk Score",
    field: "RiskScore",
    width: 100,
  },
];

export const reportriskmitigationrow = [
  {
    id: 1,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 2,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 3,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 4,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 5,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 6,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 7,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 8,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 9,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 10,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 11,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 12,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
];

export const reportopenrisktoreviewcolumn = [
  {
    label: "Risk Name",
    field: "RiskName",
    width: 200,
  },
  {
    label: "Risk Owner",
    field: "RiskOwner",
    width: 150,
  },
  {
    label: "Mitigatioin Effort",
    field: "MitigationEffort",
    width: 200,
  },
  {
    label: "Date",
    field: "Date",
    width: 100,
  },
  {
    label: "Risk Score",
    field: "RiskScore",
    width: 100,
  },
];

export const reportopenrisktoreviewrow = [
  {
    id: 1,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 2,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 3,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 4,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 5,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 6,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 7,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 8,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 9,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 10,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 11,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 12,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
];

export const reportopenriskassignedtomecolumn = [
  {
    label: "Risk Name",
    field: "RiskName",
    width: 200,
  },
  {
    label: "Risk Owner",
    field: "RiskOwner",
    width: 150,
  },
  {
    label: "Mitigatioin Effort",
    field: "MitigationEffort",
    width: 200,
  },
  {
    label: "Date",
    field: "Date",
    width: 100,
  },
  {
    label: "Risk Score",
    field: "RiskScore",
    width: 100,
  },
];

export const reportopenriskassignedtomerow = [
  {
    id: 1,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 2,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 3,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 4,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 5,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 6,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 7,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 8,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 9,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 10,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 11,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 12,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
];

export const reportriskandcontrolecolumn = [
  {
    label: "Risk Name",
    field: "RiskName",
    width: 200,
  },
  {
    label: "Risk Owner",
    field: "RiskOwner",
    width: 150,
  },
  {
    label: "Mitigatioin Effort",
    field: "MitigationEffort",
    width: 200,
  },
  {
    label: "Date",
    field: "Date",
    width: 100,
  },
  {
    label: "Risk Score",
    field: "RiskScore",
    width: 100,
  },
];

export const reportriskandcontrolerow = [
  {
    id: 1,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 2,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 3,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 4,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 5,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 6,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 7,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 8,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 9,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 10,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 11,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 12,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
];

export const reportaudittrailcolumn = [
  {
    label: "Risk Name",
    field: "RiskName",
    width: 200,
  },
  {
    label: "Risk Owner",
    field: "RiskOwner",
    width: 150,
  },
  {
    label: "Mitigatioin Effort",
    field: "MitigationEffort",
    width: 200,
  },
  {
    label: "Date",
    field: "Date",
    width: 100,
  },
  {
    label: "Risk Score",
    field: "RiskScore",
    width: 100,
  },
];

export const reportaudittrailrow = [
  {
    id: 1,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 2,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 3,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 4,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 5,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 6,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 7,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 8,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 9,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
  {
    id: 10,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 11,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
    Date: "23/04/2009",
    RiskScore: "2",
  },
  {
    id: 12,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
    Date: "23/04/2009",
    RiskScore: "4",
  },
];

export const deptcolumn = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "deptID", headerName: "Dapartment Code", width: 150 },
  { field: "organizationId", headerName: "Organization ID", width: 150 },
  { field: "name", headerName: "Department Name", width: 170 },
  { field: "manager", headerName: "Department Manager", width: 170 },
  { field: "location", headerName: "Location", width: 170 },
  { field: "createdAt", headerName: "Created At", width: 150 },
  { field: "updatedAt", headerName: "Updated At", width: 150 },
  {
    field: 'action',
    headerName: 'Action',
    width: 100,
    renderCell: (params) => {
      const handleEditClick = () => {
        // Implement your edit logic here
        console.log(`Editing row with ID: ${params.row.id}`);
      };

      return (
        <>
        <button onClick={handleEditClick} className="px-2">
          <FaEdit  className="icons"/>
        </button>
        <button onClick={handleEditClick} className="px-2">
          <FaTrash  className="icons"/>
        </button>
        </>
      );
    },
  },
];


export const riskmonitoringcolumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "riskName",
    headerName: "Risk Activity",
    width: 120,
  },
  {
    field: "riskResponseImplementation",
    headerName: "Risk Implementation",
    width: 120,
  },
  {
    field: "riskResponseActivityStatus",
    headerName: "Risk Implementation",
    width: 120,
  },
  {
    field: "recommendedChanges",
    headerName: "Recommended Changes",
    width: 120,
  },
  { field: "challenges", headerName: "Challenges", width: 100 },
  { field: "comments", headerName: "Comments", width: 120 },
  { field: "createdAt", headerName: "Created At", width: 120 },
  {
    field: 'action',
    headerName: 'Action',
    width: 100,
    renderCell: (params) => {
      const handleEditClick = () => {
        // Implement your edit logic here
        console.log(`Editing row with ID: ${params.row.id}`);
      };
      const handleDeleteClick = () => {
        // Implement your edit logic here
        console.log(`Editing row with ID: ${params.row.id}`);
      };

      return (
        <>
        <button onClick={handleEditClick} className="px-2">
          <FaEdit  className="icons"/>
        </button>
        <button onClick={handleDeleteClick} className="px-2">
          <FaTrash  className="icons"/>
        </button>
        </>
      );
    },
  },
];
export const riskappetitereportgreatercolumn = [
  {
    label: "Risk Name",
    field: "RiskName",
    width: 100,
  },
  {
    label: "Risk Owner",
    field: "RiskOwner",
    width: 400,
  },
  {
    label: "Mitigatioin Effort",
    field: "MitigationEffort",
    width: 200,
  },
];

export const riskappetitereportgreaterrow = [
  {
    id: 1,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
  },
  {
    id: 2,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
  },
  {
    id: 3,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
  },
  {
    id: 4,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
  },
  {
    id: 5,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
  },
  {
    id: 6,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
  },
  {
    id: 7,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
  },
  {
    id: 8,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
  },
  {
    id: 9,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
  },
  {
    id: 10,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
  },
  {
    id: 11,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
  },
  {
    id: 12,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
  },
];

export const riskappetitereportlowercolumn = [
  {
    label: "Risk Name",
    field: "RiskName",
    width: 100,
  },
  {
    label: "Risk Owner",
    field: "RiskOwner",
    width: 400,
  },
  {
    label: "Mitigatioin Effort",
    field: "MitigationEffort",
    width: 200,
  },
];

export const riskappetitereportlowerrow = [
  {
    id: 1,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
  },
  {
    id: 2,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
  },
  {
    id: 3,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
  },
  {
    id: 4,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
  },
  {
    id: 5,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
  },
  {
    id: 6,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
  },
  {
    id: 7,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
  },
  {
    id: 8,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
  },
  {
    id: 9,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
  },
  {
    id: 10,
    RiskName: "Transportation",
    RiskOwner: "Manager",
    MitigationEffort: "Travel by air",
  },
  {
    id: 11,
    RiskName: "IT Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Install Antivirus",
  },
  {
    id: 12,
    RiskName: "Health Risk",
    RiskOwner: "Manager",
    MitigationEffort: "Routin medical checkup",
  },
];

export const riskviewcolumn = [
  { field: "id", headerName: "ID", width: 70, color: "blue"},
  { field: "riskID", headerName: "Risk Code", width: 100 },
  { field: "riskName", headerName: "Risk Name", width: 150 },
  { field: "riskDescription", headerName: "Risk Description", width: 200 },
  { field: "riskCategory", headerName: "Risk Category", width: 180 },
  { field: "riskImpactLevel", headerName: "Risk Impact Level", width: 100 },
  { field: "riskScore", headerName: "Risk Score", width: 100 },
  { field: "riskOwner", headerName: "Risk Owner", width: 150 },
  {
    field: 'action',
    headerName: 'Action',
    width: 100,
    renderCell: (params) => {
      const handleEditClick = () => {
        // Implement your edit logic here
        console.log(`Editing row with ID: ${params.row.id}`);
      };

      return (
        <>
        <button onClick={handleEditClick} className="px-2">
          <FaEdit  className="icons"/>
        </button>
        <button onClick={handleEditClick} className="px-2">
          <FaTrash  className="icons"/>
        </button>
        </>
      );
    },
  },
];
