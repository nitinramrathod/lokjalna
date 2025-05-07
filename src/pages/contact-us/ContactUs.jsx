'use client'
import Input from '@/components/form/Input';
import styled from '@emotion/styled';
import Image from 'next/image';
import React, { useRef } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Title } from '../about-us/AboutUs';
import axios from 'axios';
import { getLogin } from '@/utils/services/login.services';
import { submitEnquiry } from '@/utils/services/services';

const Wrapper = styled.section`
  display:flex;
  gap: 20px;
  flex-direction: column;

  @media screen and (min-width: 992px){
    flex-direction: row;
  }
`;
const Section = styled.section`
    margin-bottom: 5rem;
    padding-top: 1rem;
`;

const ParagraphWrapper = styled.div`
flex: 1.2;
p{
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 36px;
  color: #333;
  line-height: 34px;
  
}
img{
  width: 80%;
  height: auto;
}
 
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 700px;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(255, 94, 0, 0.39);
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.116);
  flex: 1;
`;

const StyledButton = styled(Button)`
  display: flex;
  gap: 10px;
`;
const Contact = styled.div`
  margin-top: 2rem;
  background-color: #f1f1f1;
  padding: 1rem;
  /* border-left: 5px solid #1a73e8; */
`;


function ContactUs() {
const formRef = useRef()
  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(formRef.current);

    submitEnquiry(data).then(res=>{
      console.log('res', res)
      formRef.current.reset();
    }).catch(err=>{
      console.log('err', err)
    })
  }

  return (
    <Section>
      <Container>
        <Title>संपर्क साधा</Title>
        <Wrapper>
          <ParagraphWrapper>
            <p>तुमच्याकडे एखादी महत्त्वाची बातमी असल्यास ती आमच्याकडे पाठवा किंवा तुम्हाला लोकज्योतच्या टीममध्ये पत्रकार,
              लेखक किंवा बातमीदार म्हणून सहभागी व्हायचं असल्यास तुमचा अनुभव, माहिती आणि उद्देश खालील फॉर्ममधील <strong> &quot;Message&quot; </strong>
              विभागात लिहा — आमचा प्रतिनिधी लवकरच तुमच्याशी संपर्क साधेल.
            </p>
            <Image className='mt-4' src="/images/contact-us/maharashtra-map.png" width={300} height={250} alt='Maharashtra Map'></Image>
          </ParagraphWrapper>

          <Form ref={formRef}
          onSubmit={handleSubmit}
          >
            <Row>
              <div className="col-md-12 mb-4">
                <Input placeholder='Enter Your Name' name='name' label='Name' />
              </div>
              <div className="col-md-6 mb-4">
                <Input placeholder='Enter Your Mobile' name='mobile' label='Mobile'></Input>
              </div>
              <div className="col-md-6 mb-4">
                <Input placeholder='Enter Your Email' name='email' label='Email'></Input>
              </div>
              <div className="col-md-12 mb-4">
                <Input placeholder='Enter Your Title' name='title' label='Title'></Input>
              </div>
              <div className="col-12">
                <Input
                  // onChange={handleInputChange}
                  // value={data?.message || ""}
                  type="text"
                  as="textarea"
                  name="message"
                  id="message"
                  label="Message"
                  placeholder="Enter Message"

                  rows={4}
                // error={errors?.message}
                />
              </div>
              <div className="col-12 mt-4 text-end">

                <StyledButton type="submit">Submit<span class="material-symbols-outlined">
                arrow_right_alt
                </span></StyledButton>
              </div>
            </Row>
          </Form>
        </Wrapper>

        {/* <Contact>
          <Title>संपर्क</Title>
          <p>📧 +91-9856712777</p>
          <a href='https://jalnalokjyot.vercel.app'>🌐 www.jalnalokjyot.vercel.app</a>
        </Contact> */}
      </Container>
    </Section>
  )
}

export default ContactUs