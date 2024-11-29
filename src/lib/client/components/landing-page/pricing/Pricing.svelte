<script>
  import CardPlano from "../../cards/CardPlano.svelte"
  
  let pequenasCidades = {
    title: 'Pequenas Cidades',
    desc: 'Acesso Limitado, sem funcionalidades premium',
    price: 'R$45,00',
    quantHabitantes: '/1.000 habitantes',
    autor: [true, false, false, false, false]
  }

  let mediasCidades = {
    title: 'Cidades Médias',
    desc: 'Acesso as funcionalidades premium e suporte basico.',
    price: 'R$4.500,00',
    quantHabitantes: '/100.000 habitantes',
    autor: [true, true, false, false, false]
  }

  let metropoles = {
    title: 'Metropoles',
    desc: 'Acesso as funcionalidades premium suporte de alta prioridade.',
    autor: [true, true, true, true, true]
  }
</script>

<h1 class="font-bold text-center text-4xl mt-24">Feito para prefeituras de todos os tamanhos</h1>
<p class="text-center mt-2 text-lg font-light text-gray-600">Escolha o plano que melhor se encaixa com a sua situação</p>
<div class="max-w-7xl mx-auto">
  <!-- Em telas pequenas, os cards são exibidos em uma única coluna (sm:grid-cols-1) ... -->
  <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <CardPlano textCard={pequenasCidades}/>
    <CardPlano textCard={mediasCidades}/>
    <CardPlano textCard={metropoles}/>
  </div>
</div>