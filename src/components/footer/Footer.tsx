import "../../assets/styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="about-us">
                    <span className="footer-heading">About Us</span>
                    <ul className="items">
                        <li className="item">
                            <a className="text" href="/">Who We are</a>
                        </li>
                        <li className="item">
                            <a className="text" href="/">Outlets</a>
                        </li>
                        <li className="item">
                            <a className="text" href="/">Careers</a>
                        </li>
                    </ul>
                </div>

                <div className="contact-us">
                    <span className="footer-heading">Contact Us</span>
                    <ul className="items">
                        <li className="item">
                            <a className="text" href="/">Web Orders Inquiries</a>
                        </li>
                        <li className="item">
                            <span className="icon phone-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <div className="detail">
                                <a className="text" href="tel:042 35292627">042 35292627</a>
                                <span className="text">(9 to 5) Working Days</span>
                            </div>
                        </li>
                        <li className="item">
                            <span className="icon whatsapp-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 48 48">
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="invisible_box" data-name="invisible box">
                                            <rect width="48" height="48" fill="none" />
                                        </g>
                                        <g id="Icons">
                                            <g>
                                                <path d="M38.9,8.1A20.9,20.9,0,0,0,3.2,22.8,19.8,19.8,0,0,0,6,33.2L3,44l11.1-2.9a20.3,20.3,0,0,0,10,2.5A20.8,20.8,0,0,0,38.9,8.1Zm-14.8,32a17.1,17.1,0,0,1-9.5-2.8L8,39.1l1.8-6.4a17.9,17.9,0,0,1-3.1-9.9A17.4,17.4,0,1,1,24.1,40.1Z" />
                                                <path d="M33.6,27.2A29.2,29.2,0,0,0,30,25.5c-.4-.2-.8-.3-1.1.2s-1.4,1.7-1.7,2.1a.8.8,0,0,1-1.1.1,15.2,15.2,0,0,1-4.2-2.6A15,15,0,0,1,19,21.7a.7.7,0,0,1,.2-1l.8-1a3.5,3.5,0,0,0,.5-.8.9.9,0,0,0,0-.9c-.2-.3-1.2-2.8-1.6-3.9s-.9-.9-1.2-.9h-1a1.7,1.7,0,0,0-1.4.7,5.5,5.5,0,0,0-1.8,4.3,10.4,10.4,0,0,0,2.1,5.4c.3.3,3.7,5.6,8.9,7.8a16.4,16.4,0,0,0,3,1.1,6.4,6.4,0,0,0,3.3.2c1-.1,3.1-1.2,3.5-2.4s.5-2.3.3-2.5A2.1,2.1,0,0,0,33.6,27.2Z" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                            <div className="detail">
                                <a className="text" href="tel:0300 0450227">0300 0450227</a>
                                <span className="text">(9 to 5) Working Days</span>
                            </div>
                        </li>
                        <li className="item">
                            <span className="icon mail-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22 6L12 13L2 6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <a className="text" href="mailto:orders@readings.com.pk">orders@readings.com.pk</a>
                        </li>
                        <li className="item">
                            <a className="text" href="/">Manuscript Submissions</a>
                        </li>
                    </ul>
                </div>

                <div className="help">
                    <span className="footer-heading">Help</span>
                    <ul className="items">
                        <li className="item">
                            <a className="text" href="/">Placing an Order</a>
                        </li>
                        <li className="item">
                            <a className="text" href="/">Payment</a>
                        </li>
                        <li className="item">
                            <a className="text" href="/">Packing and Shipping</a>
                        </li>
                        <li className="item">
                            <a className="text" href="/">Tracking Orders</a>
                        </li>
                        <li className="item">
                            <a className="text" href="/">Cancellig Orders</a>
                        </li>
                        <li className="item">
                            <a className="text" href="/">Returns</a>
                        </li>
                        <li className="item">
                            <a className="text" href="/">International Orders</a>
                        </li>
                        <li className="item">
                            <a className="text" href="/">Readings Mobile App</a>
                        </li>
                    </ul>
                </div>

                <div className="contact-us">
                    <span className="footer-heading">Social Media</span>
                    <ul className="items">
                        <li className="item">
                            <span className="icon instagram-icon"></span>
                            <a className="text" href="/">Instagram</a>
                        </li>
                        <li className="item">
                            <span className="icon facebook-icon"></span>
                            <a className="text" href="/">Facebook</a>
                        </li>
                        <li className="item">
                            <span className="icon twitter-icon"></span>
                            <a className="text" href="/">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;