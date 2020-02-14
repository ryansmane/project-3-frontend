import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
const axios = require('axios');
const url = 'http://localhost:8080/api/movies';

const Create = props => {
  const [title, setTitle] = useState('');
  const [plot, setPlot] = useState('');

  const postMovie = () => {
    const newMovie = {
      title,
      plot
    };
    console.log(newMovie);
    axios.post(url, newMovie).then(res => res.json(newMovie));
  };

  return (
    <div>
      <Form>
        <Form.Group
          onChange={evt => setTitle(evt.target.value)}
          className="title-submit"
          controlId="formBasicEmail"
        >
          <Form.Label>Title</Form.Label>
          <Form.Text className="text-muted"></Form.Text>
          <Form.Control type="email" placeholder="Title" />
        </Form.Group>

        <Form.Group
          onChange={evt => setPlot(evt.target.value)}
          className="synopsis-submit"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Synopsis</Form.Label>
          <Form.Text className="text-muted"></Form.Text>
          <Form.Control placeholder="Plot" as="textarea" rows="15" />
        </Form.Group>

        <Button
          onClick={evt => {
            evt.preventDefault();
            postMovie();
          }}
          className="submission-button"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Create;
