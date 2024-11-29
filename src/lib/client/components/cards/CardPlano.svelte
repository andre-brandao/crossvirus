<script lang="ts">
  import { icons } from "$lib/utils"

  let { textCard } = $props() 

  let mediasCidadeasdfs = {
    title: 'Cidades Médias',
    desc: 'Acesso as funcionalidades premium e suporte basico.',
    price: '4.500',
    quantHabitantes: '100.000',
    autor: [true, true, false, false, false]
  }

  let metropoledafds = {
    title: 'Metropoles',
    desc: 'Acesso as funcionalidades premium e alta prioridade.',
    autor: [true, true, true, true, true]
  }
</script>


<div class=" px-4 mt-5">
  <div class="card bg-neutral rounded-2xl text-accent px-6 py-4">
    <div class="text-center">
      <h2 class="font-semibold mt-3 text-2xl">{textCard.title ? textCard.title : "Metropoles" }</h2>
      <p class="mt-3 text-xl font-light text-gray-600">{textCard.desc}</p>
      <p class="mt-8 text-4xl font-bold">{textCard.price ? textCard.price : "Entre em contato"}</p>
      <p class="-mt-1 text-lg font-light text-gray-800">{textCard.quantHabitantes ? textCard.quantHabitantes : ""}</p>
    </div>
    <div>
      <div class="flex mt-8">
        <span class={textCard.autor[0] ? "text-green-600 mr-4" : "text-red-500 mr-4"}>{@html icons.check()}</span> Cardápio de funcionalidades
      </div>
      <div class="flex mt-2">
        <span class={textCard.autor[0] ? "text-green-600 mr-4" : "text-red-500 mr-4"}>{@html icons.check()}</span> Cardápio de funcionalidades
        <span class={textCard.autor[1] ? "text-green-600 mr-4" : "text-red-500 mr-4"}>{@html icons.x()}</span> Envio de Emails
      </div>
      <div class="flex mt-2">
        <span class={textCard.autor[2] ? "text-green-600 mr-4" : "text-red-500 mr-4"}>{@html icons.x()}</span> Relatorios
      </div>
      <div class="flex mt-2">
        <span class={textCard.autor[3] ? "text-green-600 mr-4" : "text-red-500 mr-4"}>{@html icons.x()}</span> Monitoramento
      </div>
      <div class="flex mt-2">
        <span class={textCard.autor[4] ? "text-green-600 mr-4" : "text-red-500 mr-4"}>{@html icons.x()}</span> Controle de acessos
      </div>
    </div>
    <button class="btn w-full bg-secondary text-neutral mt-5">
      Entre em contato
    </button>
  </div>
</div>