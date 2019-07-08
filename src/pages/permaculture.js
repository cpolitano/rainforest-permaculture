import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerPermaculture from '../components/BannerPermaculture'

import pic08 from '../assets/images/Cano-Island.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Permaculture - Cocoterra Rainforest Permaculture Project</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <BannerPermaculture />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>Cocoterra Rainforest Permaculture features ancient and novel permaculture practices for optimal soil, plant, and ecosystem quality. Soil efforts include biochar (Terra Preta), swales, and annual soil sampling to track changes in soil health. Compost practices include basic compost and bokashi. Key crops at Cocoterra include coconut, banana, yucca, heirloom corn varieties, sugarcane, turmeric, tropical fruits, among others. Diversity is the key to fertility and sustainability.</p>
                </div>
                <div className="inner">
                    <header className="major">
                        <h2>Soil Sampling</h2>
                    </header>
                    <p>A collaboration with Sally Landefeld, M.S. in Environmental Science and Engineering, and the local Ministerio de Agricultura y Ganaderia (MAG). The agricultural portion of Cocotero, including 27 acres of the total 70, was cleared 50 years ago to create pasture that was grazed by mostly horses. The dense reddish soil is rich in clay, and is exposed to prolific sunshine during the high season as well as significant rainfall during the green season. Soils were first sampled in May 2019, and will be sampled annually to track scientifically measurable changes in soil and ecosystem health that may result from these permaculture practices. Measurements will asses macronutrient and micronutrient content, as well as soil microbiology. This soil science effort enhances the educational offerings of Cocotero, while contributing novel research to the areas of soil health, crop quality, and environmental health. This study provides a unique example of permaculture practices in one of the most biodiverse regions on Earth.</p>
                </div>
                <div className="inner">
                    <header className="major">
                        <h2>Biochar</h2>
                    </header>
                    <p>Also known as Terra Preta, this ancient technique from the Amazon is currently a topic of prolific scientific research due to its potential for restoring soils in areas of high clay content such as Cocoterra and other tropical regions. Biochar provides a substrate for the growth of important fungal species that are key to healthy soil. The burnt particles break down relatively slowly, providing longer-term habitat for soil microbiology. This simple technique rebuilds healthy soil by restoring microbial health, and a robust soil microbial community makes nutrients more accessible to plants. To create Terra Preta, biochar (charcoal from burnt trees and bushes) is mixed with topsoil in a 1:10 ratio and buried in trenches ~1 foot deep to create fertile ground for planting.</p>
                </div>
                <div className="inner">
                    <header className="major">
                        <h2>Swales</h2>
                    </header>
                    <p>Swales are shallow ditches dug in contour with the natural landscape. They are simple, beautiful, and prevent erosion by adding texture to the landscape that redirects runoff during heavy rains and captures particles that would normally be swept away. Swales also allow humidity to penetrate deeper into the dense, clay-rich soil to foster a robust and balanced soil microbial ecosystem of bacteria and fungi.</p>
                </div>
                <div className="inner">
                    <header className="major">
                        <h2>Compost</h2>
                    </header>
                    <p>Food scraps and organic matter are nutrient-rich materials important for returning micronutrients and macronutrients to the soil in order to support future generations of plants and soil microbiology. Our methods include bokashi, which is a fermented compost tea rich with micronutrients, as well as compost piles brimming with earthworms. Worms are the ultimate alchemists--they solubilize major nutrients, including nitrogen, phosphorus, potassium, calcium, and magnesium, making them readily available to plants.</p>
                    <h3>Bokashi</h3>
                    <ul>
                      <li>An ancient form of composting to return critical micronutrients to the soil</li>
                      <li>Improves soil health, crop quality, and food nutrient density</li>
                    </ul>
                    <h3>Basic Compost</h3>
                    <ul>
                      <li>Rich in earthworms, although our practice is not specifically vermicompost</li>
                      <li>Transforms food waste into rich fertilizer to return plant-available nutrients to soil</li>
                      <li>Improves soil health, crop quality, and food nutrient density</li>
                    </ul>
                </div>
                <div className="inner">
                    <header className="major">
                        <h2>Apiculture</h2>
                    </header>
                    <p>Pollinators are an absolutely essential component of any permaculture project, as they play an irreplaceable role in the plant reproductive cycle. The region contains many species of native stingless honey bees, of the order Meliponidae, and the intention is firm to create an apiary of these at Cocoterra.</p>
                </div>
                <div className="inner">
                    <header className="major">
                        <h2>Rare Plant Species</h2>
                    </header>
                    <p>Propagated from Jonathon’s personal treks in rainforests throughout Central and South America, collected from friends and botanists far and wide, and present as members of the existing primary rainforest of Cocoterra, Jonathon has cultivated an astounding collection of rare, unique, and endangered plants. Listed below are examples of some of these.</p>
                </div>
                <div className="inner">
                    <header className="major">
                        <h2>Medicinal Plants</h2>
                    </header>
                    <p>From the well-known and beloved Cinnamon (Cinnamomum verum) tree to the sacred indigenous Guapinol (Hymenea courbaril), the medicinal plant collection boasts hundreds of medicinal plant species, from shrubs to trees, with flowers of all shapes, sizes and colors of the rainbow. Some examples are Cruz Caspi (Browneopsis sp.) a traditional “women’s medicine” of the Amazon Rainforest, Sanango de Drago, or “Dragon’s Blood,” locally known as Targua (Croton sp.) The antifungal and antimicrobial Cannonball tree (Couroupita guianensis), the multi-purpose medicinal Hombre Grande, or “Big Man,” also known as Bitter Wood (Quassia amara) and the anti-inflammatory anticarcinogenic succulent, Life Everlasting (Kalanchoe pinnata). Among so many others.</p>
                </div>
                <div className="inner">
                    <header className="major">
                        <h2>Cacao Varieties</h2>
                    </header>
                    <p>Sourced from Jim West of Guaycuyacu Seeds and grown from seeds and cuttings collected on Jonathon’s voyages, the Cocoterra nursery includes celebrated cacao varieties such as criollo, as well as a unique collection of rare species. Cocoterra provides a suitable climate and soil for the cultivation and preservation of these vital trees.</p>
                </div>
                <div className="inner">
                    <header className="major">
                        <h2>Medicinal Culinary Herbs</h2>
                    </header>
                    <p>Including but not limited to turmeric, ginger, lemon verbena, tulsi (Holy Basil), wati nuni, tilo, sapote, garlic vine, cinnamon, and members of the mint family.</p>
                </div>
                <div className="inner">
                    <header className="major">
                        <h2>Tropical Fruit Orchard</h2>
                    </header>
                    <p>The northwestern area of Cocoterra will feature an abundance of tropical fruits, from the common and beloved mango and mango varieties to the rare and delicious icaco berry. Tropical fruit trees of Cocoterra include but aren’t limited to coconut, mango, icaco berries, guanabana, papaya, cashew fruit, water apples, pasu, breadfruit, banana, and araza among many others.</p>
                </div>
                <div className="inner">
                    <header className="major">
                        <h2>Other Rare Plants</h2>
                    </header>
                    <p>The permaculture gardens and primary rainforest of Cocoterra include many more rare, endangered, or sacred plants, such as Copal (Protium sp.), Caraño (Trattinickia aspera), Aceituno (Simarouba amara), Cedrón (Simaba cedron) among so many others.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/donate" className="image">
                        <img src={pic08} alt="Caño Island sunset" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Donate</h3>
                            </header>
                            <p>Cocoterra Rainforest Permaculture invites you to give a donation to support our work regenerating the Osa.</p>
                            <ul className="actions">
                                <li><Link to="/donate" className="button">Support Regeneration</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
