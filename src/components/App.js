import React, { useState } from 'react';
import '../styles/App.css';

const reviewsData = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const App = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handlePrevReview = () => {
    setCurrentReview((prevReview) => (prevReview - 1 + reviewsData.length) % reviewsData.length);
  };

  const handleNextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviewsData.length);
  };

  const handleRandomReview = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * reviewsData.length);
    } while (randomIndex === currentReview);

    setCurrentReview(randomIndex);
  };

  const review = reviewsData[currentReview];

  return (
    <div className="App">
      <h2 id="review-heading">Our Reviews</h2>
      <div className="review">
        <div className="person-img">
          <img src={review.image} alt={review.name} />
        </div>
        <h3 className="author" id={`author-${review.id}`}>
          {review.name}
        </h3>
        <p className="job">{review.job}</p>
        <p className="info">{review.text}</p>
      </div>
      <div className="buttons">
        <button className="prev-btn" onClick={handlePrevReview}>Previous</button>
        <button className="next-btn" onClick={handleNextReview}>Next</button>
        <button className="random-btn" onClick={handleRandomReview}>Surprise Me</button>
      </div>
    </div>
  );
};

export default App;
