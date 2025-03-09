export const GRCFormsArray = (t) => ({
    probabilityLevel: [
    { value: 1, label: t("almostImpossible") },
    { value: 2, label: t("unlikely") },
    { value: 3, label: t("likely")},
    { value: 4, label: t("veryLikely")},
    { value: 5, label: t("almostCertain") },
  ],
  categorydrawer: [
    { value: "PEOPLE", label: t("people") },
    { value: "SYSTEM", label: t("system") },
    { value: "PROCESS", label: t("process") },
  ],
  userRole: [
    { value: "MANAGER", label: t("departmentManager") },
    { value: "ANALYST", label: t("riskAnalyst") },
  ],
  riskResponsedrawer: [
    { value: "Exploit", label: t("exploit") },
    { value: "Accept", label: t("accept")},
    { value: "Enhance", label: t("enhance")},
    { value: "Avoid",   label: t("avoid")},
    { value: "Transfer", label: t("transfer") },
    { value: "Mitigate", label: t("mitigate") },
  ],
  impactLevel: [
    { value: 1, label: t("insignificant") },
    { value: 2, label: t("minor") },
    { value: 3, label: t("moderate") },
    { value: 4, label: t("major") },
    { value: 5, label: t("critical") },
  ],
  riskReviewArray: [
    { value: "accept risk", label: t("acceptRisk") },
    { value: "reject risk", label: t("rejectRisk") },
  ],
  mitigationEffort: [
    { value: "Trivial", label: t("trivial") },
    { value: "Minor", label: t("minor") },
    { value: "Considerable", label: t("considerable")},
    { value: "Significant", label: t("significant") },
    { value: "Exceptional", label: t("exceptional") },
  ],
  mitigationCost: [
    { value: "$0 TO $100 000", label:"$0 -$100,000" },
    { value: "$100 001 TO $200 000", label:"$100,001 -$200,000" },
    { value: "$300 001 TO 400 000", label: "$300,001 -$400,000" },
    { value: "$400 001 TO $500 000", label: "$400,001 -$500,000" },
    { value: "$500 001 TO $600 000", label: "$500,001 -$600,000" },
    { value: "$600 001 TO $700 000", label: "$600,001 -$700,000" },
    { value: "$700 001 TO $800 000", label: "$700,001 -$800,000" },
    { value: "$800 001 TO $900 000", label: "$800,001 -$900,000" },
    { value: "$900 001 TO $1000 000", label: "$900 001 -$1000,000" },
  ],
  responseActivityStatus: [
    { value: "YES", label: t("yes")},
    { value: "NO", label: t("no") },
  ],
  compliance: [
    { value: "Complied", label: "Complied"},
    { value: "Not Complied", label: "Not Complied"},
  ],
  mitigationControl: [
    { value: "Systematic", label: "Systematic"},
    { value: "Manual", label: "Manual"},
  ],
  governance: [
    { value: "ISO37000", label: "ISO37000"},
    { value: "ISO31000", label: "ISO31000" },
    { value: "ISO37301", label: "ISO37301"},
    { value: "ISO37302", label: "ISO37302" },
    { value: "ISO22301", label: "ISO22301" }
  ],
  
});

