<script>
    import { File } from 'lucide-svelte';

    export let publication;
</script>

<div class="flex flex-col gap-6 w-full lg:w-1/2">
    <h2 class="pb-2 text-lg border-b-[1px] border-gray-300">
        Scientific Publications
    </h2>
    <div class="flex flex-col gap-4 lg:max-h-[320px] overflow-y-auto">
        {#each publication as item, i}
            <div class="flex">
                <div class="px-3 pt-[5px]">
                    <File size={18} />
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <div class="text-lg line-clamp-2 w-full" title={item.title}>
                        <a href={item.url} target="_blank">{item.title}</a>
                    </div>
                    <div class="flex items-center gap-2">
                        <span
                            class="badge badge-sm badge-warning font-semibold"
                        >
                            {item.year}
                        </span>
                        {#if item.journal}
                            <span
                                class="text-gray-500 text-sm truncate w-full"
                                title={item.journal}
                            >
                                {item.journal}
                            </span>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
