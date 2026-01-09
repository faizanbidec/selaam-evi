import React from 'react'
import Hero from "../../app/components/campaigns/hero";
import Section1 from "../components/campaigns/section1"
import Section4 from "../../app/components/campaigns/section4"
import CampaignsFaq from '../../app/components/campaigns/CampaignsFAQ';
import HumanitarianEfforts from "../../app/components/humanitarian-efforts/humanitarian-efforts";
import LatestStories from "../../app/components/latest-stories/latest-stories";
import ImpactPage from "../../app/components/impact-page/impact-page";
import Together from "../../app/components/together/together";



const Campaigns = () => {
  return (
    <div className='bg-white space-y-40 mb-4 :px-1.5 '>
      <Hero />
      <Section1 />
      <HumanitarianEfforts initialCount={8} showLoadMore={true} />
      <ImpactPage />
      <Section4 />
      <HumanitarianEfforts initialCount={8} showLoadMore={false} showRaisedGoal={false} showSlider={false} />
      <Together />
      <LatestStories showLoadMore={false} />

      <CampaignsFaq />

    </div>
  )
}

export default Campaigns