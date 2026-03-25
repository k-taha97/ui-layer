import { watchDebounced } from '@vueuse/core';

export function useSearchParams(name: string, debounce = 500, resetPageNumber = true) {
  const route = useRouter();
  const router = useRoute();
  const queryValue = computed(() => router.query?.[name] || null);

  const value = ref(queryValue.value);

  watchDebounced(value, () => {
    let query = {
      ...router.query,
      [name]: value.value,
    };

    if (resetPageNumber) {
      query = {
        ...query,
        page: String(1),
      };
    }

    route.replace({ query });
  }, { debounce, deep: true });

  return {
    value,
    queryValue,
  };
}
