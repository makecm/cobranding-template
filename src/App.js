import PropTypes from "prop-types";
import './App.css';


function App({ host, guest, type, color, gap }) {
  return (
    <div className="App" style={{color:`${color} `}}>
<img  className="host" src={host} /> 
<span class={type} ></span> 
<img   className="guest"  src={guest} /> 

 
    </div>
  );
}

App.propTypes = {
  host: PropTypes.string,
  guest: PropTypes.string,
  color: PropTypes.string,
  gap: PropTypes.string,
  type: PropTypes.string,
}

App.defaultProps = {
  host: '',
  guest: '',
  color: '',
  gap: '5',
  type: 'bar',



}




export default App;
