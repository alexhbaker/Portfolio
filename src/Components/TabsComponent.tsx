import React from 'react'
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel
} from '@chakra-ui/react'

const TabsComponent = () => {
  return (
  <>
    <div>Tabs</div>
    <Tabs>
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
            </TabPanel>
        </TabPanels>
    </Tabs>
    </>
  )
}

export default TabsComponent