// const favorites = ['id-5', 'id-6'];
// const tree = {
//   id: 'id-1',
//   name: 'Products',
//   nodes: [
//     {
//       id: 'id-2',
//       name: 'Food',
//       nodes: [
//         {
//           id: 'id-3',
//           name: 'Drinks',
//           nodes: [],
//         },
//         {
//           id: 'id-4',
//           name: 'Drinks',
//           nodes: [
//             {
//               id: 'id-5',
//               name: 'Wiskey',
//               nodes: [],
//             },
//             {
//               id: 'id-6',
//               name: 'Tequila',
//               nodes: [],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };
// algo
// 1 Добавить к каждому объекту с  id из массива с id  метку isFavorite и значение true or false
// 2 Пишем функцию принимающую исходный объект и массив id
// 3 Проверяем узел уже  favorite или нет
// возвращаем новый объектб в нем =>
// 4 разворачиваем с помощью spred входящий obj +++
// 5 записываем в ключ isFavorite значение проверки с шага 3
// 6 в поле nodes итерируемся по obj.nodes вызывая основную функцию
// input obj, arr
// output new obj
const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);
  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map((childNode) => markFavorites(childNode, favorites)),
  };
};
// --test data
// const result = markFavorites(tree, favorites);
// console.log(result);
