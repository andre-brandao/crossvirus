<script lang="ts">
  import '../app.css'
  // INLANG
  import { ParaglideJS } from '@inlang/paraglide-sveltekit'
  import { i18n } from '$lib/i18n/i18n'
  // DAISY THEMES
  import { onMount } from 'svelte'
  // TOASTER
  import { Toaster, toast } from 'svelte-sonner'
  import NavBar from '$components/navbar/NavBar.svelte'
  // STORE
  import { createUserContext } from '$lib/client/stores/user'
  // COMPONENTS
  import { ModalContainer } from '$components/modal'
  import Transition from './Transition.svelte'
  import type { LayoutData } from './$types'

  export let data: LayoutData

  const user = createUserContext(data.user)
  $: user.set(data.user)

  // onMount(() => {
  //   changeTheme('bumblebee')
  // })
</script>

<ParaglideJS {i18n}>
  <Toaster richColors closeButton />
  <!-- <DrawerContainer> -->
  <NavBar>
    <ModalContainer />
    <Transition key={data.transition_key}>
      <slot />
    </Transition>
  </NavBar>
  <!-- </DrawerContainer> -->
</ParaglideJS>
