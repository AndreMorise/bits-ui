<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import type { PrevButtonEvents, PrevButtonProps } from "../index.js";
	import { getCtx } from "../ctx.js";
	import { createDispatcher } from "$lib/internal/events.js";

	type $$Props = PrevButtonProps;
	type $$Events = PrevButtonEvents;

	export let asChild: $$Props["asChild"] = undefined;
	export let el: $$Props["el"] = undefined;

	const {
		elements: { prevButton },
		getAttrs,
	} = getCtx();

	const attrs = getAttrs("prev-button");

	$: builder = $prevButton;
	$: Object.assign(builder, attrs);

	const dispatch = createDispatcher();
</script>

{#if asChild}
	<slot {builder} />
{:else}
	<button bind:this={el} use:melt={builder} type="button" {...$$restProps} on:m-click={dispatch}>
		<slot {builder} />
	</button>
{/if}
