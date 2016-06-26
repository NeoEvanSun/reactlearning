import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {HelpBlock} from 'react-bootstrap';

let attachElement = document.getElementById('react-app');
let styleObj = {
  width:'100%',
  textAlign:'center'
}

const FormExample = React.createClass({
  getInitialState() {
    return {
      value: '',
      error:''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.setState({ error: e.target.value.length });
  },

  render() {
    return (
      <div className='col-md-offset-4 col-md-4' style={{marginTop:'5%'}}>
      <div class="login-panel panel panel-default">
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="输入用户名"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>{this.state.error}Validation is based on string length.</HelpBlock>
          <FormControl
            type="password"
            value={this.state.value}
            placeholder="输入密码"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>{this.state.error}Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
      </div>
      </div>
    );
  }
});

ReactDOM.render(<FormExample />, attachElement);
