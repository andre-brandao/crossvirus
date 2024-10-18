<script>
  import SEO, { getSEOProps } from '$components/SEO/index.svelte'
  import { icons } from "$lib/utils"
  import CardHome from '$lib/client/components/cards/CardHome.svelte'
  
  import Carousel from '$components/landing-page/Carousel.svelte'
  import Carousel2 from '$components/landing-page/Carousel2.svelte'
  import Features3 from '$components/landing-page/features/Features3.svelte'
  import Pricing from '$components/landing-page/pricing/Pricing.svelte'
  import Features4 from '$components/landing-page/features/Features4.svelte'
  import Footer from '$components/landing-page/Footer.svelte'
  
  import ShareButton from '$components/share/index.svelte'
  
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
  // console.log(tailwind.theme.colors.primary)
</script>

<SEO
{...getSEOProps({
  title: 'Home',
  featuredImage: {
    url: 'https://via.placeholder.com/672x448',
    alt: 'Placeholder image',
    width: 672,
    height: 448,
    caption: 'Home page',
  },
})}
/>

<!-- <Modal onClose={console.log} onOpen={console.log}>Teste Modal</Modal> -->
<main class="container-lg mx-auto px-4">
  <div class="flex flex-wrap ">
    <div class="w-full sm:mt-10 sm:mb-10">
      <h1 class="gradient-title text-5xl font-bold">Crossvirus IA</h1>
      <p class="text-xl font-medium">Software desenvolvido para controle <br> e contenção de doenças epidemiológicas</p>
      <div class="d-flex">
        <a class="btn btn-primary" href="#">Entre em contato {@html icons.arrowRight()}</a>
        <a class="btn btn-secondary" href="#">Vídeo {@html icons.camera()}</a>
      </div>
    </div>  
  </div>
  <div class="w-full">
    <h3 class="text-center text-xl text-gray-700">Featured in</h3>
    <div class="flex justify-center content-center opacity-10">
      <div class="self-center">
        <a href="#">
          <img class="w-auto h-12" src="/images/logoYoutube.png" alt="">
        </a>  
      </div>
      <div class="flex">
        <a href="#">
          <img class="w-auto h-20" src="/images/logoWPP.png" alt="">
        </a>
        <p class="-ml-4 self-center text-3xl font-semibold">Whatsapp</p>
      </div>
      <div class="flex">
        <a href="">
          <img class="w-auto h-20" src="/images/LogoLinkedin.png" alt="">
        </a>
        <p class="-ml-4 self-center text-3xl font-semibold">Linkedin</p>
      </div>
    </div>
  </div>
  
  <h1 class="font-bold text-center text-4xl mt-24">Entrevistas</h1>
  <p class="text-center mt-2 text-2xl font-light text-gray-600">Lista de entrevistas realizadas com a equipe Crossvirus</p>
  <div class="flex space-x-8 px-28 mt-5">
    <CardHome cardData={cardDataTvHorizonte}/>
    <CardHome cardData={cardDataRadioAmerica}/>
  </div>
  
  <h1 class="font-bold text-center text-4xl mt-24">Publicações científicas</h1>
  <p class="text-center mt-2 text-2xl font-light text-gray-600">Lista de artigos relacionadas a epidemias</p>
  <div class="flex space-x-8 px-28 mt-5">
    <CardHome cardData={cardDataArtigoGeoc}/>
  </div>
  
  <h1 class="font-bold text-center text-4xl mt-24">Notícias</h1>
  <p class="text-center mt-2 text-2xl font-light text-gray-600">Lista de notícias relacionadas a epidemias</p>
  <div class="flex space-x-8 px-28 mt-5">
    <CardHome cardData={cardDataNoticia}/>
  </div>
  
  <h1 class="font-bold text-center text-4xl mt-24">Feito para prefeituras de todos os tamanhos</h1>
  <p class="text-center mt-2 text-lg font-light text-gray-600">Escolha o plano que melhor se encaixa com a sua situação</p>
  <div class="flex space-x-8 px-28 mt-5">
    <div class="w-full sm:w-1/3 card bg-neutral rounded-2xl text-accent px-6 py-4">
      <div class="text-center">
        <h2 class="font-semibold mt-3 text-2xl">Pequenas cidades</h2>
        <p class="mt-3 text-xl font-light text-gray-600">Acesso Limitado, sem funcionalidades premium</p>
        <p class="mt-8 text-5xl font-bold">R$45</p>
        <p class="-mt-1 text-lg font-light text-gray-800">/1.000 habitantes</p>
      </div>
      <div>
        <div class="flex mt-8">
          <span class="text-green-600 mr-4">{@html icons.check()}</span> Cardápio de funcionalidades
        </div>
        <div class="flex mt-2">
          <span class="text-red-500 mr-4">{@html icons.x()}</span> Envio de Emails
        </div>
        <div class="flex mt-2">
          <span class="text-red-500 mr-4">{@html icons.x()}</span> Relatorios
        </div>
        <div class="flex mt-2">
          <span class="text-red-500 mr-4">{@html icons.x()}</span> Monitoramento
        </div>
        <div class="flex mt-2">
          <span class="text-red-500 mr-4">{@html icons.x()}</span> Controle de acessos
        </div>
      </div>
      <button class="btn w-full bg-secondary text-neutral mt-5">
        Entre em contato
      </button>
    </div>
  </div>
  
  <h2 class="font-bold text-center text-4xl mt-24">
    Patrocinadores
  </h2>

  <div class="flex space-x-8 justify-center items-center">
    <img class="w-auto h-20 px-10" src="images/puc.jpg" alt="">
    <img class="w-auto h-24" src="images/puctec.jpg" alt="">
  </div>
  
  <footer>
    <h3 class="font-semibold text-center text-2xl mt-20">Crossvirus</h3>
    <p class="text-center mt-2 text-lg font-normal text-gray-600">Software desenvolvido para controle e contenção de doenças epidemiológicas.</p>
    <nav class="text-center space-x-8 mt-3">
      <a href="#">Home</a>
      <a href="#">Mapas</a>
      <a href="#">Entrevistas</a>
      <a href="#">Artigos</a>
      <a href="#">Preço</a>
    </nav>
    <p class="text-center my-4 text-lg font-normal text-gray-600">&copy; 2022-2024 Crossvirus-IA Ltda ME. ALL Rights Reserved.</p>
  </footer>
  <!-- <HeroGlobe /> -->
  
  <!-- <div class="h-60 w-60">
  <RotatingGlobe></RotatingGlobe>
  </div> -->
  <!-- <ShareButton title="Home" url="https://example.com" /> -->
  
  <!-- <MapContact /> -->
  
  <!-- <Features3></Features3>
  
  <Pricing />
  
  <Features4></Features4>
  
  
  
  <Footer></Footer> -->
  <!-- <Carousel2 />
  <Carousel /> -->
</main>

<style>
  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .gradient-title{
    background: linear-gradient(90deg, #FF5C00, #00BFFF); /* Gradiente desejado */
    background-size: 300% 300%;
    animation: gradient-animation 5s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
  