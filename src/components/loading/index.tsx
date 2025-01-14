import { Spin } from "antd";
import { LoadingStyle } from "./styles";

function Loading() {
  const { styles: loadingStyles } = LoadingStyle();

  return (
    <div className={loadingStyles.LoadingWrapper}>
      <Spin size="large" />
    </div>
  );
}

export default Loading;
