import React from "react";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";

export default class DebuggingScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header/>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>DebuggingScreen</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}