export default function Panel({ name, isActive, onShow, children }) {
  return (
    <div className="panel">
      <button className="panel-button" onClick={onShow}>
        <img
          className={`panel-icon ${isActive ? "open" : ""}`}
          src="./icons8-down-50.png"
          alt=""
        />
        {name}
      </button>
      {children}
    </div>
  );
}
