import React, { useEffect, useState } from "react";
import MovieLists from "../../../components/MovieLists";

const MainSearch = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce input to avoid firing on every keystroke
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // adjust delay as needed

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex">
              <div className="login__form search__form">
                <form>
                  <div className="input__item search__input__item">
                    <input
                      type="text"
                      placeholder="Search movies here"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <span className="icon_search"></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MovieLists genre="Popular movies" search={debouncedSearch} />
    </>
  );
};

export default MainSearch;
