import React from 'react';
import BlogPost from '../components/BlogPost';

const NewsPost2: React.FC = () => {
  const blogPostData = {
    title: "Egy nap alatt 1,5 millió forintot gyűjtöttek össze a Hős utcai gyerekeknek",
    author: {
      name: "Németh Péter",
      avatar: "/placeholder.svg?height=50&width=50"
    },
    category: "Társadalom",
    date: "október 16., 14:45",
    content: `
      <p>A Hős utcai gyerekek megsegítésére indított gyűjtés hatalmas sikert aratott: mindössze egy nap alatt 1,5 millió forint gyűlt össze. A kezdeményezés célja, hogy támogassa a hátrányos helyzetű családokat és gyermekeiket.</p>
      <h2>A gyűjtés háttere</h2>
      <p>A Hős utca Budapest egyik legszegényebb területe, ahol sok család küzd napi megélhetési gondokkal. A gyűjtést helyi civil szervezetek indították, hogy segítsenek a rászoruló gyerekeken.</p>
      <blockquote>"Minden gyermek megérdemli az esélyt egy jobb jövőre" - mondta az egyik szervező.</blockquote>
      <h3>Mire fordítják az adományokat?</h3>
      <p>Az összegyűjtött pénzt többek között az alábbi célokra fordítják:</p>
      <ul>
        <li>Tanszerek és iskolai felszerelések vásárlása</li>
        <li>Étkeztetési programok támogatása</li>
        <li>Szabadidős és oktatási programok szervezése</li>
      </ul>
      <p>A szervezők remélik, hogy a sikeres gyűjtés folytatódik, és még több emberhez eljut a kezdeményezés híre.</p>
    `,
    image: "/placeholder.svg?height=400&width=800"
  };

  return <BlogPost {...blogPostData} />;
};

export default NewsPost2;