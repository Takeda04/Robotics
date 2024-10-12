import VideoPlayer from "../video/VideoPlayer";

const HeadCard = ({
  videoSrc,
  posterSrc,
}: {
  videoSrc: string;
  posterSrc: string;
}) => {
  return <VideoPlayer videoSrc={videoSrc} posterSrc={posterSrc} />;
};

export default HeadCard;
