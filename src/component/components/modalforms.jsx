"use client"

import { useContext, useState } from "react";
import { AuthContext, Modaltrigger } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import { EDITMITIGATION_URL, EDITMONITORING_URL, EDITREVIEW_URL, EDITRISK_URL } from "../../api/routes";
import { showToast } from "./notifications";
import { CustomButton, FormDetailsField, ModalFormSelect } from "./widgets";
import { GRCFormsArray } from "./formarrays";
import axios from "../../api/axios";


export function RiskInfo(data) {
    const {auth} = useContext(AuthContext)
    const {t} = useTranslation()
    const grcArray = GRCFormsArray(t);
    const RiskInfoInitialize = data.data;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {triggerComponent} = useContext(Modaltrigger);
    const [probabilityLevel, setProbabilityLevel] = useState(RiskInfoInitialize.riskProbabilityLevel);
    const [impactLevel, setImpactLevel] = useState(RiskInfoInitialize.riskImpactLevel);
    const [responseActivity, setResponseActivity] = useState(RiskInfoInitialize.riskResponseActivity);
    const [riskCategory, setRiskCategory] = useState(RiskInfoInitialize.riskCategory);
    const [riskResponse, setRiskResponse] = useState(RiskInfoInitialize.riskResponse);




    const [riskInfo, setRiskInfo] = useState({
      riskID: RiskInfoInitialize.riskID,
      riskName: RiskInfoInitialize.riskName,
      createdAt: RiskInfoInitialize.updatedAt,
      riskScore: RiskInfoInitialize.riskScore,
      riskDescription: RiskInfoInitialize.riskDescription,
      riskResponseActivity: RiskInfoInitialize.riskResponseActivity,
      riskOwner: RiskInfoInitialize.riskOwnerLabel,
      riskResponse: RiskInfoInitialize.riskResponse,
      riskCategory: RiskInfoInitialize.riskCategory,
      riskProbabilityLevel: RiskInfoInitialize.riskProbabilityLevel,
      riskImpactLevel: RiskInfoInitialize.riskImpactLevel,
      riskObjective:RiskInfoInitialize.riskObjective
  
    })
  
    const onChange = (e) => {
      const { id, value } = e.target;
      setRiskInfo((prevData) => ({ ...prevData, [id]: value }));
    };
  
  
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setIsSubmitting(true);
      
        try {
          const response = await axios.post(
            EDITRISK_URL,
            JSON.stringify(
              {
                riskID: riskInfo.riskID,
                riskName: riskInfo.riskName,
                riskDescription: riskInfo.riskDescription,
                riskCategory: riskInfo.riskCategory,
                riskImpactLevel: getImpactLevelNumber(riskInfo.riskImpactLevel),
                riskProbabilityLevel: getProbabilityLevelNumber(riskInfo.riskProbabilityLevel),
                riskObjective: riskInfo.riskObjective,
                riskResponse: riskInfo.riskResponse,
                riskResponseActivity: riskInfo.riskResponseActivity,
                riskOwner: riskInfo.riskOwner,
                deptId: RiskInfoInitialize.deptId,
                id: RiskInfoInitialize.id,
                
              }       
            ),
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + auth.token,
              },
              withCredentials: true,
            }
          );
          if (response.status === 201) {
            showToast(
              "Risk has be Updated Successfully!",
            );
            triggerComponent();
          }
        } catch (err) {
          // if (err.response?.status === 500 || err.response?.status === 400) {
          //   setNotification({ ...notification, serverDown: true });
          //   reload();
          // } else if (err.response?.status === 401) {
          //   setNotification({ ...notification, authorized: true });
          // } else if ([404].includes(err.response?.status)) {
          //   setNotification({ ...notification, errorMessage: true });
          // }
          console.log(err)
        } finally {
          setIsSubmitting(false);
        }
    };
  
  
    return (
      <main className="grid grid-cols-2 gap-12 pt-5">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <FormDetailsField
            id="riskID"
            label="Risk Code"
            value={riskInfo.riskID}
            required
          />
          <FormDetailsField
            id="riskName"
            label="Risk Name"
            value={riskInfo.riskName}
            required
          />
          <FormDetailsField
            id="riskOwner"
            label="Risk Owner"
            value={riskInfo.riskOwner}
            required
          />
          <FormDetailsField
            type="date"
            id="createdAt"
            label="Created At"
            value={riskInfo.createdAt}
            required
          />
          <FormDetailsField
            id="riskScore"
            label="Risk Score"
            value={riskInfo.riskScore}
            required
          />
          <FormDetailsField
            id="riskObjective"
            label="Response Objective"
            value={riskInfo.riskObjective}
            onChange={onChange}
            required
          />
        </div>
  
        {/* Right Column */}
        <div className="flex flex-col gap-8">
          <ModalFormSelect
            id="riskResponse"
            label="Risk Response"
            value={riskResponse}
            options={grcArray.riskResponsedrawer}
            onChange={(e) => setRiskResponse(e.target.value)}
            required
          />
          <ModalFormSelect
            id="riskCategory"
            label="Risk Category"
            value={riskCategory}
            options={grcArray.categorydrawer}
            onChange={(e) => setRiskCategory(e.target.value)}
            required
          />
          <ModalFormSelect
            id="riskProbabilityLevel"
            label="Probability Level"
            value={probabilityLevel}
            options={grcArray.probabilityLevel}
            onChange={setProbabilityLevel}
            required
          />
          <FormDetailsField
            id="riskDescription"
            label="Risk Description"
            value={riskInfo.riskDescription}
            onChange={onChange}
            required
          />
          <ModalFormSelect
            id="riskResponseActivity"
            label="Response Activity"
            value={responseActivity}
            options={grcArray.responseActivityStatus}
            onChange={setResponseActivity}
            required
          />
          
          <ModalFormSelect
            id="riskImpactLevel"
            label="Response Impact Level"
            value={impactLevel}
            options={grcArray.impactLevel}
            onChange={setImpactLevel}
            required
          />
        </div>
  
        {/* Submit Button */}
        <div className="col-span-2 flex justify-end pt-2 px-[300px]">
          <CustomButton
            label="Submit"
            onClick={handleSubmit}
            type="submit"
            className="custom-class"
            loading={isSubmitting}
          />
        </div>
      </main>
    );
  }
  
  export function MitigateRIsk(data){
    const {auth} = useContext(AuthContext)
    const {t} = useTranslation()
    const options = GRCFormsArray(t)
    const grcArray = GRCFormsArray(t);
    const MitigationInfoInitialize = data.data;
    
    const [probabilityLevel, setProbabilityLevel] = useState(RiskInfoInitialize.riskProbabilityLevel);

    const [isSubmitting, setIsSubmitting] = useState(false)
    console.log(MitigationInfoInitialize)
    const [mitigationInfo, setMitigationInfo] = useState({
      riskID: MitigationInfoInitialize.riskId,
      riskName: MitigationInfoInitialize.riskName,
      createdAt: MitigationInfoInitialize.updatedAt,
      MitigationScore: MitigationInfoInitialize.mitigatedRiskScore,
      riskReviewer: MitigationInfoInitialize.riskOwnerLabel,
      MitigationCost: MitigationInfoInitialize.mitigationCost,
      MitigationProbabilityLevel: MitigationInfoInitialize.mitigatedRiskProbabilityLevel,
      MitigatedImpact: MitigationInfoInitialize.mitigatedRiskImpactLevel,
      MitigationEffort: MitigationInfoInitialize.mitigationEffort,
      MitigationControl: MitigationInfoInitialize.mitigationControl,
  
    })
  
    const onChange = (e) => {
      const { id, value } = e.target;
      setMitigationInfo((prevData) => ({ ...prevData, [id]: value }));
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setIsSubmitting(true);
    
      try {
        const response = await axios.post(
          EDITMITIGATION_URL,
          JSON.stringify(
            {
              riskId: mitigationInfo.riskID,
              mitigatedRiskProbabilityLevel: getProbabilityLevelNumber(mitigationInfo.MitigationProbabilityLevel),
              mitigatedRiskImpactLevel: getImpactLevelNumber(mitigationInfo.MitigatedImpact),
              mitigationCost: mitigationInfo.MitigationCost,
              mitigationEffort: mitigationInfo.MitigationEffort,
              mitigationControl: mitigationInfo.MitigationControl,
              riskReviewer: mitigationInfo.riskOwner,
              deptId: MitigationInfoInitialize.deptId,
              id: MitigationInfoInitialize.id,
              
            }       
          ),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
          }
        );
        if (response.status === 201) {
          showToast(
            "Risk Mitigation has be Updated Successfully!",
          );
        }
      } catch (err) {
        // if (err.response?.status === 500 || err.response?.status === 400) {
        //   setNotification({ ...notification, serverDown: true });
        //   reload();
        // } else if (err.response?.status === 401) {
        //   setNotification({ ...notification, authorized: true });
        // } else if ([404].includes(err.response?.status)) {
        //   setNotification({ ...notification, errorMessage: true });
        // }
        console.log(err)
      } finally {
        setIsSubmitting(false);
      }
    };
    return (
      <main className="grid grid-cols-2 gap-12 pt-5">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <FormDetailsField
            id="riskID"
            label="Risk Code"
            value={mitigationInfo.riskID}
            onChange={onChange}
            required
          />
          <FormDetailsField
            id="riskName"
            label="Risk Name"
            value={mitigationInfo.riskName}
            onChange={onChange}
            required
          />
          <FormDetailsField
            id="riskReviewer"
            label="Risk Reviewer"
            value={mitigationInfo.riskReviewer}
            onChange={onChange}
            options={options}
            searchable={true}
            required
            group={false}
          />
          <FormDetailsField
            id="MitigationControl"
            label="Mitigation Control"
            value={mitigationInfo.MitigationControl}
            onChange={onChange}
            options={options}
            searchable={true}
            required
            group={false}
          />
          <FormDetailsField
            id="MitigationScore"
            label="Mitigation Score"
            value={mitigationInfo.MitigationScore}
            onChange={onChange}
            required
          />
        </div>
  
        {/* Right Column */}
        <div className="flex flex-col gap-8">
          <FormDetailsField
            id="MitigationEffort"
            label="Mitigation Effort"
            value={mitigationInfo.MitigationEffort}
            onChange={onChange}
            options={options}
            searchable={true}
            required
            group={false}
          />
          <FormDetailsField
            id="MitigationCost"
            label="Mitigation Cost"
            value={mitigationInfo.MitigationCost}
            onChange={onChange}
            options={options}
            searchable={true}
            required
            group={false}
          />
          <FormDetailsField
            id="MitigationProbabilityLevel"
            label="Mitigation Probability Level"
            value={mitigationInfo.MitigationProbabilityLevel}
            onChange={onChange}
            options={options}
            searchable={true}
            required
            group={false}
          />
          <FormDetailsField
            id="MitigatedImpact"
            label="Mitigated Impact"
            value={mitigationInfo.MitigatedImpact}
            onChange={onChange}
            options={options}
            searchable={true}
            required
            group={false}
          />
          <FormDetailsField
            type="date"
            id="createdAt"
            label="Created At"
            value={mitigationInfo.createdAt}
            onChange={onChange}
            required
          />
        </div>
  
        {/* Submit Button */}
        <div className="col-span-2 flex justify-end pt-2 px-[300px]">
          <CustomButton
            label="Submit"
            onClick={handleSubmit}
            type="submit"
            className="custom-class"
            loading={isSubmitting}
          />
        </div>
      </main>
    );
  }
  
  export function ReviewRIsk(data){
    const {auth} = useContext(AuthContext)
    const {t} = useTranslation()
    const options = GRCFormsArray(t)
    const ReviewInfoInitialize = data.data;
    const [isSubmitting, setIsSubmitting] = useState(false)
    console.log(ReviewInfoInitialize)
    const [reviewInfo, setReviewInfo] = useState({
      riskID: ReviewInfoInitialize.riskId,
      riskName: ReviewInfoInitialize.riskName,
      createdAt: ReviewInfoInitialize.updatedAt,
      departmentId: ReviewInfoInitialize.deptId,
      riskCategory: ReviewInfoInitialize.riskCategory,
      riskStatus: ReviewInfoInitialize.status,
      riskReview: ReviewInfoInitialize.riskReview,
      NextRiskReviewDate: ReviewInfoInitialize.NextRiskReviewDate,
      riskReviewComments: ReviewInfoInitialize.riskReviewComments,
      riskOwner: ReviewInfoInitialize.submittedByLabel,
    })
  
    const onChange = (e) => {
      const { id, value } = e.target;
      setReviewInfo((prevData) => ({ ...prevData, [id]: value }));
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setIsSubmitting(true);
      console.log(reviewInfo.id)
      try {
        const response = await axios.post(
          EDITREVIEW_URL,
          JSON.stringify(
            {
              riskId: reviewInfo.riskID,
              riskReview: reviewInfo.riskReview,
              NextRiskReviewDate: reviewInfo.NextRiskReviewDate,
              riskReviewComments: reviewInfo.riskReviewComments,
              deptId: ReviewInfoInitialize.deptId,
              id: ReviewInfoInitialize.id,
              
            }       
          ),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
          }
        );
        if (response.status === 201) {
          showToast(
            "Risk Reviiew has be Updated Successfully!",
          );
        }
      } catch (err) {
        // if (err.response?.status === 500 || err.response?.status === 400) {
        //   setNotification({ ...notification, serverDown: true });
        //   reload();
        // } else if (err.response?.status === 401) {
        //   setNotification({ ...notification, authorized: true });
        // } else if ([404].includes(err.response?.status)) {
        //   setNotification({ ...notification, errorMessage: true });
        // }
        console.log(err)
      } finally {
        setIsSubmitting(false);
      }
    };
    console.log({"riskreview": data})
    return (
      <main className="grid grid-cols-2 gap-12 pt-5">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <FormDetailsField
            id="riskID"
            label="Risk Code"
            value={reviewInfo.riskID}
            onChange={onChange}
            
            required
          />
          <FormDetailsField
            id="riskName"
            label="Risk Name"
            value={reviewInfo.riskName}
            onChange={onChange}
            required
          />
          {(auth === "MANAGER" || auth === "AUDITOR") && (
            <div className="flex flex-col gap-8">
              <FormDetailsField
                id="departmentId"
                label="Department Id"
                value={reviewInfo.departmentId} 
                required
              />
              <FormDetailsField
                id="departmentName"
                label="Department Name"
                value={reviewInfo.departmentId}
    
                required
              />
            </div>
          )}
          <FormDetailsField
            id="riskOwner"
            label="Submitted By"
            value={reviewInfo.riskOwner}
            onChange={onChange}
            options={options}
            searchable={true}
            required
            group={false}
          />
          <FormDetailsField
            type="date"
            id="createdAt"
            label="Created At"
            value={reviewInfo.createdAt}
            required
          />
          <FormDetailsField
            id="riskCategory"
            label="Risk Category"
            value={reviewInfo.riskCategory}
            onChange={onChange}
            required
          />
        </div>
  
        {/* Right Column */}
        <div className="flex flex-col gap-8">
          <FormDetailsField
            id="riskStatus"
            label="Risk Status"
            value={reviewInfo.riskStatus}
            onChange={onChange}
            options={options}
            searchable={true}
            required
            group={false}
          />
          <FormDetailsField
            id="riskReview"
            label="Risk Review"
            value={reviewInfo.riskReview}
            onChange={onChange}
            options={options}
            searchable={true}
            required
            group={false}
          />
          <FormDetailsField
            type="date"
            id="nextRiskReview"
            label="Next Risk Review Date"
            value={reviewInfo.NextRiskReviewDate}
            onChange={onChange}
            options={options}
            searchable={true}
            required
            group={false}
          />
          <FormDetailsField
            id="riskReviewComments"
            label="Risk Review Comments"
            value={reviewInfo.riskReviewComments}
            onChange={onChange}
            required
          />
        </div>
  
        {/* Submit Button */}
        <div className= "col-span-2 flex justify-end pt-2 px-[300px]">
  
          <CustomButton
            label="Submit"
            onClick={handleSubmit}
            type="submit"
            className="custom-class"
            loading={isSubmitting}
          />
        </div>
      </main>
    );
  }
  
  export function MonitorRisk(data){
    const {auth} = useContext(AuthContext)
    const {t} = useTranslation()
    const options = GRCFormsArray(t)
    const MonitorInfoInitialize = data.data;
    const [isSubmitting, setIsSubmitting] = useState(false)
    console.log(MonitorInfoInitialize)
    const [monitorInfo, setMonitorInfo] = useState({
      riskID: MonitorInfoInitialize.riskId,
      riskName: MonitorInfoInitialize.riskName,
      createdAt: MonitorInfoInitialize.updatedAt,
      comments: MonitorInfoInitialize.comments,
      recommendedChanges: MonitorInfoInitialize.recommendedChanges,
      ResponseImplementation: MonitorInfoInitialize.riskResponseImplementation,
      riskResponseActivity: MonitorInfoInitialize.riskResponseActivitiyStatus,
      challenges: MonitorInfoInitialize.challenges,
    })
  
    const onChange = (e) => {
      const { id, value } = e.target;
      setMonitorInfo((prevData) => ({ ...prevData, [id]: value }));
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setIsSubmitting(true);
    
      try {
        const response = await axios.post(
          EDITMONITORING_URL,
          JSON.stringify(
            {
              riskId: monitorInfo.riskID,
              riskResponseActivitiyStatus: monitorInfo.riskResponseActivity,
              recommendedChanges: monitorInfo.recommendedChanges,
              riskResponseImplementation: monitorInfo.ResponseImplementation,
              challenges: monitorInfo.challenges,
              comments: monitorInfo.comments,
              deptId: MonitorInfoInitialize.deptId,
              id: MonitorInfoInitialize.id,
            }       
          ),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token,
            },
            withCredentials: true,
          }
        );
        if (response.status === 201) {
          showToast(
            "Risk has be Updated Successfully!",
          );
        }
      } catch (err) {
        // if (err.response?.status === 500 || err.response?.status === 400) {
        //   setNotification({ ...notification, serverDown: true });
        //   reload();
        // } else if (err.response?.status === 401) {
        //   setNotification({ ...notification, authorized: true });
        // } else if ([404].includes(err.response?.status)) {
        //   setNotification({ ...notification, errorMessage: true });
        // }
        console.log(err)
      } finally {
        setIsSubmitting(false);
      }
    };
  
    return (
      <main className="grid grid-cols-2 gap-12 pt-5">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <FormDetailsField
            id="riskID"
            label="Risk Code"
            value={monitorInfo.riskID}
            onChange={onChange}
            
            required
          />
          <FormDetailsField
            id="riskName"
            label="Risk Name"
            value={monitorInfo.riskName}
            onChange={onChange}
            
            required
          />
          
          <FormDetailsField
            type="date"
            id="createdAt"
            label="Created At"
            value={monitorInfo.createdAt}
            onChange={onChange}
            
            required
          />
          <FormDetailsField
            id="challenges"
            label="challenges"
            value={monitorInfo.challenges}
            onChange={onChange}
            
            required
          />
        </div>
  
        {/* Right Column */}
        <div className="flex flex-col gap-8">
          <FormDetailsField
            id="comments"
            label="Comments"
            value={monitorInfo.comments}
            onChange={onChange}
            
            required
          />
          
          <FormDetailsField
            id="recommendedChanges"
            label="Recommended Changes"
            value={monitorInfo.recommendedChanges}
            onChange={onChange}
            
            required
          />
          <FormDetailsField
            id="ResponseImplementation"
            label="Response Implementation"
            value={monitorInfo.ResponseImplementation}
            onChange={onChange}
            
            required
          />
          <FormDetailsField
            id="riskResponseActivity"
            label="Response Activity Status"
            value={monitorInfo.riskResponseActivity}
            onChange={onChange}
            
            required
          />
        </div>
  
        {/* Submit Button */}
        <div className="col-span-2 flex justify-end pt-2 px-[300px]">
          <CustomButton
            label="Submit"
            onClick={handleSubmit}
            type="submit"
            className="custom-class"
            loading={isSubmitting}
          />
        </div>
      </main>
    );
  }

  export function getRiskImpactLevel(level) {
    switch (level) {
        case 1:
            return "Insignificant (1)";
        case 2:
            return "Minor (2)";
        case 3:
            return "Moderate (3)";
        case 4:
            return "Major (4)";
        case 5:
          return "Catastrophic (5)";
    }
  }
  
  export function getRiskProbabilityLevel(level) {
    switch (level) {
        case 1:
            return "Almost Impossible (1)";
        case 2:
            return "Unlikely (2)";
        case 3:
            return "Likely (3)";
        case 4:
            return "Very Likely (4)";
        case 5:
            return "Almost Certain (5)"; // Handles invalid inputs
    }
  }
  
  export function getProbabilityLevelNumber(probability) {
    switch (probability) {
      case "Almost Impossible":
        return 1;
      case "Unlikely":
        return 2;
      case "Likely":
        return 3;
      case "Very Likely":
        return 4;
      case "Almost Certain":
        return 5;
      default:
        return 0;
    }
  }
  
  export function getImpactLevelNumber(impact) {
    switch (impact) {
      case "Insignificant":
        return 1;
      case "Minor":
        return 2;
      case "Moderate":
        return 3;
      case "Major":
        return 4;
      case "Catastrophic":
        return 5;
      default:
        return 0;
    }
  }
  
  
  
  
  