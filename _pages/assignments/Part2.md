---
permalink: /assignments/part-2
title: "Part Two"
toc: true
toc_sticky: true
---

In Part 2, we will learn how to install additional libraries into our app. Specifically, we will install react-native-router-flux which is a library created to facilitate screen navigation.

Documentation for this library can be found [here](https://github.com/aksonov/react-native-router-flux).

Some prep work: Create 3 new screen files called Events, Profile, and More. Go ahead and follow the format that you learned when making the Dashboard screen in [Part 1](/part-1). You don't need to go into styling or anything, just have their render functions return an empty `View` component.

## Exercise 1
**TLDR;** Install the react-native-router-flux library and create the router file.
{: .notice}

**What is the *Router* and why do we need it?**
Why can't we just add everything to App.js? ezpz
{: .notice--info}

As you learned [before](/part-1#exercise-6), you install libraries into your app by using the command

    ```
    npm install <package name>
    ```

    This adds it to the dependency list of your project. You can check out the current dependencies and their versions in the `package.json` file .

1. Install `react-native-router-flux`.
2. Let's create the router file, this houses the implementation of the library. We could create this file anywhere, but to avoid having 50 files all in the same place, let's organize stuff. Create a `src` (short for source) folder.
3. Inside this folder, create another folder called `config` (short for configutation), this is the folder that will contain `Router.js`.

    This Router.js file will contain a function component that returns the Router component.

A function component can come in the form of

    ```js
    const RouterComponent = () => {

    }
    ```

    **What the heck is a function component?**
    {: .notice--info}

For now make your function return the Router component as a paired tag element as shown below and we'll go ahead and expand on the implementation of the router in the next exercises.

```js
...
  return (
    <Router>
    <Router/>
  )
...
```

Note: Make sure that you properly import the router component from the react-native-router-flux library and that you export your new function component, otherwise you will get an error like this:

```
```
{: .notice--warning}

## Exercise 2
**TLDR;** Add our current four screens to the router component.
{: .notice}

The Router component makes use of some navigation components called `Stacks` and `Scenes`. Stacks allow you to group scenes, while scenes are the specific screens that we want to access. If you look around in the documentation, you'll see some examples of how stacks and scenes are laid out in the code. Kind of like how our screens return one big `View` component with everything inside of it, you can't have multiple Stack copmonents at the outermost level. There needs to be one Stack component that encapsulates all the other stacks. 

For this exercise, follow the documentation and create a Stack with the key "root" inside of your Router component. Then, within this Stack, place all four screens that we have created so far as individual scenes.

```js
```
{::comment}Props/states have not been discussed before this point.{:/}

Your Stack should have the follwing props values implemented:  
key = "root"  
tabs  
tabBarPosition="bottom"  
type={ActionConst.RESET}

{::comment}Why those props specifically? What to they do?{:/}

We're mimicking the SHPE App with the tab bar normally used to switch between the main screens of the app. So we don't really need to save these scenes into a call stack {::comment} What is that? {:/} since we use the tab bar to navigate between them. The value "ActionConst.RESET" means that whenever a new scene is called within this stack, it will fully empty the current call stack and bring up the new scene without transitioning. We'll want to change the type value in other situations in the future. 

Your Scenes should have the following props values implemented for each screen:  
key="-screenname-"  
hideNavBar  
component={-Screenname-}  
tabBarLabel="-Screenname-"

The overall layout of this exercise should kinda look like this:

```js
return (
  <Router>
    <Stack>
      <Scene/>
      <Scene/>
      <Scene/>
      <Scene/>
    </Stack>
  </Router>
)
```

For more info on these props, make sure to check out the Router documentation.

Note: Make sure to properly import the screens into the Router.js file just like when we import other components. Otherwise, you will get this error:

```
```
{: .notice--warning}

## Exercise 3
**TLDR;** Call our new router function component inside of App.js.
{: .notice}

So you've done the hard part which is starting to build your actual router. This router will now function as the backbone of the app when it comes to scene navigation. Any new scenes you make will have to be placed inside the router strategically to be able make full use of the router APIs functionality. But more on that later. 

We just need to hand over the reigns of the app to the router. So go to your App.js file and import your router function component from the Router.js file. 

Note: When importing components from other Javascript files, if those components were exported as default, the following import statements would be identical.

{::comment} What are default vs named exports? {:/}

```js
import Stuff from './File'
import Stuffs from './File'
```

Essentially these import statements are only going to grab whatever was exported as default from the directory you indicated, so it doesn't matter what you name the import. Just remember to use the name you gave it when you call it inside your code.

Once you've imported the function component, replace everything in the render return block with the import as a single tagged element as shown below.

{::comment}What are self-closing tags and when do we use them?{:/}
```js
return (
    <YourFunctionComponent/>
)
```

Now when you open your app, you should see the tabBar at the bottom, allowing you switch between the different screens. 

<div class="notice--info" markdown="1">
Note: You might've noticed some yellow warnings popping up in your emulator. This is because the react-native-router-flux library is still using some older react functions that are being deprecated *eventually*. For now, place the following bit of code in App.js before your App component to get rid of any yellow warnings.

    ```js
    console.disableYellowBox = true;
    ```
</div>