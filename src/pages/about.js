import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbout from '../components/BannerAbout'

import pic08 from '../assets/images/planted-cocoterra.jpeg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import portrait from '../assets/images/sparrow-portrait.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>About - Cocoterra Rainforest Permaculture</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <BannerAbout />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>About</h2>
                    </header>
                    <p>Cocoterra is a farmland restoration project and permaculture education center in the heart of the Osa Peninsula, Costa Rica. This 70-acre slice of land is nestled in the mega-biodiverse rainforest of the Osa Peninsula. Cocoterra is divided by a beautiful 100-foot waterfall and includes 43 acres of primary rainforest as well as 27 acres for regenerative permaculture projects. Adjacent to Corcovado National Park, a critical protected area of the greatest biodiversity, second only to the rainforests of the Andes.</p>
                    <p>This region of Los Planes, adjacent to Corcovado National Park, is at a critical point in time. Primary rainforest and abandoned pasture land now comes face-to-face with the advancements of local development. Los Planes de Osa was connected to the electrical grid only two years ago, and was made accessible by a new bridges only a year ago. The area surrounding Cocoterra Rainforest Permaculture is rapidly changing--locals with deep respect for the exquisite biodiversity face newcomers, increasing land development. The high cost of food increases threats on wildlife from hunting.</p>
                    <p>At this critical point, old agricultural systems that rely on greater expanses of land no longer work and consequently have been abandoned and must be replaced with regenerative modalities. Community members faced with the high cost of living in Costa Rica are eager to learn new ways of regenerative agriculture. In order to educate people to act as stewards of nature, they must be well fed, and permaculture models become key tools in this process to prevent biodiversity loss and the further depletion of surrounding areas.</p>
                    <p>Cocoterra Rainforest Permaculture provides immersive, hands-on educational opportunities for community members, visitors, and volunteers to learn about permaculture, regenerative design models, rainforest and biodiversity conservation, sustainable food production, food security, ethnobotany and herbalism all while transforming pasture land into an abundant source of food, medicinal plants, and wildlife habitat. This project unites people from many walks of life under the common goal of protecting the life that sustains us all.</p>
                </div>
                <div className="inner">
                    <header className="major">
                        <h2>Jonathon Miller Weisberger</h2>
                    </header>
                    <img src={portrait} alt="portrait of Jonathon" width="180" className="image left" />
                    <p>Jonathon is the steward of Cocoterra and has lived in the Drake Bay / Los Planes area of Costa Rica since 2000. A published ethnobotanist, he has spent the past twenty-six years studying rainforest plant medicine traditions and indigenous science.
                    Jonathon has worked on a vast array of initiatives such as rainforest conservation, cultural heritage preservation, and restoration of degraded lands, all in remote regions of South and Central America among indigenous communities.
                    His projects include the physical demarcation of the Huaorani peoples' homelands, relocation of colonist settlers, and the creation and demarcation of Napo-Galeras National Park in Ecuador (1990-1994),
                    which preserved a significant portion of ancestral homelands for the Siekopai people (1995-2000).</p>
                    <p>Jonathon oversees a marine turtle conservation project and ethnobotanical garden at <a href="http://www.oceanforest.org">Ocean Forest Ecolodge</a> (formerly known as Guaria de Osa) on the Osa Peninsula of Costa Rica,
                    where he lives most of the year. Since 1996 he has organized biannual Rainforest Medicine Councils.
                    experiential workshops for personal, community, and planetary renewal, that have offered participants an intimate opportunity to meet and learn from indigenous elders, the mighty rainforest and numerous plant teachers.
                    His book <a href="http://rainforestmedicine.net/" target="_blank">Rainforest Medicine – Preserving Indigenous Science and Biodiversity in the Upper Amazon</a> was published in 2013.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/permaculture" className="image">
                        <img src={pic08} alt="garden rows" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Permaculture</h3>
                            </header>
                            <p>Cocoterra Rainforest Permaculture Project features ancient and novel permaculture practices for optimal soil, plant, and ecosystem quality.</p>
                            <ul className="actions">
                                <li><Link to="/permaculture" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
