import styled from "styled-components";
import { Card } from "antd";

export const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  height: 90%;
  overflow: auto;

    .covers {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
//   gap: 20px;
  gap: 10px;
  margin-top: 40px;


  .cover-1 {
    background: url(./svg/vibes1.svg) no-repeat center center / cover;
  } 
  .cover-2 {
    background: url(./svg/vibes2.svg) no-repeat center center / cover;
  } 
  .cover-3 {
    background: url(./svg/vibes3.svg) no-repeat center center / cover;
  } 
  .generics {
    height: 500px;
    width: 300px;
    position: relative;

    .cover-grad {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            156.82deg,
            rgba(0, 0, 0, 0.6) 4.58%,
            rgba(0, 0, 0, 0) 69.61%
          ),
          linear-gradient(24.5deg, rgba(0, 0, 0, 0.2) 4.71%, rgba(0, 0, 0, 0) 71.49%);
      }
      .cover-text {
        position: absolute;
        top: 365px;
        left: 7px
        text-align: left;






            .sub-title {
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.04em;
                color: #FFFFFF;
            }
            .h3 {
                     
                font-style: normal;
                font-weight: 500;
                font-size: 10px;
                line-height: 12px;
                letter-spacing: 0.04em;
                color: rgba(255, 255, 255, 0.9);
            }





      }
  }
  
}

`;

const Music = () => {
  const { Meta } = Card;
  return (
    <Stack>
      <div className="covers">
        <div className="generics cover-1">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <div className="sub-title">Daily Vibes 1</div>
            <h3>Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... </h3>
          </div>
        </div>
        <div className="generics cover-2">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <div className="sub-title">Daily Vibes 2</div>
            <h3>Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd.... </h3>
          </div>
        </div>
        <div className="generics cover-3">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <div className="sub-title">Daily Vibes 2</div>
            <h3>Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy</h3>
          </div>
        </div>

        <div className="generics cover-1">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <div className="sub-title">Daily Vibes 1</div>
            <h3>Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... </h3>
          </div>
        </div>
        <div className="generics cover-2">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <div className="sub-title">Daily Vibes 2</div>
            <h3>Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd.... </h3>
          </div>
        </div>
        <div className="generics cover-3">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <div className="sub-title">Daily Vibes 2</div>
            <h3>Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy</h3>
          </div>
        </div>
      </div>

      <div
        style={{
          marginBottom: "0.5rem",
        }}
        className="welcome"
      >
        <h1 className="welcome_h1">Cheers to the weekend!</h1>
      </div>

      <div className="covers">
        <div className="generics cover-1">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <div className="sub-title">Daily Vibes 1</div>
            <h3>Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... </h3>
          </div>
        </div>
        <div className="generics cover-2">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <div className="sub-title">Daily Vibes 2</div>
            <h3>Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd.... </h3>
          </div>
        </div>
        <div className="generics cover-3">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <div className="sub-title">Daily Vibes 2</div>
            <h3>Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy</h3>
          </div>
        </div>

        <div className="generics cover-1">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <div className="sub-title">Daily Vibes 1</div>
            <h3>Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... </h3>
          </div>
        </div>
        <div className="generics cover-2">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <div className="sub-title">Daily Vibes 2</div>
            <h3>Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd.... </h3>
          </div>
        </div>
        <div className="generics cover-3">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <div className="sub-title">Daily Vibes 2</div>
            <h3>Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy</h3>
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default Music;
