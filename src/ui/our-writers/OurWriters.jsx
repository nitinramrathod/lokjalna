
import Image from 'next/image';
import React from 'react'
import { Container } from 'react-bootstrap'
import WriterBox, { FounderImage, FounderInfo, FounderSection, Highlight, Paragraph, Section, Title, Wrapper, WritersContainer } from './our-writers.styled';

function OurWriters({data}) {
  console.log('data', data, '<==')
  return (
    <Wrapper>
      <Container>
        <Section>
          <Title>संस्थापकाबद्दल</Title>
          <FounderSection>
            
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
          </FounderSection>
        </Section>

        <Section className='mt-5'>
          <Title>Writers</Title>
          <Paragraph>
            लोकज्योतमधील प्रत्येक बातमी मागे आहे एक समर्पित लेखक, जो सत्य, पारदर्शकता आणि समाजहितासाठी लेखन करतो. आमचे लेखक विविध पार्श्वभूमीतून येतात, आणि त्यांच्या लेखनातून व्यक्त होतो त्यांच्या अनुभवांचा ठसा.

            स्थानिक घडामोडी असोत, सखोल विश्लेषण असो किंवा राष्ट्रीय घडामोडी – या सर्वांमागे आहेत हे धाडसी आणि जाणकार व्यक्तिमत्व.

            त्यांचे लेख वाचा, त्यांचे विचार जाणून घ्या आणि लोकज्योतच्या विश्वासार्हतेचा भाग व्हा.
          </Paragraph>
          <WritersContainer>
           {data?.length > 0 && data?.map((item, index)=> <WriterBox key={item?.name + index} data={item}/>)}

          </WritersContainer>

        </Section>


      </Container>
    </Wrapper>
  )
}

export default OurWriters