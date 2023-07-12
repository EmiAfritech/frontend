import "../../component/comstyles/component.css";
import { Link } from "react-router-dom";

export function ReportSideTabs() {
  return (
    <div className="report-container">
      <div className="report-main m-10">
        <ul>
          <li>
            <Link to="">Risk Dashboard</Link>
          </li>
          <li>
            <Link to="mitigation">Mitigated risk</Link>
          </li>
          <li>
            <Link to="advice">Risk Advice</Link>
          </li>
          <li>
            <Link to="impact">Risk Impact</Link>
          </li>
          <li>
            <Link to="chatbot">Risk chart box</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
