export default {
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'categName',
      type: 'string',
      title: 'Category name',
    },
    {
      name: 'categId',
      type: 'slug',
      title: 'Category Id',
    },
    {
      name: 'items',
      type: 'array',
      title: 'Category items',
      of: [{ type: 'categoryItem' }],
    },
  ],
};
