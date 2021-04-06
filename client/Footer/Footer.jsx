import React from 'react';
import styled from 'styled-components';
import {Container, Header, List, ListItem, Link} from '../styled-component-const.js';

function Footer(props) {
  return (
    <Container>
      <div>
        <Header>Join IKEA Family</Header>
        <section>
          Bring your ideas to life with special discounts, inspiration, and lots of good things in store. It's all free. See more.
        </section>
        <button>Join or log in</button>
      </div>
      <div>
        <Header>Help</Header>
        <List>
          <ListItem><Link href="#">Customer Service</Link></ListItem>
          <ListItem><Link href="#">FAQ</Link></ListItem>
          <ListItem><Link href="#">My Orders</Link></ListItem>
          <ListItem><Link href="#">Contact Us</Link></ListItem>
          <ListItem><Link href="#">Product Recalls</Link></ListItem>
          <ListItem><Link href="#">Return Policy</Link></ListItem>
          <ListItem><Link href="#">Warranties</Link></ListItem>
          <ListItem><Link href="#">Feedback</Link></ListItem>
        </List>
      </div>
      <div>
        <Header>Shop & Learn</Header>
        <List>
          <ListItem><Link href="#">Find a Location</Link></ListItem>
          <ListItem><Link href="#">IKEA Services</Link></ListItem>
          <ListItem><Link href="#">IKEA Catalogue & Brochures</Link></ListItem>
          <ListItem><Link href="#">IKEA Family</Link></ListItem>
          <ListItem><Link href="#">IKEA Planning Tools</Link></ListItem>
          <ListItem><Link href="#">Buying Guides</Link></ListItem>
          <ListItem><Link href="#">Gift Cards</Link></ListItem>
          <ListItem><Link href="#">Gift Registry</Link></ListItem>
          <ListItem><Link href="#">IKEA Credit Card Management</Link></ListItem>
          <ListItem><Link href="#">IKEA Credit Cards</Link></ListItem>
          <ListItem><Link href="#">Explore the New IKEA App</Link></ListItem>
        </List>
      </div>
      <div>
        <Header>About IKEA</Header>
        <List>
          <ListItem><Link href="#">This is IKEA</Link></ListItem>
          <ListItem><Link href="#">Careers</Link></ListItem>
          <ListItem><Link href="#">Newsroom</Link></ListItem>
          <ListItem><Link href="#">Life at Home</Link></ListItem>
          <ListItem><Link href="#">A Sustainable Everyday</Link></ListItem>
          <ListItem><Link href="#">IKEA Foundation</Link></ListItem>
          <ListItem><Link href="#">Creating Safer Homes Together</Link></ListItem>
        </List>
      </div>
      <div>
        <Header>Legal</Header>
        <List>
          <ListItem><Link href="#">Privacy & Security</Link></ListItem>
          <ListItem><Link href="#">Privacy Policy</Link></ListItem>
          <ListItem><Link href="#">Terms and Conditions</Link></ListItem>
          <ListItem><Link href="#">IKEA Children's Product Registration</Link></ListItem>
          <ListItem><Link href="#">IKEA SMÅLAND Privacy notice</Link></ListItem>
        </List>
      </div>
    </Container>
  );
}

export default Footer;