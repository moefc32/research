<script>
    import { CalendarDays, SquareArrowOutUpRight } from '@lucide/svelte';
    import datePrettier from '../lib/datePrettier';

    export let medium;
    export let dataLoading;
</script>

<div class="flex flex-col gap-6 mx-auto w-full lg:w-2/3">
    <h2 class="pb-2 text-lg border-b border-gray-300">Latest Article</h2>
    <div class="flex flex-col gap-6">
        {#if !dataLoading}
            {#each medium.posts as item, i}
                <div class={i > 0 && 'mt-3'} data-aos="fade-up">
                    <a
                        href={item.url}
                        target="_blank"
                        class="flex flex-col md:flex-row gap-3 md:gap-6"
                    >
                        <div class="w-full md:w-48">
                            {#if item.image}
                                <div
                                    class="bg-gray-500 bg-cover bg-center bg-no-repeat aspect-191/100 rounded-lg shadow"
                                    style="background-image: url({item.image});"
                                />
                            {:else}
                                <div
                                    class="flex justify-center items-center p-3 bg-gray-200 text-gray-500 min-w-12 text-4xl font-light aspect-191/100 rounded-lg shadow"
                                >
                                    #{String(i + 1).padStart(2, '0')}
                                </div>
                            {/if}
                        </div>
                        <div class="flex flex-1 flex-col gap-2">
                            <div class="text-2xl">
                                {item.title}
                            </div>
                            <div
                                class="flex items-center gap-2 text-gray-500 text-sm"
                            >
                                <CalendarDays size={16} />
                                {datePrettier(item.date, { date: true })}
                            </div>
                        </div>
                    </a>
                </div>
            {/each}
        {:else}
            {#each Array(10) as _, i}
                <div class="flex gap-3" data-aos="fade-up">
                    <div
                        class="bg-gray-200 w-64 aspect-2/1 rounded-sm border-1 border-gray-300 skeleton"
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
    {#if medium?.url}
        <a
            href={medium.url}
            target="_blank"
            class="btn btn-primary self-center"
        >
            <SquareArrowOutUpRight size={14} />
            Browse more on Medium
        </a>
    {/if}
</div>
