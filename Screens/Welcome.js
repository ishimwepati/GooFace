import React from "react";
import { View } from "react-native";
import { Container, Header, Content, Footer, FooterTab, Left, Body, Right, Title, Button, Icon, Text, Badge } from 'native-base';

export default class WelcomeScreen extends React.Component {

  static navigationOptions = {
  header: null,
  };

  render() {
    return (
      
        <Container>
          <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Bet-Soccer</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
          </Right>
        </Header>

        <Content />
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="football" />
              <Text>Matches</Text>
            </Button>
            <Button vertical>
              <Icon name="refresh" />
              <Text>Live</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="paper" />
              <Text>news</Text>
            </Button>
            <Button vertical>
              <Icon name="star-half" />
              <Text>My Bet</Text>
            </Button>
            
          </FooterTab>
        </Footer>
      </Container>
  
      
      );
  }
}




