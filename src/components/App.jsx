import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';




export class App extends Component {
  

    render( ) {
      return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      Hello World!!!


      <GlobalStyle />
    </div>
  );
};
}


