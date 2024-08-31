import { Sidebar } from "../../component/components/sidebar";
import { DepartmentTab } from "../../component/components/tables";

export function Department() {
  
  return (
    <div className="flex bg-slate-100 flex-col h-lvh">
      <Sidebar/>
      <div className="ml-[18%] m-6">
        <DepartmentTab />
      </div>
    </div>
  );
}
