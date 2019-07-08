import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/jonas-pastures-3.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Donate - Cocoterra Rainforest Permaculture</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Support Regeneration</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
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
                </div>
                <div className="donate-button">
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                      <input type="hidden" name="cmd" value="_donations" />
                      <input type="hidden" name="business" value="sparrowsky@gmail.com" />
                      <input type="hidden" name="item_name" value="Regenerating Osa, Costa Rica" />
                      <input type="hidden" name="currency_code" value="USD" />
                      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                      <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
