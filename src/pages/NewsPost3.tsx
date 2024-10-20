import React from 'react';
import BlogPost from '../components/BlogPost';

const NewsPost3: React.FC = () => {
  const blogPostData = {
    title: "Új kutatás: A rendszeres testmozgás csökkentheti a depresszió kockázatát",
    author: {
      name: "Dr. Kovács Anna",
      avatar: "/placeholder.svg?height=50&width=50"
    },
    category: "Egészség",
    date: "október 17., 10:00",
    content: `
      <p>Egy új, átfogó kutatás szerint a rendszeres testmozgás jelentősen csökkentheti a depresszió kialakulásának kockázatát. A tanulmány több mint 100 000 résztvevő adatait elemezte.</p>
      <h2>A kutatás főbb megállapításai</h2>
      <p>A kutatók azt találták, hogy azok, akik hetente legalább 150 percet mozogtak közepes intenzitással, 31%-kal kisebb eséllyel tapasztaltak depressziós tüneteket, mint az inaktív résztvevők.</p>
      <blockquote>"A testmozgás nem csak a fizikai egészségünkre van pozitív hatással, de a mentális jóllétünket is jelentősen javíthatja" - nyilatkozta Dr. Smith, a kutatás vezetője.</blockquote>
      <h3>Ajánlott testmozgásformák</h3>
      <p>A kutatók a következő testmozgásformákat javasolják a depresszió megelőzésére:</p>
      <ul>
        <li>Gyors séta vagy kocogás</li>
        <li>Úszás</li>
        <li>Kerékpározás</li>
        <li>Tánc vagy aerobik</li>
      </ul>
      <p>A szakértők hangsúlyozzák, hogy a rendszeresség kulcsfontosságú. Már napi 30 perc mozgás is jelentős pozitív hatással lehet a mentális egészségre.</p>
      <h3>Következtetések</h3>
      <p>A kutatás eredményei arra mutatnak rá, hogy a testmozgás beépítése a mindennapi rutinba nem csak fizikai, de mentális szempontból is rendkívül fontos. Az egészségügyi szakemberek remélik, hogy ezek az eredmények még több embert ösztönöznek majd a rendszeres testmozgásra.</p>
    `,
    image: "/placeholder.svg?height=400&width=800"
  };

  return <BlogPost {...blogPostData} />;
};

export default NewsPost3;