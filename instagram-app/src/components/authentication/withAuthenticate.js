import React from 'react';

const withAuthenticate = Comp1 => Comp2 =>
    class extends React.Component {
      state = {
        loggedIn: false,
      }

      componentDidMount() {
        this.setState({
          loggedIn: localStorage.getItem('username')
        })
      
      }
        render(){
          if (this.state.loggedIn) {
            return <Comp1 {...this.props} />;
          }
          else {
            return <Comp2 {...this.props} />;
          }
        }
    }

export default withAuthenticate;


////inside func later////
            // if (localStorage.getItem('notLoggedIn')) {
            //     return <comp1 />;
            //   } else {
            //     return <comp2 />;
            //   }