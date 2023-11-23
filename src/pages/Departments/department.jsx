import { Sidebar } from "../../component/components/sidebar";
import { DepartmentTab } from "../../component/components/tables";

export function Department() {
  const currentTab = "Departments";
  return (
    <div className="flex de-flex bg-slate-50 h-screen">
      <Sidebar currentTab={currentTab}/>
      <div className="mx-auto flex mt-3 pl-[18%]">
        <DepartmentTab />
      </div>
    </div>
  );
}
