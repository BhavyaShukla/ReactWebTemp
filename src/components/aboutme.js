import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Instafeed from 'react-instafeed';


class About extends Component{

  render(){
    const instafeedTarget = 'instafeed'
    return(
<div>

<div id={instafeedTarget}>
  <Instafeed
    limit='5'
    ref='instafeed'
    resolution='standard_resolution'
    sortBy='most-recent'
    target={instafeedTarget}
    template= '<a href="{{link}}"><img src="{{image}}" /></a>'
    userId='bhavyashukla94'
    clientId='7e1a727cd02349659827662d8534358b'
    accessToken='1452772236.7e1a727.074fe8caa3a64c2981662e785ab1c08f'
  />

</div>



</div>
    )
  }
}
export default About;
