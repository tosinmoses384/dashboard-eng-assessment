const LogoLikedSongs = ({
  name,
  height,
  width,
  top,
  left,
}: {
  name: string;
  height?: string;
  width?: string;
  top?: string;
  left?: string;
}) => {
  return (
    <img
      src={`./svg/${name}.svg`}
      alt=""
      style={{
        height,
        width,
        position: "absolute",
        top,
        left,
      }}
    />
  );
};

export default LogoLikedSongs;
