<script>
  import SEO, { getSEOProps } from '$components/SEO/index.svelte'
  import { icons } from '$lib/utils'
  import CardHome from '$lib/client/components/cards/CardHome.svelte'

  import Carousel from '$components/landing-page/Carousel.svelte'
  import Carousel2 from '$components/landing-page/Carousel2.svelte'
  import Features3 from '$components/landing-page/features/Features3.svelte'
  import Pricing from '$components/landing-page/pricing/Pricing.svelte'
  import Features4 from '$components/landing-page/features/Features4.svelte'
  import Footer from '$components/landing-page/Footer.svelte'

  import ShareButton from '$components/share/index.svelte'

  let cardDataTvHorizonte = {
    type: 'Entrevista',
    date: '21/02/2024',
    title: 'TV Horizonte',
    text: 'Entrevista com Sandro Laudares na TV Horizonte',
    iframe:
      '<iframe height="100%" class="w-full" src="https://www.youtube.com/embed/yjmzMlVk8SE" title="Startup Crossvirus IA | Horizonte Notícia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    autor: 'Crossvirus',
    link: 'https://www.youtube.com/watch?si=6j6exODLGMK3GfrW&v=yjmzMlVk8SE&feature=youtu.be',
    width: 'md:w-96',
  }

  let cardDataRadioAmerica = {
    type: 'Entrevista',
    date: '22/02/2024',
    title: 'Rádio América',
    text: 'Entrevista de radio',
    iframe:
      '<div class="h-full w-full flex items-center justify-center"> <img class="w-full bg-primary" src="images/radioAmerica.png" alt=""> </div>',
    autor: 'Crossvirus',
    link: 'https://radioamerica.arquidiocesebh.org.br/noticia/plataforma-e-desenvolvida-para-analise-e-monitoramento-de-doencas-epidemiologicas-como-a-dengue/',
    width: 'md:w-96',
  }

  let cardDataArtigoGeolocalizacao = {
    type: 'Artigo',
    date: '04/03/2024',
    title:
      'Geovisualização: Uma Abordagem Prática para Análise Espacial da COVID-19',
    text: 'Os Sistemas de Informação Geográfica na Web (WebGISs) foram amplamente utilizados para monitorar casos e mortes por COVID-19 durante a pandemia. Além disso, as geotecnologias também foram muito úteis na educação, gestão pública, turismo e outras áreas. Embora existam WebGISs com um alto nível de sofisticação, a maioria é simples, consistindo em visualizadores geográficos de casos, mortes e vacinações',
    iframe:
      '<img class="w-auto h-full bg-primary" src="images/img-artigo.png" alt="">',
    autor: 'MDPI',
    link: 'https://www.mdpi.com/2673-7086/3/4/41',
    width: 'lg:w-1/2',
  }

  let cardDataArtigoRevisao = {
    type: 'Artigo',
    date: '23/01/2024',
    title: 'Uma revisão do vírus da dengue e seus vetores',
    text: 'Os primeiros relatos de uma doença com prognósticos clínicos semelhantes à dengue são relatados na Enciclopédia Médica Chinesa da Dinastia Jin (265-420 d.C).',
    iframe:
      '<div class="h-auto flex items-center justify-center"> ' +  
        '<img class="w-auto h-full bg-primary" src="images/1_dengue_bh-34521500.png" alt=""> </div>',
    autor: 'RSD Journal',
    link: 'https://rsdjournal.org/index.php/rsd/article/view/18733',
  }

  let cardDataNoticiaDengue = {
    type: 'Noticia',
    date: '04/03/2024',
    title: 'O impacto da dengue na economia',
    text: 'Epidemia de dengue em Minas tem impacto de R$ 5,7 bilhões na economia',
    iframe:
      '<div class="h-full w-full flex items-center justify-center"><img class="h-full w-auto bg-primary" src="images/Hospital.png" alt=""></div>',
    autor: 'O Tempo',
    link: 'https://www.otempo.com.br/economia/epidemia-de-dengue-em-minas-tem-impacto-de-r-5-7-bilhoes-na-economia-1.3342052',
    width: 'lg:w-96',
  }

  let cardDataNoticiaEstadoEmergencia = {
    type: 'Noticia',
    date: '23/01/2024',
    title:
      'Minas Gerais decretará estado de emergência de saúde por causa da dengue',
    text: 'Secretário de Saúde Fábio Baccheretti antecipou que o estado decretará emergência ainda nesta semana. Um apessoa morreu de dengue em Monte Belo',
    iframe:
      '<div class="h-full w-full flex items-center justify-center"> <img class="h-full w-auto bg-primary" src="https://midias.em.com.br/_midias/png/2024/01/22/1200x720/1_dengue_bh-34521500.png?20240123151020?20240123151020" alt=""> </div>',
    autor: 'Estado de Minas',
    link: 'https://www.em.com.br/gerais/2024/01/6791431-minas-gerais-decretara-estado-de-emergencia-de-saude-por-conta-da-dengue.html',
    width: 'lg:w-96',
  }
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

<main class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
  <aside class="mx-16">
    <div class="flex flex-wrap">
      <div
        class="w-full pt-10 text-center sm:mb-10 sm:mt-10 lg:w-1/2 lg:pt-5 lg:text-left"
      >
        <h1 class="gradient-title text-5xl font-bold mb-3">Crossvirus IA</h1>
        <p class="text-xl font-medium mb-3">
          Software desenvolvido para controle <br />
           e contenção de doenças epidemiológicas
        </p>
        <div class="d-flex">
          <a class="btn btn-primary" href="#">
            Entre em contato {@html icons.arrowRight()}
          </a>
          <a class="btn btn-secondary" href="#">Vídeo {@html icons.camera()}</a>
        </div>
      </div>
      <div
        class="flex w-full justify-center py-10 lg:w-1/2 lg:justify-end lg:pt-0"
      >
        <img
          class="h-auto w-80 rounded-lg"
          src="/images/crossvirusGlobe2.png"
          alt=""
        />
      </div>
    </div>
    <div class="w-full mt-10">
      <h3 class="text-center font-semibold uppercase text-gray-400 ">
        Featured in
      </h3>
      <div
        class="mb-40 flex flex-wrap content-center justify-center gap-5 pt-5 grayscale"
      >
        <a
          aria-label="What-Sapp"
          class="w-1-3 flex items-center self-center opacity-65 hover:opacity-100"
          href="https://youtu.be/wwladjc24ck?feature=shared"
        >
          <svg
            class="h-8"
            viewBox="0 0 132 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-astro-cid-5plblf6c=""
          >
            <path
              d="M39.4555 5.17846C38.9976 3.47767 37.6566 2.13667 35.9558 1.67876C32.8486 0.828369 20.4198 0.828369 20.4198 0.828369C20.4198 0.828369 7.99099 0.828369 4.88379 1.64606C3.21571 2.10396 1.842 3.47767 1.38409 5.17846C0.566406 8.28567 0.566406 14.729 0.566406 14.729C0.566406 14.729 0.566406 21.2051 1.38409 24.2796C1.842 25.9804 3.183 27.3214 4.88379 27.7793C8.0237 28.6297 20.4198 28.6297 20.4198 28.6297C20.4198 28.6297 32.8486 28.6297 35.9558 27.812C37.6566 27.3541 38.9976 26.0131 39.4555 24.3123C40.2732 21.2051 40.2732 14.7618 40.2732 14.7618C40.2732 14.7618 40.3059 8.28567 39.4555 5.17846Z"
              fill="currentColor"
              data-astro-cid-5plblf6c=""
            ></path>
            <path
              d="M16.4609 8.77612V20.6816L26.7966 14.7289L16.4609 8.77612Z"
              fill="white"
              data-astro-cid-5plblf6c=""
            ></path>
            <path
              d="M64.272 25.0647C63.487 24.5413 62.931 23.7237 62.6039 22.5789C62.2768 21.4669 62.1133 19.9623 62.1133 18.1307V15.6122C62.1133 13.7479 62.3095 12.2434 62.6693 11.0986C63.0618 9.95386 63.6505 9.13618 64.4355 8.61286C65.2532 8.08954 66.2998 7.82788 67.6081 7.82788C68.8837 7.82788 69.9304 8.08954 70.7153 8.61286C71.5003 9.13618 72.0564 9.98657 72.4161 11.0986C72.7759 12.2107 72.9722 13.7152 72.9722 15.6122V18.1307C72.9722 19.995 72.8086 21.4669 72.4488 22.6116C72.0891 23.7237 71.533 24.5741 70.7481 25.0974C69.9631 25.6207 68.8837 25.8824 67.5427 25.8824C66.169 25.8496 65.057 25.588 64.272 25.0647ZM68.6875 22.3172C68.9164 21.7612 69.0146 20.8127 69.0146 19.5371V14.1077C69.0146 12.8648 68.9164 11.949 68.6875 11.3603C68.4585 10.7715 68.0988 10.5099 67.5427 10.5099C67.0194 10.5099 66.6269 10.8043 66.4307 11.3603C66.2017 11.949 66.1036 12.8648 66.1036 14.1077V19.5371C66.1036 20.8127 66.2017 21.7612 66.4307 22.3172C66.6269 22.8733 67.0194 23.1676 67.5754 23.1676C68.0987 23.1676 68.4585 22.906 68.6875 22.3172Z"
              fill="currentColor"
              data-astro-cid-5plblf6c=""
            ></path>
            <path
              d="M124.649 18.1634V19.0465C124.649 20.1586 124.682 21.009 124.748 21.565C124.813 22.121 124.944 22.5462 125.173 22.7752C125.369 23.0368 125.696 23.1677 126.154 23.1677C126.743 23.1677 127.135 22.9387 127.364 22.4808C127.593 22.0229 127.691 21.2706 127.724 20.1913L131.093 20.3875C131.125 20.5511 131.125 20.7473 131.125 21.009C131.125 22.6117 130.7 23.8218 129.817 24.6068C128.934 25.3918 127.691 25.7843 126.089 25.7843C124.159 25.7843 122.818 25.1628 122.033 23.9527C121.248 22.7425 120.855 20.8782 120.855 18.327V15.2852C120.855 12.6686 121.248 10.7715 122.066 9.56136C122.883 8.35119 124.257 7.76245 126.187 7.76245C127.528 7.76245 128.574 8.02411 129.294 8.51472C130.013 9.00534 130.504 9.79032 130.798 10.8042C131.093 11.8509 131.223 13.29 131.223 15.1216V18.098H124.649V18.1634ZM125.14 10.837C124.944 11.0986 124.813 11.4911 124.748 12.0471C124.682 12.6032 124.649 13.4536 124.649 14.5983V15.8412H127.528V14.5983C127.528 13.4863 127.495 12.6359 127.43 12.0471C127.364 11.4584 127.201 11.0659 127.004 10.837C126.808 10.608 126.481 10.4772 126.089 10.4772C125.631 10.4445 125.336 10.5753 125.14 10.837Z"
              fill="currentColor"
              data-astro-cid-5plblf6c=""
            ></path>
            <path
              d="M54.7216 17.8362L50.2734 1.71143H54.1656L55.7356 9.0052C56.1281 10.8041 56.4224 12.3414 56.6187 13.617H56.7168C56.8476 12.7011 57.142 11.1966 57.5999 9.0379L59.2353 1.71143H63.1274L58.6138 17.8362V25.5552H54.7543V17.8362H54.7216Z"
              fill="currentColor"
              data-astro-cid-5plblf6c=""
            ></path>
            <path
              d="M85.6299 8.15479V25.5878H82.5554L82.2283 23.4619H82.1302C81.3125 25.0645 80.0369 25.8822 78.3688 25.8822C77.2241 25.8822 76.3737 25.4897 75.8177 24.7375C75.2617 23.9852 75 22.8077 75 21.1723V8.15479H78.9249V20.9434C78.9249 21.7284 79.023 22.2844 79.1865 22.6115C79.3501 22.9385 79.6444 23.1021 80.0369 23.1021C80.364 23.1021 80.6911 23.004 81.0181 22.775C81.3452 22.5788 81.5742 22.3171 81.705 21.99V8.15479H85.6299Z"
              fill="currentColor"
              data-astro-cid-5plblf6c=""
            ></path>
            <path
              d="M105.747 8.15479V25.5878H102.673L102.346 23.4619H102.247C101.43 25.0645 100.154 25.8822 98.4861 25.8822C97.3413 25.8822 96.4909 25.4897 95.9349 24.7375C95.3788 23.9852 95.1172 22.8077 95.1172 21.1723V8.15479H99.0421V20.9434C99.0421 21.7284 99.1402 22.2844 99.3038 22.6115C99.4673 22.9385 99.7617 23.1021 100.154 23.1021C100.481 23.1021 100.808 23.004 101.135 22.775C101.462 22.5788 101.691 22.3171 101.822 21.99V8.15479H105.747Z"
              fill="currentColor"
              data-astro-cid-5plblf6c=""
            ></path>
            <path
              d="M96.2907 4.88405H92.3986V25.5552H88.5718V4.88405H84.6797V1.71143H96.2907V4.88405Z"
              fill="currentColor"
              data-astro-cid-5plblf6c=""
            ></path>
            <path
              d="M118.731 10.935C118.502 9.82293 118.11 9.03795 117.587 8.54734C117.063 8.05672 116.311 7.79506 115.395 7.79506C114.676 7.79506 113.989 7.99131 113.367 8.41651C112.746 8.809 112.255 9.36502 111.928 10.0192H111.896V0.828369H108.102V25.5552H111.34L111.732 23.9199H111.83C112.125 24.5086 112.582 24.9665 113.204 25.3263C113.825 25.6533 114.479 25.8496 115.232 25.8496C116.573 25.8496 117.521 25.2281 118.143 24.018C118.764 22.8078 119.091 20.8781 119.091 18.2942V15.5467C119.059 13.5516 118.96 12.0143 118.731 10.935ZM115.134 18.0325C115.134 19.3081 115.068 20.2893 114.97 21.0089C114.872 21.7285 114.676 22.2518 114.447 22.5461C114.185 22.8405 113.858 23.004 113.466 23.004C113.138 23.004 112.844 22.9386 112.582 22.7751C112.321 22.6116 112.092 22.3826 111.928 22.0882V12.2106C112.059 11.7527 112.288 11.3602 112.615 11.0331C112.942 10.7387 113.302 10.5752 113.662 10.5752C114.054 10.5752 114.381 10.7387 114.578 11.0331C114.807 11.3602 114.937 11.8835 115.036 12.6031C115.134 13.3553 115.166 14.402 115.166 15.743V18.0325H115.134Z"
              fill="currentColor"
              data-astro-cid-5plblf6c=""
            ></path>
          </svg>
        </a>
        <a
          class="w-1-3 flex opacity-65 hover:opacity-100"
          href="https://wa.me/5531998085422?text=Me%20passe%20mais%20informações%20sobre%20o%20Crossvirus"
        >
          <svg
            class="h-12"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            data-astro-cid-5plblf6c=""
          >
            <path
              d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"
              data-astro-cid-5plblf6c=""
            ></path>
          </svg>
          <p class="self-center text-3xl font-semibold">Whatsapp</p>
        </a>
        <a
          class="w-1-3 flex opacity-65 hover:opacity-100"
          href="https://www.linkedin.com/showcase/geotecnologias/"
        >
          <svg
            class="h-11"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            data-astro-cid-5plblf6c=""
          >
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              data-astro-cid-5plblf6c=""
            ></path>
          </svg>
          <p class="self-center text-3xl font-semibold grayscale">Linkedin</p>
        </a>
      </div>
    </div>
  </aside>

  <h1 class="mt-24 text-center text-4xl font-bold">Entrevistas</h1>
  <p class="mt-2 text-center text-2xl font-light text-gray-600">
    Lista de entrevistas realizadas com a equipe Crossvirus
  </p>
  <div class="mt-5 flex flex-wrap justify-center gap-5 px-36">
    <CardHome cardData={cardDataTvHorizonte} />
    <CardHome cardData={cardDataRadioAmerica} class="mt-5" />
  </div>

  <h1
    class="mb-4 mt-24 text-center text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl"
  >
    Publicações científicas
  </h1>
  <p class="text-center font-light text-gray-500 sm:text-xl 0">
    Lista de artigos relacionadas a epidemias
  </p>
  <div class="mt-5 flex flex-wrap justify-center px-36">
    <CardHome cardData={cardDataArtigoGeolocalizacao} />
    <div class="w-full lg:w-1/2 pl-5 mt-5 lg:mt-0">
      <div class="h-full w-full rounded-lg border border-gray-200 bg-gray-50 p-6 py-4 pl-5 text-accent shadow-md lg:mt-0">
        <div class="flex justify-between py-6 font-normal">
          <div
            class="inline-flex items-center rounded bg-primary px-2.5 py-0.5 text-xs font-medium text-white"
          >
            {@html icons.camera()}
            <p class="pl-1">{cardDataArtigoRevisao.type}</p>
          </div>
          <p class="text-sm text-gray-500">{cardDataArtigoRevisao.date}</p>
        </div>
        <a href={cardDataArtigoRevisao.link}>
          <h2 class="mt-2 pb-6 text-center text-2xl font-bold">
            {cardDataArtigoRevisao.title}
          </h2>
        </a>
        <p class="mb-5 font-light text-gray-500 0">
          {cardDataArtigoRevisao.text}
        </p>
        <div class="mb-20 w-full px-6">
          {@html cardDataArtigoRevisao.iframe}
        </div>
        <footer class="mt-auto flex justify-between pt-3">
          <div class="flex">
            <img class="mr-2 rounded-full" src="images/teste-perfil.png" alt=""/>
            <p class="self-center font-medium">{cardDataArtigoRevisao.autor}</p>
          </div>
          <div class="flex self-center">
            <a class="mr-2 self-center" href={cardDataArtigoRevisao.link}>
              Saiba mais
            </a>
            {@html icons.arrowRight()}
          </div>
        </footer>
      </div>
    </div>
  </div>

  <h1 class="mt-24 text-center text-4xl font-bold">Notícias</h1>
  <p class="mt-2 text-center text-2xl font-light text-gray-600">
    Lista de notícias relacionadas a epidemias
  </p>
  <div class="mt-5 flex flex-wrap justify-center px-32">
    <div class="w-full lg:w-1/2 rounded-lg border border-gray-200 bg-gray-50 p-6 py-4 text-accent shadow-md lg:mt-0">
      <div class="flex justify-between font-normal">
        <div
          class="inline-flex items-center rounded bg-primary px-2.5 py-0.5 text-xs font-medium text-white"
        >
          {@html icons.camera()}
          <p class="pl-1">{cardDataNoticiaEstadoEmergencia.type}</p>
        </div>
        <p class="text-sm text-gray-500">
          {cardDataNoticiaEstadoEmergencia.date}
        </p>
      </div>
      <a href={cardDataNoticiaEstadoEmergencia.link}>
        <h2 class="mt-2 text-center text-2xl font-bold">
          {cardDataNoticiaEstadoEmergencia.title}
        </h2>
      </a>
      <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
        {cardDataNoticiaEstadoEmergencia.text}
      </p>
      <div class="h-40 w-full px-6">
        {@html cardDataNoticiaEstadoEmergencia.iframe}
      </div>
      <footer class="mt-auto flex justify-between pt-3">
        <div class="flex">
          <img class="mr-2 rounded-full" src="images/teste-perfil.png" alt="" />
          <p class="self-center font-medium">
            {cardDataNoticiaEstadoEmergencia.autor}
          </p>
        </div>
        <div class="flex self-center">
          <a
            class="mr-2 self-center"
            href={cardDataNoticiaEstadoEmergencia.link}
          >
            Saiba mais
          </a>
          {@html icons.arrowRight()}
        </div>
      </footer>
    </div>
    <div class="w-full mt-5 lg:mt-0 lg:w-1/2 pl-5">
      <div
        class="w-full rounded-lg border border-gray-200 bg-gray-50 p-6 py-4 text-accent shadow-md lg:mt-0"
      >
        <div class="flex justify-between font-normal">
          <div
            class="inline-flex items-center rounded bg-primary px-2.5 py-0.5 text-xs font-medium text-white"
          >
            {@html icons.camera()}
            <p class="pl-1">{cardDataNoticiaDengue.type}</p>
          </div>
          <p class="text-sm text-gray-500">{cardDataNoticiaDengue.date}</p>
        </div>
        <a href={cardDataNoticiaDengue.link}>
          <h2 class="mb-5 mt-5 text-center text-2xl font-bold">
            {cardDataNoticiaDengue.title}
          </h2>
        </a>
        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
          {cardDataNoticiaDengue.text}
        </p>
        <div class="h-48 w-full px-6">
          {@html cardDataNoticiaDengue.iframe}
        </div>
        <footer class="mt-9 flex justify-between">
          <div class="flex">
            <img
              class="mr-2 rounded-full"
              src="images/teste-perfil.png"
              alt=""
            />
            <p class="self-center font-medium">{cardDataNoticiaDengue.autor}</p>
          </div>
          <div class="flex self-center">
            <a class="mr-2 self-center" href={cardDataNoticiaDengue.link}>
              Saiba mais
            </a>
            {@html icons.arrowRight()}
          </div>
        </footer>
      </div>
    </div>
  </div>

  <h1 class="mb-5 text-4xl tracking-tight font-extrabold text-gray-900 text-center mt-20 ">
    Feito para prefeituras de todos os tamanhos
  </h1>
  <p class="mb-10 text-center text-lg font-light text-gray-600">
    Escolha o plano que melhor se encaixa com a sua situação
  </p>
  <div class="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
    <div
      class="mx-auto flex max-w-lg flex-col justify-between rounded-lg border border-gray-100 bg-gray-50 p-6 text-center text-gray-900 shadow xl:p-8 0 0 "
    >
      <h3 class="mb-4 text-2xl font-semibold">Pequenas Cidades</h3>
      <p class="font-light text-gray-500 sm:text-lg 0">
        Acesso Limitado, sem funcionalidades premium
      </p>
      <div class="mt-8 flex items-baseline justify-center">
        <span class="mr-2 text-5xl font-extrabold">R$45</span>
      </div>
      <span class="mb-8 text-gray-500">/1.000 habitantes</span>
      <!-- List -->
      <ul role="list" class="mb-8 space-y-4 text-left">
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-green-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Cardapio de funcionalidades</span>
        </li>
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-red-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 6L14 14M14 6L6 14"
              stroke="currentColor"
              stroke-width="2"
            ></path>
          </svg>
          <span>Envio de Emails</span>
        </li>
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-red-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 6L14 14M14 6L6 14"
              stroke="currentColor"
              stroke-width="2"
            ></path>
          </svg>
          <span>Relatorios</span>
        </li>
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-red-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 6L14 14M14 6L6 14"
              stroke="currentColor"
              stroke-width="2"
            ></path>
          </svg>
          <span>Monitoramento</span>
        </li>
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-red-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 6L14 14M14 6L6 14"
              stroke="currentColor"
              stroke-width="2"
            ></path>
          </svg>
          <span>Controle de acessos</span>
        </li>
      </ul>
      <a
        href="https://wa.me/5531998085422?text=Me%20passe%20mais%20informações%20sobre%20o%20Crossvirus"
        class="focus:ring-primary-200 y-900 rounded-lg bg-secondary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary focus:ring-4 "
      >
        Entre em contato
      </a>
    </div>
    <!-- Pricing Card -->
    <div
      class="mx-auto flex max-w-lg flex-col justify-between rounded-lg border border-gray-100 bg-gray-50 p-6 text-center text-gray-900 shadow xl:p-8 0 0 "
    >
      <h3 class="mb-4 text-2xl font-semibold">Cidades Médias</h3>
      <p class="font-light text-gray-500 sm:text-lg 0">
        Acesso as funcionalidades basicas do cardapio e suporte basico.
      </p>
      <div class="mt-8 flex items-baseline justify-center">
        <span class="mr-2 text-5xl font-extrabold">R$4.500</span>
        <!-- <span class="text-gray-500 0">/mes</span> -->
      </div>
      <span class="mb-8 text-gray-500">/100.000 habitantes</span>
      <!-- List -->
      <ul role="list" class="mb-8 space-y-4 text-left">
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-green-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Cardapio de funcionalidades</span>
        </li>
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-green-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Envio de Emails</span>
        </li>
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-red-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 6L14 14M14 6L6 14"
              stroke="currentColor"
              stroke-width="2"
            ></path>
          </svg>
          <span>Relatorios</span>
        </li>
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-red-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 6L14 14M14 6L6 14"
              stroke="currentColor"
              stroke-width="2"
            ></path>
          </svg>
          <span>Monitoramento</span>
        </li>
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-red-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 6L14 14M14 6L6 14"
              stroke="currentColor"
              stroke-width="2"
            ></path>
          </svg>
          <span>Controle de acessos</span>
        </li>
      </ul>
      <a
        href="https://wa.me/5531998085422?text=Me%20passe%20mais%20informações%20sobre%20o%20Crossvirus"
        class="focus:ring-primary-200 y-900 rounded-lg bg-secondary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary focus:ring-4 "
      >
        Entre em contato
      </a>
    </div>
    <!-- Pricing Card -->
    <div
      class="mx-auto flex max-w-lg flex-col justify-between rounded-lg border border-gray-100 bg-gray-50 p-6 text-center text-gray-900 shadow xl:p-8 0 0 "
    >
      <h3 class="mb-4 text-2xl font-semibold">Metropoles</h3>
      <p class="font-light text-gray-500 sm:text-lg 0">
        Acesso as funcionalidades basicas do cardapio e suporte basico.
      </p>
      <div class="my-8 flex items-baseline justify-center">
        <!-- <span class="mr-2 text-5xl font-extrabold">R$45.000</span>
              <span class="text-gray-500 0">/mes</span> -->
        <span class="text-3xl font-bold">Entre em contato</span>
      </div>
      <ul role="list" class="mb-8 space-y-4 text-left">
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-green-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Cardapio de funcionalidades</span>
        </li>
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-green-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Envio de Emails</span>
        </li>
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-green-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Relatorios</span>
        </li>
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-green-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Monitoramento</span>
        </li>
        <li class="flex items-center space-x-3">
          <!-- Icon -->
          <svg
            class="h-5 w-5 flex-shrink-0 text-green-500 0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Controle de acessos</span>
        </li>
      </ul>
      <a
        href="https://wa.me/5531998085422?text=Me%20passe%20mais%20informações%20sobre%20o%20Crossvirus"
        class="focus:ring-primary-200 y-900 rounded-lg bg-secondary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary focus:ring-4 "
      >
        Entre em contato
      </a>
    </div>
  </div>

  <section class="bg-white 900"> 
    <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4"> 
      <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900  md:text-4xl">
      Patrocinadores
      </h2> 
    <div class="grid grid-cols-2 gap-8 text-gray-500 400"> 
      <a href="https://pucminas.br" class="flex justify-end items-center"> 
        <img src="https://www.pucminas.br/ics/PublishingImages/site%20logo.jpg" alt="" width="100" height="100"> 
      </a> 
      <a href="https://www.pucminas.br/puctec/Paginas/default.aspx" class="flex justify-start items-center"> 
        <img src="images/puctec.png" alt="" class="w-auto" style="height: 100px;"> 
      </a> 
    </div> 
  </section>

  <footer>
    <h3 class="mt-20 text-center text-2xl font-semibold">Crossvirus</h3>
    <p class="mt-2 text-center text-lg font-normal text-gray-600">
      Software desenvolvido para controle e contenção de doenças
      epidemiológicas.
    </p>
    <nav class="mt-3 space-x-8 text-center">
      <a href="#">Home</a>
      <a href="#">Mapas</a>
      <a href="#">Entrevistas</a>
      <a href="#">Artigos</a>
      <a href="#">Preço</a>
    </nav>
    <p class="my-4 text-center text-lg font-normal text-gray-600">
      &copy; 2022-2024 Crossvirus-IA Ltda ME. ALL Rights Reserved.
    </p>
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
  .gradient-title {
    background: linear-gradient(
      90deg,
      #ff5c00,
      #ffb939
    ); /* Gradiente desejado */
    background-size: 300% 300%;
    animation: gradient-animation 5s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
