import Image from "next/image";
import React from "react";
import { DetailHeading } from "../common/text.styled";
import Wrapper, { BackButton, Category, DetailWrapper } from "./news-detail.styled.";
import { back_icon } from "@/assets/icons/navigation.icon";
import { Date } from "../home/home.styled";

const Landing = () => {
  return (
    <Wrapper>
      <BackButton>{back_icon} Back to list</BackButton>

      <Category>
        Sport News
      </Category>

      <DetailHeading className="heading">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        reprehenderit quia! Illum, veniam!
      </DetailHeading>
      <Date className="date">Sunday, 15 Dec 2024</Date>
      <Image
        className="landing-image"
        width={600}
        height={300}
        src="/images/landing-news.png"
        alt="landing image"
      />
      <DetailWrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas rem velit libero enim odio hic facilis et consequatur dolorum possimus eos quod repellendus repellat amet ut, ea mollitia unde aliquid dolore minima iure. Ipsam sunt neque dicta a at accusantium rem aliquid aspernatur beatae inventore dolore quae totam voluptates cupiditate ad, hic in id ab provident vitae modi optio laboriosam omnis? Mollitia non inventore quidem eligendi modi porro laboriosam. Dolor blanditiis reprehenderit explicabo nulla quasi! Ab molestias obcaecati nesciunt dignissimos alias dolore possimus aut quas. Dolorum veritatis nam repellendus soluta similique, tenetur quisquam? Repellat debitis aliquam dolorem natus porro eaque laboriosam, blanditiis aut consequuntur modi, nobis temporibus quibusdam? Velit labore saepe officia nobis quis quaerat temporibus expedita ipsum sed.
        explicabo nulla quasi! Ab molestias obcaecati nesciunt dignissimos alias dolore possimus aut quas. Dolorum veritatis nam repellendus soluta similique, tenetur quisquam? Repellat debitis aliquam dolorem natus porro eaque laboriosam, blanditiis aut consequuntur modi, nobis temporibus quibusdam? Velit labore saepe officia nobis quis quaerat temporibus expedita ipsum sed. <br />

        explicabo nulla quasi! Ab molestias obcaecati nesciunt dignissimos alias dolore possimus aut quas. Dolorum veritatis nam repellendus soluta similique, tenetur quisquam? Repellat debitis aliquam dolorem natus porro eaque laboriosam, blanditiis aut consequuntur modi, nobis temporibus quibusdam? Velit labore saepe officia nobis quis quaerat temporibus expedita ipsum sed. <br /><br />
        explicabo nulla quasi! Ab molestias obcaecati nesciunt dignissimos alias dolore possimus aut quas. Dolorum veritatis nam repellendus soluta similique, tenetur quisquam? Repellat debitis aliquam dolorem natus porro eaque laboriosam, blanditiis aut consequuntur modi, nobis temporibus quibusdam? Velit labore saepe officia nobis quis quaerat temporibus expedita ipsum sed.
      </DetailWrapper>
    </Wrapper>
  );
};

export default Landing;
