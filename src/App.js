import './App.css';

import PropTypes from 'prop-types'
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
function App() {
  return (
    <>
      <Navbar title ="textutils"/>
      <div className ="container">
        <Textarea heading="Enter the text in below textbox"/>
        {/* <Textarea /> */}
      </div>
     
    </>
  );
  
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title:"Enter Title"
}
export default App;

