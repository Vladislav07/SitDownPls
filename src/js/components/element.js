
const sity = document.querySelector('#sity');
const region = document.querySelector('#category');
const catalog = document.querySelector('#catalogcategory');
const price = document.querySelector('#price');
const discount = document.querySelector('#discount');
const color = document.querySelector('#color');


const sitySelect = new Choices( sity, {
    silent: false,
    items: [],
    choices: [],
    renderChoiceLimit: -1,
    maxItemCount: -1,
    addItems: true,
    addItemFilter: null,
    removeItems: true,
    removeItemButton: false,
    editItems: false,
    allowHTML: false,
    duplicateItemsAllowed: true,
    delimiter: ',',
    paste: false,
    searchEnabled: false,
    searchChoices: true,
    searchFloor: 1,
    searchResultLimit: 4,
    searchFields: ['label', 'value'],
    position: 'auto',
    resetScrollPosition: true,
    shouldSort: true,
    shouldSortItems: false,
    placeholder: false,
    placeholderValue: null,
    searchPlaceholderValue: null,
    prependValue: null,
    appendValue: null,
    renderSelectedChoices: 'auto',
    itemSelectText:'',
});


sitySelect.setValue([
  { value: 'Казань', label: 'Казань' },
  { value: 'Уфа', label: 'Уфа' },
  { value: 'Пермь', label: 'Пермь' },
  { value: 'Москва', label: 'Москва' },
]);


const regionSelect = new Choices( region, {
    silent: false,
    items: [],
    choices: [],
    renderChoiceLimit: -1,
    maxItemCount: 2,
    addItems: true,
    addItemFilter: null,
    removeItems: true,
    removeItemButton: false,
    editItems: false,
    allowHTML: false,
    duplicateItemsAllowed: true,
    delimiter: ',',
    paste: false,
    searchEnabled: false,
    searchChoices: true,
    searchFloor: 1,
    searchResultLimit: 4,
    searchFields: ['label', 'value'],
    position: 'auto',
    resetScrollPosition: true,
    shouldSort: true,
    shouldSortItems: false,
    placeholder: false,
    placeholderValue: null,
    searchPlaceholderValue: null,
    prependValue: null,
    appendValue: null,
    renderSelectedChoices: 'auto',
    itemSelectText:'',
});


regionSelect.setValue([
  { value: 'Диваны', label: 'Диваны' },
  { value: 'Кресла', label: 'Кресла' },
  { value: 'Пуфы', label: 'Пуфы' },
  { value: 'Столы', label: 'Столы' },
  { value: 'Стулья', label: 'Стулья' },
  { value: 'Комоды', label: 'Комоды' },
  { value: 'Кровати', label: 'Кровати' },
  { value: 'Аксессуары', label: 'Аксессуары' },
  { value: 'Тумбы', label: 'Тумбы' },
]);

const catalogSelect = new Choices(catalog,{
 placeholder: true,

});


catalogSelect.setValue([

{ value: 'Диваны', label: 'Диваны' },
{ value: 'Кресла', label: 'Кресла' },
{ value: 'Пуфы', label: 'Пуфы' },
{ value: 'Столы', label: 'Столы' },
{ value: 'Стулья', label: 'Стулья' },
{ value: 'Комоды', label: 'Комоды' },
{ value: 'Кровати', label: 'Кровати' },
{ value: 'Аксессуары', label: 'Аксессуары' },
{ value: 'Тумбы', label: 'Тумбы' },
 
]);

const priceSelect = new Choices(price);
priceSelect.setValue([

]);

const discountSelect = new Choices(discount);
discountSelect.setValue([

]);

const colorSelect = new Choices(color);
colorSelect.setValue([

]);



