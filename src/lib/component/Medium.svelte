<script>
    import { CalendarDays } from 'lucide-svelte';

    export let medium;
</script>

<div class="flex flex-col gap-6 w-full lg:w-2/3">
    <h2 class="pb-2 text-lg border-b-[1px] border-gray-300">Latest Article</h2>
    <div class="flex flex-col gap-4">
        {#each medium.posts as item, i}
            <div class="flex gap-3" data-aos="fade-up">
                <div
                    class="!bg-cover w-[250px] aspect-2/1 rounded-sm border-[1px] border-gray-300"
                    style="background: url({item.image}) center center no-repeat;"
                ></div>
                <div class="flex flex-col gap-2 w-full">
                    <div class="text-xl line-clamp-2 w-full" title={item.title}>
                        <a href={item.url} target="_blank">{item.title}</a>
                    </div>
                    <div class="flex items-center gap-2 text-gray-500">
                        <CalendarDays size={16} />
                        <span class="text-sm">{item.date}</span>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <a href={medium.url} target="_blank" class="btn btn-primary self-center">
        Browse More...
    </a>
</div>
