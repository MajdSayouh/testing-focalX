import img100 from "./../../assets/img/image.png";
import img99 from "./../../assets/img/Icon clock.png";
import img98 from "./../../assets/img/image2.png";
import img97 from "./../../assets/img/image3.png";
import img96 from "./../../assets/img/unsplash_ldPLFpVx6-g.png";
import img95 from "./../../assets/img/image4.png";
import img94 from "./../../assets/img/unsplash_yJwbvWmJs5M.png";

import "./Cards.css";
import CardsContent from "../CardsContent/CardsContent";
const Cards = () => {
  return (
    <section className="container">
      <CardsContent
        img100={img100}
        h2="10 updated Figma features in 2022"
        a="# UX/UI Design"
        p="At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga..."
        img99={img99}
        p2="3 min read"
        p3="April 12, 2022"
      />
      <CardsContent
        img100={img98}
        h2="What new programming languages are in demand now?"
        a="# Programming"
        p="At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga..."
        img99={img99}
        p2="5 min read"
        p3="March 25, 2022"
      />
      <CardsContent
        img100={img97}
        h2="Top popular styles in illustration 2022"
        a="# illustration"
        p="At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga..."
        img99={img99}
        p2="7 min read"
        p3="March 18, 2022"
      />
      <CardsContent
        img100={img96}
        h2="The secret of a successful frame. What rules should be followed?"
        a="# Photo & Film"
        p="At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga..."
        img99={img99}
        p2="6 min read"
        p3="March 17, 2022"
      />
      <CardsContent
        img100={img95}
        h2="Brainstorming in design: from the idea to its implementation"
        a="# UX/UI Design"
        p="At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga..."
        img99={img99}
        p2="12 min read"
        p3="March 12, 2022"
      />
      <CardsContent
        img100={img94}
        h2="Who is an Internet marketer and what does he do?"
        a="# Marketing"
        p="At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga..."
        img99={img99}
        p2="5 min read"
        p3="February 2, 2022"
      />
    </section>
  );
};

export default Cards;
