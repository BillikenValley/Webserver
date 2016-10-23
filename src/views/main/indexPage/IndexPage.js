import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';
import styles from './styles.module.css';
import Button from 'react-bootstrap/lib/Button'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
import ProgressBar from 'react-bootstrap/lib/ProgressBar'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Checkbox from 'react-bootstrap/lib/Checkbox'
import Radio from 'react-bootstrap/lib/Radio'

var now = 60

export class IndexPage extends React.Component {
  render() {
    function enableForm(){
      //TODO: enable the form
    }
    return (
      <div id='page' className={styles.wrapper}>
      <div className={styles.topbar}>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Home.Me</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav bsSize='small'>
              <NavItem eventKey={1} href='#about'>About us</NavItem>
              <NavItem eventKey={2} href='#glance'>At a glance</NavItem>
              <NavItem eventKey={3} href='#how'>How to help</NavItem>
              <NavItem eventKey={4} href='#partners'>Partners & resources</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={5} href='/coc'>CoC login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.front}>
          <a id='formBtn' onClick={enableForm()} className={styles.formBtn} >
            Home ME!
          </a>
        </div>
        <div id='formWrapper' className={styles.formWrapper}>
          <ProgressBar striped bsStyle='info' now={now} label={`${now}%`} />
          <h1>This is a basic description of what this form is intended for (an
            emergency housing form that fields and ranks what you ll see).
            Answer the questions HONESTLY.</h1>
          <div className={styles.imageWrapper}>
            <img src='http://semantic-ui.com/images/wireframe/image.png' />
          </div>
          <p>Example .png of what you ll see at the end of this form (action plan).</p>
          <form>
            <FormGroup>
              <ControlLabel>HOW MANY BEDS DO YOU NEED? </ControlLabel>
              <FormControl componentClass="textarea" placeholder="If this number
               is more than one person, we will search for the shelter that has
               a bed for everyone in question." />
            </FormGroup>
            <div className={styles.imageWrapper}>
              <img src='https://pixabay.com/static/uploads/photo/2014/04/02/17/04/bed-307817_960_720.png' />
            </div>
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl type="textarea" placeholder="John Smith" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Date of birth</ControlLabel>
              <FormControl type="textarea" placeholder="YYYY/MM/DD" />
            </FormGroup>
            <p>If adult:</p>
            <Checkbox>US veterans</Checkbox>
            <p>Else:</p>
            <Checkbox>w/ guardians</Checkbox>
            <Checkbox>Vaccine ppwk</Checkbox>
            <FormGroup>
              <ControlLabel>Biological sex:</ControlLabel>
              <Checkbox>male</Checkbox>
              <Checkbox>female</Checkbox>
            </FormGroup>
            <p>If female:</p>
            <Checkbox>pregnant?</Checkbox>
            <FormControl type='textarea' placeholder='how many weeks?' />
      			<FormGroup>
      				<p><ControlLabel>Do you have a valid ID?</ControlLabel></	p>
      				<Radio inline>
      					Yes
      				</Radio>
      					{' '}
      				<Radio inline>
      					No
      				</Radio>
      			</FormGroup>
      			<FormGroup>
      				<p><ControlLabel>Do you have a Social Security Number?</ControlLabel></p>
      				<Radio inline>
      					Yes
      				</Radio>
      					{' '}
      				<Radio inline>
      					No
      				</Radio>
      			</FormGroup>
      			<FormGroup>
      				<p><ControlLabel>Are you sober?</ControlLabel></p>
      				<Radio inline>
      					Yes
      				</Radio>
      					{' '}
      				<Radio inline>
      					No
      				</Radio>
      			</FormGroup>
      			<FormGroup>
              <p><ControlLabel>Have you ever been convicted of the following crimes?</ControlLabel></p>
              <Checkbox>Sexual Assualt</Checkbox>
              <Checkbox>Violent crimes</Checkbox>
            </FormGroup>
          </form>
        </div>
        <div className={styles.about}>
          <a id='formBtn' className={styles.formBtn} >
            About US
          </a>
        </div>
        <div className={styles.content}>
          <h1>About us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor ipsum, auctor in metus vitae, euismod vulputate justo. Nullam vel velit ligula. Nulla varius velit vitae risus posuere dignissim. Aliquam erat volutpat. Curabitur ut placerat purus. Proin lacinia a arcu at sollicitudin. Aenean interdum erat felis, sed vehicula turpis varius at. Vivamus fringilla ligula id iaculis lobortis. Morbi malesuada semper tristique. Nam iaculis magna scelerisque velit fringilla egestas. Integer ultrices tincidunt dolor, et luctus odio mattis vitae. Mauris ornare magna nec finibus viverra.</p>
          <p>Quisque bibendum est non libero semper mollis. Aliquam feugiat sapien non felis pellentesque, eget ultricies justo hendrerit. Morbi scelerisque in leo condimentum posuere. Maecenas non elementum ipsum, a congue erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eget accumsan nunc. Phasellus varius magna sed tristique tempus. Nullam malesuada, nibh a rhoncus ultrices, dui neque condimentum ex, sed scelerisque diam justo vel lorem. Sed congue enim velit, ut imperdiet libero egestas quis.</p>
        </div>
        <div className={styles.glance}>
          <a id='formBtn' className={styles.formBtn} >
            At a glance
          </a>
        </div>
        <div className={styles.content}>
          <h1>At a glance</h1>
          <p>Curabitur nec cursus diam. Suspendisse potenti. Fusce nec nulla risus. Praesent finibus neque vitae lacus posuere mattis. Aliquam erat volutpat. Integer sit amet finibus dui, sit amet elementum felis. Phasellus mollis metus eget purus faucibus, non cursus tellus vehicula. Pellentesque eget nulla gravida, luctus erat non, egestas lorem. Cras a molestie urna.</p>
          <p>Morbi elementum feugiat congue. In vitae ex accumsan, finibus enim eu, luctus velit. Praesent ultricies at odio vitae vestibulum. Morbi vel arcu at arcu fringilla facilisis. Duis quis porta sem, malesuada elementum tellus. Pellentesque mattis, est fermentum convallis volutpat, nulla ex suscipit magna, vel bibendum orci est quis mauris. Suspendisse eu dictum risus. Integer vitae mauris laoreet, euismod libero id, porta ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ac viverra nulla. Proin condimentum diam vel ipsum malesuada sodales. Vestibulum nec justo purus.</p>
        </div>
        <div className={styles.how}>
          <a id='formBtn' className={styles.formBtn} >
            How to help
          </a>
        </div>
        <div className={styles.content}>
          <h1>How to help</h1>
          <p>In ullamcorper lobortis tellus ut scelerisque. Integer lobortis dolor lacus, non pretium risus eleifend sit amet. Cras vestibulum, nibh ut tincidunt sodales, metus neque semper mauris, eget viverra ex augue in nisi. Duis vestibulum neque ipsum, eget pulvinar purus scelerisque quis. Aenean odio urna, malesuada ac mollis ac, cursus in orci. Fusce pulvinar, purus ut egestas faucibus, turpis risus finibus nisi, in malesuada dolor mi nec neque. Suspendisse eleifend lectus mauris, ac hendrerit dui mollis ac. Proin urna metus, vulputate in erat sed, aliquet luctus neque. Phasellus sodales neque vel magna vehicula interdum. Aliquam id odio id arcu fermentum pellentesque pellentesque nec arcu. Donec eu pellentesque lacus. Vestibulum feugiat urna vitae mi pellentesque, at tristique velit accumsan. Nulla condimentum lorem ac egestas dapibus. Aenean et tempus massa. Sed tortor orci, placerat vel enim accumsan, tristique aliquam lorem.</p>
        </div>
        <div className={styles.partners}>
          <a id='formBtn' className={styles.formBtn} >
            Partners&Resources
          </a>
        </div>
        <div className={styles.content}>
          <h1>Partners&Resources</h1>
          <p>Ut blandit, odio sed rhoncus semper, ipsum nisi feugiat nunc, non pharetra tortor orci et ligula. Ut auctor odio non neque sodales, in vestibulum dui consectetur. Pellentesque convallis, turpis sed molestie cursus, est massa porta mi, eget commodo mauris elit a diam. Sed at arcu pellentesque, blandit mi vitae, rhoncus orci. In hac habitasse platea dictumst. Pellentesque sit amet turpis posuere, tempor nibh et, dapibus mi. Fusce at commodo ex. Morbi sed auctor nibh, ut lobortis sem. Proin pharetra, ligula at convallis tempus, erat ipsum aliquet libero, iaculis luctus risus erat sit amet leo. In a arcu porta, consequat enim vitae, feugiat ipsum. Suspendisse semper fermentum sem sed ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam finibus, arcu quis egestas mattis, mauris felis faucibus augue, vel auctor justo ante a lectus. Maecenas tincidunt ullamcorper leo sit amet dignissim. Duis laoreet commodo egestas. </p>
        </div>
</div>
      </div>
    )
  }
}



export default IndexPage
