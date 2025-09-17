import "./style.css";

const Loader = () => {
  return (
    <div>
      <h3>Bit Loader</h3>
      <div className="bit-loader">
        <div className="bit" />
        <div className="bit" />
        <div className="bit" />
        <div className="bit" />
        <div className="bit" />
      </div>

      <h3>Scale Loader</h3>
      <div className="scale-loader">
        <div className="scale" />
        <div className="scale" />
        <div className="scale" />
        <div className="scale" />
        <div className="scale" />
      </div>
    </div>
  );
};

export { Loader };
