<script lang="ts">
	import { getCtx } from "../ctx.js";
	import type { IndicatorProps } from "../index.js";

	type $$Props = IndicatorProps;

	export let asChild: $$Props["asChild"] = false;
	export let el: $$Props["el"] = undefined;

	const {
		helpers: { isChecked, isIndeterminate },
		states: { checked },
		getAttrs,
	} = getCtx();

	function getStateAttr(state: boolean | "indeterminate") {
		if (state === "indeterminate") return "indeterminate";
		if (state) return "checked";
		return "unchecked";
	}

	$: attrs = {
		...getAttrs("indicator"),
		"data-state": getStateAttr($checked),
	};
</script>

{#if asChild}
	<slot {attrs} isChecked={$isChecked} isIndeterminate={$isIndeterminate} />
{:else}
	<div bind:this={el} {...$$restProps} {...attrs}>
		<slot {attrs} isChecked={$isChecked} isIndeterminate={$isIndeterminate} />
	</div>
{/if}
