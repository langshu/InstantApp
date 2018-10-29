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
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Debugging</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                    ----------Download log start----------
                </Text>
                <Text>
                    download log not available
                </Text>
                <Text>
                    ----------Download log end------------
                </Text>
                <Text>
                    Download status: incomplete
                </Text>
                <Text>
                    ----------Upgrade log start----------
                </Text>
                <Text>
                    upgrade log not available
                </Text>
                <Text>
                    ----------Upgrade log end------------
                </Text>
                <Text>
                    Upgrade status: upgrade status not available
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}