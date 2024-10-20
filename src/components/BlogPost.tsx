import React, { useState, useEffect } from 'react';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  heroImage: string;
  image?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ 
  title, 
  date, 
  content, 
  heroImage,
  image 
}) => {
  const [heroImageSrc, setHeroImageSrc] = useState<string>('');
  const [contentImageSrc, setContentImageSrc] = useState<string>('');

  useEffect(() => {
    const loadImages = async () => {
      try {
        const heroImageModule = await import(`../assets/images/${heroImage}`);
        setHeroImageSrc(heroImageModule.default);

        if (image) {
          const contentImageModule = await import(`../assets/images/${image}`);
          setContentImageSrc(contentImageModule.default);
        }
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, [heroImage, image]);

  return (
    <article className="blog-post">
      {heroImageSrc && (
        <div className="blog-post__hero">
          <img src={heroImageSrc} alt={title} className="blog-post__hero-image" />
          <img src="..as" alt="" />
        </div>
      )}
      <div className="blog-post__container">
        <h1 className="blog-post__title">{title}</h1>
        <div className="blog-post__meta">
          <span className="blog-post__date">{date}</span>
        </div>
        <div className="blog-post__content" dangerouslySetInnerHTML={{ __html: content }} />
        {contentImageSrc && <img src={contentImageSrc} alt="Blog post illustration" className="blog-post__image" />}
      </div>
    </article>
  );
};

export default BlogPost;