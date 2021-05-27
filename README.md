# amFOSS Website
[![Watchers][watchers-badge]][watchers]
[![Star Gazers][stars-badge]][stargazers]
[![Forks][forks-badge]][forks]
[![Travis CI][build-badge]][build]
[![MIT][license-badge]][license]
[![Contributors][contributors-badge]][contributors]
[![pipeline status][pipeline-badge]][pipeline]

Website for amFOSS(FOSS@Amrita) powered by Next.js. 

## :minidisc: [Installation Instructions](https://github.com/amfoss/website/wiki/Installation)
Make sure that you have `Node JS` and `NPM ` installed. Else you can refer to [installation page on our wiki](https://github.com/amfoss/website/wiki/Installation)

Navigate into site's directory and start it up.
```
cd website/
npm install
npm run dev
```

Your site is now running at `https://localhost:8000` 


## :rocket: Development Instructions

1.  Create a [Surge](https://surge.sh/help/getting-started-with-surge) account.
2.  Clone the [amFOSS Website](http://gitlab.com/amfoss/website) and get into it's root directory.
3.  Run `surge`
4.  Enter your email and password when it prompts for and verify your email.
5.  Generate a token.
6.  Open your GitLab account and go into Settings --> CI/CD --> Variables.
7.  Add your environment variables `SURGE_TOKEN` and `SURGE_LOGIN` in it.

[build-badge]:https://api.travis-ci.com/amfoss/website.svg?branch=master
[build]:https://travis-ci.com/amfoss/website
[contributors-badge]:https://img.shields.io/github/contributors/amfoss/website.svg
[contributors]: https://github.com/amfoss/website/graphs/contributors
[watchers-badge]:https://img.shields.io/github/watchers/amfoss/website.svg?style=social
[watchers]: https://github.com/amfoss/website/watchers
[stars-badge]:https://img.shields.io/github/stars/amfoss/website.svg?style=social
[stargazers]:https://github.com/amfoss/website/stargazers
[forks-badge]: https://img.shields.io/github/forks/amfoss/website.svg?style=social
[forks]: https://github.com/amfoss/website/network/members
[license-badge]: https://img.shields.io/github/license/amfoss/website.svg
[license]: https://github.com/amfoss/website/blob/master/LICENSE
[pipeline-badge]: https://gitlab.com/amfoss/website/badges/master/pipeline.svg
[pipeline]: https://gitlab.com/amfoss/website/commits/master
