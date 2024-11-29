<script>
  import CardHome from "../../cards/CardHome.svelte"

  let cardDataTvHorizonte = {
    type: "Entrevista",
    date: '21/02/2024',
    title: 'TV Horizonte',
    text: 'Entrevista com Sandro Laudares na TV Horizonte',
    iframe: '<iframe height="220" class="w-full mx-3" src="https://www.youtube.com/embed/yjmzMlVk8SE" title="Startup Crossvirus IA | Horizonte Notícia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    autor: 'Crossvirus'
  }
  
  let cardDataRadioAmerica = {
    type: "Entrevista",
    date: '22/02/2024',
    title: 'Rádio América',
    text: 'Entrevista de radio',
    iframe: '<img class="w-full bg-primary mt-24" src="images/radioAmerica.png" alt="">',
    autor: 'Crossvirus'
  }
  
  let cardDataArtigoGeoc = {
    type: "Artigo",
    date: '04/03/2024',
    title: 'Geovisualização: Uma Abordagem Prática para Análise Espacial da COVID-19',
    text: 'Os Sistemas de Informação Geográfica na Web (WebGISs) foram amplamente utilizados para monitorar casos e mortes por COVID-19 durante a pandemia. Além disso, as geotecnologias também foram muito úteis na educação, gestão pública, turismo e outras áreas. Embora existam WebGISs com um alto nível de sofisticação, a maioria é simples, consistindo em visualizadores geográficos de casos, mortes e vacinações',
    iframe: '<img class="w-full bg-primary" src="images/img-artigo.png" alt="">',
    autor: 'MDPI'
  }
  
  let cardDataNoticia = {
    type: "Noticia",
    date: '04/03/2024',
    title: 'O impacto da dengue na economia',
    text: 'Epidemia de dengue em Minas tem impacto de R$ 5,7 bilhões na economia',
    iframe: '<img class="w-full bg-primary" src="images/Hospital.png" alt="">',
    autor: 'O Tempo'
  }

</script>
<main class="container-lg mx-auto px-4">
  <h1 class="font-bold text-center text-2xl mt-24">Entrevistas</h1>
  <p class="text-center font-light text-gray-500 sm:text-xl dark:text-gray-400">Lista de entrevistas realizadas com a equipe Crossvirus</p>
  <div class="flex flex-col md:full md:flex-row md:space-x-8 px-10 lg:px-36 mt-5">
    <CardHome cardData={cardDataTvHorizonte}/>
    <CardHome cardData={cardDataRadioAmerica}/>
  </div>
  
  <h1 class="font-bold text-center text-2xl mt-24">Publicações científicas</h1>
  <p class="text-center font-light text-gray-500 sm:text-xl dark:text-gray-400">Lista de artigos relacionadas a epidemias</p>
  <div class="flex flex-col md:full md:flex-row md:space-x-8 px-10 lg:px-36 mt-5">
    <CardHome cardData={cardDataArtigoGeoc}/>
    <CardHome cardData={cardDataArtigoGeoc}/>
  </div>
  
  <h1 class="font-bold text-center text-2xl mt-24">Notícias</h1>
  <p class="text-center font-light text-gray-500 sm:text-xl dark:text-gray-400">Lista de notícias relacionadas a epidemias</p>
  <div class="flex flex-col md:full md:flex-row md:space-x-8 px-10 lg:px-36 mt-5">
    <CardHome cardData={cardDataNoticia}/>
    <CardHome cardData={cardDataNoticia}/>
  </div>
  
  
  <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
  <script src="http://threejs.org/examples/js/libs/stats.min.js"></script>
  <script src="animation/app.js"></script>
</main>

