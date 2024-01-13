# Parallel Routes

Parallel routes are an advanced routing mechanism that allows for the simultaneous rendering of multiple pages within the same layout.

## Prallel Routes contd.

Parallel routes in Next.js are defined using a feature known as slots.

Slots help structure our content in a modular fashion.

To define a slot, we use the '@folder' naming convention.

Each slot is then passed as a prop to its corresponding `layouts.tsx` file.

## Parallel Route Benefits

A clear benefit of parallel routes is their ability to split a single layout into various slots, making the code more manageable.

- Independent route handling.
- Sub-navigation.

## Independet Route Handling

Each slot of your layout, such as user analytics or revenue metrics, can have its own loading and error states.

This granular control is particulary benefical in scenarios where different actions of the page load at varying speeds or encounter unique errors.

## Sub-navigation in routes

Each slot of your dashboard can essentially function as a mini-application, complete with its own navigation and state management.

This is especially useful in a complex application such as our dashboard where different sections serve distinct purposes.

## Unmatched Routes

### Navigation from the UI

In the case of navigation within the UI, Next.js retains the previously active state of a slot regardless of changes in the URL.

### Page reload

Next.js immediately searches for a `default.tsx` file within each unmatched slot.

The presence of this file is critical, as it provides the default content that Next.js will render in the user interface.

If this `default.tsx` file is missing in any of the unmatched slots for the current route, Next.js will render a 404 error.

## default.tsx

The `default.tsx` file in Next.js serves as a fallback to render content when the framework cannot retrieve a slot's active state from the current URL.

You have complete freedom to define the UI for unmatched routes: you can either mirror the content found in `page.tsx` or craft an entirely custom view.
