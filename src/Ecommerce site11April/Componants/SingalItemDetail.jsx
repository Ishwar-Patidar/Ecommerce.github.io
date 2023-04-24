import React from "react";
import './SingalItemDetail.css';

function SingalItemDetail() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="">
                            <div className="carousel-indicators NavigationLink">
                                <button className=" active" type="button" data-bs-target="#Indicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1">
                                    Descriptiion
                                </button>
                                <button className="" type="button" data-bs-target="#Indicators" data-bs-slide-to="1" aria-label="Slide 2">
                                    Specification
                                </button>
                                <button className="" type="button" data-bs-target="#Indicators" data-bs-slide-to="2" aria-label="Slide 3">
                                    Rating & Reviews
                                </button>
                            </div>
                        </div>

                        <div className="p-3">
                            <div id="Indicators" className="carousel slide" data-bs-ride="true">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">

                                        <p>
                                            CUPERTINO, CA , The M1 CPU allows Apple to deliver an all-new iMac with a lot more compact and impressively thin design. The new iMac delivers tremendous performance in an 11.5-millimeter-thin design with a stunning side profile that almost vanishes. iMac includes a 24-inch 4.5K Retina display with 11.3 million pixels, 500 nits of brightness, and over a billion colors, giving a beautiful and vivid viewing experience. It is available in a variety of striking colors to match a user's own style and brighten any area. A 1080p FaceTime HD camera, studio-quality mics, and a six-speaker sound system are all included in the new iMac, making it the greatest camera and audio system ever in a Mac. Touch ID is also making its debut on the iMac, making it easier than ever to securely log in, make Apple Pay transactions, and switch user accounts with the touch of a finger. Apps launch at lightning speed, everyday chores seem astonishingly fast and fluid, and demanding workloads like editing 4K video and working with large photos are faster than ever before thanks to the power and performance of M1 and macOS Big Sur.
                                        </p>
                                        <img src="./images/EcommerseImages/1.png" className="d-block w-100" alt="Loading..." />
                                        <p>
                                            The new iMac joins Apple's fantastic M1-powered Mac family, which includes the MacBook Air, 13-inch MacBook Pro, and Mac mini, and represents yet another step ahead in the company's shift to Apple silicon. Customers may order iMac starting Friday, April 30. It's the most personal, powerful, capable, and enjoyable it's ever been. In the second half of May, the iMac will be available."M1 is a huge step forward for the Mac," said Greg Joswiak, Apple's senior vice president of Worldwide Marketing. "Today, we're delighted to present the all-new iMac, the first Mac developed around the groundbreaking M1 processor." "The new iMac takes everything people love about iMac to an entirely new level, with its beautiful design in seven breathtaking colors, its immersive 4.5K Retina display, the greatest camera, mics, and speakers ever in a Mac, and Touch ID, combined with M1's incredible performance and macOS Big Sur's power."
                                        </p>
                                    </div>
                                    <div className="carousel-item">
                                        {/* <img src="./images/EcommerseImages/2.png" className="d-block w-100" alt="Loading..." /> */}

                                        <div>
                                            <h3>Processor/Chipset</h3>
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>CHIP NAME</td>
                                                        <td>Apple M1 chip</td>

                                                    </tr>
                                                    <tr>
                                                        <td>CPU CORE </td>
                                                        <td>A8 (4 performance and 4 efficiency)</td>

                                                    </tr>
                                                    <tr>
                                                        <td>GPU CORE</td>
                                                        <td>7</td>

                                                    </tr>
                                                    <tr>
                                                        <td>NEURAL ENGIN</td>
                                                        <td>16 cores</td>

                                                    </tr>
                                                </tbody>
                                            </table>

                                            <h3>Storage</h3>
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>MEMORY</td>
                                                        <td>8 GB unified</td>
                                                    </tr>
                                                    <tr>
                                                        <td>SSD </td>
                                                        <td>256 GB</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <h3>Display</h3>
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>DISPLAY TYPE
                                                        </td>
                                                        <td>Retina</td>
                                                    </tr>
                                                    <tr>
                                                        <td>SIZE </td>
                                                        <td>24” (actual diagonal 23.5”)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>RESOLUTION</td>
                                                        <td>4480 x 2520</td>
                                                    </tr>
                                                    <tr>
                                                        <td>BRIGHTNESS </td>
                                                        <td>500 nits</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <h3>Additional Specifications</h3>
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>CAMERA</td>
                                                        <td>1080p FaceTime HD camera</td>
                                                    </tr>
                                                    <tr>
                                                        <td>VIDEO</td>
                                                        <td>Full native resolution on built-in display at 1 billion colors;
                                                            One external display with up to 6K resolution at 60Hz</td>
                                                    </tr>
                                                    <tr>
                                                        <td>AUDIO</td>
                                                        <td>High-fidelity six-speaker with force-cancelling woofers Wide stereo sound Spatial audio with Dolby Atmos3 Studio-quality three-mic array with directional beamforming</td>
                                                    </tr>
                                                    <tr>
                                                        <td>INPUTS</td>
                                                        <td>Magic Keyboard Magic Mouse</td>
                                                    </tr>
                                                    <tr>
                                                        <td>OPERATING SYSTEM</td>
                                                        <td>macOS Monterey</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <h3>macOS Monterey</h3>
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>iMac 24”</td>
                                                        <td>Magic Mouse</td>
                                                        <td>143W power adapter</td>
                                                        <td>2m Power Cord</td>
                                                        <td> USB-C to Lightning Cable</td>
                                                        <td>Magic Keyboard</td>

                                                    </tr>
                                                    <tr>
                                                        <td>CPU CORE </td>
                                                        <td>A8 (4 performance and 4 efficiency)</td>

                                                    </tr>
                                                    <tr>
                                                        <td>GPU CORE</td>
                                                        <td>7</td>

                                                    </tr>
                                                    <tr>
                                                        <td>NEURAL ENGIN</td>
                                                        <td>16 cores</td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>


                                    </div>
                                    <div className="carousel-item">
                                        <img src="./images/EcommerseImages/3.png" className="d-block w-100" alt="Loading..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} export default SingalItemDetail;