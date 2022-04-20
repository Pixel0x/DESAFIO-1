import { BsHeart } from "react-icons/bs";
import { Card, Container, Info, Text } from "./style";

interface iPost {
  title: string;
  description: string;
  date: string;
}

export const Post = ({ title, description, date }: iPost) => {
  return (
    <Container>
      <Card>
        <Info>
          <span>{date}</span>
          <span>
            <BsHeart size={24} color={`#574AE8`} />
          </span>
        </Info>
        <Text>
          <h1>{title}</h1>
          <p>{description}</p>
        </Text>
      </Card>
    </Container>
  );
};
