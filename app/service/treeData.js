// app/service/treeData.js
export const getTreeData = async () => {
  return [
    {
      key: '0',
      label: 'Documents',
      children: [
        { key: '0-0', label: 'Work', children:
          [
            { key: '0-0-0', label: 'Expenses.doc' },
            { key: '0-0-1', label: 'Resume.doc' }
          ]
         },
        { key: '0-1', label: 'Home', children: [{ key: '0-1-0', label: 'Invoices.txt' }] }
      ]
    },
    {
      key: '1',
      label: 'Pictures',
      children: [
        { key: '1-0', label: 'barcelona.jpg' },
        { key: '1-1', label: 'primeui.png' },
        { key: '1-2', label: 'optimusprime.png' }
      ]
    }
  ];
};