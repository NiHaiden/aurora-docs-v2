---
title: Layer apps via repofiles onto the system
description: How to layer apps with rpm-ostree.
---
# What are we going to do
Layering apps with rpm-ostree can be quite daunting when you first look at it.

**Don't install apps as layers unless you absolutely have to!**
See the software installation "hierarchy" from our friends over at Bazzite: <a href="https://docs.bazzite.gg/Installing_and_Managing_Software/">Software Installation Methods ranked by most recommended</a>

**Please also note that installing software as a layer will increase update time. While you should not notice this in day-to-day usage because the system updates silently in the background, it's still there.**

But for some software, you simply need it layered. This applies to apps like 1Password when you want to use the SSH Feature, Mullvad the VPN client or any other VPN client and much more.

This guide is aiming to show you how you can install / layer apps on the system and have it update itself when the base image get's updated. To accomplish this, your app needs to have a Fedora Repository setup. 

# Steps to take
We are going to use Mullvad, the VPN software for this example.

## 1. Identify the repo file you need
Mullvad conveniently provides the link to the repository file directly on their website. 
In this example, the repo file is located at <a href="https://repository.mullvad.net/rpm/stable/mullvad.repo">https://repository.mullvad.net/rpm/stable/mullvad.repo</a>.

## 2. Add the repo file

Now we can take that URL and execute the following commands: 

```bash
cd /etc/yum.repos.d/ #Change into the repository directory
sudo wget https://repository.mullvad.net/rpm/stable/mullvad.repo #Save the repo file to the directory
```

## 3. Easy mode - install the app 
Now the hardest part is done. You can now install the app. RPM-Ostree will now index the new repository and after that search for the desired application there.

With a little

```bash
rpm-ostree install mullvad-vpn
```
we have now successfully layered Mullvad on our system. To see this change, reboot the system, and you should now find Mullvad in your application list.


