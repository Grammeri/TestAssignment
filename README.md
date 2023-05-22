Russian (See english below)
Ключевые технологии, которые необходимо использовать
1.	React
2.	React-bootstrap
3.	React-router
4.	Axios
5.	Redux
6.	Redux-saga
7.	Git
 
Описание задачи
Нужно создать сайт с постами, где будут присутствовать 3 страницы (роута):
1. Список постов (главная страница), где будут располагаться все посты.
2. Обо мне, где будет располагаться краткая информация о Вас.
3. Подробности о пользователе (куда необходимо вывести информацию о пользователе и список его постов)
Получить данные необходимо через фейковое api https://jsonplaceholder.typicode.com.
 
Подробное описание
1. Список постов (главная страница)
1.1. Должна содержать список всех постов
1.2 Каждый пост состоит из заголовка, текста, аватара автора и списка комментариев
1.3 Заголовок и текст брать из api
1.4 Аватар должен быть одним изображением для всех пользователей, но при клике на него, должен происходить переход на страницу Подробности о пользователе.
1.5 Список комментариев изначально скрыт, доступна лишь кнопка Комментарии
1.6 При нажатии на кнопку Комментарии, должен грузиться из api и показываться список комментариев к данному посту. При повторном нажатии список должен скрываться
1.7  Комментарий состоит из заголовка(email) и текста
1.8. При загрузке данных с сервера нужно отобразить сперва лоадер, а только потом подгруженный контент (создайте дополнительно искусственную задержку в 0.5 секунд чтобы лоадер повисел подольше).
1.9. Должен присутствовать хэдер с «меню-бургером». При нажатии на него слева должно всплывать навигационное меню, где будет присутствовать 2 ссылки (Список постов и Обо мне), а также отображаться ваш аватар, имя и почтовый адрес.
2. Обо мне
2.1. Здесь всё просто, расскажите немного о себе. Сделайте эту страницу отдельным роутом, сохранив при этом хэдер и «меню-бургер».
3. Подробности о пользователе (переход при нажатии по аватару у поста)
3.1. Необходимо создать карточку, куда вывести краткую информацию о пользователе. Информация должна соответствовать автору поста.
3.2 Отобразить список постов принадлежащих только данному пользователю, структура самих постов полностью идентична с п.1.2.
3.3. Добавить лоадер по аналогии с п.1.8.
3.4. Сделать кнопку «Назад», при нажатии на которую произойдет переход на главную страницу.

 
P.S:
1. В качестве основы можно взять шаблон React App.
2. Вынесите логику работы с сервером в saga-эффекты.
3. Обязательно разбейте логически-независимые элементы страниц на компоненты.
4. На странице Подробности о пользователе данные должны подгружаться даже после обновления этой страницы.
5. Весь интерфейс реализуйте с помощью ui-библиотеки React-bootstrap (используйте компоненты, которые предоставляет эта библиотека).
6. Во время написания кода делайте коммиты почаще (по каждой существенной функции интерфейса).

**English **
**Key Technologies to be Used:**

React
React-bootstrap
React-router
Axios
Redux
Redux-saga
Git
Task Description:
You need to create a website with posts, consisting of 3 pages (routes):

Post List (Home Page): Displays all the posts.
About Me: Provides brief information about yourself.
User Details: Displays information about a specific user and a list of their posts.
Data should be fetched from the fake API: https://jsonplaceholder.typicode.com.

Detailed Description:

Post List (Home Page):
1.1. Display a list of all the posts.
1.2. Each post should include a title, text, author's avatar, and a list of comments.
1.3. Fetch the title and text from the API.
1.4. The avatar should be the same image for all users, but clicking on it should navigate to the User Details page.
1.5. The list of comments should be initially hidden, with only a "Comments" button available.
1.6. Clicking on the "Comments" button should fetch and display the comments for that post from the API. Clicking again should hide the comments.
1.7. Each comment should include a title (email) and text.
1.8. Display a loader while fetching data from the server, and then display the loaded content (create an artificial delay of 0.5 seconds to show the loader for a while).
1.9. Include a header with a burger menu icon. Clicking on the icon should show a navigation menu on the left side. The menu should include 2 links (Post List and About Me), and display your avatar, name, and email address.

About Me:
2.1. Provide some information about yourself. This page should be a separate route, while still displaying the header and burger menu.

User Details (Accessed by clicking on an avatar in a post):
3.1. Create a card to display brief information about the user, which should correspond to the post's author.
3.2. Display a list of posts belonging to that user, with the same structure as described in 1.2.
3.3. Add a loader similar to 1.8.
3.4. Include a "Back" button that navigates back to the Home page.

Additional Notes:

You can use the React App template as a starting point.
Move server-related logic to saga effects.
Split the page elements into separate components based on logical independence.
On the User Details page, ensure that data is fetched even after refreshing the page.
Implement the entire interface using React-bootstrap UI library (utilize the components provided by the library).
Commit your code frequently, with each significant UI function.
