'use client'
import Input from '@/components/form/Input';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Title } from '../about-us/AboutUs';

const Wrapper = styled.section`
    margin-bottom: 5rem;
    padding-top: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #333;
  line-height: 34px;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Contact = styled.div`
  margin-top: 2rem;
  background-color: #f1f1f1;
  padding: 1rem;
  /* border-left: 5px solid #1a73e8; */
`;


function ContactUs() {
  return (
    <Wrapper>
      <Container>
        <Title>संपर्क साधा</Title>
        <Paragraph>
          तुमच्याकडे एखादी महत्त्वाची बातमी असल्यास ती आमच्याकडे पाठवा किंवा तुम्हाला लोकज्योतच्या टीममध्ये पत्रकार,
          लेखक किंवा बातमीदार म्हणून सहभागी व्हायचं असल्यास तुमचा अनुभव, माहिती आणि उद्देश खालील फॉर्ममधील "वर्णन"
          विभागात लिहा — आमचा प्रतिनिधी लवकरच तुमच्याशी संपर्क साधेल.
        </Paragraph>

        <Form
        // onSubmit={(e) => e.preventDefault()}
        >
          <Row>
            <div className="col-md-4 mb-4">
              <Input placeholder='Enter Your Name' label='नाव' />
            </div>
            <div className="col-md-4 mb-4">
              <Input placeholder='Enter Your Mobile' label='मोबाईल क्रमांक'></Input>
            </div>
            <div className="col-md-4 mb-4">
              <Input placeholder='Enter Your Email' label='ई-मेल'></Input>
            </div>
            <div className="col-12">
              <Input
                // onChange={handleInputChange}
                // value={data?.long_description || ""}
                type="text"
                as="textarea"
                name="long_description"
                id="long_description"
                label="संदेश"
                placeholder="Enter Description"

                rows={4}
              // error={errors?.long_description}
              />
            </div>
            <div className="col-12 mt-4 text-end">

              <Button type="submit">पाठवा</Button>
            </div>
          </Row>
        </Form>

        <Contact>
          <Title>संपर्क</Title>
          <p>📧 +91-9856712777</p>
          <a href='https://jalnalokjyot.vercel.app'>🌐 www.jalnalokjyot.vercel.app</a>
        </Contact>
      </Container>
    </Wrapper>
  )
}

export default ContactUs