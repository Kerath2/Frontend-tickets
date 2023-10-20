import React from 'react';
import {
  Content,
  Form,
  FormGroup,
  TextInput,
  Button,
  Link,
  Checkbox,
  StructuredListWrapper,
  StructuredListRow,
  StructuredListInput,
  StructuredListBody,
  StructuredListCell,
  FormItem,
  StructuredListHead,
} from 'carbon-components-react';
import './_login.scss'

const Login = () => {
  return (
    <div className="login-container">
      <Content>
        <h2 className="login-title">Log in</h2>

        <div id ='crearCuenta'>
          <p> Don't have an account?</p>
          <Link href="/create-account" id = 'link'> 
            Create an Account
          </Link>
        </div>

        <Form>
          <FormGroup>
            <FormItem>
              <TextInput className='texto'
                id="user-id"
                labelText="User ID"
                placeholder="Enter your email address"
                required
              />
            </FormItem>
          </FormGroup>


          <FormGroup>
            <FormItem>
              <TextInput
                className='texto'
                id="password"
                labelText="Password"
                type="password"
                required
              />
            </FormItem>
          </FormGroup>

          <div className="forgot-link">
            <Link href="/forgot-password">Forgot Username or Password?</Link>
          </div>

          <div className="remember-id">
            <Checkbox id="remember-id" labelText="Remember User ID" />
          </div>


          <Button kind="primary" tabIndex={0}>
            Continue
          </Button>

          <div className="help-link">
            <Link href="/need-help">Need Help?</Link>
          </div>
        </Form>
      </Content>
    </div>
  );
};

export default Login;
