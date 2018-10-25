import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { 
  Container, 
  Header, 
  Content, 
  Text, 
  Body,
  Title,
  Left,
  Icon,
  Right,
  Button,
  List,
  ListItem,
  Separator
} from 'native-base';

export default class MonitoringDetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'noid');

    return (
      <Container>
        <StatusBar hidden/>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{name}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <Separator bordered>
              <Text>Info</Text>
            </Separator>
            <ListItem>
              <Left>
                <Text>Name</Text>
              </Left>
              <Right>
                <Text>{name}</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Status</Text>
              </Left>
              <Right>
                <Text>Enable</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Type</Text>
              </Left>
              <Right>
                <Text></Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Access</Text>
              </Left>
              <Right>
                <Text></Text>
              </Right>
            </ListItem>
            <ListItem last>
              <Left>
                <Text>Security Level</Text>
              </Left>
              <Right>
                <Text></Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    
});