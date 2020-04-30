import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/team-coco.jpeg'
import pic02 from '../assets/images/planted-cocoterra.jpeg'
import pic03 from '../assets/images/above-the-falls.jpg'
import pic04 from '../assets/images/coco-flowers.jpeg'
import pic05 from '../assets/images/liana.jpg'
import pic06 from '../assets/images/guaria-sunset.jpeg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Rainforest Permaculture - Cocoterra"
                    meta={[
                        { name: 'description', content: 'A farmland restoration project and permaculture education center in the heart of the Osa Peninsula, Costa Rica' },
                        { name: 'keywords', content: 'regeneration, permaculture, agroforestry, Costa Rica' },
                    ]}
                >
                  <link rel="shortcut icon" type="image/png" href="cocoterra.ico"/>
                  <link rel="shortcut icon" type="image/png" href="http://rainforestpermaculture.com/cocterra.ico"/>
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Our Story</h3>
                                <p>The Story of Cocoterra</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Permaculture</h3>
                                <p>Ancient and Novel Permaculture Practices</p>
                            </header>
                            <Link to="/permaculture" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Living Bridges</h3>
                                <p>Preservation of Indigenous Lifeways and Biodiversity Conservation</p>
                            </header>
                            <a href="http://livingbridgesfoundation.org/" target="_blank" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Support Regeneration</h3>
                                <p>Contribute to Biodiversity Conservation, Permaculture and Sustainable Communities</p>
                            </header>
                            <a href="https://charity.gofundme.com/o/en/campaign/cocoterra" target="_blank" className="link primary"></a>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Support Regeneration</h2>
                            </header>
                            <p>Cocoterra Rainforest Permaculture is an intiative of the Living Bridges Foundation, a US 501(c)(3) nonprofit organization.
                            Cocoterra is 50 hectares of land in Los Planes area of Drake Bay, western Osa peninsula of Costa Rica, that is held as a sociedad civil.
                            Eight hectares are cleared, former cattle pasture that will be regenerated with a permaculture plan to feed the community,
                            and the remaining 42 ha will remain primary rainforest and an important wildlife corridor adjacent to Punta Rio Claro National Wildlife Refuge to the west,
                            and Corcovado National Park to the south.</p>

                            <p>Coconuts and corn already sprout, swales have been dug, biochar has been buried, and time is measured by mangoes dropping from the trees. The most immediate work at Cocoterra has been planned out and will be done by the current staff as soon as funding arrives:</p>
                            <ol>
                              <li>Completion of the bridge for 4-wheel access to bring larger building materials for the education center, volunteer quarters, and irrigation system</li>
                              <li>Water tower, pump, and irrigation system to support the tropical plants vulnerable to drought during the 3-month dry season, January - March</li>
                              <li>Electrical installation</li>
                              <li>Education center construction.</li>
                            </ol>
                            <p>Tapirs graze on fallen mangoes as we await your generous support that will immediately impact our beautiful green planet and all its creatures.</p>

                            <div className="donate-button">
                              <ul className="actions">
                                  <li><a href="https://charity.gofundme.com/o/en/campaign/cocoterra" target="_blank" className="button scrolly">Donate</a></li>
                              </ul>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex

// <article style={{backgroundImage: `url(${pic03})`}}>
//     <header className="major">
//         <h3>Education</h3>
//         <p>Permaculture Training for Locals and Visitors</p>
//     </header>
//     <Link to="/landing" className="link primary"></Link>
// </article>
// <article style={{backgroundImage: `url(${pic04})`}}>
//     <header className="major">
//         <h3>Community</h3>
//         <p>Regenerating the Osa</p>
//     </header>
//     <Link to="/landing" className="link primary"></Link>
// </article>
