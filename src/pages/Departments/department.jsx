import { Sidebar } from "../../component/components/sidebar";
import { DepartmentTab } from "../../component/components/tables";

export function Department() {
  
  return (
    <div className="flex flex-col">
      <Sidebar/>
      <div className="ml-[18%] m-6 p-6 card bg-white rounded-lg">
        <DepartmentTab />
      </div>
    </div>
  );
}
