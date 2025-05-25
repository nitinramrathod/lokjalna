
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 100% 0; }
`;

const SkeletonBox = styled.div`
  background: linear-gradient(
    90deg,
    #eeeeee 25%,
    #dddddd 37%,
    #eeeeee 63%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 1.4s ease infinite;
  border-radius: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ImageSkeleton = styled(SkeletonBox)`
  width: 100%;
  height: 200px;

  @media (min-width: 992px) {
    width: 35%;
    height: 200px;
  }
`;

const Content = styled.div`
  flex: 1;
  width: 100%;

  @media (min-width: 992px) {
    padding-left: 1rem;
  }
`;

const TitleSkeleton = styled(SkeletonBox)`
  width: 90%;
  height: 24px;
  margin-bottom: 1rem;
`;

const TextSkeleton = styled(SkeletonBox)`
  width: 100%;
  height: 16px;
  margin-bottom: 0.75rem;

  &:last-of-type {
    width: 80%;
  }
`;

export default function ResponsiveSkeletonLoader() {
  return (
    <Container>
      <ImageSkeleton />
      <Content>
        <TitleSkeleton />
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
      </Content>
    </Container>
  );
}
