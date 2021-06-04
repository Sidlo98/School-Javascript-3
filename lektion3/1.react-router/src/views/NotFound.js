import { useHistory } from "react-router-dom";

const NotFound = (props) => {
  let history = useHistory();

  setTimeout(() => {
    // props.history.push("/");
    history.replace("/");
  }, 2000);

  return (
    <div>
      <h1>404 Not Found!</h1>
    </div>
  );
};

export default NotFound;
