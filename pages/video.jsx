import {useEffect, useRef} from 'react';
export default function VideoIndex() {

  const videoRef = useRef();

  // 비디오 스트림 가져오기
  const getMedia = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      });    // 오디오는 필요없다면 false로 설정

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };
  useEffect(() => {
    getMedia();
  });

  return (
    <div className="video">
      <video ref={videoRef} autoPlay playsInline/>
    </div>
  )
}