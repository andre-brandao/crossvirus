<script lang="ts">
  import SEO, { getSEOProps } from '$components/SEO/index.svelte'
  
  import type { PageData } from './$types'
  import { getUserContext } from '$lib/client/stores/user'
  
  import { trpc } from '$lib/utils/trpc/client'
  import { page } from '$app/stores'
  
  import { icons } from '$lib/utils';
  
  const { data } : { data: PageData } =  $props()
  
  function formatarData(d : Date){
    const formattedDate = new Date(d).toLocaleDateString('pt-BR');
    return formattedDate;
  }
  
  let editionMode = $state(false);
  let confirmModal : HTMLDialogElement;
  
  const user = $state(getUserContext());
  const sessions = data.user_sessions;

  function updatePerfil(){
    console.log($page);
    
  }

</script>

<SEO
{...getSEOProps({
  title: 'My Profile',
  description: 'Edit your profile',
})}
/>

<div class="mx-auto w-full max-w-2xl rounded-lg border border-primary glass bg-gradient shadow-sm">
  <div class="flex flex-col space-y-1.5 p-4">
    <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
      Edit profile
    </h3>
    <div class="space-y-6 px-3 py-5 gap-5 flex flex-col sm:flex-row">
      <div class="w-full sm:w-1/2  ">
        <div class="flex flex-col items-center gap-4">
          <span
          class="relative flex h-20 w-20 shrink-0 overflow-hidden rounded-full"
          >
          <img alt="Foto de perfil"
          class="aspect-square h-full w-full"
          src="https://generated.vusercontent.net/placeholder-user.jpg"
          />
          </span>
        </div>
        <div class="mb-2">
          <label class="text-lg font-semibold" for="name">Nome</label>
          <input class="input input-bordered w-full" oninput={() => {editionMode = true}} type="text" value="{$user?.username}" name="name" id="name">
        </div>
        <div class="mb-2">
          <label class="text-lg font-semibold" for="email">Email</label>
          <input class="input input-bordered w-full" oninput={() => {editionMode = true}} type="text" value="{$user?.email}" name="email" id="email">
        </div>
        <div class="mb-2">
          <label class="text-lg font-semibold" for="emailVerified">Email verificado?</label>
          <div class="flex">
            <input class="input input-bordered w-full" disabled type="text" value="{$user?.emailVerified}" name="emailVerified" id="emailVerified">
            <button class="btn btn-success text-white px-2" class:hidden={$user?.emailVerified == true}>Verificar</button>
          </div>
        </div>
        <div class="w-full flex justify-end mt-2">
          <button type="button" class:hidden={editionMode} onclick="{() => editionMode = true}">
            {@html icons.edit()}
          </button>
          <div class:hidden={!editionMode}>
            <button type="submit" class="btn btn-primary" onclick="{() => confirmModal.showModal()}">Confirmar</button>
            <button type="button" class="btn btn-secondary" onclick="{() => editionMode = false}">Cancelar</button>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full sm:w-1/2 ">
        <h1 class="text-lg font-semibold">Sessions:</h1>
        <p class="text-gray-500">Total de sessões criadas: {sessions.length}</p>
        <div class="gap-3 flex flex-col mt-4">
          {#each sessions as s, index}
            <div class="collapse bg-neutral">
              <input type="radio" name="{"my-accordion-1"}" />
              <div class="collapse-title text-xl font-medium">Expira {formatarData(s.expiresAt)}</div>
              <div class="collapse-content">
                <p>
                  Expiration: {new Date(s.expiresAt)}
                </p>
              </div>
            </div>
          {/each}  
        </div>
      </div>
    </div>
  </div>
</div>

<dialog bind:this={confirmModal} class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="text-lg font-bold">Confirmar alterações no perfil?</h3>
    <p class="py-4">As alterações podem ser editadas novamente a qualquer momento.</p>
    <div class="flex justify-end">
      <button class="btn btn-success me-3" onclick="{() => {updatePerfil(); confirmModal.close();}}">
        Confirmar
      </button>
      <button class="btn btn-secondary" onclick="{() => {confirmModal.close()} }">
        Cancelar
      </button>
    </div>
  </div>
</dialog>

<style>
  .bg-gradient{
    border-radius: 8px;
    background: linear-gradient(white, white) padding-box, 
    linear-gradient(45deg, #FFA500, #C00B00) border-box;
    border: 2px solid transparent;
  }
  @keyframes gradient {
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
</style>