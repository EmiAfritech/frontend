import { Sidebar } from "../../component/components/sidebar";
import { EmployeesTable } from "../../component/components/tables";

export function Employees() {
  
  return (
    <div className="flex flex-col bg-slate-100 h-lvh">
      <Sidebar/>
      <div className="ml-[18%] m-6">
        <EmployeesTable />
      </div>
    </div>
  );
}
