<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getCtx } from "../ctx.js";
	import type { HeadingProps } from "../index.js";

	type $$Props = HeadingProps;

	export let asChild: $$Props["asChild"] = false;
	export let el: $$Props["el"] = undefined;

	const {
		elements: { heading },
		states: { headingValue },
		getCalendarAttrs,
	} = getCtx();

	const attrs = getCalendarAttrs("heading");

	$: builder = $heading;
	$: Object.assign(builder, attrs);
</script>

{#if asChild}
	<slot {builder} headingValue={$headingValue} />
{:else}
	<div bind:this={el} use:melt={builder} {...$$restProps}>
		<slot {builder} headingValue={$headingValue}>
			{$headingValue}
		</slot>
	</div>
{/if}
