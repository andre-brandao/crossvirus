<script lang="ts">
  import { icons } from '$lib/utils'
  import * as Card from "$components/ui/card/index.js";
  import * as Input from "$components/ui/input/index";
  import * as Label  from '$lib/client/components/ui/label/index';
  import TableFromCsv from './TableFromCsv.svelte';
  import Papa, { type ParseResult } from 'papaparse';

  import { trpc } from '$lib/utils/trpc/client';
  import { page } from '$app/stores';
  import { toast } from 'svelte-sonner';
  import { onMount } from 'svelte'
  
  let btnGeocodificar = $state(false);
  // TODO: Estudar o que é um primitivo, estudar o que é signal svelte
  // TODO: Proxy : Estudar conceito computação
  // Proxy = intermediario entre o que vc quer fazer e o resultado
  let csvData : ParseResult<unknown> | null = $state(null);
  let atributeNames : string[] = $state([""]);
  let isLoading = $state(false);
  let selectedTypeCodi = $state("Selecione um tipo");  
  let colunaTipoGeo : string[] = $state([""]); 
  
  function convertCSV(e: { target: { files: any[] } }){
    isLoading = true;
    const file = e.target.files[0];
    const json = Papa.parse(file, {
      header : true,
      complete : (results) => {
        csvData = results;
        if(csvData.data[0]){
          atributeNames = Object.keys(csvData.data[0]);
        }
        isLoading = false;
      }
    });
  }

  async function submit(){
    if(!csvData?.data)
      return toast.error("Csv inválido")
    isLoading = true;
    try {
      const points = csvData?.data;
      // TODO: Estudar proxy
      console.log($state.snapshot(points));
      console.log(points);
      const resp = await trpc($page).dataset.create.byAddress.mutate({
        // TODO: um dataset deve ser enviado com mais informações, 
        // vai ser implementado mais para frente
        // dataset{}
        dataset : {
          fields : atributeNames,

        },
        points : csvData?.data,
      })
    } catch (error : any) {
      toast.error(error.message)
    }

    isLoading = false;
  }
  
  onMount(() => {
    colunaTipoGeo.shift();
  })

  $inspect(colunaTipoGeo);
  //export let data: PageData;
</script>
  
  <div class="h-[83vh] mx-8">
    <Card.Root class="py-5">
      <Card.Title class="px-3">
        <div class="flex justify-between">
          <h1>Criar DataSet</h1>
          <h1>2024 Dengue - MG - Contagem</h1>
        </div>
      </Card.Title>
      <Card.Content >
        <div class="w-full flex gap-3">
          <div class="w-8/12">
            <div class="flex justify-start items-center">
              <label class="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="csv">
                Faça upload do arquivo .csv com o dataset da cidade
              </label>
              <div class="tooltip mb-0" data-tip="Atenção: Recomendamos formatar o arquivo CSV sem caracteres
            especiais e sem espaços nos nomes das colunas, para melhorar a
            compatibilidade com o sistema">
                {@html icons.help({width : 20})}
              </div>
            </div>
            <Input.Root 
            type="file"
            name="csv"
            id="csv"
            class="file-input h-auto"
            accept=".csv"
            placeholder="Choose CSV file"
            onchange={convertCSV}
            >
          </Input.Root>
        </div>
        
        <div class="w-2/12">
          <Label.Root>Ano:</Label.Root>
          <select class="select select-bordered w-full max-w-xs" name="anolist" id="ano">
            <option disabled selected>Selecione o ano</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        
        <div class="w-2/12">
          <Label.Root for="disease">Escolha uma doença</Label.Root>
          <select class="select select-bordered w-full max-w-xs" id="disease" name="diseaselist">
            <option disabled selected>Selecione a doença</option>
            <option value="dengue">Dengue</option>
            <option value="chikungunya">Chikungunya</option>
            <option value="coronaVirus">Corona Virus</option>
            <option value="diabetes">Diabetes</option>
          </select>
        </div>
      </div>

      {#if isLoading}
        <div class="flex justify-center h-32">
          <img src="/loadingSpinner.svg" alt="">
        </div>
      {/if} 


      {#if csvData?.data}
        <div class="w-full flex gap-3 mt-2">
          <div class="w-10/12 border rounded-md px-1 py-3 bg-white">
            <p class:hidden={csvData?.data}>Carregue um arquivo para começar as configurações de geocodificação</p>
            <div class="flex">
              <div class="flex w-auto">
                <label class="self-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mr-2" for="tipoGeo">
                  Tipo de geocodificação:
                </label>
                <select 
                  bind:value={selectedTypeCodi} 
                  class="select select-bordered h-1 self-center" 
                  id="tipoGeo" 
                  name="tipoGeo"
                  onclick={() => {colunaTipoGeo.length = 0}}>
                  <option disabled selected>Selecione um tipo</option>
                  <option value="latLong">Latitude e longitude</option>
                  <option value="endereco">Endereço</option>
                </select>
              </div>
              <div class="flex w-auto ml-2">
                {#if selectedTypeCodi == "latLong"}
                  <h1>Selecione o campo que representa a latitude e longitude: </h1>
                  <select name="campoLatLong" id="campoLatLong" class="select select-bordered">
                    <option disabled selected>Selecione a coluna</option>
                    {#each atributeNames as c}
                      <option value="{c}">{c}</option>
                    {/each}
                  </select>
                {:else if selectedTypeCodi == "endereco" }
                  <h1 class="">Selecione na tabela as colunas que correspondem ao endereço:
                    <br>
                    {#each colunaTipoGeo as c}
                      {c + ", "}
                    {/each}
                  </h1>
                {/if}
              </div>
            </div>
          </div>
          <div class="w-2/12">
            <button class="btn w-full h-full btn-secondary" onclick={submit} disabled={csvData?.data == null}>Começar geocodificação</button>
          </div>
        </div>

        <TableFromCsv 
          addAtributte={(atr) => {colunaTipoGeo.push(atr)}} 
          removeAtributte={(atr) => {colunaTipoGeo = colunaTipoGeo.filter((a) => a !== atr)}}
          csvData={csvData} 
          atributeNames={atributeNames}
          selectedTypeCodi = {selectedTypeCodi}
          />
      {/if}
      
    </Card.Content>
  </Card.Root>
</div>
