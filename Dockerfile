FROM alpine:3.9

LABEL "com.github.actions.name"="Deploy to GitHub Pages for Static Site Generator"
LABEL "com.github.actions.description"="A GitHub Action to deploy your static site to GitHub Pages with Static Site Generator"
LABEL "com.github.actions.icon"="upload-cloud"
LABEL "com.github.actions.color"="blue"

LABEL "repository"="https://github.com/amfoss/website"
LABEL "homepage"="https://github.com/amfoss/website"
LABEL "maintainer"="harshithpabbati"

RUN apk add --no-cache \
    git \
    openssh-client

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]