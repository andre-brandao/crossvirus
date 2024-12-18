<script lang="ts">
    import type { PageData } from './$types';
</script>

<div class="bgImage text-center py-24">
  <p class="text-escolher -mb-3">Porque nos escolher?</p>
  <h1 class="text-vantagens mb-8">Vantagens</h1>
  <p class="text-desc mb-8">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, vero error ducimus possimus fugiat quaerat?
  </p>
  <div class="flex justify-center gap-10">
    <section>
      <h3 class="text-center text-title-icon mb-2">
        MAPAS <br>
        INTERATIVOS
      </h3>
      <div class="bg-red p-3 rounded-md">
        <img src="images/city-solid.png" alt="">
      </div>
    </section>

    <section>
      <h3 class="text-center text-title-icon mb-2">
        VISUALIZAÇÃO <br>
        DE DADOS
      </h3>
      <div class="bg-yellow pl-4 py-3 rounded-md">
        <img src="images/database-solid.png" alt="">
      </div>
    </section>

    <section>
      <h3 class="text-center text-title-icon mb-2">
        INFORMAÇÕES <br>
        VALIDADAS
      </h3>
      <div class="bg-green p-3 rounded-md">
        <img src="images/circle-info-solid.png" alt="">
      </div>
    </section>
  </div>
</div>

<style>
  .bgImage{
    background-image: url("images/backgroundAdvantages.png");
    background-size: cover; /* ajusta o tamanho da imagem para cobrir toda a página */
    background-position: center; /* centraliza a imagem */
  }
  .bg-red{
    background-color: #981010;
  }
  .bg-yellow{
    background-color: #FFB939;
  }
  .bg-green{
    background-color: #4B9767;
  }
  .text-escolher{
    color: #981010;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0%;
    text-transform: uppercase;
  }
  .text-vantagens{
    font-size: 36px;
    font-weight: 900;
    letter-spacing: 0%;
    text-align: center;
  }
  .text-desc{
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0%;
    text-align: center;
    color: #485573;
  }
  .text-title-icon{
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
    color: #485573;
  }
</style>