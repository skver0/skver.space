import type {
  ComponentProps,
  ComponentType,
  SvelteComponentTyped,
} from "svelte";
import { writable } from "svelte/store";

type Modal<T extends SvelteComponentTyped> = {
  id: number;
  component: ComponentType<T>;
  props: ComponentProps<T>;
};

function createModals() {
  const { subscribe, update } = writable<Modal<any>[]>([]);

  return {
    subscribe,
    push: <T extends SvelteComponentTyped>(
      component: ComponentType<T>,
      props: Omit<ComponentProps<T>, "modalID">
    ) => {
      const id = Date.now();
      update((p: any) => [
        ...p,
        {
          id,
          component,
          props: {
            modalID: id,
            ...props,
          },
        },
      ]);
    },
    close: (id?: number) => {
      update((p) => (id ? p.filter((m) => m.id !== id) : p.slice(0, -1)));
    },
  };
}

export const modals = createModals();