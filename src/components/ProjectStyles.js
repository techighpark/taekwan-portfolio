import styled from "styled-components";

export const Project = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 40vh;
  padding-top: 10vh;
  /* border: 1px solid white; */
`;

export const Title = styled.div`
  width: 100%;
  position: absolute;
  font-size: 70px;
  font-weight: 300;
  z-index: 1;
  transition: 0.5s ease;

  @media screen and (max-width: 1200px) {
    font-size: 60px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 50px;
  }
  @media screen and (max-width: 750px) {
    font-size: 40px;
  }
  @media screen and (max-width: 500px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const SubTitle = styled(Title)`
  text-align: right;
  padding-top: 55px;
  font-size: 30px;
  font-weight: 200;
  @media screen and (max-width: 1200px) {
    padding-top: 50px;
  }
  @media screen and (max-width: 1000px) {
    padding-top: 45px;
  }
  @media screen and (max-width: 750px) {
    padding-top: 40px;
  }
  @media screen and (max-width: 500px) {
    padding-top: 30px;
    text-align: center;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  border-radius: 10px;
  transition: 0.5s ease;
  /* border: 1px solid yellow; */

  @media screen and (max-width: 500px) {
    background: transparent;
    bottom: -350px;
    height: 380px;
    width: 100%;
  }
`;

export const PhotoContainer = styled.div`
  height: 100%;
  width: 50%;
  /* overflow: hidden; */
  text-align: left;
  transition: 0.5s ease;
  /* border: 2px solid orange; */

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const Photo = styled.img`
  /* max-width: 100%; */
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
  transition: 0.5s ease;
  /* border: 1px solid pink; */

  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;

export const Stacks = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease;
  /* border: 2px solid green; */

  @media screen and (max-width: 500px) {
    width: 100%;
    padding-left: 0px;
    align-items: center;
  }
`;

export const StackText = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 500;
  padding: 10px;
  font-size: 14px;
  padding-right: 15px;
  @media screen and (max-width: 500px) {
    padding-right: 0px;
    padding-bottom: 15px;
    font-weight: 300;
  }
`;

export const Contents = styled.div`
  position: relative;
  top: 20vh;
  display: flex;
  /* height: 50vh; */
  transition: 1s ease;
  /* border: 2px solid red; */

  @media screen and (max-width: 1200px) {
    height: 40vh;
  }
  @media screen and (max-width: 1000px) {
    height: 35vh;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    /* height: 15vh; */
  }
`;
