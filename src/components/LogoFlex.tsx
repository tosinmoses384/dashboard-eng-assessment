import styled from "styled-components";
export const Img = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`;

const LogoFlex = ({
  name,
  height,
  width,
}: {
  name: string;
  height?: string;
  width?: string;
  top?: string;
  left?: string;
}) => {
  return (
    <Img
      src={`./svg/${name}.svg`}
      alt=""
      style={{
        height,
        width,
      }}
    />
  );
};

export default LogoFlex;
