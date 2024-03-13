import React from 'react'
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Flex
} from '@chakra-ui/react'
import AboutMe from './AboutMe'

const TabsComponent = () => {
  return (
  <>
    <div>Tabs</div>
    <Flex direction="column" width="100%">
    <Tabs variant="enclosed" flex={1} width="100%">
        <TabList>
            <Tab>Main Page</Tab>
            <Tab>Projects</Tab>
            <Tab>About Me</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <p>Main</p>
            </TabPanel>
            <TabPanel>
                <p>Projects</p>
            </TabPanel>
            <TabPanel>
                <p>About Me</p>
                <AboutMe />
            </TabPanel>
        </TabPanels>
    </Tabs>
    </Flex>
    </>
  )
}

export default TabsComponent