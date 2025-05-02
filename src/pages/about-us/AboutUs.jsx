'use client'
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react'
import { Container } from 'react-bootstrap'


const Section = styled.section`
  margin-bottom: 2rem;
`;
const Wrapper = styled.section`
    margin-bottom: 5rem;
    padding-top: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.7rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  position: relative;
  padding-left: 15px;


  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: #1a73e8;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 2rem;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #1a73e8;
`;


const FounderSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: flex-start;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FounderImage = styled.div`
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  width: 200px;
  height: 250px;
`;

const FounderInfo = styled.div`
  flex-grow: 1;
`;

function AboutUs() {
  return (
    <Wrapper>

    
    <Container>
      <Section>
        <Title>आमच्याविषयी</Title>
        <Paragraph>
          <Highlight>जालना लोकज्योत </Highlight> ही एक स्वतंत्र, पारदर्शक आणि लोकहितासाठी कार्य करणारी मराठी न्यूज वेबसाईट आहे. आमचे ध्येय म्हणजे सत्य, विवेचनात्मक आणि जबाबदारीने पत्रकारिता लोकांपर्यंत पोहोचवणे.
        </Paragraph>
        <Paragraph>
          डिजिटल युगात लोकांना खऱ्या, बिनधास्त आणि विश्लेषणात्मक बातम्यांची गरज आहे. <Highlight>जालना लोकज्योत </Highlight> या माध्यमातून आम्ही समाजातील महत्त्वाच्या घटना, राजकारण, समाजकारण, ग्रामीण समस्या, आणि लोकजीवनाशी निगडित मुद्दे आपल्या मातृभाषेत पोहोचवतो.
        </Paragraph>
      </Section>

      <Section>
        <Title>संस्थापकाबद्दल</Title>
        <FounderSection>
          <FounderImage>
            <Image
              src="/images/about-us/ram-pratap-rathod.jpg"
              alt="Ram Pratap Rathod"
              width={200}
              height={250}
              layout="responsive"
              objectFit="cover"
            />
          </FounderImage>
          <FounderInfo>
            <Paragraph>
              <Highlight>राम राठोड</Highlight> हे <Highlight>जालना लोकज्योत </Highlight> या बातमी संस्थेचे संस्थापक असून, ते अंबड, जिल्हा जालना येथील रहिवासी आहेत. ते मठातांडा-दाढेगाव सहकारी संस्थेचे उपाध्यक्ष म्हणूनही कार्यरत असून, ग्रामीण भागातील शेतकरी, तरुण आणि सामान्य जनतेसाठी कार्य करण्याची त्यांची सातत्यपूर्ण तळमळ आहे.
            </Paragraph>
            <Paragraph>
            शेतकऱ्यांच्या समस्या, त्यांचे हक्क, बाजार व्यवस्थापन आणि शाश्वत शेती यांसाठी राम राठोड यांनी अनेक सामाजिक उपक्रम राबवले आहेत. त्यांच्या नेतृत्वामुळे जालना लोकज्योत  ही फक्त बातमी संस्था न राहता, समाजाच्या बाजूने उभी राहणारी चळवळ बनली आहे.
            </Paragraph>
            <Paragraph>
            जालना लोकज्योत  स्थापनेचा उद्देश एकच होता — <em>&quot;जनतेच्या आवाजाला वाट करून देणे आणि सत्याला उजेडात आणणे. &quot;</em>
            </Paragraph>
          </FounderInfo>
        </FounderSection>
      </Section>

      <Section className='mt-5'>
        <Title>आमची मूल्ये</Title>
        <ul>
          <li>सत्य आणि तथ्यांवर आधारित पत्रकारिता</li>
          <li>कोणत्याही राजकीय पक्ष किंवा संस्थेपासून स्वतंत्र</li>
          <li>ग्रामीण आणि उपेक्षित भागांतील आवाजाला प्राधान्य</li>
          <li>वाचकांशी प्रामाणिकपणा</li>
        </ul>
      </Section>

    
    </Container>
    </Wrapper>
  )
}

export default AboutUs