---
title: Running an Ace Of Spades server inside a Docker container
description: My experience with running an Ace Of Spades (piqueserver) server inside a Docker container
author: Károly Sárdi
tags: ["#aos", "#docker", "#piqueserver"]
date: 2023-08-18 16:57
---

{tags}

# {title}

I've recently decided to host an Ace Of Spades server for me and my friends. I've chosen [piqueserver](https://www.piqueserver.org/)
as the server software, because it's the most popular one, and it's written in Python, which I kinda dislike. I've also decided to
run it inside a Docker container, because I'm a big fan of Docker, and since I'm running it on my home server, which is using TrueNAS,
I can easily manage the container from the web UI.

## The pains of running piqueserver in Docker

I've started with the official [Docker image](https://hub.docker.com/r/piqueserver/piqueserver), but I've quickly realized that it's kind of faulty.
The image is based on Alpine Linux, which is a very minimal Linux distribution, but the image isn't copying the latest config files, which are needed to run the server. I've solved this via running the

<script context="module">
  import Highlight, { LineNumbers } from "svelte-highlight";
  import Image from "$lib/components/markdown/Image.svelte";
  import bash from "svelte-highlight/languages/bash";
  import style from "svelte-highlight/styles/arta";

  const code = "piqueserver --copy-config";
</script>

<svelte:head>
{@html style}
</svelte:head>

<Highlight language={bash} {code} let:highlighted>
<LineNumbers {highlighted} hideBorder />
</Highlight>

<style>
  :global(tr) {
    background-color: #2b2b2b;
  }

  </style>
<br>
command, and copying its output to the mounted volume of the container.

### The outcome

The server runs quite well, and I'm happy with it. I've also added some scripts (aka. plugins) to the server, which are also working well.
There are some default scripts that come with piqueserver, but I've also added some custom ones that I've recieved from a user who joined my server.
I've also created a script that scrapes a map listing [website](https://aos.party) for maps, and downloads them to the server.
So theoretically, I have every single map that was ever created for Ace Of Spades. (I'm not sure if that's true, but I have a lot of maps over 1000 to be exact)

Here's a screenshot of the server running, completely full:

<Image image="./1/2023-08-15_22-45.png" alt="An image of the server's webui" />
