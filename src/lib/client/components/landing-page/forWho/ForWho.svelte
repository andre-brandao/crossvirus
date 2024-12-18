<script lang="ts">
  import type { PageData } from './$types';
</script>

<div class="flex flex-col md:full md:flex-row md:space-x-8 px-10 lg:px-36 mt-5">
  <div class="block sm:flex mb-20">
    <div class="w-full sm:w-4/12">
      <p class="text-publico-alvo">Público-alvo</p>
      <h1 class="text-alvo">Para quem é a <br>Crossvírus IA ?</h1>
    </div>
    <div class="w-full sm:w-8/12">
      <div>
        <div class="flex">
          <div class="bg-gray-100 px-1 py-2 rounded-sm">
            <img src="images/Cidade.svg" alt="">
          </div>
          <h1 class="text-sub-alvo ml-2 self-center">Prefeituras</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
        </p>
      </div>
      <div>
        <div class="flex">
          <div class="bg-gray-100 px-1 py-2 rounded-sm">
            <img src="images/Hospital.svg" alt="">
          </div>
          <h1 class="text-sub-alvo ml-2 self-center">Planos de saúde</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam inventore aperiam enim rerum accusantium! Totam sint dolore et nesciunt accusantium.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .text-alvo{
    font-size: 36px;
    font-weight: 900;
    letter-spacing: 0%;
  }
  .text-publico-alvo{
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0%;
    text-transform: uppercase;
  } 
  .text-sub-alvo{
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 0%;
    text-transform: uppercase;
  }
</style>