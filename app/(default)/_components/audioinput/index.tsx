import React, { useEffect, useState } from "react";

const AudioInput = () => {
  const [stream, setStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => setStream(stream))
      .catch((error) => console.log("Error accessing microphone: ", error));
  }, []);

  const startRecording = () => {
    setRecording(true);
    setAudioChunks([]);
  };

  const stopRecording = () => {
    setRecording(false);

    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (event) => {
      setAudioChunks([...audioChunks, event.data]);
    };
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      console.log("Audio URL: ", audioUrl);
      // 此处可以将录制的音频保存到本地或者上传到服务器
    };
    mediaRecorder.stop();
  };

  return (
    <div>
      <h2>Audio Input</h2>
      <button onClick={startRecording} disabled={recording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!recording}>
        Stop Recording
      </button>
    </div>
  );
};

export default AudioInput;
