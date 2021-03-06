import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">volunteer@rainforestpermaculture.org</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Cocoterra, Los Planes<br />
                        Drake Bay, Osa<br />
                        Costa Rica</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact

// <section>
//     <form method="post" action="mailto:cpolitano8@gmail.com" enctype="text/plain">
//         <div className="field half first">
//             <label htmlFor="name">Name</label>
//             <input type="text" name="name" id="name" />
//         </div>
//         <div className="field half">
//             <label htmlFor="email">Email</label>
//             <input type="text" name="email" id="email" />
//         </div>
//         <div className="field">
//             <label htmlFor="message">Message</label>
//             <textarea name="message" id="message" rows="6"></textarea>
//         </div>
//         <ul className="actions">
//             <li><input type="submit" value="Send Message" className="special" /></li>
//             <li><input type="reset" value="Clear" /></li>
//         </ul>
//     </form>
// </section>
