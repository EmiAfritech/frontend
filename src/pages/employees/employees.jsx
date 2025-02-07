import { Sidebar } from "../../component/components/sidebar";
import { EmployeesTable } from "../../component/components/tables";

export function Employees() {
  
  return (
    <div className="flex flex-col">
      <Sidebar/>
      <div className="ml-[18%] m-6 p-6 card bg-white rounded-lg">
        <EmployeesTable />
      </div>
    </div>
  );
}
