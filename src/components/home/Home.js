import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends PureComponent{
 

  render(){
   
    return (
      <section>
        <div>home</div>
        <Link to='/studios'>Add studio</Link>
      </section>
    );
  }
}

export default connect(
  null,
  null
)(Home);