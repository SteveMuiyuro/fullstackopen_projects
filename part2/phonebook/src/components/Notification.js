const Notification = ({ message, error }) => {
  const style = {
    color: message ? "green" : "red",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    display: message || error ? "block" : "none",
  };

  return (
    <p style={style}>{message ? message.toUpperCase() : error.toUpperCase()}</p>
  );
};

export default Notification;
