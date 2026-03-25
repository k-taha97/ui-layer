import ConfirmPopup from 'primevue/confirmpopup'

export function usePopup() {
  const confirm = useConfirm()

  function showTemplate(event: HTMLElement, group = 'default') {
    confirm.require({
      target: (event as any).currentTarget,
      group,
      icon: 'pi pi-exclamation-circle',
      rejectProps: {
        class: 'hidden',
      },
      acceptProps: {
        class: 'hidden',
      },
    })
  }

  function renderPopup(dynamicContent?: Component, props?: IGenericObject) {
    return h(
      ConfirmPopup,
      { group: props?.group || 'default', class: 'bg-white border shadow-xl border-gray-200' },
      {
        message: () =>
          h('div', { class: 'flex flex-col items-center w-full gap-4 p-5 pb-0' }, [
            h(dynamicContent || '', props),
          ]),
      },
    )
  }

  return {
    showTemplate,
    renderPopup,
    onClose: confirm.close,
  }
}
