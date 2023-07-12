import { Sidebar } from "../../component/components/sidebar";
import { DepartmentTab } from "../../component/components/tables";

export function Department() {
  return (
    <div className="flex de-flex ">
      <Sidebar />
      <div className="mx-auto flex mt-10 ">
        <DepartmentTab />
      </div>
    </div>
  );
}
