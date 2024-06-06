import React from "react";
import ThirtyEight from "../../assets/img/38.jpg";

const Article = () => {
  return (
    <article className="pt-11 pt-md-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            {/* Preheading */}
            <h6 className="text-xs text-primary">News & events</h6>
            {/* Heading */}
            <h1 className="display-2 mb-4">Now delivering to your door</h1>
            {/* Subheading */}
            <p className="mb-6 text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              aperiam fugiat velit, quidem eius quas facilis, ut id optio
              explicabo asperiores?
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Image */}
            <figure className="mb-6 text-center">
              <img src={ThirtyEight} alt="38" className="img-fluid" />
            </figure>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            {/* Text */}
            <p className="text-gray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis reprehenderit magni mollitia voluptatibus in. Debitis,
              laudantium possimus veritatis dignissimos adipisci deserunt
              numquam dolorem ullam, alias rem laborum facilis ducimus quis!
            </p>
            <p className="text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni qui
              ut, quibusdam, culpa exercitationem quae eveniet tempore
              aspernatur dolorem fuga laudantium possimus quasi natus cumque
              labore molestiae maxime doloribus voluptates?
            </p>
            {/* Heading */}
            <h2 className="fw-bold mt-6 mb-3 font-playfair">
              Ordering online is easy
            </h2>
            {/* Text */}
            <p className="text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae animi amet iste deserunt dolorem facilis
              exercitationem deleniti pariatur dolores magni, mollitia debitis
              non delectus provident a iusto fuga. Nisi, molestias!
            </p>
            <p className="text-gray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              illum officiis, beatae quibusdam ex similique, nihil in facilis
              magni quisquam fuga. Quaerat quis provident qui quas voluptatem
              officiis!
            </p>
            <hr className="mt-6 mt-md-9 mb-0" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
