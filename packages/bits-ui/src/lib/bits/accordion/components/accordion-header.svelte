<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getCtx } from "../ctx.js";
	import type { HeaderProps } from "../index.js";

	type $$Props = HeaderProps;

	export let level = 3;
	export let asChild: $$Props["asChild"] = false;
	export let el: $$Props["el"] = undefined;

	const {
		elements: { heading: header },
		getAttrs,
	} = getCtx();

	const attrs = getAttrs("header");

	$: builder = $header(level);
	$: Object.assign(builder, attrs);
</script>

{#if asChild}
	<slot {builder} />
{:else}
	<div bind:this={el} use:melt={builder} {...$$restProps}>
		<slot {builder} />
	</div>
{/if}
