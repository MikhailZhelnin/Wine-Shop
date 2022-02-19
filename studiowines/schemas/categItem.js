export default {
  name: 'categoryItem',
  title: 'Category Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Wine title',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
};
