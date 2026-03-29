const userInfo = {
  name: "Роман",
  age: 16,
  country: "Россия",
  job: "Frontend creator",
  city: "Нальчик",
  relationshipStatus: "Не женат",
};

const carInfo = {
  brand: "Toyota",
  model: "Camry",
  yearOfManufacture: "2019",
  color: "Black",
  transmission: "Automatic",
};

carInfo.owner = userInfo 

// 5.Написать функцию которая аргументом будет принимать объект, 
// описанный в пункте №4. Она проверяет, 
// есть ли в объекте свойство "максимальная скорость", 
// если нет - добавляет его и задает значение, если есть - прекращает выполнение (ничего не делает)

function addMaxSpeed (object) {
  if (!object.maxSpeed) {
    object.maxSpeed = 200;
    console.log(object.maxSpeed);
  }
}

checkMaxSpeed(carInfo);

//  6.Написать функцию, которая получает первым аргументом  — объект, 
//  а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.

function getObject (object, prop) {
  console.log(object, prop);
}

getObject(userInfo, 'country')


// 7.Создать массив, который содержит названия продуктов (просто строки)

const products = ['Помидор', 'Кукуруза', 'Сыр', 'Йогурт']

// 8.Создать массив, состоящий из объектов, 
// где объект представляет собой книгу (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг). 
// После, используя известный нам метод массив, добавить еще одну книгу в конец списка.
//  Можете заменить книги на фильмы, или другую сущность, идею вы поняли.

const books = [
  {
  bookName: "Муму",
  author: "Иван Тургенев",
  yearOfPublication: 1854,
  coverColor: "синий",
  genre: "роман",
  };
  
  {
  bookName: "Война и мир",
  author: "Лев Толстой",
  yearOfPublication: 1869,
  coverColor: "зеленый",
  genre: "роман",
  };
  
  {
  bookName: "Алиса в Стране чудес",
  author: "Кэрролл Льюис",
  yearOfPublication: 1865,
  coverColor: "черно-белый",
  genre: "Литературная сказка"
  };
]
  books.push({
  bookName: "Горе от ума",
  author: "Александр Грибоедов",
  yearOfPublication: 1825,
  coverColor: "оранжевый",
  genre: "Комедия",
  });


// 9.Создать еще один массив, состоящих из тех же книг, 
// но относящийся к определенной вселенной (Гарри Поттер, Марвел и так далее). 
// (Если используете другую, свою сущность - импровизируйте). 
// С помощью известного нам метода массива или оператора (рекомендую использовать оператор), 
// объединить эти два массива в один

const harryPotterBooks = [
 {
  bookName: "Harry Potter and the Philosopher's Stone",
  author: "J.K.Rowling",
  yearOfPublication: 1997,
  coverColor: "Красный",
  genre: "Фантастика",
 };
  
 {
  bookName: "Harry Potter and the Chamber of Secrets",
  author: "J.K.Rowling",
  yearOfPublication: 1998,
  coverColor: "Зеленый",
  genre: "Фантастика",
 };
 
 {
  bookName: "Harry Potter and the Prisoner of Azkaban",
  author: "J.K.Rowling",
  yearOfPublication: 1999,
  coverColor: "Фиолетовый",
  genre: "Фантастика",
 };
]

const allBooks = [...books, ...harryPotterBooks];

console.log(allBooks);


// 10. Почитать про метод массива — map. 
// Написать функцию, которая принимает массив сущностей с задания №9. 
// Добавляем новое свойство для объекта "isRare (это редкий)" 
// и в зависимости от года выпуска книги (или какой-то логики, связанной с вашей сущностью), 
// устанавливаем true или false. 
// Что я хочу этим сказать: если книга выпущена позже 2000 года, устанавливаем true (да, это редкий), 
// нет - false (значит это не редкий).

function getRareProperty(booksArray) {
  return booksArray.map(book => {
    return {
      ...book,
      isRare: book.yearOfPublication > 2000
    };
  });
}
const updatedBooks = getRareProperty(allBooks);

console.log(updatedBooks);