import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Invites from '../Components/Invites';
import Notifications from '../Components/Notifications';

class Activity extends Component {

  render() {
    return(
      <div className='activityWrapper'>
        <Tabs>
          <TabList className='tabsList'>
            <Tab>Notifications</Tab>
            <Tab>Invites</Tab>
          </TabList>

          <TabPanel>
            <Notifications notifications={this.props.profile.notifications} onRemoval={this.props.removeNotification}/>
          </TabPanel>
          <TabPanel>
            <Invites invites={this.props.profile.invites} onRemove={this.props.removeInvite}/>
          </TabPanel>
        </Tabs>
      </div>
    )
  }

}

export default Activity;