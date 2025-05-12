import React from "react";

const Comments = () => {
  return (
    <div className="col-lg-8 col-md-8">
      <div className="anime__details__review">
        <div className="section-title">
          <h5>Reviews</h5>
        </div>

        {[1, 2, 3, 4, 5, 6].map((num, i) => (
          <div className="anime__review__item" key={i}>
            <div className="anime__review__item__pic">
              <img src={`/img/anime/review-${num}.jpg`} alt="" />
            </div>
            <div className="anime__review__item__text">
              <h6>
                {["Chris Curry", "Lewis Mann", "Louis Tyler"][i % 3]} -{" "}
                <span>{[1, 5, 20][i % 3]} Hour ago</span>
              </h6>
              <p>
                {
                  [
                    'whachikan Just noticed that someone categorized this as belonging to the genre "demons" LOL',
                    "Finally it came out ages ago",
                    "Where is the episode 15 ? Slow update! Tch",
                  ][i % 3]
                }
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="anime__details__form">
        <div className="section-title">
          <h5>Your Comment</h5>
        </div>
        <form action="#">
          <textarea placeholder="Your Comment"></textarea>
          <button type="submit">
            <i className="fa fa-location-arrow"></i> Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
