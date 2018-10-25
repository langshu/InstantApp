import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { 
  Container, 
  Header, 
  Content, 
  Tab, 
  Tabs, 
  Text, 
  Body,
  Title,
  Left,
  Icon,
  Right,
  Button,
  List,
  ListItem 
} from 'native-base';

const TEST_NETWORKS_DATA = [{
  name: 'MySSID-1',
  type: 'Employee',
  clients: '10',
  band: '5G',
  networkTye: 'wifi',
  status: 'enabled'
}, {
  name: 'MySSID-2',
  type: 'Employee',
  clients: '0',
  band: '5G',
  networkTye: 'wifi',
  status: 'enabled'
}, {
  name: 'MySSID-3',
  type: 'Guest',
  clients: '5',
  band: '5G',
  networkTye: 'wifi',
  status: 'enabled'
}];
const TEST_APS_DATA = [{
  name: 'AP-1',
  type: '335',
  clients: '5',
  ip: '10.64.65.10',
  status:''
}, {
  name: 'AP-2',
  type: '335',
  clients: '15',
  ip: '10.64.65.11',
  status:''
}];
const TEST_CLIENTS_DATA = [{
  name: 'Client-1',
  type: '',
  band: '',
  ip: '10.64.65.22',
  status:''
},{
  name: 'Client-2',
  type: '',
  band: '',
  ip: '10.64.65.23',
  status:''
},{
  name: 'Client-3',
  type: '',
  band: '',
  ip: '10.64.65.24',
  status:''
},{
  name: 'Client-4',
  type: '',
  band: '',
  ip: '10.64.65.25',
  status:''
},{
  name: 'Client-5',
  type: '',
  band: '',
  ip: '10.64.65.26',
  status:''
}];

class NetworksTab extends React.Component {
  render() {
    return (
      <List
        dataArray={TEST_NETWORKS_DATA}
        renderRow={data => {
          return (
            <ListItem
              icon
              style={styles.list}
              onPress={() => {
                this.props.navigation.navigate('MonitoringDetails', {
                  type: 'network',
                  name: data.name
                });
              }}
            >
              <Left>
                <Icon style={{width: 30}} type="FontAwesome" name="wifi" />
              </Left>
              <Body>
                <Text>{data.name}</Text>
                <Text note>{data.type}</Text>
              </Body>
              <Right>
                <Text style={styles.listText}>{data.clients} Clients</Text>
                <Icon type="FontAwesome" name="angle-right" />
              </Right>
            </ListItem>
          );
        }}
      />
    );
  }
};

class APsTab extends React.Component {
  render() {
    return (
      <List
        dataArray={TEST_APS_DATA}
        renderRow={data => {
          return (
            <ListItem
              icon
              style={styles.list}
              onPress={() => {
                this.props.navigation.navigate('MonitoringDetails', {
                  type: 'ap',
                  name: data.name
                });
              }}
            >
              <Left>
                <Icon style={{width: 30}} type="FontAwesome" name="wifi" />
              </Left>
              <Body>
                <Text>{data.name}</Text>
                <Text note>{data.ip}</Text>
              </Body>
              <Right>
                <Text style={styles.listText}>{data.clients} Clients</Text>
                <Icon type="FontAwesome" name="angle-right" />
              </Right>
            </ListItem>
          );
        }}
      />
    );
  }
};

class ClinetsTab extends React.Component {
  render() {
    return (
      <List
        dataArray={TEST_CLIENTS_DATA}
        renderRow={data => {
          return (
            <ListItem
              icon
              style={styles.list}
              onPress={() => {
                this.props.navigation.navigate('MonitoringDetails', {
                  type: 'client',
                  name: data.name
                });
              }}
            >
              <Left>
                <Icon type="FontAwesome" name="tablet" />
              </Left>
              <Body>
                <Text>{data.name}</Text>
                <Text note>{data.ip}</Text>
              </Body>
              <Right>
                <Icon type="FontAwesome" name="angle-right" />
              </Right>
            </ListItem>
          );
        }}
      />
    );
  }
}

export default class MonitoringScreen extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar hidden/>
        <Header hasTabs>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Monitoring</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="Networks">
            <NetworksTab navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="APs">
            <APsTab navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="Clients">
            <ClinetsTab navigation={this.props.navigation}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    list: {
      marginRight: 10
    },
    listButton: {
      height: 30
    },
    listText: {
      color: "#02a7ec",
      fontSize: 13
    }
});