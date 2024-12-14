"use client";

const { default: styled } = require("@emotion/styled");

const StyledLatestCard = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px;
  min-width: 230px;
  transition: all 0.5s ease-in;

  img {
    width: 130px;
    object-fit: cover;
  }

  .description {
    margin: 0;
    font-size: 14px;
  }
  .title {
    font-size: 16px;
    display: -webkit-box; /* Establish a flexbox container for multiline support */
    -webkit-line-clamp: 3; /* Specify the number of lines to show */
    -webkit-box-orient: vertical; /* Specify the orientation for the box layout */
    overflow: hidden; /* Hide overflowing content */
    text-overflow: ellipsis;
  }

  &:hover {
    .title {
      color: #f8633a;
      text-decoration: underline;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: column;
    max-width: 370px;

    .title {
      font-size: 18px;
      line-height: 26px;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;

const Wrapper = styled.section`
  margin: 60px 0;

  .card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 30px;
  }

  @media (min-width: 1200px) {
    .card-wrapper {
      flex-direction: row;
    }

    /* max-width: 370px; */
  }
`;

export default StyledLatestCard;
export { Wrapper };
