<script lang="ts">
  import type { PageData } from './$types';
  
  interface CardProps{
    subTitle : string,
    title : string,
    text : string,
    haveBotton : boolean
  }

  let { subTitle, title, text, haveBotton }: CardProps = $props();

</script>

<div class="flex flex-col md:full md:flex-row md:space-x-8 px-5 lg:px-36 mt-5">
  <div class="text-center my-20 ">
    <p class="text-fazemos -mb-3">{subTitle}</p>
    <h1 class="text-about mb-5">{title}</h1>
    <p class="text-sobre">
      {text}
    </p>
    {#if haveBotton}
       <a href="#" class="btn btn-color mt-8">Saiba mais</a>
    {/if}
  </div>
</div>

<style>
  .text-sobre{
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0%;
    text-align: center;
  }
  .text-about{
    font-size: 36px;
    font-weight: 900;
    letter-spacing: 0%;
  }
  .text-fazemos{
    color: #FFB939;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0%;
    text-transform: uppercase;
  }
  .btn-color{
    background-color: #ffa500;
  }
</style>