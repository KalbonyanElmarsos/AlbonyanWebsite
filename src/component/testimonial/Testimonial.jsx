import React, { useEffect, useState } from "react";
import "./testimonial.css";
import data from "./testominalData";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

const Testimonial = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);
  //make index the last or the first if you reach to the last item
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  //to change person every 5 s
  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 5000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);

  return (
    <section className="testimonial">
      <h1>التوصيات</h1>
      <div className="testimonial-content">
        {people.map((item, indexPeople) => {
          const { id, image, name, job, opinion } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <p className="testimonial-content-information-opinion">
                {opinion}
              </p>
              <div className="testimonial-content-information">
                <img
                  src={image}
                  alt={name}
                  className="testimonial-content-information-img"
                />
                <div className="testimonial-content-information-text">
                  <h4>{name}</h4>
                  <p>{job}</p>
                </div>
              </div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <BsFillArrowLeftSquareFill className="" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <BsFillArrowRightSquareFill className="" />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
