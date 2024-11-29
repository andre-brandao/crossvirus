<script lang="ts">
  import type { PageData } from './$types';
  import { icons } from '$lib/utils'
  import MapWi from '$lib/client/components/map/CenterPinMap.svelte';
  import { onMount } from 'svelte'
  import { trpc } from '$trpc/client';
  import { page } from '$app/stores'
  
  //https://github.com/sveltejs/kit/issues/11139
  const { data } : { data: PageData } =  $props()
  //export let data: PageData;
  
  let dataset = $state(data.datasets[0]);
  
  let mount = $state(false);
  let confirmModal : HTMLDialogElement;
  
  function updateDataSet(){
    console.log(dataset);
    const resp = trpc($page).dataset.update.mutate({
      id : dataset.id, 
      data: {
        name: dataset.name,
        center: {x: dataset.center.x, y: dataset.center.y},
        zoom : dataset.zoom,
        public : dataset.public
      }
    });
    editionMode = false;
  }

  let editionMode = $state(false);

  onMount(() => {mount = true})
</script>

<div class="container mx-auto px-5">
  <h1 class="text-2xl font-semibold leading-7 sm:truncate sm:tracking-tight">
    Alterar informações dataset
  </h1>
  <div class="card bg-base-100 shadow-xl w-full px-5 py-6">
    <div class="mb-2">
      <div class="flex justify-between">
        <div>
          <h1 class:hidden={editionMode} class="text-xl font-bold leading-7 sm:truncate sm:tracking-tight">{dataset.name}</h1>
          <input class:hidden={!editionMode} class="w-96 text-xl font-bold leading-7 sm:truncate sm:tracking-tight input input-bordered" type="text" name="datasetName" id="datasetName" value="{dataset.name}">
        </div>
        <p class="text-lg font-semibold leading-7 sm:truncate sm:tracking-tight">Id da cidade: {dataset.city_id}</p>
      </div>
      <p class="text-gray-700 text-sm">Criado em: {dataset.created_at}</p>
    </div>
    <hr>
    <h3 class="text-center text-base font-semibold">Configurações de inicialização do mapa</h3>
    <div class="my-2 block md:flex">
      <div class="w-full md:w-1/2">
        <div>
          <label class="font-semibold" for="public">Publico</label>
          <select class="input input-bordered h-7" name="public" id="public" disabled={!editionMode}>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>
        <div class="flex ">
          <div>
            <h2 class="font-semibold">Longitude</h2>
            <p>{dataset.center.x}</p>
          </div>
          <div class="ms-20">
            <h2 class="font-semibold">Latitude</h2>
            <p>{dataset.center.y}</p>
          </div>
        </div>
        <div>
          <h2 class="font-semibold">Zoom</h2>
          <p>{dataset.zoom}</p>
        </div>
      </div>
      <div class="w-full md:w-1/2 h-40 flex justify-center">
        <!-- Faz com que o componente começa a ser carregado quando a tela do usuario estiver sendo carregada -->
        {#if mount}
        <MapWi bind:centerY={dataset.center.y} bind:zoom={dataset.zoom} bind:centerX={dataset.center.x} bind:editionMode/>
        {/if}
      </div>
    </div>
    <div class="w-full flex justify-end mb-2">
      <button type="button" class:hidden={editionMode} onclick="{() => editionMode = true}">
        {@html icons.edit()}
      </button>
      <div class:hidden={!editionMode}>
        <button type="submit" class="btn btn-primary" onclick="{() => confirmModal.showModal()}">Confirmar</button>
        <button type="button" class="btn btn-secondary" onclick="{() => editionMode = false}">Cancelar</button>
      </div>
    </div>
    <hr>
    <div class="my-2">
      <p class="font-semibold">Doença: <span class="font-medium">{dataset.disease}</span></p>
      <p class="font-semibold">Tipo: <span class="font-medium">{dataset.type}</span></p>
      <p class="font-semibold">Meta: <span class="font-medium">{JSON.stringify(dataset.meta, null)}</span></p>
      <p class="font-semibold">Campos: <span class="font-medium">{dataset.fields}</span></p>
    </div>
  </div>
</div>

<dialog bind:this={confirmModal} class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="text-lg font-bold">Confirmar alterações?</h3>
    <p class="py-4">O seu mapa sempre vai abrir com a lat, long e zoom definidos!</p>
    <div class="flex justify-end">
      <button class="btn btn-success me-3" onclick="{() => {updateDataSet(); confirmModal.close()} }">
        Confirmar
      </button>
      <button class="btn btn-secondary" onclick="{() => {confirmModal.close()} }">
        Cancelar
      </button>
    </div>
  </div>
</dialog>

<style>
  
</style>