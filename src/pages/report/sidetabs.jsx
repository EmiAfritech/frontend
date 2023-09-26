import "../../component/comstyles/component.css";
import { Link } from "react-router-dom";

export function ReportSideTabs() {
  return (
    <div className="report-container">
      <div className="report-main mt-2 mx-10">
        <ul>
          <li>
            <Link to="">Risk Dashboard</Link>
          </li>
          <li>
            <Link to="risk-appetite">Risk Appetite Report</Link>
          </li>
          <li>
            <Link to="mitigation">Mitigations By Date</Link>
          </li>
          <li>
            <Link to="risk-status-report">Risk Status Report</Link>
          </li>
          <li>
            <Link to="review-needing-risks">All Opened Risks Needing a Review</Link>
          </li>
          <li>
            <Link to="audit-trail">Audit Trail</Link>
          </li>
          <li>
            <Link to="advice">Risk Advice</Link>
          </li>
          <li>
            <Link to="chatbot">Risk chat box</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
