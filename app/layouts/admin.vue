<script setup>
import { useLayout } from '@/composables/layout'

const { layoutConfig, layoutState, isSidebarActive } = useLayout();

const outsideClickListener = ref(null);

watch(isSidebarActive, (newVal) => {
  if (newVal) {
    bindOutsideClickListener();
  } else {
    unbindOutsideClickListener();
  }
});

const containerClass = computed(() => {
  return {
    'layout-overlay': layoutConfig.menuMode === 'overlay',
    'layout-static': layoutConfig.menuMode === 'static',
    'layout-static-inactive': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
    'layout-overlay-active': layoutState.overlayMenuActive,
    'layout-mobile-active': layoutState.staticMenuMobileActive
  };
});

function bindOutsideClickListener() {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event) => {
      if (isOutsideClicked(event)) {
        layoutState.overlayMenuActive = false;
        layoutState.staticMenuMobileActive = false;
        layoutState.menuHoverActive = false;
      }
    };
    document.addEventListener('click', outsideClickListener.value);
  }
}

function unbindOutsideClickListener() {
  if (outsideClickListener.value) {
    document.removeEventListener('click', outsideClickListener);
    outsideClickListener.value = null;
  }
}

function isOutsideClicked(event) {
  const sidebarEl = document.querySelector('.layout-sidebar');
  const topbarEl = document.querySelector('.layout-menu-button');

  return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
}


let adminStyleElement = null;

onMounted(async () => {
  // Importer dynamiquement le SCSS en tant que module
  const style = await import('@/assets/admin/styles.scss?inline');

  // Créer un élément <style> pour injecter les styles
  adminStyleElement = document.createElement('style');
  adminStyleElement.id = 'admin-styles';
  adminStyleElement.innerHTML = style.default;

  // Ajouter les styles au <head>
  document.head.appendChild(adminStyleElement);
});

onBeforeUnmount(() => {
  // Supprimer les styles lorsque l'on quitte le layout admin
  if (adminStyleElement) {
    adminStyleElement.remove();
    adminStyleElement = null;
  }
});
</script>

<template>
  <div class="admin-layout">

  <div class="layout-wrapper admin-layout" :class="containerClass">
      <AppTopbar></AppTopbar>
      <AppSidebar></AppSidebar>
      <div class="layout-main-container">
        <div class="layout-main">
          <router-view></router-view>
        </div>
        <app-footer></app-footer>
      </div>
      <div class="layout-mask animate-fadein"></div>
    </div>
    <Toast />
    <ConfirmDialog />
    </div>
</template>
