const pageSize = parseInt(import.meta.env.PUBLIC_PAGINATION_ITEMS || '10', 10);

export const blog = {
    title: {
        long: 'Published Works',
        short: 'Works',
    },
    path: '/published-works',
    pageSize,
};
