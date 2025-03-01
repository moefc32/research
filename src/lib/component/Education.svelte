<script>
    export let education;
</script>

<div class="flex flex-col gap-6 w-full lg:w-1/2">
    <h2 class="pb-2 text-lg border-b-[1px] border-gray-300">
        Educational Background
    </h2>
    <div class="flex flex-col gap-4">
        {#each education as item, i}
            <div
                class="card flex gap-4 p-4 w-full border-[1px] border-gray-300 shadow-lg"
                data-aos="fade-up"
            >
                <div class="flex flex-col gap-1">
                    <span class="text-xl truncate w-full">
                        {item.title}
                    </span>
                    <span class="text-gray-500 truncate w-full">
                        {item.department}, {item.university}
                    </span>
                </div>
                <span
                    class="badge badge-sm badge-success text-white font-semibold"
                >
                    {item.startYear} - {item.endYear}
                </span>
            </div>
        {/each}
    </div>
</div>
