import React, { Component } from 'react';
import { Card,Grid,Button, Form, Checkbox } from 'semantic-ui-react';
import styles from './../semantic/dist/semantic.min.css';

/* Comment like this */

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Please Login',
        };


    }

  render() {
    return (
      <div className={styles}>

          <p> LOGIN FORM EXAMPLE</p>
          <br/>



          <Grid centered >
              <Grid.Column mobile={14} tablet={12} computer={8}>

                  <Card fluid>
                      <Card.Content>
                          <Card.Header>
                              {this.state.message}
                          </Card.Header>
                      </Card.Content>

                      <Card.Content>
                          <Form>
                              <Form.Field>
                                  <Form.Input placeholder='Username' label='Username' icon='user' />
                              </Form.Field>
                              <Form.Field>
                                  <Form.Input placeholder='Password' label='Enter Password' type='password' icon='key' />
                              </Form.Field>
                              <Form.Field>
                                  <Checkbox label='I agree to the Terms and Conditions' />
                              </Form.Field>
                              <Button fluid primary type='submit'>Submit</Button>
                          </Form>
                      </Card.Content>
                  </Card>



              </Grid.Column>

          </Grid>


      </div>
    );
  }
}

export default App;
