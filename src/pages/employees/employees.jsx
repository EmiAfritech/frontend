import { Sidebar } from "../../component/components/sidebar";
import { EmployeesTable } from "../../component/components/tables";

export function Employees() {
  const currentTab = "Employees";
  return (
    <div className="flex de-flex bg-slate-50 h-screen">
      <Sidebar currentTab={currentTab} />
      <div className="mx-auto flex mt-3 pl-[18%]">
        <EmployeesTable />
      </div>
    </div>
  );
}
