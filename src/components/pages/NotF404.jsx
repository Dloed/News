import { React } from "react";
import Header from "../simpleComponents/Header.jsx";

function NotFound() {
  const styles = {
    container: { display: "flex", justifyContent: "center", marginTop: "10%" },
    text: { color: "white", fontSize: "250%" },
  };
  return (
    <>
      <Header />
      <div style={styles.container}>
        <p style={styles.text}>
          Not Found 404. We dont have this page. Sorry.
          <br />
          😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱
        </p>
      </div>
    </>
  );
}

export default NotFound;
