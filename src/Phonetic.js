import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import "./Phonetic.css";

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);

  function start() {
    audio.play();
  }

  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <span className="PhoneticAudio">
          <FontAwesomeIcon icon={faVolumeUp} onClick={start} />
        </span>{" "}
        {props.phonetic.text}
      </div>
    );
  } else {
    return (
      <div className="Phonetic">
        <span className="PhoneticAudioMute">
          <FontAwesomeIcon icon={faVolumeMute} onClick={start} />
        </span>{" "}
        {props.phonetic.text}
      </div>
    );
  }
}
