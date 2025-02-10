import { Sidebar } from "../../component/components/sidebar";
import { FrameworkTab } from "../../component/components/tables";
import "../../component/comstyles/component.css";
export function Controle() {
  
  return (
    <div className="flex flex-col">
      <Sidebar/>
      <div className="ml-[18%] p-6 m-6 card bg-white rounded-lg">
        <FrameworkTab/>
      </div>
    </div>
  );
}
