import { OverviewStyles } from "./styles";

function OverviewPage() {
  const { styles: overviewStyles } = OverviewStyles();
  return (
    <div className={overviewStyles.OverviewWrapper}>
      <div className="overview-header">
        <div className="overview-header-title">Welcome, Admin</div>
        <div className="overview-header-content"></div>
      </div>
      <div className="overview-body"></div>
    </div>
  );
}

export default OverviewPage;
