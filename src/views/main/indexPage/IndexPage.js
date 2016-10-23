import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';
import Map, {GoogleApiWrapper} from 'google-maps-react'
import styles from './styles.module.css';
import Header from 'components/Header/Header'
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
      <Header />
      <div className={styles.content}>
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
        /* About us */
        <div className={styles.about}>
          <a id='formBtn' className={styles.formBtn} >
            About US
          </a>
        </div>
        <div className={styles.content}>
          <h1>about us</h1>
        </div>
        /* At a glance */
        <div className={styles.glance}>
          <a id='formBtn' className={styles.formBtn} >
            At a glance
          </a>
        </div>
        <div className={styles.content}>
          <h1>At a glance</h1>
        </div>
        /* How to help */
        <div className={styles.how}>
          <a id='formBtn' className={styles.formBtn} >
            How to help
          </a>
        </div>
        <div className={styles.content}>
          <h1>How to help</h1>
        </div>
        /* Partners&Resources */
        <div className={styles.partners}>
          <a id='formBtn' className={styles.formBtn} >
            Partners&Resources
          </a>
        </div>
        <div className={styles.content}>
          <h1>Partners&Resources</h1>
        </div>
        <div style="position: relative; width: 100%; height: 250px;">
        <Map
            google={this.props.google} />
          </div>
        <p>

          <Link to="about">About</Link>
        </p>
      </div>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBUiVTXXB7f7Z2CHemNJxehSaskM6B5eyQ"
})(IndexPage);
