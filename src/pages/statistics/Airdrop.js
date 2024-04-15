import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from 'components/navBar/NavBar.js';
import injectAxios from "plugins/injectAxios.js";
import React from "react";
import st from "settings.js";
import { Box, Text } from '@chakra-ui/react';

import {
  Card, CardHeader, CardBody, Breadcrumb, Heading,
  Grid, GridItem, ChakraProvider, Flex, BreadcrumbLink,
  BreadcrumbItem,
} from '@chakra-ui/react';

export default function App() {
  const [Data, setData] = React.useState(
    {
      "bridgedETHUsersDistributedPoints":"0","countOfBridgedETHUsers":"0",
      "twitteredDistributedPoints":"0","twitteredUserCount":"0",
      "friendTechDistributedPoints": "0", "friendTechUserCount": "0",
    }
  );

  React.useEffect(() => {
    console.log(st.axiosConfig);
    injectAxios.getAxios().get(`/api/v1/heiwa_fd/statistics/airdrop`).then((response) => {
      console.log(response.data);
      setData(response.data.data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <ChakraProvider>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Statistic</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Airdrop I</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
        <Flex>
          <Grid templateColumns='repeat(5, 1fr)' gap={6} p='4'>
            <GridItem>
              <Card>
                <CardHeader>
                  <Heading size='md'>Twitter Airdrop</Heading>
                </CardHeader>
                <CardBody>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    User count
                    </Heading>
                    <Text pt='1' fontSize='md'>
                    {Data.twitteredUserCount} 
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Distributed  points
                    </Heading>
                    <Text pt='1' fontSize='md'>
                    {Data.twitteredDistributedPoints} 
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <CardHeader>
                  <Heading size='md'>Bridge Airdrop</Heading>
                </CardHeader>
                <CardBody>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    User count
                    </Heading>
                    <Text pt='1' fontSize='md'>
                    {Data.countOfBridgedETHUsers} 
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Distributed  points
                    </Heading>
                    <Text pt='1' fontSize='md'>
                    {Data.bridgedETHUsersDistributedPoints} 
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <CardHeader>
                  <Heading size='md'>Friend.tech Airdrop</Heading>
                </CardHeader>
                <CardBody>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    User count
                    </Heading>
                    <Text pt='1' fontSize='md'>
                    {Data.friendTechUserCount} 
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Distributed  points
                    </Heading>
                    <Text pt='1' fontSize='md'>
                    {Data.friendTechDistributedPoints} 
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        </Flex>
      </ChakraProvider>
    </>
  );
}