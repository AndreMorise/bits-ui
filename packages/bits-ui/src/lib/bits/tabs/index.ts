export { default as Root } from "./components/tabs.svelte";
export { default as Content } from "./components/tabs-content.svelte";
export { default as List } from "./components/tabs-list.svelte";
export { default as Trigger } from "./components/tabs-trigger.svelte";

export type {
	TabsProps as Props,
	TabsContentProps as ContentProps,
	TabsTriggerProps as TriggerProps,
	TabsListProps as ListProps,
	TabsTriggerEvents as TriggerEvents,
} from "./types.js";
