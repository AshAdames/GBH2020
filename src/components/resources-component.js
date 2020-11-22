import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


export default class Resources extends Component {


    render() {
        return (

<Container>
 <br />   
<h1 className="display-4 text-center">Resources for Organizing a Drive</h1>
<br />
<Tab.Container defaultActiveKey="#general">
  <Row>
    <Col sm={4}>
      <ListGroup>
        <ListGroup.Item action href="#general" action variant="info">
          General Tips
        </ListGroup.Item>
        <ListGroup.Item action href="#food" variant="primary">
          Food Drive
        </ListGroup.Item>
        <ListGroup.Item action href="#medical" variant="primary">
          Medical Supply Drive
        </ListGroup.Item>
        <ListGroup.Item action href="#school" variant="primary">
          School Supply Drive
        </ListGroup.Item>
      </ListGroup>
    </Col>

    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#general">
          <p>Want to become more involev with your community? Or want to give back to a particular group that requires assistance such as education, healthcare and others?
          </p>
          <p>Organzing a supply drive is one of the most common ways to give back to your communities and can be used as a tool to invite others to do the same or raise
              awareness to major supply demand.
          </p>
          <p>Before making finalizing your drive, consider contacting your local government officials or nearest major healthcare facility to see if they are in need or
              if there is a local initiative you can assist. 
          </p>
          <p>When deciding on the length of your food drive, remember to give sufficient time for those who join the food drive are able to donate their items. 
          </p>
          <p>If you are unable to organize or participate in a drive, don't feel discouarged! Spreading the word to others and raising awareness to public issues are as important as well.</p>
        </Tab.Pane>
        <Tab.Pane eventKey="#food">
          <p>Organzing a Food Drive is a great way to give back to those in need. Before organzing your own food drive, consider the following information:</p>
          <p>Is there a local food bank near you? Are there other local food drives you can better assist before creating one? In your area, are there items that are in demand?
          </p>
          <p>When creating your list for your food drive, think of items that you shouldn't not accept such as food items that expire quickly or need special storage.</p>
        </Tab.Pane>
        <Tab.Pane eventKey="#medical">
          <p>Before creating a medical supply drive, check in with your local healthcare government officials to see if they have any local drives in the area. </p>
          <p>Additionally, contact healthcare faciltiies such as those who operate 24/7 to see if they have an immediate need for supplies. If you live near rural areas, consider reaching out to
              the appropiate officials to see how you can best assist them.
          </p>
        </Tab.Pane>
        <Tab.Pane eventKey="#school">
          <p>School drives are an excellent way to give back to your community and is an a great way to invite others to be able to donate a variety of items.</p>
          <p>Contact your local school board to see if there are any current school drives or other fundraising events you can participate in. Ask about particular schools that are
              in more need and what items are in demand for both students and teachers.
          </p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</Container>



        );
    }
}