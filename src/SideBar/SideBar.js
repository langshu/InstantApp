import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
    Icon
} from "native-base";
const routes = [{
    Text: "Home",
    Icon: "home"
}, {
    Text: "Monitoring",
    Icon: "bar-chart"
}, {
    Text: "Settings",
    Icon: "cog"
}, {
    Text: "Debugging",
    Icon: "terminal"
}];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            source={require('../../images/banner-logo.png')}
            style={{
              width: 177,
              alignSelf: "center",
              marginTop: 30
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 50 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.Text)}
                >
                    <Icon style={{width: 32, marginRight: 5}} type="FontAwesome" name={data.Icon} />
                    <Text>{data.Text}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}