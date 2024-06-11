import TopBar from "../../component/topbar";
import { Table } from "./table";

export const TodoIndex = () => {
  return (
    <>
      <div
        style={{
          height: "80%",

          position: "absolute",
          padding: "46px",
        }}
      >
        <Table />
      </div>
    </>
  );
};
