---
title: OpenBB Workspace is now available on mobile
type: post
snippet: Learn everything about our decision to make the OpenBB Workspace accessible — and even installable — everywhere.
coverImage: ''
date: '10-09-2024'
topics: 'Progressive-Web-Applications PWA Web'
---

Hey everyone, José here!

I've got some exciting news to share about the OpenBB Workspace.

We just announced a free tier, but we are taking it to the next level. We’re making it **accessible from *anywhere*, including on mobile**.

Didier, our CEO, wrote a bit of the story behind this decision and how we built it all in one evening on his [blog](https://didierlopes.beehiiv.com/p/openbb-mobile-app-coming-soon).

In this blog post, I’ll go through:

1. The history and concept of PWAs

2. OpenBB’s decision to create a mobile app

# 1. A Brief History of Web Apps

Back in 2007, with the release of the first iPhone, Steve Jobs introduced the idea of web apps that could act like native apps:

<figure>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/QvQ9JNm_qWc?si=Xsej-MS1T2RAOsdj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <figcaption>
    Steve Jobs presenting what was later coined as Progressive Web Applications when the first iPhone was announced in 2007
  </figcaption>
</figure>

This is incredibly ironic considering how Apple’s position shifted not long after that. From blocking non-webkit browsers on iOS devices to constantly nerfing web applications in their suite, Apple has been quite a showstopper of this concept. If you want to learn more about this, Open Web Advocacy recently wrote about this topic here on their blog.

Fast forward to 2016, and Google's Alex Russell brings this concept back, calling it "Progressive Web Applications" or PWAs:

<figure>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/JP5p6t3wNLA?si=VALYQ_c2GJAh4ACR" title="YouTube video player" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <figcaption>
    Alex Russel from Google announcing Progressive Web Applications in 2016
  </figcaption>
</figure>

But what are PWAs? In my opinion, they are just really good web applications that can be installed in any device with a web browser.

If you are into the technical details, feel free to check out my [Master’s thesis](https://jose-donato.deno.dev/master_thesis.pdf), where I talked extensively about this.

## The Mobile Landscape Today

Now, here's where it gets interesting.

Despite some pushback from certain mobile OS gatekeepers (looking at you, Apple), PWAs are slowly but surely gaining ground. Big names like Spotify are embracing the tech, offering both native apps and PWAs.

Why? Because PWAs are essentially supercharged web apps that can work great on any device without the app store hassle.

Also, it’s amazing for developers since they only need to develop an app once, and it can be accessed from any device with a web browser (either a mobile phone, a tablet, or a desktop — it doesn’t matter the operating system). So you basically just need to build one app to be used on any device without any specific installer.

## 2. Taking OpenBB Workspace Mobile

From day one, I pushed for Workspace to be a web application:

![](https://openbb-cms.directus.app/assets/269228e7-d469-46f3-beae-dd455fb48987)

Our team has spent countless hours optimizing performance, making sure our web app would work smoothly even on smaller devices. So making it a PWA was fairly simple — not as simple as it might seem here, but still relatively simple.

But the move to PWA wasn't just about shrinking our interface into a smaller device size and making performance improvements. We’ve also added other important assets to make it PWA-compatible so you can install it on your devices (e.g., icons to show when installing).

As I said earlier, a PWA is just a very good web app that is installable. This means that installing it on your device is *completely optional*. The best part is that **users can choose whatever works for them** — either stick with the browser version or install the app on their devices.

### How to install it on your devices with just a few clicks

- **On your desktop:**


 <figure>
    <video style="max-height: auto; width: auto;" controls>
      <source src="https://openbb-cms.directus.app/assets/36685e54-d8c1-47ba-acd6-1692fabd768e" />
    </video>
  <figcaption>
    By doing this, OpenBB Workspace will be displayed in its own isolated container, similar to a native app.
  </figcaption>
</figure>

- **On your mobile device:**
 
 You can access OpenBB Workspace more easily by adding it to your phone’s app list or homepage:


 <figure>
            <video style="max-height: auto; width: auto;" controls>
  <source src="https://openbb-cms.directus.app/assets/5699793b-cef4-4fbb-8f2c-1deeca26ea41" />
</video>
            <figcaption>
               Installing on Android
            </figcaption>
        </figure>


<figure>
  <video style="max-height: auto; width: auto;" controls>
    <source src="https://openbb-cms.directus.app/assets/9bd37920-5776-4004-b6de-8650cd1f8c2a" />
  </video>
  <figcaption>
    Installing on iOS
  </figcaption>
</figure>


### Why does this decision matter?

We’ve always said that “the OpenBB Workspace should be accessible to everyone, everywhere”. 

With the introduction of the free tier, we tackled the “everyone” part. But… everywhere? Well, it wouldn’t be exactly true if you needed an NSA-level desktop to use it.

Today I’m proud to say “Everywhere” has become a reality too.

Do you have a basic smartphone? You're in. Rocking a high-end tablet? Also good. All you need is a browser and an internet connection.

By going mobile with a PWA, we’re making sure that whether you're a student with a budget phone or a pro trader with the latest gear, you've got the same powerful tools at your fingertips.

As of September 2024, the global mobile market share is [~62%](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet), leaving desktop/laptop with around 36% (the remaining are tablets). Our stats don’t match these numbers yet, and probably never will, but that’s fine. Since we launched, around 30% of people registering and using our web app have done so on mobile. Considering that we’re talking about a product with a dashboard style and that we haven’t properly advertised the mobile version yet, these numbers make me proud already.

However, I don’t think our users will either use solely desktop or solely mobile. The way I think will be more beneficial for them is to combine both. The most optimal workflow will be creating and managing your dashboards on your desktop but then using the mobile version to visualize them or to use our AI Copilot on the go.

We all know the financial world never sleeps and we want to give you all the tools you need to gain an edge.

### We look forward to hearing about *your* experience!

This mobile PWA launch is a big deal for us (and specially for me!) since it’s where our tech meets our mission of making investment research accessible for everyone, everywhere.

But above all, we’re excited to see how this empowers you across all kinds of devices and platforms and we can’t wait to see what you do using OpenBB Workspace.

If you want to chat more about this, feel free to DM me on [Twitter](https://x.com/josedonato__) or [LinkedIn](https://www.linkedin.com/in/jose-donato/).

As a team, we look forward to having you join our [Discord](https://discord.gg/dsJg8ftW), where you can discuss anything OpenBB, share feedback, and get support. 

<a href="https://pro.openbb.co/" target="_blank" rel="noopener noreferrer" class="_btn">
Get started</a>