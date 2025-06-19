import "../css/Progressbar.css";
const Progresscircle = ({ solved,total }) => {
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const percent=(solved/total)*100;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div style={{ textAlign: "center" }}>
      <div className="progress-circle">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <circle
            className="circle-bg"
            cx="12"
            cy="12"
            r={radius}
          />
          <circle
            className="circle"
            cx="12"
            cy="12"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
      </div>
      
    </div>
  );
};

export default Progresscircle;
