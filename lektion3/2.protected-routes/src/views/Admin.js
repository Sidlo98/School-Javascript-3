import auth from "../services/AuthService";

const Admin = (props) => {
  return (
    <div>
      <h1>Admin</h1>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.replace("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Admin;
