---
title: Running Windows 2000 On "Modern" Hardware
description: Installing Windows 2000 on a somewhat modern PC
author: Károly Sárdi
tags: ["#retro", "#win2k"]
date: 2024-06-11 23:34
---

<script context="module">
  import Image from "$lib/components/markdown/Image.svelte";
</script>

{tags}

# {title}

I've recently tried to install Windows 2000 on a somewhat modern PC, here's how it went.
First, I've been wondering how would it run in QEMU, so I've tried that first, it was awful.
Windows 2000 doesn't support modern ACPI and it doesn't have a backported ACPI 7777 like Windows XP has, so I tried i440fx, but with i440fx we don't really have PCI-E support so no GPU passthrough. Then I realized the BSOD I was getting was actually related to it not finding the source files.

## The ISO

There were a couple of options, [Qashqai's ISO](http://mrqash.blogspot.com/2021/12/ysiwin2kpror3iso.html?m=1), fully updated ISO from [Archive.org](https://archive.org/details/win2ksp5), and the original ISO. For anyone trying to do the same thing I'd recommend Qashqai's ISO, it's the most stable one, and has everything you need for a somewhat usable Windows 2000 experience on a "modern" PC.

## Down the rabbit hole

I've found out that BlackWingCat backported a driver for [Intel Storage Matrix](https://win2k.org/blog/2009/04/17/813816/) which is great since QEMU can emulate an ICH9 chipset.
Then it still was BSOD-ing because of course it doesn't support the ACPI that QEMU provides. Well then, I installed it using "Standard PC" which is the ACPI-less mode, and it worked, albeit with only one core available.

Fortunately this BlackWingCat guy also made a lot of patches for Windows 2000, so I've installed those as well, and now I have a somewhat usable Windows 2000 VM. And I have proper GPU passthrough as well, since he also backported the NVIDIA drivers for my GTX 750 thankfully.

You can also get the Extended Kernel from [here](https://win2k.org/blog/2010/12/02/1299806/) which is a must-have for a somewhat usable Windows 2000 experience.

Be sure to grab [wlutool](http://blog.livedoor.jp/blackwingcat/archives/1995327.html) as well, it helps to install BlackWingCat's newer updates/patches. 

<Image image="./3/desktop.jpg" alt="Windows 2000 Running in a KVM" />


## Real hardware

I was wondering if I could get it working on my old AMD FX system, firstly Qashqai's ISO didn't work, so I've added [these](https://winraid.level1techs.com/t/guide-integration-of-amds-ahci-raid-drivers-into-a-winxp-w2k3-cd/32098) "Windows XP" drivers, which works quite well on my ASUS M5A97 Evo R2.0 board with the AMD 970 chipset.

Since I put the GTX 750 into the system this install also needed [BlackWingCat's Extended Core](https://win2k.org/blog/2010/12/02/1299806/), which was below the Extended Kernel install files. Oh here's BlackWingCat's [nvidia driver](https://win2k.org/blog/2010/03/13/1114373/) too.

Here's the specs of the system running Windows 2000:

```
AMD FX-8350
ASUS M5A97 Evo R2.0
16GB DDR3 (random sticks)
NVIDIA GTX 750
1x 500GB HDD
```

## The experience

There's literally no browser for this OS without the Extended Kernel, which makes the latest MyPal somewhat usable, but it crashes for some reason on bare metal with ACPI enabled. There's also Supermium but that doesn't work yet on Windows 2000.

Steam, Discord or VSCode doesn't work either, well obviously it wont, all of them use APIs that Windows 2000 doesn't have and they are web-based, so :^). I got some games working, like Fate Stay/Night, and some classics like Crysis and BIG RIGS OVER THE ROAD RACING (heh), and they run quite well.

THERE'S ALSO DISCORD (somewhat), it's called [DiscordMessenger](https://github.com/DiscordMessenger/dm), it's a Discord client for older versions of Windows, written in pure C++.

Oh btw, I killed my FX-8350 it seems, it's not booting anymore, so I've put in an FX-4100, which is quite a downgrade, but it alteast boots.

Here's a picture again:

<Image image="./3/gaming.png" alt="Windows 2000 Running on an AMD FX System" />
