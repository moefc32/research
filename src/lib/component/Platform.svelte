<script>
    export let platform;
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<div class="flex flex-col gap-6 w-full">
    <h2 class="pb-2 text-lg border-b-[1px] border-gray-300">
        Research Portfolio Platforms
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {#each platform as item, i}
            <div
                class="card flex gap-4 p-4 w-full border-[1px] border-gray-300 shadow-lg"
                title={item.name}
                data-aos="fade-up"
            >
                <a
                    href={item.link}
                    target="_blank"
                    class="block bg-contain! w-full aspect-9/1"
                    style="background: url(/platform/{item.class}.webp) center center no-repeat;"
                ></a>
            </div>
        {/each}
    </div>
</div>
