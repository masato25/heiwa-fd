import './Login.css';
import * as React from 'react';
import { 
  ChakraProvider, Flex, Center, CardHeader, Card, CardBody,
  FormControl, FormLabel, Input, FormHelperText,
  Button, Box, Heading, Text
} from '@chakra-ui/react';
import st from 'settings';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordVal: ''
    };

    // This binding is necessary to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log(this.state.passwordVal);
    const myCookie = decodeURIComponent(document.cookie);
    const secret = myCookie.match(/heiwa_secret=([^\s;]+)/m)
    if (!secret || secret.length === 0) {
      document.cookie = `heiwa_secret=${this.state.passwordVal}`;
    }
    window.location.replace(`${st.fedRoot}/statistic/airdrop`);
    // this.setState(prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // }));
  }

  render() {
    return (
      <ChakraProvider>
        <Flex width={"100vw"} height={"100vh"} alignContent={"center"} justifyContent={"center"}>
          <Center>
            <Card>
              <CardHeader>
                <Flex spacing='2'>
                  <Box>
                    <Heading size='sm'>Admin</Heading>
                    <Text>平和な Fed, Welcome</Text>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody>
                  <FormControl>
                    <FormLabel>password</FormLabel>
                    <Input type='password' value={this.state.passwordVal} 
                      onChange={(event) => this.setState({passwordVal: event.target.value})}/>
                    <FormHelperText>*ask admin to get password!</FormHelperText>
                  </FormControl>
                <Button
                  mt={4}
                  colorScheme='teal'
                  // isLoading={props.isSubmitting}
                  type='submit'
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </CardBody>
            </Card>
          </Center>
        </Flex>
      </ChakraProvider>
    );
  }
}

export default Login;