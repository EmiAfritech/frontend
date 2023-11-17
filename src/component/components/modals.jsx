import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaEye, FaEdit, FaTrash} from "react-icons/fa";
import { useState,useEffect } from 'react';
import axios from 'axios';
import {DEPARTMENTDROPDOWN_URL,OWNERSDROPDOWN_URL,MANAGERSDROPDOWN_URL,DEPARTMENTCREATEFORM_URL } from '../../api/routes';


export function UserData(params){
   const [open, setOpen] = useState(false);
   const close = () => setOpen(false);
  
  function handleOpen() {
    setOpen(!open);
  }

  
  return(
    <>
      <button onClick={handleOpen} className="px-2">
            <FaEye className="icons" />
      </button>
      <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                
                <Box className='modal'>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Hello
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {params.row.id}
                    </Typography>

                    
                    <Button onClick={close}>Close</Button>
                </Box>
      </Modal>
    </>

  )
}

export function RiskData(params){
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    const [riskName, setRiskName] = useState(params.riskName);
    const [departmentName, setDepartmentName] = useState("");
    const [deptmentName, setdeptmentName] = useState([]);
    const [ownersName, setOwnersName] = useState([]);
    const [riskOwner, setRiskOwner] = useState("");
    const [riskID, setRiskID] = useState("");
    const [riskImpactLevel, setImpactLevel] = useState("");
    const [riskProbabilityLevel, setProbabityilLevel] = useState("");
    const [riskCategory, setCategory] = useState("");
    const [riskDescription, setDescription] = useState("");
    const [riskObjective, setObjective] = useState("");
    const [riskResponse, setRiskResponse] = useState("");
    const [riskResponseActivity, setRiskResponseActivitiy] = useState("");
    const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 400,
     bgcolor: 'background.paper',
     border: '2px solid #000',
     boxShadow: 24,
     p: 4,
     };
     useEffect(() => {
    axios
      .get(DEPARTMENTDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => {
        setdeptmentName(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

    useEffect(() => {
    axios
      .get(OWNERSDROPDOWN_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => {
        setOwnersName(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
     function handleOpen() {
     setOpen(!open);
     }
    
     
     return(
     <>
         <button onClick={handleOpen} className="px-2">
             <FaEye className="icons" />
         </button>
         <Modal
             open={open}
             onClose={close}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description">
                 
                 <Box sx={style}>
                      <form className="w-96">
          <div className=" px-10 py-10">
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="riskID"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="riskID"
                aria-describedby="riskID"
                value={riskID}
                autoComplete="off"
                onChange={(e) => setRiskID(e.target.value)}
                required
              />
              <label
                htmlFor="fullname"
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                risk-id
              </label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative mb-6" data-te-input-wrapper-init>
                <select
                  type="departmentID"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="departmentID"
                  aria-describedby="departmentID"
                  value={departmentName}
                  autoComplete="off"
                  onChange={(e) => setDepartmentName(e.target.value)}
                  required
                >
                  <option></option>

                  {deptmentName.map((deptmentName) => (
                    <option
                      key={deptmentName.names.id}
                      value={deptmentName.names.name}
                    >
                      {" "}
                      {deptmentName.names.name}
                    </option>
                  ))}
                </select>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  department
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="FullName"
                  aria-describedby="fullname"
                  value={riskName}
                  autoComplete="off"
                  onChange={(e) => setRiskName(e.target.value)}
                  required
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Risk Name
                </label>
              </div>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <select
                type="departmentID"
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                id="departmentID"
                aria-describedby="departmentID"
                value={riskOwner}
                autoComplete="off"
                onChange={(e) => setRiskOwner(e.target.value)}
                required
              >
                <option></option>

                {ownersName.map((ownersName) => (
                  <option key={ownersName.id} value={ownersName.value}>
                    {" "}
                    {ownersName.value}
                  </option>
                ))}
              </select>
              <label
                htmlFor="work-location"
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                owner
              </label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="description"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="description"
                  aria-describedby="description"
                  value={riskDescription}
                  autoComplete="off"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <label
                  htmlFor="department-head"
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  description
                </label>
              </div>
              <div className="grid grid-rows-2">
                <div className="relative pb-4" data-te-input-wrapper-init>
                  <select
                    type="impactLevel"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    id="impactLevel"
                    aria-describedby="impactLevel"
                    value={riskImpactLevel}
                    autoComplete="off"
                    onChange={(e) => setImpactLevel(e.target.value)}
                    required
                  >
                    <option></option>
                    <option value="1">Insignificant</option>
                    <option value="2">Minor</option>
                    <option value="3">Major</option>
                    <option value="4">Moderate</option>
                    <option value="4">Catastrophic</option>
                  </select>
                  <label
                    htmlFor="department-head"
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                  >
                    impact Level
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <select
                    type="probabilityLevel"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    id="probabilityLevel"
                    aria-describedby="probabilityLevel"
                    value={riskProbabilityLevel}
                    autoComplete="off"
                    onChange={(e) => setProbabityilLevel(e.target.value)}
                    required
                  >
                    <option></option>
                    <option value="1">Almost Impossible</option>
                    <option value="2">Unlikely</option>
                    <option value="3">Likely</option>
                    <option value="4">Very Likely</option>
                    <option value="4">Almost Certain</option>
                  </select>
                  <label
                    htmlFor="department-head"
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                  >
                    probability Level
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-6">
              <div className="relative" data-te-input-wrapper-init>
                <select
                  type="text"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="category"
                  aria-describedby="category"
                  value={riskCategory}
                  autoComplete="off"
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option></option>
                  <option value="EXTERNAL FACTORS">External Factors</option>
                  <option value="PEOPLE">People</option>
                  <option value="SYSTEM">System</option>
                  <option value="PROCESS">Process</option>
                </select>
                <label
                  htmlFor="work-location"
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  category
                </label>
              </div>
              <div className="relative" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="objective"
                  aria-describedby="objective"
                  value={riskObjective}
                  autoComplete="off"
                  onChange={(e) => setObjective(e.target.value)}
                  required
                />
                <label
                  htmlFor="work-location"
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  objective
                </label>
              </div>
            </div>
            <div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <select
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  id="category"
                  aria-describedby="category"
                  value={riskResponse}
                  autoComplete="off"
                  onChange={(e) => setRiskResponse(e.target.value)}
                  required
                >
                  <option></option>
                  <option value="Exploit">Exploit</option>
                  <option value="Accept">Accept</option>
                  <option value="Enhance">Enhance</option>
                  <option value="Avoid">Avoid</option>
                  <option value="Transfer">Transfer</option>
                  <option value="Mitigate">Mitigate</option>
                </select>
                <label
                  htmlFor="work-location"
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  risk response
                </label>
              </div>
              <div className="relative">
                <textarea
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  aria-describedby="objective"
                  value={riskResponseActivity}
                  autoComplete="off"
                  onChange={(e) => setRiskResponseActivitiy(e.target.value)}
                  required
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  risk response activity
                </label>
              </div>
            </div>
          </div>
          <div className="px-10">
           <Button onClick={close}>Close</Button>
          </div>
        </form>
    
                     
                     
            </Box>
         </Modal>
     </>
    
     )
}

export function ReviewRiskData(params){
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
 const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };
 function handleOpen() {
   setOpen(!open);
 }

 
 return(
   <>
     <button onClick={handleOpen} className="px-2">
           <FaEye className="icons" />
     </button>
     <Modal
           open={open}
           onClose={close}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description">
               
               <Box sx={style}>
                   <Typography id="modal-modal-title" variant="h6" component="h2">
                       Hello
                   </Typography>
                   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                   {params.row.id}
                   </Typography>

                   
                   <Button onClick={close}>Close</Button>
               </Box>
     </Modal>
   </>

 )
}

export function MonitoredRiskData(params){
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
 const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };
 function handleOpen() {
   setOpen(!open);
 }

 
 return(
   <>
     <button onClick={handleOpen} className="px-2">
           <FaEye className="icons" />
     </button>
     <Modal
           open={open}
           onClose={close}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description">
               
               <Box sx={style}>
                   <Typography id="modal-modal-title" variant="h6" component="h2">
                       Hello
                   </Typography>
                   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                   {params.row.id}
                   </Typography>

                   
                   <Button onClick={close}>Close</Button>
               </Box>
     </Modal>
   </>

 )
}

export function MitigatedRiskData(params){
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
 const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };
 function handleOpen() {
   setOpen(!open);
 }

 
 return(
   <>
     <button onClick={handleOpen} className="px-2">
           <FaEye className="icons" />
     </button>
     <Modal
           open={open}
           onClose={close}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description">
               
               <Box sx={style}>
                   <Typography id="modal-modal-title" variant="h6" component="h2">
                       Hello
                   </Typography>
                   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                   {params.row.id}
                   </Typography>

                   
                   <Button onClick={close}>Close</Button>
               </Box>
     </Modal>
   </>

 )
}




export function DepartmentData(params){
  const [name, setName] = useState("");
  const [manager, setManager] = useState("");
  const [managers, setManagers] = useState([]);
  const [deptID, setDeptID] = useState("");
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  setName(params.row.name);
  setManager(params.row.manager);
  setDeptID(params.row.deptID);
  setLocation(params.row.location);


  useEffect(() => {
    const fetchManagers = async () => {
      try {
        const response = await axios.get(MANAGERSDROPDOWN_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setManagers(response.data);
      } catch (error) {
        console.error("Error fetching managers:", error);
      }
    };

    fetchManagers();
  }, []);

  const close = () => setOpen(false);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        DEPARTMENTCREATEFORM_URL,
        JSON.stringify({
          name,
          manager,
          deptID,
          location,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      );
      alert("User Saved Successfully");
      reload();
    } catch (error) {
      alert("Error saving user");
      reload();
    }
  };

  const reload = () => {
    setName("");
    setManager("");
    setDeptID("");
    setLocation("");
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={handleOpen} className="px-2">
        <FaEye className="icons" />
      </button>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%', // Updated width
            p: 4,
            bgcolor: 'white', // Updated background color
            borderRadius: '8px', // Added border radius
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Added box shadow
          }}
        >
          <div className="flex justify-between items-center mb-5">
            <div className="font-bold text-black">Department Detailed View</div>
            <div>
              {isEditMode ? (
                <>
                  <button className="mr-2" onClick={() => setIsEditMode(false)}>
                    <FaEye className="icons" />
                  </button>
                  <button>
                    <FaTrash className="icons" />
                  </button>
                </>
              ) : (
                <button onClick={() => setIsEditMode(true)}>
                  <FaEdit className="icons" />
                </button>
              )}
            </div>
          </div>
          <hr />
          <form className="w-full">
            <div className=" px-10 py-10">
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className={`peer h-full w-full rounded-[7px] border ${
                    isEditMode ? 'border-blue-gray-200' : 'border-transparent'
                  } border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                  id="departmentID"
                  value={deptID}
                  autoComplete="off"
                  onChange={(e) => setDeptID(e.target.value)}
                  readOnly={!isEditMode}
                  required
                />
                <label
                  className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`}
                >
                  Department Code
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className={`peer h-full w-full rounded-[7px] border ${
                    isEditMode ? 'border-blue-gray-200' : 'border-transparent'
                  } border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                  id="departmentName"
                  value={name}
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                  readOnly={!isEditMode}
                  required
                />
                <label
                  className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`}
                >
                  Department Name
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <select
                  type="text"
                  className={`peer h-full w-full rounded-[7px] border ${
                    isEditMode ? 'border-blue-gray-200' : 'border-transparent'
                  } border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                  id="departmentManager"
                  aria-describedby="departmentManager"
                  value={manager}
                  autoComplete="off"
                  onChange={(e) => setManager(e.target.value)}
                  readOnly={!isEditMode}
                  required
                >
                  <option></option>
                  {managers.map((managers) => (
                    <option key={managers.id} value={managers.value}>
                      {managers.value}
                    </option>
                  ))}
                </select>
                <label
                  htmlFor="work-location"
                  className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after
                         :border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`}
                    >
                      Department Head
                    </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                      type="text"
                      className={`peer h-full w-full rounded-[7px] border ${
                        isEditMode ? 'border-blue-gray-200' : 'border-transparent'
                      } border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                      id="work_location"
                      value={location}
                      autoComplete="off"
                      onChange={(e) => setLocation(e.target.value)}
                      readOnly={!isEditMode}
                      required
                    />
                    <label
                      className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`}
                    >
                      Work Location
                    </label>
              </div>
              <div className="px-10">
                  <button
                    type="submit"
                    onClick={ isEditMode ? handleEdit : close}
                    className="inline-block w-full rounded bg-[#000c8e] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    Close
                  </button>
              </div>
            </div>
          </form>
          
        </Box>
      </Modal>
    </>
  );
}




