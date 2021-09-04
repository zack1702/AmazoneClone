import React from "react";
import image from "./Moi.png";

const myStyle = {
  textAlign : 'left',
  margin : '10% 30%',
  backgroundColor: 'rgb(240, 242, 245)',
  boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)'
}

const profileStyle = {
  display : 'flex',
  flexDirection : 'row',
  justifyContent : 'space-evenly'
}

class App extends React.Component {

  constructor(props){
    super(props)

  this.state = {
    Person : {
    fullname : 'ELBAYED Zakaria',
    biographie : 'Coding since 2017',
    imgSrc : image,
    profession :'Web Developper'
    },
    shows : true,
    seconds : 1
  }
}

toggleBtn = () => {
  this.setState(prevState => ({
    shows : !prevState.shows
  }))
}

componentDidMount() {
  this.timer = setInterval(() => {
    this.setState({ seconds: this.state.seconds + 1 });
  }, 1000);
}

  render() {
    return(
      <div  style={myStyle}>
      <button onClick={this.toggleBtn} style={{float : 'right'}}>{this.state.shows ? 'Show' : 'Hide'}</button>
      <br/>
      {this.state.shows ?
       <div style={profileStyle}>
            <img src={this.state.Person.imgSrc} alt='zack' style={{borderRadius : '50%'}}></img>
          <div>
            <h3>{this.state.Person.fullname}</h3>
            <h3>{this.state.Person.biographie}</h3>
            <h3>{this.state.Person.profession}</h3>
          </div>
        </div>
        : ''
  }
      Connexion:  {this.state.seconds} secondes
      </div>
    )
  }
}

export default App;