import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Form} from 'react-bootstrap';

function WriteNote() {
  //keeps track of checkbox state
    const [checked, setIsChecked] = useState(false);
   
    //toggles the checkbox state
    const handleOnChange = () => {
      setIsChecked(!checked);
    };

    //the form
    function NoteInfo()
      {
        return(
        <>
        <Row>
          <p>Please write your note below. Don’t forget to include your name:</p>
        </Row>
        <Row>
          <Col> 
        <Form.Control as="textarea" rows={3} id = "bigTxt" />
         </Col>
          </Row>
          <br/>
        </>)
      }
    
      return( <>
        <div>
          <h2>Writing a note</h2>
          <p>Would you like to write a note to go with your flowers? </p>
          <input type="checkbox" checked = {checked} onChange={handleOnChange}/>
                <label>Yes</label>
            
               {checked && ( <div>
                  <NoteInfo/>
                </div>)
               } 
            </div>
          </>
          );
        }

export default WriteNote;