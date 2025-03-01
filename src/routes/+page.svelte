<script>
    import { onMount } from 'svelte';
    import { toast } from 'svoast';
    import AOS from 'aos';
    import datePrettier from '$lib/datePrettier';

    import Banner from '$lib/component/Banner.svelte';
    import Education from '$lib/component/Education.svelte';
    import Publication from '$lib/component/Publication.svelte';
    import Platform from '$lib/component/Platform.svelte';
    import Medium from '$lib/component/Medium.svelte';

    // const globalSearchModalEl = document.querySelector("#global-search");
    // const globalSearchModal =
    //   globalSearchModalEl && new bootstrap.Modal(globalSearchModalEl, {});

    let dataLoading = true;
    let education = [];
    let publication = [];
    let platform = [];
    let medium = {};

    // globalSearch: {
    //   query: "",
    //   queryModal: "",
    //   toggle: false,
    //   loading: false,
    //   backend: "https://api.mf-chan.com/search",
    //   searchTime: 0,
    //   searchResult: [],
    //   loadData: async function () {
    //     searchResult = [];

    //     try {
    //       if (queryModal) {
    //         loading = true;
    //         const response = await fetch(
    //           `${backend}?q=${queryModal}`
    //         );

    //         searchTime = response.data.data.searchTime;
    //         searchResult = response.data.data.searchResult;
    //       }
    //     } catch (e) {
    //       console.error(e);
    //     }

    //     loading = false;
    //   },
    //   open: async function () {
    //     try {
    //       if (query) {
    //         queryModal = query;
    //         query = "";

    //         globalSearchModal.show();
    //         await loadData();
    //       }
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   },
    // },

    onMount(async () => {
        AOS.init();

        try {
            const response = await fetch(import.meta.env.VITE_BACKEND);
            const { data } = await response.json();

            education = data.education;
            publication = data.publication;
            platform = data.platform;
            const getMedium = data.medium;

            getMedium.posts.forEach(item => {
                item.date = datePrettier(item.date);
            });

            medium = getMedium;
            dataLoading = false;
        } catch (e) {
            console.error(e);
            toast.error(
                'Cannot fetch data from the backend, please try again later!',
            );
        }
    });
</script>

<Banner />

<main class="flex flex-1 flex-col gap-9 mx-12 my-6">
    <div class="flex flex-col lg:flex-row gap-9 w-full">
        <Education {education} />
        <Publication {publication} />
    </div>
    <Platform {platform} />
    <div class="flex flex-col-reverse lg:flex-row items-start gap-12 w-full">
        <Medium {medium} />
        <aside
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
        </aside>
    </div>
</main>
