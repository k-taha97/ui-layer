<script setup lang="ts">
import DataTable from 'primevue/datatable'

import { LIMIT } from '../../utils'
import { PrimeImage } from '../image'

import noData from '/images/no-data.png'

export interface Props {
  storageKey: string
  showDownloadButton?: boolean
  name?: string
  rowsPerPage?: Array<number>
  totalRecords: number
}

const _props = defineProps<Props>()

const { value: props } = toRef(_props)

const { t } = useI18n()
const { value, queryValue } = useSearchParams('page', 10, false)

const dt = ref()

const offset = computed(() => {
  const p = Number(value.value) || Number(queryValue) || 1
  return (p - 1) * LIMIT
})

function exportCSV() {
  dt.value.exportCSV()
}
</script>

<template>
  <DataTable
    ref="dt" :key="props.storageKey" column-resize-mode="fit" :total-records="props.totalRecords"
    resizable-columns paginator class="prime-table-wrapper" lazy :rows="LIMIT" :first="offset" v-bind="$attrs"
    @page="(page: any) => {
      value = page.page + 1;
    }"
  >
    <template #empty>
      <div class="text-primary text-xl font-bold p-6 underline flex flex-col h-full w-full items-center justify-center">
        <PrimeImage
          type="PrimeVue" :src="noData" alt="No Data" image-class="h-52 w-52 object-contain rounded-md"
          class="rounded-md h-52 w-52 object-contain drop-shadow-md"
        />
        {{ t('layers.primevue.components.table.empty') }}
      </div>
    </template>
    <template #loading>
      <div class="p-4 bg-white dark:bg-white">
        {{ t('layers.primevue.components.table.loading') }}
      </div>
    </template>
    <template #paginatorstart />
    <template #paginatorend>
      <p-button
        v-if="props.showDownloadButton" type="button" icon="pi pi-download" text
        :title="t('layers.primevue.components.table.functions.download.csv')" @click="exportCSV"
      />
    </template>
    <template v-for="(_, _name) in $slots" #[_name]="slotData">
      <slot :name="_name" v-bind="slotData || {}" />
    </template>
  </DataTable>
</template>

<style scoped>
/* make sure any inner primevue wrappers stay white */
.prime-table-wrapper
  :where(
    .p-datatable,
    .p-datatable .p-datatable-thead,
    .p-datatable .p-datatable-tbody,
    .p-datatable .p-datatable-wrapper,
    .p-datatable-empty-message,
    .p-datatable-paginator-bottom,
    .p-paginator,
    .p-datatable-table-container,
    .p-datatable-table,
    .p-row-even,
    .p-row-odd
  ) {
  background-color: #ffffff !important;
  border-radius: 0.5rem !important;
  color: theme('colors.primary') !important;
  font-size: 14px !important;
}

.prime-table-wrapper,
.p-datatable {
  border: 1px solid rgb(230, 230, 230);
  border-radius: 0.5rem !important;
}

/* keep table layout consistent */
table {
  border-collapse: separate !important;
}
</style>
