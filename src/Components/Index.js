import React from 'react';
//TDS Components
import Box from '@tds/core-box';
import Paragraph from '@tds/core-paragraph';
import FlexGrid from '@tds/core-flex-grid';
import Heading from '@tds/core-heading';
import Image from '@tds/core-image';
import Text from '@tds/core-text';
import ButtonLink from '@tds/core-button-link';
import HairlineDivider from '@tds/core-hairline-divider';
import Link from '@tds/core-link';
import ChevronLink from '@tds/core-chevron-link';
import { ExpandCollapse } from '@tds/core-expand-collapse';
import OrderedList from '@tds/core-ordered-list';

//images
import setUpBoxImage from '../images/TV_Box_GoT.jpg';
import ImageTileMobility from '../images/ImageTile_Mobility.jpg';
import telusWifiImage from '../images/telus-boost-wifi_2x__3_.jpg';
import phoneImage from '../images/Phones.jpg';
import bestShowImage from '../images/painkiller-730x412.jpg';
import seeDetails from '../images/dunkirk_homepage-featured-tile.jpg';
import kidZone from '../images/despicable-me3__homepage-featured-tile.jpg';


export const Index = () => {
       return (
              <Box horizontal={8} >
                     <FlexGrid>
                            <FlexGrid.Row >
                                   <FlexGrid.Col xs={0} md={5}>
                                          <Image src={setUpBoxImage} alt="Set up box" />
                                   </FlexGrid.Col>
                                   <FlexGrid.Col xs={12} md={7}>
                                          <Box between={3} vertical={4}>
                                                 <Box between={4}>

                                                        {/* Heading level 4 with an h3 tag */}
                                                        <Heading level="h1" tag="h2">
                                                               Get a FREE 50" LG 4K HDR Smart TV.
                                                        </Heading>
                                                 </Box>

                                                 <Text>
                                                        Get a FREE 50" LG 4K HDR Smart TV when you order Internet and Optik TV on a 2 year term.<Text.Sup>1</Text.Sup> Plus, get a $250 bill credit when you order online.<Text.Sup>2</Text.Sup>
                                                 </Text>

                                                 <div>
                                                        <ButtonLink>View Offer</ButtonLink>
                                                 </div>
                                          </Box>
                                   </FlexGrid.Col>
                            </FlexGrid.Row>
                            <HairlineDivider />
                            <FlexGrid.Row horizontalAlign="center" >
                                   <FlexGrid.Col xs={12} md={12}>
                                          <Box vertical={5}>
                                                 <Heading level="h1" tag="h2">Shop our products and services</Heading>
                                          </Box>
                                   </FlexGrid.Col >
                            </FlexGrid.Row>

                            <FlexGrid.Row horizontalAlign="center" >
                                   <FlexGrid.Col xs={12} md={2}>
                                          <Link href="#" invert={true}>
                                                 <Box vertical={3}>
                                                        <Image src={ImageTileMobility} />
                                                 </Box>
                                                 <Text bold >Mobility</Text>
                                          </Link>
                                   </FlexGrid.Col >
                                   <FlexGrid.Col xs={12} md={2}>
                                          <Box vertical={3}>
                                                 <Image src={ImageTileMobility} />
                                          </Box>
                                          <Text bold>Mobility</Text>
                                   </FlexGrid.Col >
                                   <FlexGrid.Col xs={12} md={2}>
                                          <Box vertical={3}>
                                                 <Image src={ImageTileMobility}/>
                                          </Box>
                                          <Text bold>Mobility</Text>
                                   </FlexGrid.Col >
                                   <FlexGrid.Col xs={12} md={2}>
                                          <Box vertical={3}>
                                                 <Image src={ImageTileMobility} />
                                          </Box>
                                          <Text bold>Mobility</Text>
                                   </FlexGrid.Col >
                                   <FlexGrid.Col xs={12} md={2}>
                                          <Box vertical={3}>
                                                 <Image src={ImageTileMobility} />
                                          </Box>
                                          <Text bold>Mobility</Text>
                                   </FlexGrid.Col >
                                   <FlexGrid.Col xs={12} md={2}>
                                          <Box vertical={3}>
                                                 <Image src={ImageTileMobility} />
                                          </Box>
                                          <Text bold>Mobility</Text>
                                   </FlexGrid.Col >
                            </FlexGrid.Row>

                            <Box vertical={5}>
                                   <FlexGrid.Row horizontalAlign="center" >
                                   </FlexGrid.Row>
                                   <FlexGrid.Col xs={12} md={2}>
                                   </FlexGrid.Col>
                            </Box>
                            <Box vertical={6}>
                                   <FlexGrid.Row horizontalAlign="left" >
                                          <FlexGrid.Col xs={12} md={3}>
                                                 <Heading level="h4">Get the best home internet coverage for FREE.</Heading>
                                                 <Box vertical={3}>
                                                        <Paragraph>Get the TELUS Boost Wi-Fi Starter Pack and Expansion pack ($240 value), included with internet on a 2 year term. <Text.Sup>3</Text.Sup> Order online and get a $100 bill credit.<Text.Sup>3</Text.Sup></Paragraph>
                                                 </Box>
                                                 <ChevronLink href="#">View Offer</ChevronLink>
                                          </FlexGrid.Col>
                                          <FlexGrid.Col xs={12} md={3}>
                                                 <Link href="#" invert={true}>
                                                        <Image src={telusWifiImage} />
                                                 </Link>
                                          </FlexGrid.Col>
                                          <FlexGrid.Col xs={12} md={3}>
                                                 <Heading level="h4">Get $200 off a new smartphone plus rewards that rock.
                                          </Heading>
                                                 <Box vertical={3}>
                                                        <Paragraph>Add Mobility to your TELUS Home Services and get $200 off a new smartphone. Plus bonuses like unlimited internet at home and 1GB of data on the go.</Paragraph>
                                                 </Box>
                                                 <ChevronLink href="#">See details</ChevronLink>
                                          </FlexGrid.Col>
                                          <FlexGrid.Col xs={12} md={3}>
                                                 <Link href="#" invert={true}>
                                                        <Image src={phoneImage} />
                                                 </Link>
                                          </FlexGrid.Col>
                                   </FlexGrid.Row>
                            </Box>

                            <FlexGrid.Row horizontalAlign="left" >
                                   <FlexGrid.Col xs={12} md={12}>
                                          <Box vertical={3}>
                                                 <Heading level="h2" tag="h3">See what’s new on Optik TV</Heading>
                                          </Box>
                                   </FlexGrid.Col >
                            </FlexGrid.Row>

                            <FlexGrid.Row>
                                   <FlexGrid.Col xs={12} md={4}>
                                          <Box vertical={3}>
                                                 <Image src={bestShowImage} />
                                          </Box>
                                          <ChevronLink href="#">The best shows</ChevronLink>
                                   </FlexGrid.Col>
                                   <FlexGrid.Col xs={12} md={4}>
                                          <Box vertical={3}>
                                                 <Image src={seeDetails} />
                                          </Box>
                                          <ChevronLink href="#">See details</ChevronLink>
                                   </FlexGrid.Col>
                                   <FlexGrid.Col xs={12} md={4}>
                                          <Box vertical={3}>
                                                 <Image src={kidZone} />
                                          </Box>
                                          <ChevronLink href="#">Kids zone</ChevronLink>
                                   </FlexGrid.Col>
                            </FlexGrid.Row>

                            <Box vertical={6}>
                            <ExpandCollapse>
  <ExpandCollapse.Panel id="terms-condi" header="Terms & Conditions">
    <OrderedList>
  <OrderedList.Item>
  Offer subject to change without notice, while quantities last and cannot be combined with promotional prices. Available to residential customers who have not subscribed to TELUS TV or Internet in the past 90 days. TELUS reserves the right to modify channel lineups and packaging, and regular pricing, without notice. Regular pricing includes an ongoing $10/mo discount for Internet 50 or higher. 4K HDR television required to watch 4K HDR. Optik 4K PVR and Internet 50 or above required to watch 4K HDR on Optik. Subscription to corresponding channels required; not available with all channels. Final eligibility for the services will be determined by a TELUS representative. The Essentials is required for all Optik TV subscriptions. A cancellation fee applies for early termination of the service agreement and will be the value of the promotional gift received in return for your term commitment, multiplied by the number of months remaining in the term (with a partial month counting as a full month), divided by the total number of months in the term, plus applicable taxes. TELUS reserves the right to substitute an equivalent or better product without notice. LG 50UK6300 TV has a retail value of $799, based on the manufacturer’s suggested retail price.
  </OrderedList.Item>
  <OrderedList.Item>
  $250 bill credit, only available to online orders of Internet and Optik TV bundles on a 2-year term. A $200 credit will be applied to online orders of only Internet or Optik TV on a 2-year term. Available to residential customers who have not subscribed to TELUS TV or Internet in the past 90 days. Offer subject to change without notice. Bill credit will be applied upon order completion and will appear on your first bill after activation. Bill credits are non-transferable, can only be applied to pay for services charges, and carry no cash value after deactivating your services.

  </OrderedList.Item>
  <OrderedList.Item>Offer available while quantities last and cannot be combined with promotional prices. A cancellation fee applies for early termination of the service agreement and will be $10 per month, multiplied by the number of months remaining in the term (with a partial month counting as a full month), plus applicable taxes. Offer subject to change without notice. Available to residential customers who have not subscribed to TELUS Internet service in the past 90 days. Internet access is subject to usage limits; additional charges apply for exceeding the included data. Offer includes a wireless gateway rental at no extra cost, which lets you connect devices wirelessly to create your own wireless home network. A cancellation fee applies to the early termination of a service agreement, to cover the cost of free installation and equipment rental, and will be $10 per month multiplied by the number of months remaining in the term, plus applicable taxes. Rental equipment must be returned in good condition upon cancellation of service, otherwise the replacement cost will be charged to the account.</OrderedList.Item>
</OrderedList>
  </ExpandCollapse.Panel>
  
</ExpandCollapse> </Box>
                     </FlexGrid></Box>)
}

