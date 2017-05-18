import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import styles from './../semantic/dist/semantic.min.css';

/* Comment like this */

class App extends Component {
  render() {
    return (
      <div className={styles}>
          Semantic UI theme Builder
          <hr/>


        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>

      </div>
    );
  }
}

export default App;
