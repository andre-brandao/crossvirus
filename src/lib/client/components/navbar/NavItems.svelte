<script lang="ts">
  import { icons } from '$lib/client/utils/icons'

  import ThemeSwiter from './ThemeSwiter.svelte'
  import ChangeLanguage from './ChangeLanguage.svelte'

  import { modal } from '$components/modal'
  import BugReportModal from '$components/modal/BugReportModal.svelte'

  import {
    setLanguageTag,
    sourceLanguageTag,
    availableLanguageTags,
    languageTag,
  } from '$lib/i18n/paraglide/runtime'

  import { page } from '$app/stores'
  import { getUserContext } from '$lib/client/stores/user'

  const user = getUserContext()

  type NavItem = {
    name: string
    href?: string
    subItems?: NavItem[]
    icon?: string
  }
  export let showDefaultItems = true

  export let navItems: NavItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: icons.home(),
    },
    {
      name: 'Mapas',
      href: '/maps',
    },
    {
      name: 'dataset',
      href: '/dataset'
    }
  ]

  function isActive(href?: string) {
    // TODO: Fix translation home not working

    return (
      $page.url.pathname === href ||
      $page.url.pathname === '/' + languageTag() + href ||
      ($page.url.pathname === '/' + languageTag() && href === '/')
    )
  }
</script>

{#each navItems as navItem, i (navItem.href)}
  {@const { name, icon } = navItem}
  <li>
    {#if navItem.subItems}
      <details>
        <summary>
          <!-- {#if typeof navItem.icon === 'string'}
            {@html icon}
          {/if} -->
          {name}
        </summary>
        <ul>
          {#each navItem.subItems as subItem, i (subItem.href)}
            {#if subItem.subItems}
              <svelte:self navItems={[subItem]} showDefaultItems={false} />
            {:else}
              <li>
                <a
                  href={subItem.href}
                  aria-current={isActive(subItem.href) ? 'page' : undefined}
                  class:active={isActive(subItem.href)}
                >
                  <!-- {#if typeof navItem.icon === 'string'}
                    {@html icon}
                  {/if} -->

                  {subItem.name}
                </a>
              </li>
            {/if}
          {/each}
        </ul>
      </details>
    {:else}
      <a
        href={navItem.href}
        aria-current={isActive(navItem.href) ? 'page' : undefined}
        class:active={isActive(navItem.href)}
      >
        {#if typeof navItem.icon === 'string'}
          {@html icon}
        {/if}
        {name}
      </a>
    {/if}
  </li>
{/each}

{#if showDefaultItems}
  <li>
    <button class="" onclick={() => modal.open(BugReportModal, {})}>
      {@html icons.bug()}
      Reportar Bug
    </button>
  </li>
{/if}

<style>
  a[aria-current='page']::before {
    view-transition-name: active-page;
    content: '●';
  }
</style>
