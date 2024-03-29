import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from 'components/navBar/NavBar.js';
import injectAxios from "plugins/injectAxios.js";
import React from "react";
import st from "settings.js";
import { background } from '@chakra-ui/react';

import {
  Card, CardHeader, CardBody, Breadcrumb, Heading,
  Grid, GridItem, ChakraProvider, Flex, BreadcrumbLink,
  BreadcrumbItem,
} from '@chakra-ui/react';

export default function App() {
  const [Data, setData] = React.useState(
    {"bridgedETHUsersDistributedPoints":"0","countOfBridgedETHUsers":"0","twitteredDistributedPoints":"0","twitteredUserCount":"0"}
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
                  <div>
                    <div>
                      User count: {Data.twitteredUserCount} 
                    </div>
                    <div>
                      Distributed  points: {Data.twitteredDistributedPoints}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <CardHeader>
                  <Heading size='md'>Bridge Airdrop</Heading>
                </CardHeader>
                <CardBody>
                  <div>
                    <div>
                      User count: {Data.bridgedETHUsersDistributedPoints} 
                    </div>
                    <div>
                      Distributed  points: {Data.countOfBridgedETHUsers}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        </Flex>
      </ChakraProvider>
    </>
  );
}