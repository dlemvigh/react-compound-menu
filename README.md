# Composite React Components

This project is a sandbox for creating composite components. Composite components is a fancy work for splitting big components, into multiple components, passing props using context. This allows for more loosly coupled components, with more access, flexibility and customization of sub components.

## Nav composite componts

A simple solution for creating a single navigation component, and passing the entire navigation structure as an object to a single component. The composite solution, is having components for `NavBar`, `NavItem`, `NavMenu`. There is an example implementation in [NavigationExample](./src/pages//home//NavigationExample.tsx)

## Tabs composite component

Tabs is component where flexibility and customization is often request, and is hard to implement with a single tabs component. The composite solution has `HeaderBar`, `Header`, `Content`. The difficulty with the composite solution becomes passing state, updating focus, and accessibility. There is a simple solution of passing a list of all tab ids to a parent component. Another solution is auto-registering tabs, by looking at the children of `HeaderBar`, which required `Header`'s to be direct children. Both have been implemented. Auto-registering is done if tab ids are not passed to the parent.

There is some outstanding work about controlling selected tab from parent components. Child components could easily consume the same context to control selected tab.

There is a sample implementation in [TabExamples](./src//pages/home/TabExamples.tsx)
