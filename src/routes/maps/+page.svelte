<script lang="ts">
</script>

<div class="mx-auto max-w-screen-xl px-4 lg:px-6">
  <div class="w-full pl-5 mb-8 text-center">
    <h1 class="text-5xl font-bold gradient-title">Nossos mapas</h1>
    <h2 class="text-xl font-semibold">Alguns de nossos mapas</h2>
  </div>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    <a
      href="https://www.crossvirus.com.br/original_maps/cluster"
      class="bg-300% animate-gradient grid h-72 w-96 grid-cols-1 items-end gap-6 rounded-xl bg-gray-100 from-secondary via-primary to-secondary p-3 font-bold shadow-sm hover:bg-gray-500 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:shadow-md max-md:items-center"
    >
      <h1 class="text-xl font-semibold">
        Cluster Dengue Joao Monlevade (2024)
      </h1>
      <div>
        <img src="images/cluster.png" alt="" />
      </div>
    </a>
    <a
      href="https://www.crossvirus.com.br/test"
      class="bg-300% animate-gradient grid h-72 w-96 grid-cols-1 items-end gap-6 rounded-xl bg-gray-100 from-secondary via-primary to-secondary p-3 font-bold shadow-sm hover:bg-gray-500 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:shadow-md max-md:items-center"
    >
      <h1 class="text-lg font-semibold">
        Dashboard João Monlevade Dengue (2024)
      </h1>
      <div>
        <img src="images/dashboard.png" alt="" />
      </div>
    </a>
    <a
      href="https://www.crossvirus.com.br/svelte_maps/joao_monlevade/map_covid_2020_2021"
      class="bg-300% animate-gradient grid h-72 w-96 grid-cols-1 items-end gap-6 rounded-xl bg-gray-100 from-secondary via-primary to-secondary p-3 font-bold shadow-sm hover:bg-gray-500 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:shadow-md max-md:items-center"
    >
      <h1 class="text-xl font-semibold">João Monlevade COVID-19 (2020-2021)</h1>
      <div>
        <img src="images/map_covid_2020_2021.png" alt="" />
      </div>
    </a>
    <a
      href="https://www.crossvirus.com.br/svelte_maps/joao_monlevade/scene_covid_2021"
      class="bg-300% animate-gradient grid h-72 w-96 grid-cols-1 items-end gap-6 rounded-xl bg-gray-100 from-secondary via-primary to-secondary p-3 font-bold shadow-sm hover:bg-gray-500 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:shadow-md max-md:items-center"
    >
      <h1 class="text-xl font-semibold">João Monlevade COVID-19 (2021)</h1>
      <div>
        <img src="images/scene_covid_2021.png" alt="" />
      </div>
    </a>
    <a
      href="https://www.crossvirus.com.br/svelte_maps/joao_monlevade/map_onibus"
      class="bg-300% animate-gradient grid h-72 w-96 grid-cols-1 items-end gap-6 rounded-xl bg-gray-100 from-secondary via-primary to-secondary p-3 font-bold shadow-sm hover:bg-gray-500 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:shadow-md max-md:items-center"
    >
      <h1 class="text-xl font-semibold">João Monlevade - Linhas de Onibus</h1>
      <div>
        <img src="images/map_onibus.png" alt="" />
      </div>
    </a>
    <a
      href="https://www.crossvirus.com.br/svelte_maps/divinopolis/scene_dengue_2016"
      class="bg-300% animate-gradient grid h-72 w-96 grid-cols-1 items-end gap-6 rounded-xl bg-gray-100 from-secondary via-primary to-secondary p-3 font-bold shadow-sm hover:bg-gray-500 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:shadow-md max-md:items-center"
    >
      <h1 class="text-xl font-semibold">Divinopolis Dengue (2016)</h1>
      <div>
        <img src="images/scene_dengue_2016.png" alt="" />
      </div>
    </a>
  </div>
</div>

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
  .sub-title-orange{
    color: #ff5c00;
  }
</style>
