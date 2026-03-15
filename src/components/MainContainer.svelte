<script>
    import { onMount } from 'svelte';
    import { Toaster, toast } from 'svelte-sonner';
    import AOS from 'aos';
    import ky from 'ky';
    import datePrettier from '../lib/datePrettier';

    import Banner from '../components/Banner.svelte';
    import Education from '../components/Education.svelte';
    import Publication from '../components/Publication.svelte';
    import Platform from '../components/Platform.svelte';
    import Medium from '../components/Medium.svelte';

    let dataLoading = true;
    let education = [];
    let publication = [];
    let platform = [];
    let medium = {};

    onMount(async () => {
        AOS.init();

        try {
            const { data } = await ky
                .get(import.meta.env.PUBLIC_BACKEND)
                .json();

            education = data.education;
            publication = data.publication;
            platform = data.platform;
            const getMedium = data.medium;

            getMedium.posts.forEach(item => {
                item.date = datePrettier(item.date, {
                    date: true,
                });
            });

            medium = getMedium;
            dataLoading = false;
        } catch (e) {
            console.error(e);
            toast.error('Cannot fetch data, please try again later!');
        }
    });
</script>

<Banner />

<main class="flex flex-1 flex-col gap-9 mx-12 my-6">
    <div class="flex flex-col lg:flex-row gap-9 w-full">
        <Education {education} {dataLoading} />
        <Publication {publication} {dataLoading} />
    </div>
    <Platform {platform} {dataLoading} />
    <div class="flex flex-col-reverse lg:flex-row items-start gap-12 w-full">
        <Medium {medium} {dataLoading} />
        <!-- <aside
            class="flex flex-col items-center gap-6 p-6 bg-[#7289da] text-white w-full lg:w-1/3 rounded-lg shadow-lg lg:sticky lg:top-[110px]"
        >
            <div
                class="pt-[100px] bg-[url(/discord.webp)] bg-[center_top] bg-no-repeat bg-[length:100px] text-xl text-center max-w-[400px]"
            >
                Want to be a great academic researcher? Join our Discord server!
            </div>
            <a
                href="https://link.mf-chan.com/belajar-riset"
                target="_blank"
                class="btn btn-lg btn-outline hover:text-[#7289da]"
            >
                Access Now, Free!
            </a>
        </aside> -->
    </div>
</main>

<Toaster
    richColors
    theme="system"
    position="bottom-center"
    toastOptions={{
        style: 'font-size: 1rem;',
    }}
/>
