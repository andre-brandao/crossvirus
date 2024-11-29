<script lang="ts">
  import type { PageData } from './$types';
  import { Button } from "$components/ui/button/index.js";
  import * as Card from "$components/ui/card/index.js";
  import { icons } from '$lib/utils'
  import Graphics from './graphics.svelte'
  
  let { data }: { data: PageData } = $props();
  
  let testeCard = ["", "", ""];
</script>

<div class="w-full px-10 pt-3 bg-orange-dashboard">
  <Card.Root class="">
    <Card.Header>
      <Card.Title>Dashboard</Card.Title>
      <Card.Description>Deploy your new project in one-click.</Card.Description>
    </Card.Header>
    <Card.Content>
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card.Root >
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Total de casos notificados</Card.Title>
            {@html icons.plus()}
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">95</div>
            <p class="text-muted-foreground text-xs">+20.1% desde o último mês</p>
          </Card.Content>
        </Card.Root>
        <Card.Root >
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Doença com maior número de casos</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold pb-1.5">78</div>
            <p class="text-muted-foreground text-xs">+5 casos desde o último mês</p>
          </Card.Content>
        </Card.Root>
        <Card.Root >
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">População da cidade</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">≈355.059</div>
          </Card.Content>
        </Card.Root>
        <Card.Root >
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Data de criação</Card.Title>
            {@html icons.calendar()}
          </Card.Header>
          <Card.Content>
            <div class="text-2xl font-bold">14/11/2024</div>
          </Card.Content>
        </Card.Root>
      </div>
      <div class="w-full flex gap-5 mt-2">
        <Card.Root class="w-7/12 px-5 py-7 h-full">
          <Graphics/>
        </Card.Root>
        <div class="w-5/12">
          <Card.Root class="p-5">
            <h1 class="text-2xl font-semibold leading-none tracking-tight">Acessar Mapas</h1>
            <h2 class="text-lg text-gray-400 leading-none tracking-tight mt-0.5 mb-3">Você tem um total de 2 mapas</h2>
              {#each testeCard as item}
                <div class="flex justify-between mb-3">
                  <div class="space-y-1">
                    <p class="text-sm font-medium leading-none">Contagem</p>
                    <p class="text-muted-foreground text-sm">Minas Gerais</p>
                  </div>
                  <div>
                    <button class="btn btn-secondary">Acessar</button>
                  </div>
                </div>
              {/each}
              {#if testeCard.length == 0}
                <p class="mb-2">
                  Parece que seu municipio ainda não tem um mapa. Entre em contato com a prefeitura ou com a equipe crossvirus para criarmos um mapa com os dados de interesse público
                </p>
              {/if}
            <footer>
              <a href="/map/5">
                <button class="btn btn-secondary w-full">Acrescentar</button>
              </a>
            </footer>
          </Card.Root>
        </div>
      </div>
    </Card.Content>
  </Card.Root>
</div>

<style>
  .bg-card-orange{
    background-color: rgb(255,165,0, 0.7);
  }

  .bg-card-red{
    background: rgb(192,11,0,);
  }
  
  .bg-orange-dashboard{
    background: rgb(192,11,0);
    background: linear-gradient(180deg, rgba(192,11,0,1) 0%, rgba(255,255,255,1) 100%);
    height: 40%;
  }
</style>