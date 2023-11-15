const featuresList = [
    {
      icon: "https://i.etsystatic.com/21572743/r/il/962fb1/3200256841/il_320xN.3200256841_4eyj.jpg",
      title: "Álgebra ",
      description:
        "PPT 2024.",
      link: "https://dirageanalytics.blogspot.com",
    },
  
    {
      icon: "https://i.etsystatic.com/21572743/r/il/74e308/3288487596/il_320xN.3288487596_km0b.jpg",
      title: "Aritmética",
      description:
        "PPT 2024.",
      link: "https://drive.google.com/file/d/1Nm5pysCLVvmFyycyDuhAmnSWc9FAR4nQ/view",
    },
  
    {
      icon: "https://i.etsystatic.com/21572743/r/il/b8d238/4538319342/il_320xN.4538319342_7fe6.jpg",
      title: "Geometría",
      description:
        "PPT 2024.",
    },
  
    {
      icon: "https://i.etsystatic.com/21572743/r/il/26c655/3310223164/il_450xN.3310223164_1ocy.jpg",
      title: "Trigonometría",
      description:
        "PPT 2024.",
    },
  
    {
      icon: "https://i.etsystatic.com/21572743/r/il/793ba7/4608214685/il_320xN.4608214685_a9yz.jpg",
      title: "Raz. Matemático",
      description:
        "PPT 2024.",
    },
  
    {
      icon: "https://i.etsystatic.com/21572743/r/il/bdc62f/3294613708/il_320xN.3294613708_6f4w.jpg",
      title: "Física",
      description:
        "Attach file .",
    },
     {
      icon: "https://i.etsystatic.com/21572743/r/il/9eb6f8/2813262309/il_320xN.2813262309_rggd.jpg",
      title: "Química",
      description:
        "Attach files.",
    },
     {
      icon: "https://i.etsystatic.com/21572743/r/il/45d3c4/3245379009/il_320xN.3245379009_k089.jpg",
      title: "Biología",
      description:
        "PPT 2024.",
      link: "https://dirageanalytics.blogspot.com",
    },
      {
      icon: "https://i.etsystatic.com/21572743/r/il/b8d238/4538319342/il_320xN.4538319342_7fe6.jpg",
      title: "Lenguaje",
      description:
        "PPT 2024.",
    },
  
      
  ];
  const displayFeatures = () => {
    featuresList.forEach((f) => {
      const html = `<div class="icon">
          <img src="${f.icon}" alt="" />
        </div>
        <h3>${f.title}</h3>
        <p>
          ${f.description}
        </p>
         <a href="${f.link}" class="btn-dos">Ingrese</a>`;
  
      const featureCard = document.createElement("div");
      featureCard.classList.add("feature-card");
      featureCard.innerHTML = html;
  
      featuresContent.appendChild(featureCard);
    });
  };
  
  displayFeatures();