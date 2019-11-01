import React, {Component} from 'react';

class Person extends Component {

    render(){

        const {name} = this.props

        return(
            <div>
                <div>{name} </div>
               
                   <div> 
                       <input type="text" value={name} onChange={this.props.changeName}/>
                       <img src={require('../../../assets/images/icon-delete.png')} alt="" onClick={this.props.click}/>
                       </div>
       

     
            </div>
        )
    }
}

export default Person