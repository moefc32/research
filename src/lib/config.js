const pageSize = parseInt(import.meta.env.PUBLIC_PAGINATION_ITEMS || '10', 10);

export const owner = {
    displayName: 'Faizal Chan.',
    displayPicture: '/res/favicon.png',
    introduction: 'I approach problems by questioning assumptions and focusing on what truly matters.',
    shortTitle: 'UX Engineer & Researcher',
};

export const blog = {
    title: {
        long: 'Published Works',
        short: 'Works',
    },
    path: '/published-works',
    pageSize,
};
