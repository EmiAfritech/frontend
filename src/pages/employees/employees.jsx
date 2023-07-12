import { Sidebar } from "../../component/components/sidebar";
import { EmployeesTable } from "../../component/components/tables";

export function Employees() {
  return (
    <div className="flex de-flex">
      <Sidebar />
      <div className="mx-auto flex mt-10 ">
        <EmployeesTable />
      </div>
    </div>
  );
}
