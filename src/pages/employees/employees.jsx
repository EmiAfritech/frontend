import { Sidebar } from "../../component/components/sidebar";
import { EmployeesTable } from "../../component/components/tables";

export function Employees() {
  
  return (
    <div className="flex de-flex bg-slate-100 h-screen">
      <Sidebar/>
      <div className="mx-auto flex mt-3 pl-[18%]">
        <EmployeesTable />
      </div>
    </div>
  );
}
