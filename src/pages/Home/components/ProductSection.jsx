import { Link } from "react-router-dom";

const ProductSection = () => {
  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Trending Now</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                  <div className="btn__all">
                    <Link to="#" className="primary-btn">
                      View All <span className="arrow_right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                {[
                  "trend-1",
                  "trend-2",
                  "trend-3",
                  "trend-4",
                  "trend-5",
                  "trend-6",
                ].map((image, index) => (
                  <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                    <div className="product__item">
                      <div
                        className={`product__item__pic set-bg`}
                        data-setbg={`img/trending/${image}.jpg`}
                        style={{
                          backgroundImage: `url(img/trending/${image}.jpg)`,
                        }}
                      >
                        <div className="ep">18 / 18</div>
                        <div className="comment">
                          <i className="fa fa-comments"></i> 11
                        </div>
                        <div className="view">
                          <i className="fa fa-eye"></i> 9141
                        </div>
                      </div>
                      <div className="product__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5>
                          <Link to="#">
                            The Seven Deadly Sins: Wrath of the Gods
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="popular__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Popular Shows</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                  <div className="btn__all">
                    <Link to="#" className="primary-btn">
                      View All <span className="arrow_right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                {["popular-1", "popular-2", "popular-3"].map((image, index) => (
                  <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                    <div className="product__item">
                      <div
                        className={`product__item__pic set-bg`}
                        data-setbg={`img/popular/${image}.jpg`}
                        style={{
                          backgroundImage: `url(img/popular/${image}.jpg)`,
                        }}
                      >
                        <div className="ep">18 / 18</div>
                        <div className="comment">
                          <i className="fa fa-comments"></i> 11
                        </div>
                        <div className="view">
                          <i className="fa fa-eye"></i> 9141
                        </div>
                      </div>
                      <div className="product__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5>
                          <Link to="#">Sen to Chihiro no Kamikakushi</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="recent__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Recently Added Shows</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                  <div className="btn__all">
                    <Link to="#" className="primary-btn">
                      View All <span className="arrow_right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                {["recent-1", "recent-2", "recent-3"].map((image, index) => (
                  <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                    <div className="product__item">
                      <div
                        className={`product__item__pic set-bg`}
                        data-setbg={`img/recent/${image}.jpg`}
                        style={{
                          backgroundImage: `url(img/recent/${image}.jpg)`,
                        }}
                      >
                        <div className="ep">18 / 18</div>
                        <div className="comment">
                          <i className="fa fa-comments"></i> 11
                        </div>
                        <div className="view">
                          <i className="fa fa-eye"></i> 9141
                        </div>
                      </div>
                      <div className="product__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5>
                          <Link to="#">Great Teacher Onizuka</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="live__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Live Action</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                  <div className="btn__all">
                    <Link to="#" className="primary-btn">
                      View All <span className="arrow_right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                {["live-1", "live-2"].map((image, index) => (
                  <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                    <div className="product__item">
                      <div
                        className={`product__item__pic set-bg`}
                        data-setbg={`img/live/${image}.jpg`}
                        style={{
                          backgroundImage: `url(img/live/${image}.jpg)`,
                        }}
                      >
                        <div className="ep">18 / 18</div>
                        <div className="comment">
                          <i className="fa fa-comments"></i> 11
                        </div>
                        <div className="view">
                          <i className="fa fa-eye"></i> 9141
                        </div>
                      </div>
                      <div className="product__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5>
                          <Link to="#">Shouwa Genroku Rakugo Shinjuu</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
