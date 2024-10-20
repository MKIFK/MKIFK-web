import React from 'react';
import BlogPost from '../components/BlogPost';

import contentImage1 from '../../assets/images/hero-image-1.jpg';
import heroImage2 from '../../assets/images/hero-image-1.jpg';


const NewsPost1: React.FC = () => {
  const blogPostData = {
    title: "News Page 1 - Gálvölgyi Jánost úgy megrakja egy női testbe zárt meleg férfi, hogy leülni sem tud",
    date: "október 15., 19:29",
    heroImage: 'hero-image-1.jpg',
    content: `
      <img src="${heroImage2}" alt="Content image 1"/>

      <p>Ha Pintér Béla legújabb előadására, az <em>Idegen test</em>re beülne mondjuk, mit tudom én, Rákay Philip és a Meseország mindenkié LMBTQ-aktivista szerkesztője, akkor egymás kezét izzadtra morzsolva, szimultán kapnának agyvérzést.</p>
      <p>A <a href="#">korábbi előadásokra</a> is igaz volt, de itt hatványozottan így van, hogy a magyar kultúrpolitika, ami aktívan igyekszik <a href="#">megfojtani</a> Pintéréket és más független társulatokat, őszintén meglepődne, ha beülne egy Pintér-előadásra, mert azzal szembesülne, hogy bizonyos szempontból a jelenkor egyik legkonzervatívabb és leghatásosabb kritikusa Pintér Béla és társulata, akik egyáltalán nem elégszenek meg annyival, hogy az éppen regnáló politikai elitet kigúnyolják. Ennél jóval többről beszélnek Pintérék.</p>
      <h2>Alcím 1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
      <blockquote>Ez egy idézet a cikkből, ami kiemeli a fontos gondolatokat.</blockquote>
      <h3>Alcím 2</h3>
      <img src="${contentImage1}" alt="Content image 1" style="max-width: 100%; height: auto; margin: 20px 0;" />
      
      <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
      <ul>
        <li>Lista elem 1</li>
        <li>Lista elem 2</li>
        <li>Lista elem 3</li>
      </ul>
    `,
    image: '../../assets/images/hero-image-1.jpg'
  };

  return <BlogPost {...blogPostData} />;
};

export default NewsPost1;