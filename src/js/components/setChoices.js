
const sity = document.querySelector('#sity');
const region = document.querySelector('#category');

if(sity){
const sitySelect = new Choices(sity, {
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
  itemSelectText: '',
});

sitySelect.setValue([
  { value: 'Казань', label: 'Казань' },
  { value: 'Уфа', label: 'Уфа' },
  { value: 'Пермь', label: 'Пермь' },
  { value: 'Москва', label: 'Москва' },
]);
}

if(region){
const regionSelect = new Choices(region, {
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
  itemSelectText: '',
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
}

const catalog = document.querySelector('#catalogcategory');
if(catalog){


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
}

const price = document.querySelector('#price');
if (price) {
  const priceSelect = new Choices(price);
  priceSelect.setValue([]);
}

const discount = document.querySelector('#discount');
if(discount){
  const discountSelect = new Choices(discount);
discountSelect.setValue([]);
}

const color = document.querySelector('#color');
if(color){
const colorSelect = new Choices(color);
colorSelect.setValue([]);
}



