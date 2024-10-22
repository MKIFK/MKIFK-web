import React from 'react';
import BlogPost from '../components/BlogPost';

import contentImage1 from '../../assets/images/hero-image-1.jpg';
import heroImage2 from '../../assets/images/hero-image-1.jpg';


const NewsPost1: React.FC = () => {
  const blogPostData = {
    title: "News Page 2 - faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    date: "október 15., 19:29",
    heroImage: 'hero-image-1.jpg',
    content: `
      <img src="${heroImage2}" alt="Content image 1"/>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.</p>

      <h2>Headline 2: Consectetur Adipiscing Elit</h2>

      <p>Nullam sit amet nisi condimentum erat iaculis auctor. Praesent congue erat at massa. Sed cursus turpis vitae tortor.</p>

      <blockquote>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet fringilla lacus."
      </blockquote>

      <h3>Headline 3: Vivamus Luctus Urna Sed Urna</h3>

      <p>In hac habitasse platea dictumst. Nulla facilisi. Morbi fringilla convallis sapien, id pulvinar odio volutpat. Sed dignissim lacinia nunc.</p>

      <h4>Headline 4: Sed Cursus Turpis Vitae Tortor</h4>

      <p>Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.</p>

      <h5>Headline 5: Curabitur Suscipit Suscipit Tellus</h5>

      <p>
        Nam justo ex, tincidunt vitae mollis vitae, vulputate a nisi. Curabitur tempor ante neque, eu efficitur velit finibus at. 
        <a href="https://example.com" target="_blank">website</a>
        Morbi commodo, ex eu aliquam ultrices, justo dui vestibulum leo, in rutrum nisi ex id nisi. Nullam dapibus venenatis commodo. Nulla vitae sapien nec magna aliquet maximus non quis libero. Curabitur in tempor massa. Donec ac varius tellus. Curabitur ac rhoncus mauris.
      </p>

      <p>Nulla facilisi. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>

      <h2>Ordered List Example</h2>
      <ol>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Vivamus luctus urna sed urna ultricies</li>
      </ol>

      <h2>Unordered List Example</h2>
      <ul>
          <li>Nullam sit amet nisi condimentum</li>
          <li>Praesent congue erat at massa</li>
          <li>Sed cursus turpis vitae tortor</li>
      </ul>

      <p>Visit our <a href="https://example.com" target="_blank">website</a> for more information.</p>
    `,
    image: '../../assets/images/hero-image-1.jpg'
  };

  return <BlogPost {...blogPostData} />;
};

export default NewsPost1;