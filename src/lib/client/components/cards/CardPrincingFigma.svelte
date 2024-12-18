<script lang="ts">
  import { icons } from "$lib/utils"

  interface Props{
    textCard: {
      title: string,
      desc: string,
      price: string,
      quantHabitantes: string,
      autor: boolean[]
    }
  }

  let itensDisponiveis = [
    "Cardapio de funcionalidades",
    "Envio de Emails",
    "Relatorios",
    "Monitoramento",
    "Controle de acessos"
  ]

  let { textCard } : Props = $props();
</script>

<div class="card rounded-2xl text-accent border-card px-6 py-4">
  <div class="text-center mb-8">
    <h2 class="font-extrabold mt-3 text-2xl">{textCard.title}</h2>
    <p class="mt-1 sub-title-princing">{textCard.desc}</p>
    <p class="mt-8 text-4xl font-bold">Fale conosco</p>
    <!-- <p class="-mt-1 text-lg font-light text-gray-800">{textCard.price}</p> -->
  </div>
  <div class="">
    {#each itensDisponiveis as i, index}
      <div class="flex mt-2">
        {#if textCard.autor[index]}
          <span class="text-green-500">{@html icons.x()}</span>
          {:else}
             <span class="text-red-500">{@html icons.x()}</span>
        {/if}
        <span class="ml-2">{i}</span>
      </div>
    {/each}
  </div>
  <button class="btn w-full text-neutral mt-5" style="background-color: #485573;">
    Entre em contato
  </button>
</div>

<style>
  .sub-title-princing{
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0%;
    text-align: center;
    color:#485573;
  }
  .border-card{
    border: 2px solid rgb(72, 85, 115, 0.40);
  }
  .colorRed{
    color: red;
  }
  .colorGreen{
    color: green;
  }
</style>
