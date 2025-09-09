# RouterApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.2.

Ce projet traitera uniquement ce qui concerne le routing sur Angular. 
Ce projet sera une boutique fictive qui aura plusieurs parties, afin de faire le tour sur tous les aspects du routing 
  * Une partie publique : accueil, liste des produits, détails d’un produit, passage d'un produit à l'autre.
  * Une partie privée (admin) : gestion des produits.

## Development steps

* Init project
```bash
ng new router-app
```
* Create navbar component
```bash
ng g c navbar --skip-tests
```
* Import new component in app component
**app.component.html**
```html
<div class="content">
    <app-navbar/>
</div>
```

**app.component.ts**
```ts
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  ...
```
* Create pages component
```bash
ng g c pages/home --skip-tests
ng g c pages/products --skip-tests
ng g c pages/not-found --skip-tests
```
* Verify configuration
main.ts call appConfig
app.config.ts provides routes
app.routes.ts declare a Routes array

* Update navbar template
**index.html**
Add bootstrap css

**navbar/navbar.components.html**
Add bootstrap HTML template

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
