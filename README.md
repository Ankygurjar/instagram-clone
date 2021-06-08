This project is a clone of Web Version of Instagram and it has the basic features of Instagram i.e Following and Unfollowing user accounts, comments and uploading photos to personal account. <a href="https://instagram-b7d1c.web.app/">Click here to see the application in action</a>

<h2> Features :  </h2>

1. Safe Login using Firebase OAuth authentication system.
2. A user will be able to follow and unfollow other users registered in the application.
3. Logged in user will be able to view the posts of the users that the user follows.
4. User can upload images and set cations for them as well.
5. The user who can see the post will be able to add a comment to the post.
6. The Post as well as the comments can be deleted by thier author only.

<h2> Technologies Used : </h2>

1. <strong>React Js </strong>: a JS library created and maintained by Facebook. This library is the core of the project. It provides tons of pre-built components to start a project which makes it easier to manage and scale the application. I used React for this application as it makes the application very easier to scale and manage by spliting up the application into small and resuable components that can be used at multiple places in the application.
2. <strong>React-Redux </strong>: a React tool to manage the state in an application by creating a store. So, Redux helps in creating a gloabal enviornment for react application which can be used to store frequently used data in a state using 'useDispatch' and can be used at any component of application using 'useSelector'.
3. <strong>Firebase </strong>: a NO-SQL database service provider which does a lot more than just providing the database storag(in this case, providing OAuth authentication). Like React, Firebase is the next easy to use and easy to manage techonology in my list. Unlike most of the other databases Firebase allows CRUD functionalities to be managed from the UI itself just by calling the inbuilt Firebase functions/pacakages/hooks. 
4. <strong>React-Firebase Hooks </strong>: a NPM package that makes firebase DB calls much more simpler with less code.
5. Styled Components : a NPM package which lets programmer to style the components much in a much cleaner way than the traditional way of assinging classes the divs.
6. <strong>Material UI </strong>: a React-UI framework which helps to use inbuilt styling for the components.
7. <strong>NPM </strong>: package manager for the project.

<h2> How to use: </h2>

1. Make sure to install the Git for desktop first.
2. Clone the application to local desktop using <code> git clone 'link to this repo'</code>.
3. Make sure you have <code>NPM</code> installed. If yes, navigate to the cloned folder of the appliation and run <code>npm install</code>. This command will install all the packages mentioned in the <code>'dependencies'</code> of the project.
4. Ready to go, in the same terminal run <code>npm start</code> OR <code> npm run start </code>
