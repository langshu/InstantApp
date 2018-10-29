import React from "react";
import { StatusBar, StyleSheet, ScrollView, View } from "react-native";
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
  Separator,
  Segment
} from 'native-base';

import _ from "lodash";
import ChartView from 'react-native-highcharts';

const options = {
  global: {
    useUTC: false,
    colors: ["#02a7ec", "#F5831E", "#4572A7", "#AA4643", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"]
  },
  lang: {
    decimalPoint: ',',
    thousandsSep: '.'
  }
};

class NetworkDetails extends React.Component {
  render() {
    const network = this.props.data;

    var Highcharts='Highcharts';
    var confClients = {
        chart: {
          type: 'spline',
          animation: Highcharts.svg, // don't animate in old IE
          marginRight: 20,
          marginLeft: 50,
          events: {
            load: function () {

              // set up the updating of the chart each second
              var series = this.series[0];
              setInterval(function () {
                  var x = (new Date()).getTime(), // current time
                      y = parseInt(Math.random() * 10) + 1;
                  series.addPoint([x, y], true, true);
              }, 5000);
            }
          }
        },
        credits: {
          enabled: false
        },
        title: {
          text: null
        },
        xAxis: {
          type: 'datetime',
          tickPixelInterval: 150,
          title: {
            enabled: false
          }
        },
        yAxis: {
          title: {
            enabled: false
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }],
          allowDecimals: false
        },
        tooltip: {
          formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
              Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' + this.y;
              //Highcharts.numberFormat(this.y, 2);
          }
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        series: [{
          name: 'Clients',
          data: (function () {
              // generate an array of random data
              var data = [],
                  time = (new Date()).getTime(),
                  i;

              for (i = -19; i <= 0; i += 1) {
                  data.push({
                      x: time + i * 1000,
                      y: parseInt(Math.random() * 10) + 1
                  });
              }
              return data;
          }())
        }]
    };

    var confThroughput = {
      chart: {
        type: 'areaspline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 20,
        marginLeft: 50,
        events: {
          load: function () {

            // set up the updating of the chart each second
            var series = this.series[0];
            setInterval(function () {
                var x = (new Date()).getTime(), // current time
                    y = Math.random() * 1000 + 1;
                series.addPoint([x, y], true, true);
            }, 5000);
          }
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150,
        title: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          enabled: false
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }],
        allowDecimals: false
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.series.name + '</b><br/>' +
            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
            Highcharts.numberFormat(this.y, 2);
        }
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Throughput',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random() * 1000 + 1
                });
            }
            return data;
        }())
      }]
    };

    return (
      <ScrollView>
        <Separator bordered>
          <Text>Info</Text>
        </Separator>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>Name</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{network.name}</Text>
          </Right>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>VLAN</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{network.vlan}</Text>
          </Right>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>Type</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{network.type}</Text>
          </Right>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>Access</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{network.access}</Text>
          </Right>
        </ListItem>
        <ListItem last Icon style={styles.listItem}>
          <Left>
            <Text style={styles.text}>Security Level</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{network.security_level}</Text>
          </Right>
        </ListItem>
        <Separator bordered>
          <Text>Usage Trends</Text>
        </Separator>
        <Text style={styles.chartTitle}>Clients</Text>
        <ChartView style={{height:200}} config={confClients} options={options}></ChartView>
        <Text style={styles.chartTitle}>Throughput (bps)</Text>
        <ChartView style={{height:200}} config={confThroughput} options={options}></ChartView>
      </ScrollView>
    );
  }
};

class APDetails extends React.Component {
  render() {
    const ap = this.props.data;
    var Highcharts='Highcharts';
    var conf = {
        chart: {
          type: 'spline',
          animation: Highcharts.svg, // don't animate in old IE
          marginRight: 20,
          marginLeft: 50,
          events: {
            load: function () {

              // set up the updating of the chart each second
              var series = this.series[0];
              setInterval(function () {
                  var x = (new Date()).getTime(), // current time
                      y = parseInt(Math.random() * 10) + 1;
                  series.addPoint([x, y], true, true);
              }, 5000);
            }
          }
        },
        credits: {
          enabled: false
        },
        title: {
          text: null
        },
        xAxis: {
          type: 'datetime',
          tickPixelInterval: 150,
          title: {
            enabled: false
          }
        },
        yAxis: {
          title: {
            enabled: false
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }],
          allowDecimals: false
        },
        tooltip: {
          formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
              Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' + this.y;
              //Highcharts.numberFormat(this.y, 2);
          }
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        series: [{
          name: 'Clients',
          data: (function () {
              // generate an array of random data
              var data = [],
                  time = (new Date()).getTime(),
                  i;

              for (i = -19; i <= 0; i += 1) {
                  data.push({
                      x: time + i * 1000,
                      y: parseInt(Math.random() * 10) + 1
                  });
              }
              return data;
          }())
        }]
    };
    return (
      <ScrollView>
        <Separator bordered>
          <Text>Info</Text>
        </Separator>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>IPv6 Address</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{ap.ipv6}</Text>
          </Right>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>Mode</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{ap.mode}</Text>
          </Right>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>Spectrum</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{ap.spectrum}</Text>
          </Right>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>CPU utilization</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{ap.cpu_utilization}</Text>
          </Right>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>Memory free</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{ap.memory_free}</Text>
          </Right>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>MAC</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{ap.mac}</Text>
          </Right>
        </ListItem>
        <Separator bordered>
          <Text>Radio</Text>
        </Separator>
        <View style={styles.radioView}>
          <View style={styles.radioRow}>
            <Text style={styles.radioRowTitle}> </Text>
            <Text style={styles.radioRowTitle}>Radio 0</Text>
            <Text style={styles.radioRowTitle}>Radio 1</Text>
          </View>
          <View style={styles.radioRow}>
            <Text style={styles.radioRowLabel}>Channel</Text>
            <Text style={styles.radioRowValue}>{ap.radio_0.channel}</Text>
            <Text style={styles.radioRowValue}>{ap.radio_1.channel}</Text>
          </View> 
          <View style={styles.radioRow}>
            <Text style={styles.radioRowLabel}>Power (dBm)</Text>
            <Text style={styles.radioRowValue}>{ap.radio_0.power}</Text>
            <Text style={styles.radioRowValue}>{ap.radio_1.power}</Text>
          </View>
          <View style={styles.radioRow}>
            <Text style={styles.radioRowLabel}>Utilization (%)</Text>
            <Text style={styles.radioRowValue}>{ap.radio_0.utilization}</Text>
            <Text style={styles.radioRowValue}>{ap.radio_1.utilization}</Text>
          </View>
          <View style={styles.radioRow}>
            <Text style={styles.radioRowLabel}>Noise (dBm)</Text>
            <Text style={styles.radioRowValue}>{ap.radio_0.noise}</Text>
            <Text style={styles.radioRowValue}>{ap.radio_1.noise}</Text>
          </View>
        </View>
        <Separator bordered>
          <Text>Overview</Text>
        </Separator>
        <Text style={styles.chartTitle}>Clients</Text>
        <ChartView style={{height:200}} config={conf} options={options}></ChartView>
      </ScrollView>
    );
  }
};

class ClientDetails extends React.Component {
  render() {
    const client = this.props.data;
    var Highcharts='Highcharts';
    var confSignal = {
        chart: {
          type: 'spline',
          animation: Highcharts.svg, // don't animate in old IE
          marginRight: 20,
          marginLeft: 50,
          events: {
            load: function () {

              // set up the updating of the chart each second
              var series = this.series[0];
              setInterval(function () {
                  var x = (new Date()).getTime(), // current time
                      y = parseInt((Math.random() + 1) * 40);
                  series.addPoint([x, y], true, true);
              }, 5000);
            }
          }
        },
        credits: {
          enabled: false
        },
        title: {
          text: null
        },
        xAxis: {
          type: 'datetime',
          tickPixelInterval: 150,
          title: {
            enabled: false
          }
        },
        yAxis: {
          title: {
            enabled: false
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }],
          allowDecimals: false
        },
        tooltip: {
          formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
              Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' + this.y;
              //Highcharts.numberFormat(this.y, 2);
          }
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        series: [{
          name: 'Signal',
          data: (function () {
              // generate an array of random data
              var data = [],
                  time = (new Date()).getTime(),
                  i;

              for (i = -19; i <= 0; i += 1) {
                  data.push({
                      x: time + i * 1000,
                      y: parseInt((Math.random() + 1) * 40)
                  });
              }
              return data;
          }())
        }]
    };
    var confSpeed = {
        chart: {
          type: 'spline',
          animation: Highcharts.svg, // don't animate in old IE
          marginRight: 20,
          marginLeft: 50,
          events: {
            load: function () {

              // set up the updating of the chart each second
              var series = this.series[0];
              setInterval(function () {
                  var x = (new Date()).getTime(), // current time
                      y = parseInt((Math.random() + 1) * 400);
                  series.addPoint([x, y], true, true);
              }, 5000);
            }
          }
        },
        credits: {
          enabled: false
        },
        title: {
          text: null
        },
        xAxis: {
          type: 'datetime',
          tickPixelInterval: 150,
          title: {
            enabled: false
          }
        },
        yAxis: {
          title: {
            enabled: false
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }],
          allowDecimals: false
        },
        tooltip: {
          formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
              Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' + this.y;
              //Highcharts.numberFormat(this.y, 2);
          }
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        series: [{
          name: 'Speed',
          data: (function () {
              // generate an array of random data
              var data = [],
                  time = (new Date()).getTime(),
                  i;

              for (i = -19; i <= 0; i += 1) {
                  data.push({
                      x: time + i * 1000,
                      y: parseInt((Math.random() + 1) * 400)
                  });
              }
              return data;
          }())
        }]
    };
    return (
      <ScrollView>
        <Separator bordered>
          <Text>Info</Text>
        </Separator>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>Mac</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{client.mac}</Text>
          </Right>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>IPv6</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{client.ipv6}</Text>
          </Right>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>OS</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{client.os}</Text>
          </Right>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>ESSID</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{client.essid}</Text>
          </Right>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>Access Point</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{client.ap}</Text>
          </Right>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>Type</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{client.type}</Text>
          </Right>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Left>
            <Text style={styles.text}>Role</Text>
          </Left>
          <Right>
            <Text style={styles.valueText}>{client.role}</Text>
          </Right>
        </ListItem>
        <Separator bordered>
          <Text>RF Trends</Text>
        </Separator>
        <Text style={styles.chartTitle}>Signal (dB)</Text>
        <ChartView style={{height:200}} config={confSignal} options={options}></ChartView>
        <Text style={styles.chartTitle}>Speed (Mbps)</Text>
        <ChartView style={{height:200}} config={confSpeed} options={options}></ChartView>
      </ScrollView>
    );
  }
};

class NetworkViewTop extends React.Component {
  render() {
    const network = this.props.data;
    return (
      <View style={styles.view}>
        <View style={styles.rowView}>
          <Icon style={{width: 35, flex:1, flex: 1, alignSelf: 'center'}} type="FontAwesome" name="wifi" />
          <Text style={styles.rowValueText}>{network.type}</Text>
          <Text style={styles.rowValueText}>{network.band}</Text>
        </View>
        <View style={styles.rowView}>
          <Text style={{width: 30, height:30}} />
          <Text style={styles.rowText}>Status</Text>
          <Text style={styles.rowValueText}>{network.status}</Text>
        </View> 
        <View style={styles.rowView}>
          <Text style={{width: 30, height:30}} />
          <Text style={styles.rowText}>Clients</Text>
          <Text style={styles.rowValueText}>{network.clients}</Text>
        </View>
      </View>
    );
  }
}

class APViewTop extends React.Component {
  render() {
    const ap = this.props.data;
    return (
      <View style={styles.view}>
        <View style={styles.rowView}>
          <Icon style={{width: 35, flex:1, flex: 1, alignSelf: 'center'}} type="FontAwesome" name="wifi" />
          <Text style={styles.rowValueText}>{ap.type}</Text>
          <Text style={styles.rowValueText}>{ap.sn}</Text>
        </View>
        <View style={styles.rowView}>
          <Text style={{width: 30, height:30}} />
          <Text style={styles.rowText}>IP</Text>
          <Text style={styles.rowValueText}>{ap.ip_address}</Text>
        </View> 
        <View style={styles.rowView}>
          <Text style={{width: 30, height:30}} />
          <Text style={styles.rowText}>Clients</Text>
          <Text style={styles.rowValueText}>{ap.clients}</Text>
        </View>
      </View>
    );
  }
}

class ClientViewTop extends React.Component {
  render() {
    const client = this.props.data;
    return (
      <View style={styles.view}>
        <View style={styles.rowView}>
          <Icon style={{width: 30, flex:1, flex: 1, alignSelf: 'center'}} type="FontAwesome" name="tablet" />
          <Text style={styles.rowValueText}>{client.ip_address}</Text>
          <Text style={styles.rowValueText}>{client.channel}</Text>
        </View>
        <View style={styles.rowView}>
          <Text style={{width: 30, height:30}} />
          <Text style={styles.rowText}>Signal</Text>
          <Text style={styles.rowValueText}>{client.signal}</Text>
        </View> 
        <View style={styles.rowView}>
          <Text style={{width: 30, height:30}} />
          <Text style={styles.rowText}>Speed</Text>
          <Text style={styles.rowValueText}>{client.speed}</Text>
        </View>
      </View>
    );
  }
}

const fetchData = function(type, key) {
  let data = {
    name: key,
    vlan: '-',
    band: '2G / 5G',
    clients: 5,
    status: 'Enable',
    type: 'Employee',
    access: 'Unrestricted',
    security_level: 'Enterprise'
  };

  if (type == 'ap') {
    data = {
      name: key,
      clients: 5,
      ip_address: '10.65.65.10',
      ipv6: '-',
      mac: '70:3a:0e:cc:ec:86',
      cpu_utilization: '5 %',
      memory_free: '215 MB',
      mode: 'Access',
      spectrum: 'Disabled',
      mesh_role: 'N/A',
      zone: '-',
      type: '335(indoor)',
      sn: 'CNBQJ0Y04Q',
      radio_0: {
        channel: '52E',
        power: '17',
        utilization: '21',
        noise: '-92'
      },
      radio_1: {
        channel: '1',
        power: '9',
        utilization: '81',
        noise: '-82'
      }
    };
  }

  if (type == 'client') {
    data = {
      name: key,
      ip_address: '10.65.68.21',
      mac: '10:02:b5:4b:b6:0d',
      os: 'Linux',
      essid: 'test-ssid',
      ap: '70:3a:0e:cc:ec:3c',
      channel: '149E',
      type: 'AC',
      role: 'test-ssid',
      ipv6: 'fe80::',
      signal: '43',
      speed: '263'
    };
  }
  return data;
}

export default class MonitoringDetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const key = navigation.getParam('key');
    const type = navigation.getParam('type');

    const data = fetchData(type, key);
    const network = data;

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
            <Title>{data.name}</Title>
          </Body>
          <Right />
        </Header>
        {type == 'network' ? <NetworkViewTop data={data} /> : null}
        {type == 'ap' ? <APViewTop data={data} /> : null}
        {type == 'client' ? <ClientViewTop data={data} /> : null}
        <Content>
          {type == 'network' ? <NetworkDetails data={data} /> : null}
          {type == 'ap' ? <APDetails data={data} /> : null}
          {type == 'client' ? <ClientDetails data={data} /> : null}
        </Content>
      </Container>
    );
  }
}

const chartStyles = {
  axisOne: {
    grid: {
      stroke: (tick) =>
        tick === -10 ? "transparent" : "#ffffff",
      strokeWidth: 2
    },
    axis: { strokeWidth: 0 },
    ticks: { strokeWidth: 0 },
    tickLabels: {
      //fill: BLUE_COLOR,
      fontFamily: "inherit"
      //fontSize: 16
    }
  }
}

const styles = StyleSheet.create({
  listItem: {
    height: 30,
  },
  text: {
    fontSize: 14,
    color: '#333'
  },
  valueText: {
    textAlign: 'right',
    width: 150,
    fontSize: 14,
    color: '#888'
  },
  view: {
    //backgroundColor: 'skyblue', 
    //flex: 1, 
    height: 100,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'stretch'
  },
  rowView: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  rowText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    alignSelf: 'center'
  },
  rowValueText: {
    flex: 1,
    fontSize: 14,
    color: '#888',
    alignSelf: 'center'
  },
  chartTitle: {
    fontSize: 14,
    marginLeft: 20,
    marginTop: 10,
    color: '#333'
  },
  radioView: {
    marginLeft: 20,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  radioRow: {
    height: 30,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
    borderStyle: 'solid'
  },
  radioRowTitle: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    textAlign: 'right',
    paddingRight: 20
  },
  radioRowLabel: {
    flex: 1,
    fontSize: 14,
    color: '#333'
  },
  radioRowValue: {
    flex: 1,
    fontSize: 14,
    color: '#888',
    textAlign: 'right',
    paddingRight: 20
  }
});