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
  const [Data, setData] = React.useState({
      "blast_pending_point": "0.0",
      "blast_point_total_sent": "0.0",
      "count_of_registered_farcaster_user": 0,
      "count_of_registered_twitter_user": 0,
      "count_of_registered_user": 0,
      "count_unique_followers": 0,
      "total_pool_count": 0,
      "total_reserve_supply": "0",
      "total_sponsor_balance": "0",
      "total_staked_balance": "0",
      "total_ticket_balance": "0"
    }
  );

  React.useEffect(() => {
    console.log(st.axiosConfig);
    injectAxios.getAxios().get(`/api/v1/pools/info`).then((response) => {
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
          <BreadcrumbLink href='#'>General</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
        <Flex>
          <Grid templateColumns='repeat(5, 1fr)' gap={6} p='4'>
            <GridItem>
              <Card>
                <CardHeader>
                  <Heading size='md'>Pools Info</Heading>
                </CardHeader>
                <CardBody>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Total Pool Amount
                    </Heading>
                    <Text pt='1' fontSize='md'>
                      {Data['total_pool_count']}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Universal Pool ETH
                    </Heading>
                    <Text pt='1' fontSize='md'>
                      {Data['total_reserve_supply'] / 1e18}
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <CardHeader>
                  <Heading size='md'>Count Of Users</Heading>
                </CardHeader>
                <CardBody>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Total Users
                    </Heading>
                    <Text pt='1' fontSize='md'>
                    {Data['count_of_registered_user']}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Registered Twitter Users
                    </Heading>
                    <Text pt='1' fontSize='md'>
                    {Data['count_of_registered_twitter_user']}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Registered Farcaster Users
                    </Heading>
                    <Text pt='1' fontSize='md'>
                      {Data['count_of_registered_farcaster_user']}
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <CardHeader>
                  <Heading size='md'>Assets</Heading>
                </CardHeader>
                <CardBody>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    TVL
                    </Heading>
                    <Text pt='1' fontSize='md'>
                    {Data['total_staked_balance'] / 1e18}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Total Sponsor ETH
                    </Heading>
                    <Text pt='1' fontSize='md'>
                    {Data['total_sponsor_balance'] / 1e18}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Total User Staked ETH
                    </Heading>
                    <Text pt='1' fontSize='md'>
                    {Data['total_ticket_balance'] / 1e18}
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