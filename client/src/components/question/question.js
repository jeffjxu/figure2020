import React from 'react';
import { Card } from 'react-bootstrap';
import '../../App.css';
import { Link } from "react-router-dom";


const QuestionCard = props => {
  const question = props.question

  return (
      <Link style={{"textDecoration": 'none'}} to={{ pathname: '/getresponse/' + question._id}}>
        <div className="cards" style={{margin: "12px"}}>
          <Card style={{width: '19rem', height: '10rem', "borderStyle": "solid", "borderWidth": "1px", "borderColor": "#FFF4F9", "borderRadius": "15px"}}>
            <Card.Body style={{display: "flex", "flexDirection": "column", "justifyContent": "center", "fontWeight":"550"}}>
              <Card.Text>
               {question.body}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Link>
  )
}

export default QuestionCard;