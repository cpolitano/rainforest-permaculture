import React from 'react'
import drone01 from '../assets/images/drone1.mp4'

const Banner = (props) => (
    <section id="banner" className="major">
          <video autoplay="autoplay" playsinline loop muted controls src={drone01} className="fullscreen-bg__video">
          </video>
          <div className="inner">
              <header className="major">
                  <h1>Rainforest Permaculture at Cocal</h1>
              </header>
              <div className="content">
                  <p>A farmland restoration project and permaculture education center <br />
                  in the heart of the Osa Peninsula, Costa Rica</p>
                  <ul className="actions">
                      <li><a href="#one" className="button next scrolly">Explore</a></li>
                  </ul>
              </div>
      </div>
    </section>
)

export default Banner
