import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/swales.jpeg'
import pic02 from '../assets/images/agroforestry-coconut-grove.jpg'
import pic03 from '../assets/images/above-the-falls.jpg'
import pic04 from '../assets/images/level-swales.jpeg'
import pic05 from '../assets/images/liana.jpg'
import pic06 from '../assets/images/guaria-sunset.jpeg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Rainforest Permaculture - Cocal"
                    meta={[
                        { name: 'description', content: 'A farmland restoration project and permaculture education center in the heart of the Osa Peninsula, Costa Rica' },
                        { name: 'keywords', content: 'regeneration, permaculture, agroforestry, Costa Rica' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Earthworks</h3>
                                <p>Restoring the Soil</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Agroforestry</h3>
                                <p>Growing a Food Forest</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Education</h3>
                                <p>Permaculture Lessons for Locals and Visitors</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Community</h3>
                                <p>Regenerating the Osa</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Living Bridges</h3>
                                <p>Preservation of Indigenous Lifeways</p>
                            </header>
                            <a href="http://livingbridgesfoundation.org/" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Rainforest Medicine</h3>
                                <p>Honoring indigenous science and promoting biodiversity</p>
                            </header>
                            <a href="http://rainforestmedicine.net/" className="link primary"></a>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Donate</h2>
                            </header>
                            <p>The Cocal Restoration Project is an intiative of the Living Bridges Foundation, a US 501(c)(3) nonprofit organization.
                            Cocal (Coconut Grove) is 50 hectares of land in Los Planes area of Drake Bay, western Osa peninsula of Costa Rica, that is held as a sociedad civil.
                            Eight hectares are cleared, former cattle pasture that will be regenerated with a permaculture plan to feed the community,
                            and the remaining 42 ha will remain primary rainforest and an important wildlife corridor adjacent to Punta Rio Claro National Wildlife Refuge to the west,
                            and Corcovado National Park to the south.</p>
                            <h4>Current Initiatives</h4>
                            <ul>
                              <li>Trail work and bridge for access</li>
                              <li>Earthworks, digging swales to catch rainwater</li>
                              <li>Soil testing, compost project to restore soil</li>
                              <li>Connect property to electrical grid</li>
                              <li>Build permaculture lodge and worker cabinas</li>
                            </ul>
                            <ul className="actions">
                                <li><a href="http://livingbridgesfoundation.org/" className="button next">Support Regeneration</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
