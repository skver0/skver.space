---
title: RG35XX Retro Gaming Console Experience
description: Stock firmware & experiencing with MinUI, GarlicOS
author: Károly Sárdi
tags: ["#retro", "#gaming", "#handhelds"]
date: 2023-10-05 09:00
---

<script context="module">
  import Image from "$lib/components/markdown/Image.svelte";
</script>

{tags}

# {title}

I've recently bought a RG35XX handheld console, and I've been playing with it for a while now. I've tried out the stock firmware, and I've also tried out some custom firmwares, like MinUI and GarlicOS.

## Packaging

The packaging is quite nice, it's a simple cardboard box, with a nice design on it. It's not the best packaging I've ever seen, but it's not bad either.
It's kinda trying to mimick the iPhone packaging, but it's not as good as that. It's still a nice packaging, and it's not bad at all.
In the packaging you'll find the console itself, a USB-C cable, a user manual, and I also got a screen protector which is quite bad since the console's screen is curved, and the screen protector is not.

## The console

My console was a 64GB model with the transparent purple case. The stock SD card had a lot of games on it, but I've decided to ditch it, and use my own SD card.
I also have heard that the stock SD card is quite terrible in quality and it could randomly corrupt itself, so I've decided to not use it at all.

Firstly I tried flashing the stock firmware to my SD card, but it didn't work, so I've decided to try out the stock SD card to see if it's working, and it did.
It ran games quite well, but I've decided to try out some custom firmwares, so I've flashed MinUI to my SD card.

## Stock & GarlicOS Image

It came with a dualbootable image preloaded on the SD card, which had the stock firmware, and GarlicOS. Both felt quite bootleg and unpolished, but they worked.
GarlicOS is a custom firmware that's based on the stock firmware, but it has a lot of improvements, like a better UI, and a lot of emulators preinstalled.
Tried installing some themes, they kinda broke the UI, but it was still usable.

## Painful flashing

Flashing MinUI was quite painful, firstly since I didn't have a spare 64GB SD card, I had to use my 32GB one and because of that I had to use the image provided by MinUI which had 0 games/emulators on it.

I've tried flashing the image with Etcher, but it didn't work since electron 18 is EOL, then tried using RPI-Imager, didn't work, so I've tried flashing it with dd, and it worked, but it was quite slow, and I had to wait for a long time.

## MinUI

MinUI is awesome! It's another custom firmware, but it's quite different from GarlicOS. It's meant to be installed on the original SD card, but the folder structure is quite different from the stock firmware, so I had to move some files around to make it work.
Probably the most polished custom firmware I've tried, and it runs quite well.

There's also custom apps for it, like a file manager, and a screenshot daemon, which is quite nice. I tried getting prdoom to work, but it didn't work, I also tried getting tyrquake to work, but it didn't work either. I couldn't debug it since it doesn't show any error messages, and I couldn't find anything in the logs either. The error was something regarding an invalid pointer. Oh and there's also a terminal emulator, but it's quite small, and it's not really usable.

<Image image="./2/ChronoTrigger.jpg" alt="An image of the console running ChronoTrigger on MinUI" />

## Conclusion

I'm quite happy with the console, and I'm happy with the custom firmwares too. I'm probably going to stick with MinUI, since it's the most polished one, and it's the most stable one too.

Here's a screenshot of the console running MinUI:
<Image image="./2/MinUI.png" alt="An image of the console running MinUI" />
