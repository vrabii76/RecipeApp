# RecipeApp

A live demo of the app can be found here: [RecipeApp](https://ng-recipe-book-5caed.firebaseapp.com/auth)

This is a Recipe Management application built with Angular and TypeScript that offers:<br/>

1. Authentication Features<br/>

- User signup/login via Firebase<br/>
- Token-based authentication<br/>
- Local storage persistence for login state<br/>
- Protected routes using guards<br/>

2. Recipe Management<br/>

- Create, read, update, delete recipes<br/>
- Store recipes in Firebase backend<br/>
- View recipe details and ingredients<br/>

3. Shopping List<br/>

- Maintain ingredient lists<br/>
- Add/remove ingredients<br/>
- Manage quantities<br/>

4. Technical Implementation<br/>

- Angular framework with TypeScript<br/>
- Firebase backend integration<br/>
- Bootstrap for responsive design<br/>
- Routing system with guards<br/>
- HTTP interceptors for auth tokens<br/>

The application follows a modular architecture with separate components for recipes, shopping list, and authentication.

All data operations require authentication, with tokens stored locally for persistent sessions. The backend uses Firebase for both authentication and data storage.
