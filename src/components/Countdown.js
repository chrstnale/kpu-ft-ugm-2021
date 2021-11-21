import React from "react";
import Countdown from "react-countdown";
import Button from "./Button";

export default function Timerdown(){

  const renderer1 = ({completed}) => {
    if (completed) {
      // Render Setelah Vote
      return (
        <div>
          <h3>Vote Ditutup</h3>
        </div>
      );
    } else {
      // Render Saat Vote
      return (
        <div>
          <Button>
            <a href={process.env.PUBLIC_URL + "vote.html"} >Vote Dummy</a>
          </Button>
        </div>
      );
    }
  };

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render Setelah Cd
      return <Countdown date={"2021-12-02T00:00:00"} renderer={renderer1} />;
    } else {
      // Render Cd
      return (
          <div className="cd">
            <p>{days}<br/>Hari</p>
            <p>{hours}<br/>Jam</p>
            <p>{minutes}<br/>Menit</p>
            <p className="last">{seconds}<br/>Detik</p>
          </div>
      );
    }
  };

  return(
    <Countdown date={"2021-11-29T00:00:00"} renderer={renderer} />
  );
}