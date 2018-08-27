import React, { Component } from 'react';
import HomeStudio from '../Components/HomeStudio';
import Status from '../Components/Status';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Reward from '../Components/Reward';
import RewardInProgress from '../Components/RewardInProgress';
import RewardExplore from '../Components/RewardExplore';

class Rewards extends Component {

  render() {
    return(
      <div className='rewards'>
        <div className='rewardsWrapper'>
          <header>
            <h1 className='userName'>Rewards</h1>
          </header>
          <section className='mainInfo'>
            <div className='card'>
              <HomeStudio data={this.props.profile.homeStudio} />
              <Status level={this.props.profile.level} levelsList={this.props.profile.levelsList} points={this.props.profile.points} />
            </div>
          </section>
          <section>
            <Tabs>
              <TabList className='tabsList'>
                <Tab>Redeem</Tab>
                <Tab>Explore</Tab>
              </TabList>

              <TabPanel>
                <Reward rewards={this.props.profile.rewards} />
                <RewardInProgress rewards={this.props.profile.rewardsInProgress} />
              </TabPanel>
              <TabPanel>
                <RewardExplore rewards={this.props.profile.rewards}/>
              </TabPanel>
            </Tabs>
          </section>
        </div>
      </div>
    )
  }

}

export default Rewards;