<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getCtx } from "../ctx.js";
	import type { ThumbEvents, ThumbProps } from "../index.js";
	import { createDispatcher } from "$lib/internal/events.js";

	type $$Props = ThumbProps;
	type $$Events = ThumbEvents;

	export let asChild: $$Props["asChild"] = false;
	export let el: $$Props["el"] = undefined;
	export let thumb: $$Props["thumb"];

	const { getAttrs } = getCtx();

	const dispatch = createDispatcher();
	const attrs = getAttrs("thumb");

	$: builder = thumb;
	$: Object.assign(builder, attrs);
</script>

{#if asChild}
	<slot {builder} />
{:else}
	<span bind:this={el} use:melt={builder} {...$$restProps} on:m-keydown={dispatch} />
{/if}
