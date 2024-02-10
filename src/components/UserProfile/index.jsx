import "./index.css";

const UserProfile = (props) => {
  const { userDetails, deleteUser } = props;
  const { imageUrl, name, role, uniqueNo } = userDetails;
  let onDelete = () => {
    deleteUser(uniqueNo);
  };
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-role">{role}</p>
      </div>
      <button type="button" className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img"
        />
      </button>
    </li>
  );
};

export default UserProfile;
