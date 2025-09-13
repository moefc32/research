<script>
    import { CalendarDays } from 'lucide-svelte';

    export let medium;
    export let dataLoading;
</script>

<div class="flex flex-col gap-6 mx-auto w-full lg:w-2/3">
    <h2 class="pb-2 text-lg border-b-[1px] border-gray-300">Latest Article</h2>
    <div class="flex flex-col gap-4">
        {#if !dataLoading}
            {#each medium.posts as item, i}
                <div class="flex gap-3" data-aos="fade-up">
                    <div
                        class="bg-cover! w-[250px] aspect-2/1 rounded-sm border-[1px] border-gray-300"
                        style="background: url({item.image}) center center no-repeat;"
                    ></div>
                    <div class="flex flex-col gap-2 w-full">
                        <div
                            class="text-xl line-clamp-2 w-full"
                            title={item.title}
                        >
                            <a href={item.url} target="_blank">{item.title}</a>
                        </div>
                        <div class="flex items-center gap-2 text-gray-500">
                            <CalendarDays size={16} />
                            <span class="text-sm">{item.date}</span>
                        </div>
                    </div>
                </div>
            {/each}
        {:else}
            {#each Array(10) as _, i}
                <div class="flex gap-3" data-aos="fade-up">
                    <div
                        class="bg-gray-200 w-[250px] aspect-2/1 rounded-sm border-[1px] border-gray-300 animate-pulse"
                    ></div>
                    <div class="flex flex-col gap-2 w-full">
                        <div class="text-xl line-clamp-2 w-full">
                            Loading latest article post #{i + 1}
                        </div>
                        <div class="flex items-center gap-2 text-gray-500">
                            <CalendarDays size={16} />
                            <span class="text-sm">Loading...</span>
                        </div>
                    </div>
                </div>
            {/each}
        {/if}
    </div>
    <a
        href={medium.url}
        target="_blank"
        class="btn btn-primary self-center"
        disabled={!!medium?.url}
    >
        Browse More...
    </a>
</div>
