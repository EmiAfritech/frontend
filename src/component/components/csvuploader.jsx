import * as React from "react";
import axios from "../../api/axios";
import Papa from "papaparse";
import { useState } from "react";
import { UploadCsv_URL } from "../../api/routes";

export function CsvUploader(onAccepting) {
  const [csvData, setCsvData] = useState(null);
  
  const notify = () => {
    toast.success("Téléchargement effectué avec succès",
    );
    onAccepting()
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      parseCsv(file);
    }
  };

  const parseCsv = (file) => {
    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data);
      },
      header: true,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(UploadCsv_URL, JSON.stringify(csvData, null, 2), {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      notify();
    } catch (error) {
      alert(error)
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleUpload} />
      <div className="flex flex-row pb-3 pt-2 px-2 flex-row-reverse items-center">
        <button
          className="flex flex row items-center p-3 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="submit"
          onClick={handleSubmit}>
          Envoyer
        </button>
      </div>
    </div>
  );
}
