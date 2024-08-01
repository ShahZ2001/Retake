import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styling/Bundles.css";

const Bundles = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onNavLinksContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutusContainerClick = useCallback(() => {
    // Please sync "about_us" to the project
  }, []);

  const onAboutTextClick = useCallback(() => {
    // Please sync "about_us" to the project
  }, []);

  return (
    <div className="bundles">
      <div className="bundles1">
        <div className="frame6">
          <div className="header1">
            <div className="midle2">
              <a className="logo4" onClick={onLogoClick}>
                <div className="feed-the-need6">Feed The Need</div>
              </a>
              <img
                className="vuesaxoutlineshopping-cart-icon3"
                alt=""
                src="/vuesaxoutlineshoppingcart.svg"
              />
              <div className="links-frame">
                <div className="links8">
                  <div className="devider2" />
                  <div className="account2">
                    <div className="sign-in2">Sign In</div>
                    <div className="sign-in2">/</div>
                    <div className="sign-in2">Sign Up</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-links16">
              <div className="menu">
                <div className="education">
                  <div className="home11">Home</div>
                  <img
                    className="chevron-down-icon12"
                    alt=""
                    src="/chevron-down.svg"
                  />
                </div>
                <div className="aboutus" onClick={onNavLinksContainerClick}>
                  <div className="home11">Bundles</div>
                  <img
                    className="chevron-down-icon12"
                    alt=""
                    src="/chevron-down1.svg"
                  />
                </div>
                <div className="education">
                  <div className="home11">Groceries</div>
                  <img
                    className="chevron-down-icon12"
                    alt=""
                    src="/chevron-down1.svg"
                  />
                </div>
                <div className="education">
                  <div className="home11">Educational Resources</div>
                  <img
                    className="chevron-down-icon12"
                    alt=""
                    src="/chevron-down1.svg"
                  />
                </div>
                <div className="aboutus" onClick={onAboutusContainerClick}>
                  <div className="home11">About Us</div>
                  <img
                    className="chevron-down-icon12"
                    alt=""
                    src="/chevron-down2.svg"
                  />
                </div>
                <div className="education">
                  <div className="home11">Hunger Map</div>
                  <img
                    className="chevron-down-icon12"
                    alt=""
                    src="/chevron-down1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame7">
            <div className="featured2">
              <div className="feature7">
                <img className="shipping-icon7" alt="" src="/shipping.svg" />
                <img className="icon7" alt="" src="/247.svg" />
                <img className="sucure-icon7" alt="" src="/sucure.svg" />
                <img className="sucure-icon7" alt="" src="/box.svg" />
                <div className="info8">
                  <div className="free-shipping7">Free Shipping</div>
                  <div className="free-shipping-on7">
                    Free shipping on all your order
                  </div>
                </div>
              </div>
              <div className="featured-child1" />
              <div className="feature7">
                <img className="shipping-icon8" alt="" src="/shipping.svg" />
                <img className="icon8" alt="" src="/247.svg" />
                <img className="sucure-icon7" alt="" src="/sucure.svg" />
                <img className="sucure-icon7" alt="" src="/box.svg" />
                <div className="info8">
                  <div className="free-shipping7">Customer Support 24/7</div>
                  <div className="free-shipping-on7">
                    Instant access to Support
                  </div>
                </div>
              </div>
              <div className="featured-child1" />
              <div className="feature7">
                <img className="shipping-icon8" alt="" src="/shipping.svg" />
                <img className="icon7" alt="" src="/247.svg" />
                <img className="sucure-icon9" alt="" src="/sucure.svg" />
                <img className="sucure-icon7" alt="" src="/box.svg" />
                <div className="info8">
                  <div className="free-shipping7">100% Secure Payment</div>
                  <div className="free-shipping-on7">
                    We ensure your money is save
                  </div>
                </div>
              </div>
            </div>
            <div className="footer3">
              <div className="footer4">
                <div className="fotter2">
                  <div className="company2">
                    <div className="logo5">
                      <div className="feed-the-need6">Feed The Need</div>
                    </div>
                    <div className="cta3">
                      <div className="button5">
                        <div className="home11">(xxx) xxx-xxxx</div>
                      </div>
                      <div className="or2">or</div>
                      <div className="button5">
                        <div className="home11">FeedTheNeed@gmail.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="my-account6">
                    <div className="home11">My Account</div>
                    <div className="links9">
                      <div className="my-account8">My Account</div>
                      <div className="my-account8">Shoping Cart</div>
                    </div>
                  </div>
                  <div className="help2">
                    <div className="home11">Helps</div>
                    <div className="links9">
                      <div className="contact4">Contact</div>
                      <div className="my-account8">Faqs</div>
                      <div className="my-account8">{`Terms & Condition`}</div>
                      <div className="my-account8">Privacy Policy</div>
                    </div>
                  </div>
                  <div className="proxy4">
                    <div className="proxy5">Proxy</div>
                    <div className="links11">
                      <div className="my-account8">Hunger Map</div>
                      <div className="about2" onClick={onAboutTextClick}>
                        About
                      </div>
                      <div className="my-account8">Groceries</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copyright2">
                <div className="feed-the-need8">
                  Feed The Need © 2023. All Rights Reserved
                </div>
                <div className="methodapplepay-container">
                  <img
                    className="methodapplepay-icon3"
                    alt=""
                    src="/methodapplepay.svg"
                  />
                  <img
                    className="methodapplepay-icon3"
                    alt=""
                    src="/methodvisa.svg"
                  />
                  <img
                    className="methodapplepay-icon3"
                    alt=""
                    src="/methoddiscover.svg"
                  />
                  <img
                    className="methodapplepay-icon3"
                    alt=""
                    src="/methodmastercard.svg"
                  />
                  <div className="cart2">
                    <div className="base2" />
                    <img className="lock-1-icon2" alt="" src="/lock-1.svg" />
                    <div className="secure2">Secure</div>
                    <div className="payment2">Payment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame8">
          <div className="middlerow">
            <Link className="p5" id="p1" to="/details">
              <div className="product-image1">
                <img className="image-icon1" alt="" src="/image1@2x.png" />
              </div>
              <div className="product-info1">
                <div className="info11">
                  <div className="green-apple1">Big Potatos</div>
                  <div className="price2">
                    <div className="home11">$14.99</div>
                  </div>
                </div>
                <div className="rating1">
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-5.svg" />
                </div>
              </div>
              <img className="add-to-cart2" alt="" src="/add-to-cart1.svg" />
            </Link>
            <Link className="p3" id="p0" to="/details">
              <div className="product-image1">
                <img className="image-icon1" alt="" src="/image1@2x.png" />
              </div>
              <div className="product-info1">
                <div className="info11">
                  <div className="green-apple1">Big Potatos</div>
                  <div className="price2">
                    <div className="home11">$14.99</div>
                  </div>
                </div>
                <div className="rating1">
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-5.svg" />
                </div>
              </div>
              <img className="add-to-cart2" alt="" src="/add-to-cart1.svg" />
            </Link>
            <Link className="p4" id="p2" to="/details">
              <div className="product-image1">
                <img className="image-icon1" alt="" src="/image1@2x.png" />
              </div>
              <div className="product-info1">
                <div className="info11">
                  <div className="green-apple1">Big Potatos</div>
                  <div className="price2">
                    <div className="home11">$14.99</div>
                  </div>
                </div>
                <div className="rating1">
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-5.svg" />
                </div>
              </div>
              <img className="add-to-cart2" alt="" src="/add-to-cart1.svg" />
            </Link>
          </div>
          <div className="lastrow">
            <Link className="p7" id="p2" to="/details">
              <div className="product-image1">
                <img className="image-icon1" alt="" src="/image1@2x.png" />
              </div>
              <div className="product-info1">
                <div className="info11">
                  <div className="green-apple1">Big Potatos</div>
                  <div className="price2">
                    <div className="home11">$14.99</div>
                  </div>
                </div>
                <div className="rating1">
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-5.svg" />
                </div>
              </div>
              <img className="add-to-cart2" alt="" src="/add-to-cart1.svg" />
            </Link>
            <Link className="p5" id="p1" to="/details">
              <div className="product-image1">
                <img className="image-icon1" alt="" src="/image1@2x.png" />
              </div>
              <div className="product-info1">
                <div className="info11">
                  <div className="green-apple1">Big Potatos</div>
                  <div className="price2">
                    <div className="home11">$14.99</div>
                  </div>
                </div>
                <div className="rating1">
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-5.svg" />
                </div>
              </div>
              <img className="add-to-cart2" alt="" src="/add-to-cart1.svg" />
            </Link>
            <Link className="p3" id="p0" to="/details">
              <div className="product-image1">
                <img className="image-icon1" alt="" src="/image1@2x.png" />
              </div>
              <div className="product-info1">
                <div className="info11">
                  <div className="green-apple1">Big Potatos</div>
                  <div className="price2">
                    <div className="home11">$14.99</div>
                  </div>
                </div>
                <div className="rating1">
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-5.svg" />
                </div>
              </div>
              <img className="add-to-cart2" alt="" src="/add-to-cart1.svg" />
            </Link>
          </div>
          <div className="firstrow">
            <Link className="p5" id="p1" to="/details">
              <div className="product-image1">
                <img className="image-icon1" alt="" src="/image1@2x.png" />
              </div>
              <div className="product-info1">
                <div className="info11">
                  <div className="green-apple1">Big Potatos</div>
                  <div className="price2">
                    <div className="home11">$14.99</div>
                  </div>
                </div>
                <div className="rating1">
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-5.svg" />
                </div>
              </div>
              <img className="add-to-cart2" alt="" src="/add-to-cart1.svg" />
            </Link>
            <Link className="p3" id="p0" to="/details">
              <div className="product-image1">
                <img className="image-icon1" alt="" src="/image1@2x.png" />
              </div>
              <div className="product-info1">
                <div className="info11">
                  <div className="green-apple1">Big Potatos</div>
                  <div className="price2">
                    <div className="home11">$14.99</div>
                  </div>
                </div>
                <div className="rating1">
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-5.svg" />
                </div>
              </div>
              <img className="add-to-cart2" alt="" src="/add-to-cart1.svg" />
            </Link>
            <Link className="p4" id="p2" to="/details">
              <div className="product-image1">
                <img className="image-icon1" alt="" src="/image1@2x.png" />
              </div>
              <div className="product-info1">
                <div className="info11">
                  <div className="green-apple1">Big Potatos</div>
                  <div className="price2">
                    <div className="home11">$14.99</div>
                  </div>
                </div>
                <div className="rating1">
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-1.svg" />
                  <img className="rating-child2" alt="" src="/star-5.svg" />
                </div>
              </div>
              <img className="add-to-cart2" alt="" src="/add-to-cart1.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bundles;
