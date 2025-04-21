---
title: 'My Journey with Hanko: How to Build a Financial App in Record Time'
type: post
snippet: Learn everything about our decision to make the OpenBB Terminal accessible — and even installable — everywhere.
coverImage: ''
date: '30-09-2023'
topics: 'webdev open-source javascript ai svelte'
---

![budgetguru demo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z9ssv301bjqgo7ikcqer.png)

### TLDR:

-   Hanko.io was integrated into Budget Guru, enhancing security and accelerating overall development.
-   The ease of integration with Hanko.io allowed for a seamless and efficient implementation of a robust authentication system.
-   Hanko.io's customization options enabled alignment with the UI of Budget Guru, enhancing the overall aesthetic and user experience.
-   The synergy between Hanko.io, SvelteKit, and DrizzleORM was impressive, facilitating a smooth and efficient development process.
-   The use of Hanko.io allowed for a greater focus on the application's logic, leading to rapid development and implementation of numerous features.
-   Hanko.io's authentication solution significantly improved the user experience of Budget Guru, offering a revolutionary way of logging in - passkeys.
-   The decision to build Budget Guru as a web application ensured accessibility for all users, regardless of their device or location.
-   BudgetGuru is open source [here](https://github.com/jose-donato/budgetguru)

### 1. Introduction

Welcome to the journey of building Budget Guru, an AI-powered personal finance mentor. This web application simplifies budgeting, tracking, and optimizing your finances, offering a unique and intelligent approach to personal finance management. This blog post serves as both an announcement of the open-source project and a testament to the ease of building it with Hanko.io, a modern open-source authentication solution. Currently, Budget Guru is in its proof-of-concept stage, with many exciting features and improvements in the pipeline.

Ever since I started managing my own finances, I've always felt a need for a budget-tracking application tailored to my own needs. The existing solutions I tried were helpful, but they always seemed to miss something. This personal experience, combined with my passion for web applications, led me to the idea of Budget Guru. I wanted to create an application that not only I could use, but anyone, anywhere, on any device with a web browser.

> Write once, run anywhere.

### 2. The Challenge

Building a financial web application inherently comes with its unique set of complexities. The intricate nature of financial data and the need for precise calculations and projections demand a significant amount of time and attention. Ideally, you want to dedicate as much time as possible to the application logic, which is the heart of the application and directly impacts the user experience.

However, one cannot overlook the importance of a secure and reliable authentication system, especially in a financial application where sensitive data is involved. Implementing such a system can be a time-consuming and complex process, often diverting valuable resources away from the core logic of the application. Therefore, finding ways to streamline and simplify areas like authentication becomes crucial in order to maintain focus on enhancing the application's primary functionalities.

### 3. Discovering Hanko.io

My journey to [Hanko.io](http://hanko.io/) began at the Web Summit 2022, where I had the pleasure of meeting Felix, the CEO of Hanko. Intrigued by the simplicity, security, and promise of integrating an authentication system with just a few lines of code, I was eager to explore what [Hanko.io](http://hanko.io/) had to offer. The opportunity to build Budget Guru presented the perfect excuse to experiment with [Hanko.io](http://hanko.io/).
One of the standout features of [Hanko.io](http://hanko.io/) is its free plan, a perfect launchpad for beginners. The paid plans, despite their extensive features, are priced affordably. [Hanko.io](http://hanko.io/) also offers the flexibility of self-hosting, accommodating various needs.

In retrospect, I couldn't have made a better choice. [Hanko.io](http://hanko.io/)'s beautiful customizable components, SDKs, and APIs have not only powered the login and user management of Budget Guru but also exceeded my expectations.

### 4. Ease of Integration

Integrating Hanko.io into Budget Guru was both seamless and efficient. Even with no prior experience, I was able to implement a robust authentication system into our application with just a few lines of code, and in a matter of minutes. Here are some code snippets that illustrate this process.

```jsx
// this is the code snippet that makes the login/register page

<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { register } from "@teamhanko/hanko-elements";
  import { env } from "$env/dynamic/public";

  const hankoApi = env.PUBLIC_HANKO_API_URL;

  export let redirectUrl: string;

  const redirectAfterLogin = () => {
    goto(redirectUrl);
  };

  onMount(async () => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  });
</script>

<hanko-auth on:onAuthFlowCompleted={redirectAfterLogin} />
```

```jsx
// code snippet to logout users the application
<script>
  import { Hanko } from "@teamhanko/hanko-elements";
  import { goto } from "$app/navigation";
  import { env } from "$env/dynamic/public";
  import Icon from "./ui/Icon.svelte";
  const hankoApi = env.PUBLIC_HANKO_API_URL;

  const hanko = new Hanko(hankoApi);
  const logout = () => {
    hanko.user.logout().catch((error) => {
      // handle error
    });
    goto("/login");
  };
</script>

<button on:click={logout} class="_icon-btn">
  <Icon id="material-symbols-logout-rounded" class="w-6 h-6" />
</button>
```

The developer experience with Hanko.io is exceptional, largely due to their comprehensive documentation and guides. Despite using SvelteKit, I found their resources incredibly helpful, and it's worth noting they also provide guides for a wide range of other frameworks such as React, Next.js, and Angular. This accessibility and support truly underscore the top-notch quality of Hanko.io's offerings. You can find here all the integrations available [Welcome to Hanko Docs - Hanko](https://docs.hanko.io/introduction#quickstarts).

### 5. Focus on Logic

By leveraging Hanko.io for authentication, I was able to dedicate my attention entirely to the logical aspects of the application. Authentication is a complex process with many potential pitfalls, and getting it right is crucial for the security and reliability of any application. By entrusting this task to Hanko.io, a professional in this field, I was able to significantly reduce development times and complexity.

This decision allowed me to concentrate on creating the core features of Budget Guru, ensuring that the application is not only secure but also feature-rich and user-friendly. As we are still in the early stages of development, this focus on core functionality over backend complexities has been invaluable.

Moreover, it's important to note that handing off such a critical responsibility to professionals like Hanko.io is often a wise decision, especially when time and resources are limited. It not only ensures a high level of security for your application but also allows you to dedicate your efforts to enhancing the unique features of your product. With Hanko.io taking care of authentication, we can look forward to a lot more to come from Budget Guru.

Even though Budget Guru is just getting started, the use of Hanko has allowed me to focus more on the app's logic. In just a few days, I was able to implement a multitude of features:

-   A fully functional database system to save, edit, and insert transactions (either one by one or in bulk by uploading a CSV). This was largely due to the simplicity of DrizzleOrm. The deployment took less than 10 minutes, thanks to the excellent synergy between Drizzle and Turso database.
-   All pages widgets are now draggable and resizable, thanks to svelte-grid-extended. Click [here](https://twitter.com/josedonato__/status/1718627618763735285) for a demo of this.
-   The design is responsive for both desktop and mobile.
-   Accessible modals, toasts, and tabs have been implemented, thanks to melt-ui. I tried to follow a more mobile first approach since more than 95% **of global users accessed the internet via mobile phones** ([ref](https://www.statista.com/statistics/1289755/internet-access-by-device-worldwide/#:~:text=Global%20internet%20access%20Q2%202023%2C%20by%20device&text=As%20of%20the%20second%20quarter,almost%2063%20percent%20of%20respondents.)). Therefore I tried to simulate the bottom modals that we are all used to in native mobile applications both for editing and adding transactions.
    ![bottom navigation modal](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/an7kmoxygd1s28pli0f6.png)
-   An extensive view of all transactions on a grid with sorting, pagination, filtering, and much more, has been made possible by ag-grid.
    ![ag-grid table](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/awr9475kkuojtwmrpsi3.png)

-   Multiple chart visualizations have been created using Chart.js.

This focus on the application's logic, made possible by Hanko.io, has allowed for rapid development and implementation of these features, and we can expect even more from Budget Guru in the future.

### 6. Customization

One of the standout features of using [Hanko.io](http://hanko.io/) was the ability to customize the appearance of its components to align with the UI of Budget Guru. While Hanko provides several components with excellent default styling, it also offers extensive customization options, including font, colors, and much more. This demonstrates the system's versatility and adaptability to various design requirements. Here are some code snippets and screenshots that showcase this customization.

```css
/* styling options you can customize with hanko directly from your CSS file */
hanko-auth,
hanko-profile {
  /* Color Scheme */
  --color: #ffffff;
  --color-shade-1: #707070;
  --color-shade-2: #1a1a1a;

  --brand-color: #D4AF37; /* Budget Guru Primary Color */
  --brand-color-shade-1: #C0A637;
  --brand-contrast-color: white;

  --background-color: transparent;
  --error-color: #ff4c4c;
  --link-color: #80b2ff;

  /* Font Styles */
  --font-weight: 400;
  --font-size: 16px;
  --font-family: Roboto, sans-serif; /* Budget Guru Font */

  /* Border Styles */
  --border-radius: 4px;
  --border-style: solid;
  --border-width: 1px;

  /* Item Styles */
  --item-height: 34px;
  --item-margin: 0.5rem 0;

  /* Container Styles */
  --container-padding: 30px;
  --container-max-width: 410px;

  /* Headline Styles */
  --headline1-font-size: 24px;
  --headline1-font-weight: 600;
  --headline1-margin: 0 0 1rem;

  --headline2-font-size: 16px;
  --headline2-font-weight: 600;
  --headline2-margin: 1rem 0 0.5rem;

  /* Divider Styles */
  --divider-padding: 0 42px;
  --divider-visibility: visible;

  /* Link Styles */
  --link-text-decoration: none;
  --link-text-decoration-hover: underline;

  /* Input Styles */
  --input-min-width: 14em;

  /* Button Styles */
  --button-min-width: max-content;
}
```

![hanko styling](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ecypqkyld1tbxitidw94.png)

### 7. Synergy with Other Tools

My decision to use SvelteKit for Budget Guru was driven by my growing interest in Svelte and my desire to learn more about it. I was delighted to find that Hanko.io had a comprehensive guide for SvelteKit, which made the integration process even smoother.

One of the key questions I had was how Hanko.io would interact with my own database. This is where DrizzleORM, hosted on Turso, came into play. DrizzleORM is a TypeScript ORM that enhances productivity and works seamlessly with SQLite.

The flow I followed to create a user in my database after the user signs up for the first time on my SvelteKit app using Hanko components is as follows:

1.  The user signs up using Hanko on the /login page.

2.  If successful, the user gets redirected to /app.

3.  The following code is executed, which calls an internal API route /api/auth with the user's email:

```jsx
// everytime a user logs in into the application, i make a request to an internal API to make sure I already created a user on my database system for the respective hanko user
// this is important because i need to keep a match between hanko users and my own database users
onMount(async () => {
		const hankoApi = env.PUBLIC_HANKO_API_URL;
    const hanko = new Hanko(hankoApi);

    const { id, email } = await hanko.user.getCurrent();

    fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, email }),
    });
  });
});
```

4.  On the API endpoint, I check if the user already exists. If not, a new user is created. I also create a cookie to avoid hitting the database every time the /app is visited.

```jsx
// checking whether the user already exists and if not create them. also saving into cookies to not make a call everytime
export async function POST({
    request,
    cookies
}: RequestEvent) {
    const hanko = cookies.get("hanko");
    const data = await request.json();
    const payload = await decodeJwt(hanko ?? "");

    if (payload.sub !== data.id) {
        return new Response(null, {
            status: 403,
        });
    }

    const userCookie = cookies.get("user");

    if (!userCookie) {
        console.log("POST api/auth: no user cookie found")
        const user = await createUserOrGetUser(data.id, data.email);

        cookies.set("user", JSON.stringify(user), {
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 1 week
            httpOnly: true,
            sameSite: "lax",
        });

        return json(user)
    }
    console.log("POST api/auth: user cookie found")

    return json(userCookie)
}

const createUserOrGetUser = async (id: string, email: string) => {
    const user = await db.select().from(users).where(eq(users.id, id)).get()

    if (!user) {
        console.log("POST api/auth: creating new user")
        const newUser = await db.insert(users).values({
            id,
            email,
        }).returning().get();

        return newUser;
    }

    console.log("POST api/auth: retrieving existing user")
    return user;
}
```

The synergy between Hanko.io, SvelteKit, and DrizzleORM was impressive, making the development process smooth and efficient. This combination of tools allowed me to focus on the logic and features of Budget Guru, while also ensuring a secure and efficient authentication process.

### 8. User Experience

[Hanko.io](http://hanko.io/) has significantly enhanced the user experience of Budget Guru by introducing a revolutionary way of logging in - passkeys. Passkeys are a secure authentication technology that allows users to sign in to their online accounts without entering a password. They are simple and in my opinion more secure than the traditional passwords.

In addition to passkeys, Hanko also supports Google and other OAuth providers, as well as traditional password-based authentication. This flexibility allows users to choose the method that best suits their needs and preferences.

Moreover, I implemented some utils in the application to redirect users back to the last page they were in before their session expired. This feature was incredibly easy to implement with SvelteKit and Hanko.io, enhancing the user experience by maintaining the user's context even after session expiration.

```jsx
// on every request inside the application I'm saving in the cookie the last page the user visited
const saveLastUrl = async (event: RequestEvent) => {
    const { cookies } = event;
    const lastUrl = cookies.get("lastUrl");
    if (event.url.pathname.startsWith("/app") && lastUrl !== event.url.pathname) {
        console.log("hooks: saving lastUrl", event.url.pathname, "previous", lastUrl)
        cookies.set("lastUrl", event.url.pathname, {
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });
    }
}
```

```jsx
// after the user logs in I'm redirecting to this URL instead of the usual app homepage
export let redirectUrl: string;

  const redirectAfterLogin = () => {
    goto(redirectUrl);
  };

  onMount(async () => {
    // register or login the user
    register(hankoApi).catch((error) => {
      // handle error
    });
  });
```

Hanko also provides elements for managing your account, such as changing the passkey or the email associated with it. This makes account management a breeze for users, further improving the overall user experience.

The value of passkeys is evident in the case of Dashlane, a password manager that saw a 70% increase in conversion rate for signing-in with passkeys compared to passwords ([ref](https://developers.google.com/identity/passkeys/case-studies/dashlane)). This demonstrates how adopting passkeys can significantly improve user engagement and satisfaction, making it a valuable addition to any business.

With Hanko.io, you're not just getting a secure and convenient authentication solution, you're also providing your users with a seamless and enjoyable user experience.

### 9. Conclusion

Incorporating Hanko.io into Budget Guru has enhanced security and accelerated overall development. The ease of integration, customization, and synergy with other tools makes Hanko.io an excellent choice for any modern web app development.

To summarize, here are the key takeaways from the blog post:

-   Hanko.io was integrated into Budget Guru, enhancing security and accelerating overall development.
-   The ease of integration with Hanko.io allowed for a seamless and efficient implementation of a robust authentication system.
-   Hanko.io's customization options enabled alignment with the UI of Budget Guru, enhancing the overall aesthetic and user experience.
-   The synergy between Hanko.io, SvelteKit, and DrizzleORM was impressive, facilitating a smooth and efficient development process.
-   The use of Hanko.io allowed for a greater focus on the application's logic, leading to rapid development and implementation of numerous features.
-   Hanko.io's authentication solution significantly improved the user experience of Budget Guru, offering a revolutionary way of logging in - passkeys.
-   The decision to build Budget Guru as a web application ensured accessibility for all users, regardless of their device or location.

Incorporating [Hanko.io](http://hanko.io/) into Budget Guru has proven to be an excellent choice for modern web app development, offering a secure, convenient, and user-friendly authentication solution.

### 10. Future Plans

Starting today, Budget Guru is an open-source project under the MIT license, hosted on [GitHub](https://github.com/jose-donato/budgetguru). I am committed to building this project in public and I invite anyone interested in contributing to join me in this endeavor.

While we are starting with simple transactions such as income and expenses, I am already working on expanding the functionality to include debt and investment tracking. This will allow users to have a comprehensive overview of their personal finances in one place.

One of the exciting features in the pipeline is the integration of AI-powered financial insights. I am particularly interested in incorporating open-source models (Nixtla's TimeGPT i’m looking at you 👀) to forecast expenses for example. This will enable Budget Guru to provide users with recommendations and advice based on their spending patterns and financial goals.

Another feature I am looking forward to implementing is image capabilities. This will allow users to scan a receipt, and the transaction details will be automatically added to their account. This feature aims to make tracking expenses even more effortless and accurate.

The issue of financial literacy is a global challenge, not confined to any one country. However, in light of the fact that Portugal ranks as one of the worst countries in Europe for financial literacy ([ref](https://www.theportugalnews.com/news/2022-01-13/portugal-worst-for-financial-literacy/64623)), the importance of improving this becomes even more evident. It's my hope that Budget Guru, with its user-friendly tools and features, can contribute to improving financial literacy not just in Portugal, but all over the world, empowering individuals to take control of their financial future.

I am thrilled about the potential of Budget Guru and eagerly anticipate sharing more updates as the project progresses. This is just the beginning, and I am confident that with the support of the open-source community, we can transform Budget Guru into a valuable tool for personal finance management.

If you want to join me on this journey and stay updated with the progress of Budget Guru, make sure to follow me on [Twitter](https://twitter.com/josedonato__) or connect with me on [LinkedIn](https://www.linkedin.com/in/jose-donato/). Your support and feedback will be invaluable in making this project a success.