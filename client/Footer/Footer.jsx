import React from 'react';
import styled from 'styled-components';
import Socials from './Socials.jsx';
import {Container, Announce, Header, Section, ListWrapper, List, ListItem, Link, Join, AllLinks, Button} from './styles_footer.js';

function Footer(props) {
  return (
    <div>
      <Container>
        <Join>
          <Announce>Join IKEA Family</Announce>
          <Section>
            Bring your ideas to life with special discounts, inspiration, and lots of good things in store. It's all free. <Link href="#">See more</Link>.
          </Section>
          <Button>Join or log in</Button>
        </Join>
        <AllLinks>
          <ListWrapper>
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
          </ListWrapper>
          <ListWrapper>
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
          </ListWrapper>
          <ListWrapper>
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
          </ListWrapper>
          <ListWrapper>
            <Header>Legal</Header>
            <List>
              <ListItem><Link href="#">Privacy & Security</Link></ListItem>
              <ListItem><Link href="#">Privacy Policy</Link></ListItem>
              <ListItem><Link href="#">Terms and Conditions</Link></ListItem>
              <ListItem><Link href="#">IKEA Children's Product Registration</Link></ListItem>
              <ListItem><Link href="#">IKEA SMÅLAND Privacy notice</Link></ListItem>
            </List>
          </ListWrapper>
        </AllLinks>
      </Container>
      <Socials />
    </div>
  );
}

export default Footer;