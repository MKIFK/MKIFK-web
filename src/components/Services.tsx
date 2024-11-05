import React, { useState, useEffect, lazy, Suspense } from "react";

// Lazy load the Button component
const Button = lazy(() => import("./Button"));

interface Service {
  title: string;
  description: string;
  link: string;
  imageName: string;
  isExternal: boolean;
}

const services: Service[] = [
  {
    title: "Nemzeti Jogszabálytár",
    description:
      "A hatályos magyar jogszabályok hivatalos gyűjteménye, amely lehetővé teszi a jogszabályok keresését, megismerését, és a hatályosságuk követését.",
    link: "https://njt.hu/",
    isExternal: true,
    imageName: "nemzeti_jogtar.png",
  },
  {
    title: "Igazságügyi Fordítóközpont",
    description:
      "Hiteles és nem hiteles fordítási és tolmácsolási szolgáltatásokat nyújt, biztosítva az állami és üzleti partnerek számára a professzionális nyelvi közvetítést és minősített adatkezelést.",
    link: "https://www.offi.hu",
    isExternal: true,
    imageName: "fordito.png",
  },
  {
    title: "Magyar Közlöny",
    description:
      "Magyarország hivatalos lapja, amely a jogszabályokhoz, rendeletekhez és egyéb kormányzati döntésekhez biztosít közérdekű és nyilvános hozzáférést.",
    link: "https://magyarkozlony.hu//",
    isExternal: true,
    imageName: "kiado.png",
  },
];

const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Szolgáltatásaink</h2>
        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="services__item">
              <div className="services__image-container">
                <img
                  src={"../../assets/images/" + service.imageName}
                  alt={service.title}
                  className="services__image"
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
              <div className="services__text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Suspense fallback={<div>Loading...</div>}>
                  <Button
                    variant="primary"
                    linkTo={service.link}
                    external={service.isExternal}
                  >
                    Részletek
                  </Button>
                </Suspense>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
