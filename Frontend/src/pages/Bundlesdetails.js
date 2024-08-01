import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import  "../styling/Bundles.css";

const Bundlesdetails = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onNavLinksContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavLinksContainer4Click = useCallback(() => {
    // Please sync "about_us" to the project
  }, []);

  const onAboutTextClick = useCallback(() => {
    // Please sync "about_us" to the project
  }, []);

  return (
    <div className="bundlesdetails">
      <div className="bundlesdetails1">
        <div className="frame">
          <div className="header">
            <div className="midle">
              <div className="logo" onClick={onLogoContainerClick}>
                <div className="feed-the-need">Feed The Need</div>
              </div>
              <img
                className="vuesaxoutlineshopping-cart-icon"
                alt=""
                src="/vuesaxoutlineshoppingcart.svg"
              />
              <div className="links-wrapper">
                <div className="links">
                  <div className="devider" />
                  <div className="account">
                    <div className="sign-in">Sign In</div>
                    <div className="sign-in">/</div>
                    <div className="sign-in">Sign Up</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-links">
              <div className="nav-links1">
                <div className="nav-links2">
                  <div className="home">Home</div>
                  <img
                    className="chevron-down-icon"
                    alt=""
                    src="/chevron-down.svg"
                  />
                </div>
                <div className="nav-links3" onClick={onNavLinksContainer1Click}>
                  <div className="home">Bundles</div>
                  <img
                    className="chevron-down-icon"
                    alt=""
                    src="/chevron-down1.svg"
                  />
                </div>
                <div className="nav-links2">
                  <div className="home">Groceries</div>
                  <img
                    className="chevron-down-icon"
                    alt=""
                    src="/chevron-down1.svg"
                  />
                </div>
                <div className="nav-links2">
                  <div className="home">Educational Resources</div>
                  <img
                    className="chevron-down-icon"
                    alt=""
                    src="/chevron-down1.svg"
                  />
                </div>
                <div className="nav-links3" onClick={onNavLinksContainer4Click}>
                  <div className="home">About Us</div>
                  <img
                    className="chevron-down-icon"
                    alt=""
                    src="/chevron-down2.svg"
                  />
                </div>
                <div className="nav-links2">
                  <div className="home">Hunger Map</div>
                  <img
                    className="chevron-down-icon"
                    alt=""
                    src="/chevron-down1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame1">
            <div className="frame2">
              <div className="footer">
                <div className="footer1">
                  <div className="fotter">
                    <div className="company">
                      <div className="product-name">
                        <div className="feed-the-need">Feed The Need</div>
                      </div>
                      <div className="cta">
                        <div className="button">
                          <div className="home">(xxx) xxx-xxxx</div>
                        </div>
                        <div className="or">or</div>
                        <div className="button">
                          <div className="home">FeedTheNeed@gmail.com</div>
                        </div>
                      </div>
                    </div>
                    <div className="my-account">
                      <div className="home">My Account</div>
                      <div className="links1">
                        <div className="shoping-cart">My Account</div>
                        <div className="shoping-cart">Shoping Cart</div>
                      </div>
                    </div>
                    <div className="help">
                      <div className="home">Helps</div>
                      <div className="links1">
                        <div className="shoping-cart">Contact</div>
                        <div className="shoping-cart">Faqs</div>
                        <div className="shoping-cart">{`Terms & Condition`}</div>
                        <div className="shoping-cart">Privacy Policy</div>
                      </div>
                    </div>
                    <div className="proxy">
                      <div className="proxy1">Proxy</div>
                      <div className="links3">
                        <div className="shoping-cart">Hunger Map</div>
                        <div className="about" onClick={onAboutTextClick}>
                          About
                        </div>
                        <div className="shoping-cart">Groceries</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="copyright">
                  <div className="feed-the-need2">
                    Feed The Need © 2023. All Rights Reserved
                  </div>
                  <div className="methodapplepay-parent">
                    <img
                      className="methodapplepay-icon"
                      alt=""
                      src="/methodapplepay.svg"
                    />
                    <img
                      className="methodapplepay-icon"
                      alt=""
                      src="/methodvisa.svg"
                    />
                    <img
                      className="methodapplepay-icon"
                      alt=""
                      src="/methoddiscover.svg"
                    />
                    <img
                      className="methodapplepay-icon"
                      alt=""
                      src="/methodmastercard.svg"
                    />
                    <div className="cart">
                      <div className="base" />
                      <img className="lock-1-icon" alt="" src="/lock-1.svg" />
                      <div className="secure">Secure</div>
                      <div className="payment">Payment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame3">
              <div className="frame4">
                <div className="featured">
                  <div className="feature">
                    <img className="shipping-icon" alt="" src="/shipping.svg" />
                    <img className="icon" alt="" src="/247.svg" />
                    <img className="sucure-icon" alt="" src="/sucure.svg" />
                    <img className="sucure-icon" alt="" src="/box.svg" />
                    <div className="info">
                      <div className="free-shipping">Free Shipping</div>
                      <div className="free-shipping-on">
                        Free shipping on all your order
                      </div>
                    </div>
                  </div>
                  <div className="featured-child" />
                  <div className="feature">
                    <img
                      className="shipping-icon1"
                      alt=""
                      src="/shipping.svg"
                    />
                    <img className="icon1" alt="" src="/247.svg" />
                    <img className="sucure-icon" alt="" src="/sucure.svg" />
                    <img className="sucure-icon" alt="" src="/box.svg" />
                    <div className="info">
                      <div className="free-shipping">Customer Support 24/7</div>
                      <div className="free-shipping-on">
                        Instant access to Support
                      </div>
                    </div>
                  </div>
                  <div className="featured-child" />
                  <div className="feature">
                    <img
                      className="shipping-icon1"
                      alt=""
                      src="/shipping.svg"
                    />
                    <img className="icon" alt="" src="/247.svg" />
                    <img className="sucure-icon2" alt="" src="/sucure.svg" />
                    <img className="sucure-icon" alt="" src="/box.svg" />
                    <div className="info">
                      <div className="free-shipping">100% Secure Payment</div>
                      <div className="free-shipping-on">
                        We ensure your money is save
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products-detail">
          <div className="product-details">
            <img
              className="product-image-icon"
              loading="lazy"
              id="im"
              alt=""
              src="/product-image@2x.png"
            />
            <div className="frame-parent">
              <div className="frame-group">
                <div className="product-name-wrapper">
                  <div className="product-name">
                    <div className="chinese-cabbage">Chinese Cabbage</div>
                  </div>
                </div>
                <div className="price">
                  <div className="product-name">
                    <div className="home">£17.28</div>
                  </div>
                </div>
                <div className="frame-child" />
              </div>
              <div className="class-aptent-taciti-sociosqu-a-wrapper">
                <div className="class-aptent-taciti">{`Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. `}</div>
              </div>
              <div className="cta1">
                <div className="quantity">
                  <button className="minus" id="minus">
                    <div className="container" />
                    <img className="minus-icon" alt="" src="/minus.svg" />
                  </button>
                  <div className="div2">1</div>
                  <button className="minus" id="plus">
                    <div className="container" />
                    <img className="minus-icon" alt="" src="/plus-1.svg" />
                  </button>
                </div>
                <button className="button2" id="addC">
                  <div className="add-to-cart">Add to Cart</div>
                  <img className="rectangle-icon" alt="" src="/rectangle.svg" />
                </button>
              </div>
            </div>
          </div>
          <div className="additional-information">
            <div className="frame5">
              <div className="type-parent">
                <div className="type">
                  <div className="weight">Weight:</div>
                  <div className="green">03</div>
                </div>
                <div className="type">
                  <div className="weight">Color:</div>
                  <div className="green">Green</div>
                </div>
                <div className="type">
                  <div className="weight">Type:</div>
                  <div className="green">Organic</div>
                </div>
                <div className="type">
                  <div className="weight">Category:</div>
                  <div className="green">Vegetables</div>
                </div>
                <div className="type">
                  <div className="weight">Stock Status:</div>
                  <div className="green">
                    <span>{`Available `}</span>
                    <span className="span">(5,413)</span>
                  </div>
                </div>
                <div className="type6">
                  <div className="tags">Tags:</div>
                  <div className="shoping-cart">{`Vegetables, `}</div>
                  <div className="shoping-cart"> Healthy,</div>
                  <div className="chinese">
                    {` `}
                    <span className="chinese1">Chinese</span>,
                  </div>
                  <div className="shoping-cart"> Cabbage,</div>
                  <div className="shoping-cart"> Green Cabbage,</div>
                </div>
              </div>
            </div>
            <div className="navigation">
              <div className="nav-link">
                <div className="home">Descriptions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bundlesdetails;
