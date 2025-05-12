import React from "react";

const RecommendMovies = () => {
  return (
    <div className="col-lg-4 col-md-4">
      <div className="anime__details__sidebar">
        <div className="section-title">
          <h5>You might like...</h5>
        </div>

        {[
          { img: "tv-1.jpg", title: "Boruto: Naruto next generations" },
          {
            img: "tv-2.jpg",
            title: "The Seven Deadly Sins: Wrath of the Gods",
          },
          {
            img: "tv-3.jpg",
            title: "Sword art online alicization war of underworld",
          },
          {
            img: "tv-4.jpg",
            title: "Fate/stay night: Heaven's Feel I. presage flower",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="product__sidebar__view__item set-bg"
            style={{ backgroundImage: `url(/img/sidebar/${item.img})` }}
          >
            <div className="ep">18 / ?</div>
            <div className="view">
              <i className="fa fa-eye"></i> 9141
            </div>
            <h5>
              <a href="#">{item.title}</a>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendMovies;
